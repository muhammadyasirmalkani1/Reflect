"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, User, Lock, Eye, Settings } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { usePermissions } from "@/hooks/use-permissions"
import { ROLES } from "@/lib/permissions"
import PermissionGate from "@/components/auth/permission-gate"

export default function UserPermissionsPanel() {
  const { user } = useAuth()
  const { getUserPermissions, userRole } = usePermissions()

  if (!user) return null

  const userPermissions = getUserPermissions()
  const userRoleData = ROLES.find((role) => role.id === userRole)

  const permissionsByCategory = userPermissions.reduce(
    (acc, permission) => {
      if (!acc[permission.category]) {
        acc[permission.category] = []
      }
      acc[permission.category].push(permission)
      return acc
    },
    {} as Record<string, typeof userPermissions>,
  )

  return (
    <div className="space-y-6">
      {/* User Role Card */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <User className="h-5 w-5 text-purple-400" />
            Your Account
          </CardTitle>
          <CardDescription>Current role and account information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="text-right">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2">
                {userRoleData?.name || user.role}
              </Badge>
              <p className="text-sm text-gray-400">{userRoleData?.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Permissions Overview */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Your Permissions
              </CardTitle>
              <CardDescription>
                You have {userPermissions.length} permissions across {Object.keys(permissionsByCategory).length}{" "}
                categories
              </CardDescription>
            </div>
            <PermissionGate permission="admin:settings">
              <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 bg-transparent">
                <Settings className="mr-2 h-4 w-4" />
                Manage
              </Button>
            </PermissionGate>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(permissionsByCategory).map(([category, permissions]) => (
              <div key={category}>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-purple-400" />
                  {category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {permissions.map((permission) => (
                    <div
                      key={permission.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-purple-900/20"
                    >
                      <div>
                        <p className="text-white font-medium">{permission.name}</p>
                        <p className="text-sm text-gray-400">{permission.description}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <Eye className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription>Common tasks based on your permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PermissionGate permission="notes:write">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Create Note</Button>
            </PermissionGate>
            <PermissionGate permission="notes:export">
              <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10 bg-transparent">
                Export Notes
              </Button>
            </PermissionGate>
            <PermissionGate permission="admin:dashboard">
              <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10 bg-transparent">
                Admin Panel
              </Button>
            </PermissionGate>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
