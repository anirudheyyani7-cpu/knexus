import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "knx_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next internals, static assets and auth endpoints
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/favicon.ico" ||
    pathname === "/login"
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Use atob which is available in Edge runtime; avoid Buffer in middleware
    const decoded = typeof atob === "function" ? atob(token) : null;
    if (!decoded) throw new Error("invalid token");
    const user = JSON.parse(decoded);
    if (!user || !user.email) throw new Error("no user");

    // Restricted accounts cannot reach Agent Forge or the AI Assistant chat
    // endpoint — both call the Claude API and burn credits.
    if (user.role === "restricted") {
      if (pathname.startsWith("/api/chat")) {
        return NextResponse.json({ error: "Not available for this account" }, { status: 403 });
      }
      if (pathname.startsWith("/forge")) {
        const deniedUrl = new URL("/", req.url);
        deniedUrl.searchParams.set("denied", "forge");
        return NextResponse.redirect(deniedUrl);
      }
    }

    return NextResponse.next();
  } catch {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - login (login page)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|login|_next/static|_next/image|favicon.ico).*)",
  ],
};
