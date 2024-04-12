import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  
  if (authHeader !== 'Bearer naranja_labs') {
    return NextResponse.json({ Error: "Unauthorized" }, { status: 401 })
  }

  NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};