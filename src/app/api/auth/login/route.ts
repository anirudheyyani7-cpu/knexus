import { NextResponse } from "next/server";
import { COOKIE_NAME, encodeUser } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body ?? {};

  // Simple credential check for the demo
  if (email !== "superuser@knexus.ai" || password !== "KPMG@1234") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const user = { email, name: "Superuser" };
  const token = encodeUser(user);

  const res = NextResponse.json({ ok: true, user });
  res.cookies.set({ name: COOKIE_NAME, value: token, httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}
