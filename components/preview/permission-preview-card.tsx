"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Lock, Unlock, Eye, Zap, Crown, Star, AlertTriangle, CheckCircle, Play } from "lucide-react"
import type { PreviewPermission } from "@/lib/preview-permissions"

interface PermissionPreviewCardProps {
  permission: PreviewPermission
  hasAccess: boolean
  isDemo?: boolean
  usageCount?: number
  usageLimit?: number
  onTryDemo?: () => void
  onUpgrade?: () => void
}

export default function PermissionPreviewCard({
  permission,
  hasAccess,
  isDemo = false,
  usageCount = 0,
  usageLimit,
  onTryDemo,
  onUpgrade,
}: PermissionPreviewCardProps) {
  const getLevelIcon = (level: string) => {
    switch (level) {
      case "free":
        return <Star className="h-4 w-4 text-gray-400" />
      case "trial":
        return <Zap className="h-4 w-4 text-blue-400" />
      case "pro":
        return <Crown className="h-4 w-4 text-purple-400" />
      case "enterprise":
        return <Crown className="h-4 w-4 text-gold-400" />
      default:
        return <Lock className="h-4 w-4 text-gray-400" />
    }
  }

  const getLevelBadge = (level: string) => {
    const configs = {
      free: { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: "Free" },
      trial: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", label: "Trial" },
      pro: { color: "bg-purple-500/20 text-purple-400 border-purple-500/30", label: "Pro" },
      enterprise: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", label: "Enterprise" },
    }

    const config = configs[level as keyof typeof configs] || configs.free

    return (
      <Badge className={config.color}>
        {getLevelIcon(level)}
        <span className="ml-1">{config.label}</span>
      </Badge>
    )
  }

  const usagePercentage = usageLimit ? (usageCount / usageLimit) * 100 : 0

  return (
    <Card
      className={`bg-black/40 border-purple-900/20 backdrop-blur-md transition-all duration-200 ${
        hasAccess ? "ring-1 ring-green-500/20" : "opacity-75"
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {hasAccess ? <Unlock className="h-5 w-5 text-green-400" /> : <Lock className="h-5 w-5 text-gray-400" />}
            <CardTitle className="text-white text-lg">{permission.name}</CardTitle>
          </div>
          {getLevelBadge(permission.previewLevel)}
        </div>
        <CardDescription className="text-gray-400">{permission.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Access Status */}
        <div className="flex items-center gap-2">
          {hasAccess ? (
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Available</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-400">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Requires {permission.previewLevel} access</span>
            </div>
          )}
        </div>

        {/* Usage Tracking */}
        {hasAccess && usageLimit && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Usage</span>
              <span className="text-white">
                {usageCount}/{usageLimit}
              </span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
            {usagePercentage > 80 && <p className="text-xs text-yellow-400">Approaching usage limit</p>}
          </div>
        )}

        {/* Limitations */}
        {permission.limitations && permission.limitations.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-300">Preview Limitations:</h4>
            <ul className="space-y-1">
              {permission.limitations.map((limitation, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {!hasAccess && permission.demoAvailable && (
            <Button
              variant="outline"
              size="sm"
              onClick={onTryDemo}
              className="flex-1 border-blue-500/30 hover:bg-blue-500/10 bg-transparent"
            >
              <Play className="mr-2 h-3 w-3" />
              Try Demo
            </Button>
          )}

          {!hasAccess && (
            <Button size="sm" onClick={onUpgrade} className="flex-1 bg-purple-600 hover:bg-purple-700">
              <Crown className="mr-2 h-3 w-3" />
              Upgrade
            </Button>
          )}

          {hasAccess && isDemo && (
            <Button
              size="sm"
              onClick={onUpgrade}
              className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
            >
              <Eye className="mr-2 h-3 w-3" />
              Use Feature
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
