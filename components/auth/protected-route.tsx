"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredPermission?: string
  requiredRole?: string
  fallbackUrl?: string
}

export default function ProtectedRoute({
  children,
  requiredPermission,
  requiredRole,
  fallbackUrl = "/auth/login",
}: ProtectedRouteProps) {
  const { user, isLoading, hasPermission, hasRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push(fallbackUrl)
        return
      }

      if (requiredPermission && !hasPermission(requiredPermission)) {
        router.push("/unauthorized")
        return
      }

      if (requiredRole && !hasRole(requiredRole)) {
        router.push("/unauthorized")
        return
      }
    }
  }, [user, isLoading, requiredPermission, requiredRole, hasPermission, hasRole, router, fallbackUrl])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center cosmic-bg">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-400 mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return null
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return null
  }

  return <>{children}</>
}
