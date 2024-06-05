import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  console.log("In middleware");
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/admin/") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    if (!request.cookies.get("token")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
}
