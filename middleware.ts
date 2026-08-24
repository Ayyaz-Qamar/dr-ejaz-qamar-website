import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("admin_session");
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!sessionCookie || sessionCookie.value !== sessionSecret) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
