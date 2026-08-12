import type { Role, SessionUser } from "@/lib/auth";

// Hosts for agents we control — only these ever receive a minted SSO token.
export const SSO_ALLOWED_HOSTS = [
  "datcenter.vercel.app",
  "portfoliorationalization.vercel.app",
  "ea-ai-agent.vercel.app",
  "data-center-43fpzipav-des4.vercel.app",
  "aii-strategy-agent.vercel.app",
  "www.knexus.space",
  "knexus.space",
];

export const SSO_TOKEN_TTL_SECONDS = 90;
export const SSO_PARAM = "sso";

export interface SsoClaims {
  sub: string;
  name: string;
  role: Role;
  aud: string;
  iat: number;
  exp: number;
}

/** Returns the link's host if it's absolute http(s) and in the allowlist, else null. */
export function ssoHostFor(link: string | null | undefined): string | null {
  if (!link || !/^https?:\/\//i.test(link)) return null;
  try {
    const url = new URL(link);
    return SSO_ALLOWED_HOSTS.includes(url.hostname) ? url.hostname : null;
  } catch {
    return null;
  }
}

export function agentSupportsSso(link: string | null | undefined): boolean {
  return ssoHostFor(link) !== null;
}

function base64UrlFromBytes(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function bytesFromBase64Url(b64url: string): Uint8Array<ArrayBuffer> {
  const base64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "===".slice((base64.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function base64UrlFromJson(value: unknown): string {
  return base64UrlFromBytes(new TextEncoder().encode(JSON.stringify(value)));
}

function jsonFromBase64Url<T>(b64url: string): T {
  return JSON.parse(new TextDecoder().decode(bytesFromBase64Url(b64url))) as T;
}

async function getSigningKey(): Promise<CryptoKey> {
  const secret = process.env.SSO_SHARED_SECRET;
  if (!secret) throw new Error("SSO_SHARED_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signSsoToken(user: SessionUser, agentId: string): Promise<string> {
  const key = await getSigningKey();
  const iat = Math.floor(Date.now() / 1000);
  const header = { alg: "HS256", typ: "JWT" };
  const claims: SsoClaims = {
    sub: user.email,
    name: user.name,
    role: user.role,
    aud: agentId,
    iat,
    exp: iat + SSO_TOKEN_TTL_SECONDS,
  };

  const signingInput = `${base64UrlFromJson(header)}.${base64UrlFromJson(claims)}`;
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signingInput));
  return `${signingInput}.${base64UrlFromBytes(new Uint8Array(signature))}`;
}

export async function verifySsoToken(token: string): Promise<SsoClaims | null> {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [headerPart, claimsPart, signaturePart] = parts;

  try {
    const key = await getSigningKey();
    const signingInput = `${headerPart}.${claimsPart}`;
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      bytesFromBase64Url(signaturePart),
      new TextEncoder().encode(signingInput)
    );
    if (!isValid) return null;

    const claims = jsonFromBase64Url<SsoClaims>(claimsPart);
    const now = Math.floor(Date.now() / 1000);
    if (typeof claims.exp !== "number" || claims.exp < now) return null;

    return claims;
  } catch {
    return null;
  }
}

export function appendSsoToken(link: string, token: string): string {
  const url = new URL(link);
  url.searchParams.set(SSO_PARAM, token);
  return url.toString();
}
