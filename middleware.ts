import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const userJWT = request.cookies.get('userJWT')?.value
 
  if (userJWT && !request.nextUrl.pathname.startsWith('/cloud')) {
    return Response.redirect(new URL('/cloud', request.url))
  }
 
  if (!userJWT && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}