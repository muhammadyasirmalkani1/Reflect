"use client"

import type React from "react"
import { usePermissions } from "@/hooks/use-permissions"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShieldX } from "lucide-react"

interface PermissionGateProps {
  children: React.ReactNode
  permission?: string
  permissions?: string[]
  requireAll?: boolean
  fallback?: React.ReactNode
  showError?: boolean
}

export default function PermissionGate({
  children,
  permission,
  permissions = [],
  requireAll = false,
  fallback,
  showError = false,
}: PermissionGateProps) {
  const { checkPermission, checkAnyPermission, checkAllPermissions } = usePermissions()

  let hasAccess = false

  if (permission) {
    hasAccess = checkPermission(permission)
  } else if (permissions.length > 0) {
    hasAccess = requireAll ? checkAllPermissions(permissions) : checkAnyPermission(permissions)
  } else {
    // No permissions specified, allow access
    hasAccess = true
  }

  if (!hasAccess) {
    if (fallback) {
      return <>{fallback}</>
    }

    if (showError) {
      return (
        <Alert className="border-red-500/20 bg-red-500/10">
          <ShieldX className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-400">
            You don't have permission to access this content.
          </AlertDescription>
        </Alert>
      )
    }

    return null
  }

  return <>{children}</>
}
