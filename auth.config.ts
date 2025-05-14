import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // If a logged-in user is accessing any non-dashboard page, they are redirected to /dashboard
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true // Default behaviour (public pages are accessible)
    }
  },
  providers: []
} satisfies NextAuthConfig
