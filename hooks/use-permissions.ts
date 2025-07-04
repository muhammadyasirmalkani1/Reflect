"use client"

import { useAuth } from "./use-auth"
import { hasPermission, hasAnyPermission, hasAllPermissions, getPermissionsByRole } from "@/lib/permissions"
import { permissionLogger } from "@/lib/permission-logger"

export function usePermissions() {
  const { user } = useAuth()

  const checkPermission = (permission: string, logAccess = true): boolean => {
    if (!user) {
      if (logAccess) {
        permissionLogger.log({
          userId: "anonymous",
          userEmail: "anonymous",
          action: "check",
          resource: permission.split(":")[0],
          permission,
          granted: false,
          ip: "unknown",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
          details: "User not authenticated",
        })
      }
      return false
    }

    const granted = hasPermission(user.permissions, permission)

    if (logAccess) {
      permissionLogger.log({
        userId: user.id,
        userEmail: user.email,
        action: "check",
        resource: permission.split(":")[0],
        permission,
        granted,
        ip: "unknown", // In a real app, you'd get this from the request
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
        details: granted ? "Permission granted" : "Permission denied",
      })
    }

    return granted
  }

  const checkAnyPermission = (permissions: string[], logAccess = true): boolean => {
    if (!user) {
      if (logAccess) {
        permissionLogger.log({
          userId: "anonymous",
          userEmail: "anonymous",
          action: "check_any",
          resource: "multiple",
          permission: permissions.join(","),
          granted: false,
          ip: "unknown",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
          details: "User not authenticated",
        })
      }
      return false
    }

    const granted = hasAnyPermission(user.permissions, permissions)

    if (logAccess) {
      permissionLogger.log({
        userId: user.id,
        userEmail: user.email,
        action: "check_any",
        resource: "multiple",
        permission: permissions.join(","),
        granted,
        ip: "unknown",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
        details: granted ? "At least one permission granted" : "No permissions granted",
      })
    }

    return granted
  }

  const checkAllPermissions = (permissions: string[], logAccess = true): boolean => {
    if (!user) {
      if (logAccess) {
        permissionLogger.log({
          userId: "anonymous",
          userEmail: "anonymous",
          action: "check_all",
          resource: "multiple",
          permission: permissions.join(","),
          granted: false,
          ip: "unknown",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
          details: "User not authenticated",
        })
      }
      return false
    }

    const granted = hasAllPermissions(user.permissions, permissions)

    if (logAccess) {
      permissionLogger.log({
        userId: user.id,
        userEmail: user.email,
        action: "check_all",
        resource: "multiple",
        permission: permissions.join(","),
        granted,
        ip: "unknown",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
        details: granted ? "All permissions granted" : "Some permissions denied",
      })
    }

    return granted
  }

  const getUserPermissions = () => {
    if (!user) return []
    return getPermissionsByRole(user.role)
  }

  const canAccess = (resource: string, action: string, logAccess = true): boolean => {
    const permission = `${resource}:${action}`
    return checkPermission(permission, logAccess)
  }

  return {
    checkPermission,
    checkAnyPermission,
    checkAllPermissions,
    getUserPermissions,
    canAccess,
    userPermissions: user?.permissions || [],
    userRole: user?.role || null,
  }
}
