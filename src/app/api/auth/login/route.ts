import { NextResponse } from "next/server";
import { COOKIE_NAME, encodeUser, type Role } from "@/lib/auth";

// Simple credential check for the demo — no external auth provider.
const ACCOUNTS: Record<string, { password: string; name: string; role: Role }> = {
  "superuser@knexus.ai": { password: "KPMG@1234", name: "Superuser", role: "admin" },
  "platformuser@knexus.ai": { password: "knexus123", name: "Platform User", role: "restricted" },
};

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body ?? {};

  const account = ACCOUNTS[email];
  if (!account || account.password !== password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const user = { email, name: account.name, role: account.role };
  const token = encodeUser(user);

  const res = NextResponse.json({ ok: true, user });
  res.cookies.set({ name: COOKIE_NAME, value: token, httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}
