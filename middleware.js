import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/createblog"];

export default async function middleware(request) {
  const session = await auth();

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/" ,
    request.url));
  } 

  return NextResponse.next();
}
