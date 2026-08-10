import { NextResponse } from "next/server"

export function middleware() {
  return new NextResponse(null, {
    status: 410,
    headers: {
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "no-store",
    },
  })
}

export const config = {
  matcher: "/:path*",
}
