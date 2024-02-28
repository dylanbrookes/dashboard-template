import { NextResponse, NextRequest } from "next/server";
import { VerifyJWT } from "./utils/auth";

export const config = {
  matcher: "/dashboard/:path*",
};

export async function middleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken")?.value;
  if (authToken !== undefined) {
    const { data, error } = await VerifyJWT(authToken);
    const currentTime = Math.floor(Date.now() / 1000);
    const exp = data?.exp;

    if (error === null && exp && currentTime < exp) {
      return NextResponse.next();
    }
  }

  const response = NextResponse.next();
  response.cookies.delete("authToken");

  return NextResponse.redirect(new URL("/login", req.url));
}
