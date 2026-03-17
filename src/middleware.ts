import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_DOMAIN = "drmayatorem.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  
  // Allow localhost for development
  if (host.includes("localhost") || host.includes("127.0.0.1")) {
    return NextResponse.next();
  }

  // Redirect www and non-canonical domains (e.g., *.vercel.app) to the primary domain
  if (host !== CANONICAL_DOMAIN) {
    const url = new URL(request.url);
    url.host = CANONICAL_DOMAIN;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js paths
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
