import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // return NextResponse.redirect(new URL("/", request.url));

    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme");
    if (!themePreference){
        response.cookies.set("theme", "dark")
    }

    response.headers.set("custom-header", "custom-value");

    return response

    // if (request.nextUrl.pathname === "/profile"){
    //     // return NextResponse.redirect(new URL("/f5", request.url))
    //     return NextResponse.rewrite(new URL("/f5", request.url)) //url wil still be /profile only content change
    // }
}

export const config = {
    matcher: "/profile",
}

