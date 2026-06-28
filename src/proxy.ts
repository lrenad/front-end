import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session =
    request.cookies.get("__session");

  const isProtected =
    request.nextUrl.pathname.startsWith("/recipes") ||
    request.nextUrl.pathname.startsWith("/favorites");

  if (isProtected && !session) {
    const loginUrl = new URL(
      "/auth/login",
      request.url
    );

    loginUrl.searchParams.set(
      "callbackUrl",
      request.nextUrl.pathname
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/recipes/:path*", "/favorites/:path*"],
};