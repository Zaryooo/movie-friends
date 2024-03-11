import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    
    if (request.nextUrl.pathname === "/movies") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
    //return NextResponse.redirect(new URL("/", request.url))
}

// export const config = {
//     matcher: ['/movies/:path*', '/popular/:path*'],
//   }

// export const config = {
//     matcher: "/profile"
// }