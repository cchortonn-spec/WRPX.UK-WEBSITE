import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isJarvisApiRoute = createRouteMatcher(["/api/jarvis(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (isJarvisApiRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/jarvis(.*)", "/api/jarvis(.*)", "/__clerk/:path*"],
};
