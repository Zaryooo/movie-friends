import { NextApiRequest } from 'next';
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest, req: NextApiRequest) {
    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    
    // if (request.nextUrl.pathname === "/movies") {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return response;
}
