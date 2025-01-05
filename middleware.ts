import { NextRequest, NextResponse } from "next/server";

// This function can be marked as `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("authUser");
  const url = request.nextUrl.pathname;
  // const urlAPI = process.env.APIENDPOINT;

  // console.log("Middleware", { cookie, url });

  if (cookie && url.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (cookie === undefined) {
    return NextResponse.rewrite(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" bellow
export const config = {
  matcher: [
    "/",
    "/auth",
    "/profile",
    "/profile/:path*",
    "/magic_compass",
    "/offer",
    "/privilegs",
    "/resort_collection",
    "/our_resort",
    "/my_bookings",
    "/my_bookings/:path*",
  ],
};
