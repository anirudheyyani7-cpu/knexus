export const COOKIE_NAME = "knx_session";

export function encodeUser(user: unknown) {
  try {
    return Buffer.from(JSON.stringify(user)).toString("base64");
  } catch (e) {
    return "";
  }
}

export function decodeUser(token?: string) {
  if (!token) return null;
  try {
    const json = Buffer.from(token, "base64").toString("utf8");
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}
