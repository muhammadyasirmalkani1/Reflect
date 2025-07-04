"use client"

import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Zap, Crown } from "lucide-react"
import { PREVIEW_ROLES, PREVIEW_PERMISSIONS } from "@/lib/preview-permissions"

export default function RoleComparison() {
  const roles = PREVIEW_ROLES.filter((role) => role.id !== "visitor")

  const getRoleIcon = (roleId: string) => {
    switch (roleId) {
      case "preview":
        return <Star className="h-5 w-5 text-gray-400" />
      case "trial":
        return <Zap className="h-5 w-5 text-blue-400" />
      case "pro_preview":
        return <Crown className="h-5 w-5 text-purple-400" />
      default:
        return <Star className="h-5 w-5 text-gray-400" />
    }
  }

  const hasPermission = (roleId: string, permissionId: string) => {
    const role = roles.find((r) => r.id === roleId)
    return role?.permissions.includes(permissionId) || false
  }

  const permissionCategories = [...new Set(PREVIEW_PERMISSIONS.map((p) => p.category))]

  return (
    <div className="space-y-8">
      {/* Role Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">{getRoleIcon(role.id)}</div>
              <CardTitle className="text-white">{role.name}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
              {role.trialDays && (
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mx-auto">
                  {role.trialDays} Day Trial
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Features:</h4>
                <ul className="space-y-1">
                  {role.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                  {role.features.length > 3 && (
                    <li className="text-xs text-gray-400">+{role.features.length - 3} more features</li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-2">Limitations:</h4>
                <ul className="space-y-1">
                  {role.limitations.slice(0, 2).map((limitation, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                      <X className="h-3 w-3 text-red-400" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700" size="sm">
                Try {role.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Permission Comparison */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white">Feature Comparison</CardTitle>
          <CardDescription>Compare what's available in each preview mode</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-900/20">
                  <th className="text-left py-3 px-4 text-white font-medium">Feature</th>
                  {roles.map((role) => (
                    <th key={role.id} className="text-center py-3 px-4 text-white font-medium min-w-[120px]">
                      <div className="flex flex-col items-center gap-1">
                        {getRoleIcon(role.id)}
                        <span className="text-sm">{role.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissionCategories.map((category) => (
                  <React.Fragment key={category}>
                    <tr>
                      <td colSpan={roles.length + 1} className="py-3 px-4">
                        <h4 className="text-purple-400 font-medium text-sm">{category}</h4>
                      </td>
                    </tr>
                    {PREVIEW_PERMISSIONS.filter((p) => p.category === category).map((permission) => (
                      <tr key={permission.id} className="border-b border-purple-900/10">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-white text-sm font-medium">{permission.name}</p>
                            <p className="text-gray-400 text-xs">{permission.description}</p>
                          </div>
                        </td>
                        {roles.map((role) => (
                          <td key={role.id} className="py-3 px-4 text-center">
                            {hasPermission(role.id, permission.id) ? (
                              <div className="flex flex-col items-center gap-1">
                                <Check className="h-4 w-4 text-green-400" />
                                {permission.limitations && <span className="text-xs text-yellow-400">Limited</span>}
                              </div>
                            ) : (
                              <X className="h-4 w-4 text-gray-500 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
