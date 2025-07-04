"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, FileText, Search, Zap, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import PermissionPreviewCard from "./permission-preview-card"
import { PREVIEW_PERMISSIONS, getPreviewPermissionsByRole } from "@/lib/preview-permissions"
import type { JSX } from "react/jsx-runtime"

interface DemoState {
  currentRole: string
  usageStats: Record<string, { count: number; limit: number }>
  demoMode: boolean
}

export default function PermissionDemo() {
  const [demoState, setDemoState] = useState<DemoState>({
    currentRole: "preview",
    usageStats: {
      "notes:create": { count: 3, limit: 10 },
      "ai:chat": { count: 2, limit: 5 },
      "ai:summarize": { count: 1, limit: 2 },
      "search:semantic": { count: 5, limit: 10 },
    },
    demoMode: false,
  })

  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  const userPermissions = getPreviewPermissionsByRole(demoState.currentRole)
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

  const handleRoleChange = (newRole: string) => {
    setDemoState((prev) => ({
      ...prev,
      currentRole: newRole,
      demoMode: false,
    }))
    setSelectedDemo(null)
  }

  const handleTryDemo = (permissionId: string) => {
    setSelectedDemo(permissionId)
    setDemoState((prev) => ({ ...prev, demoMode: true }))
  }

  const handleUseFeature = (permissionId: string) => {
    setDemoState((prev) => ({
      ...prev,
      usageStats: {
        ...prev.usageStats,
        [permissionId]: {
          ...prev.usageStats[permissionId],
          count: Math.min((prev.usageStats[permissionId]?.count || 0) + 1, prev.usageStats[permissionId]?.limit || 999),
        },
      },
    }))
  }

  const getDemoContent = (permissionId: string) => {
    const demoContents: Record<string, JSX.Element> = {
      "ai:chat": (
        <div className="space-y-4">
          <div className="bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Brain className="h-6 w-6 text-purple-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-2">AI Assistant Demo</p>
                <div className="space-y-2">
                  <div className="bg-black/30 p-3 rounded">
                    <p className="text-gray-300 text-sm">You: "Summarize my notes about productivity"</p>
                  </div>
                  <div className="bg-purple-900/30 p-3 rounded">
                    <p className="text-purple-200 text-sm">
                      AI: "Based on your notes, here are the key productivity insights: Time-blocking increases focus by
                      40%, the Pomodoro technique works best for deep work sessions, and regular breaks improve overall
                      performance..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <AlertTriangle className="h-4 w-4" />
            Preview mode: Limited to 5 interactions per day
          </div>
        </div>
      ),
      "search:semantic": (
        <div className="space-y-4">
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Search className="h-6 w-6 text-blue-400 mt-1" />
              <div className="w-full">
                <p className="text-white font-medium mb-2">Semantic Search Demo</p>
                <div className="space-y-2">
                  <div className="bg-black/30 p-3 rounded">
                    <p className="text-gray-300 text-sm">Search: "ideas about creativity"</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-900/30 p-2 rounded text-sm">
                      <p className="text-blue-200 font-medium">Note: "Innovation Techniques"</p>
                      <p className="text-gray-300">Found: brainstorming methods, creative thinking...</p>
                    </div>
                    <div className="bg-blue-900/30 p-2 rounded text-sm">
                      <p className="text-blue-200 font-medium">Note: "Design Inspiration"</p>
                      <p className="text-gray-300">Found: artistic concepts, visual creativity...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <AlertTriangle className="h-4 w-4" />
            Preview mode: Limited to 10 search results
          </div>
        </div>
      ),
      "ai:summarize": (
        <div className="space-y-4">
          <div className="bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="h-6 w-6 text-green-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-2">AI Summarization Demo</p>
                <div className="space-y-2">
                  <div className="bg-black/30 p-3 rounded">
                    <p className="text-gray-300 text-sm">
                      Original note (500 words) about "Project Management Best Practices"
                    </p>
                  </div>
                  <div className="bg-green-900/30 p-3 rounded">
                    <p className="text-green-200 text-sm">
                      <strong>AI Summary:</strong> Key project management practices include: clear goal setting, regular
                      team communication, agile methodologies, risk assessment, and continuous feedback loops. Success
                      metrics should be defined early and tracked consistently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <AlertTriangle className="h-4 w-4" />
            Preview mode: 2 summaries per day, watermarked output
          </div>
        </div>
      ),
    }

    return (
      demoContents[permissionId] || (
        <div className="text-center py-8 text-gray-400">
          <p>Demo content for this feature is coming soon!</p>
        </div>
      )
    )
  }

  return (
    <div className="space-y-8">
      {/* Role Selector */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white">Choose Your Preview Experience</CardTitle>
          <CardDescription>Switch between different access levels to see what's available</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {[
              { id: "preview", name: "Quick Preview", icon: FileText },
              { id: "trial", name: "14-Day Trial", icon: Zap },
              { id: "pro_preview", name: "Pro Preview", icon: Brain },
            ].map((role) => (
              <Button
                key={role.id}
                variant={demoState.currentRole === role.id ? "default" : "outline"}
                onClick={() => handleRoleChange(role.id)}
                className={
                  demoState.currentRole === role.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-500/30 hover:bg-purple-500/10 bg-transparent"
                }
              >
                <role.icon className="mr-2 h-4 w-4" />
                {role.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Statistics */}
      {Object.keys(demoState.usageStats).length > 0 && (
        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white">Your Usage Today</CardTitle>
            <CardDescription>Track your preview limitations and usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(demoState.usageStats).map(([permissionId, stats]) => {
                const permission = PREVIEW_PERMISSIONS.find((p) => p.id === permissionId)
                if (!permission) return null

                const percentage = (stats.count / stats.limit) * 100

                return (
                  <div key={permissionId} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{permission.name}</span>
                      <span className="text-white">
                        {stats.count}/{stats.limit}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    {percentage > 80 && (
                      <p className="text-xs text-yellow-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Approaching limit
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Demo Content */}
      {selectedDemo && (
        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Interactive Demo
            </CardTitle>
            <CardDescription>Experience this feature in action</CardDescription>
          </CardHeader>
          <CardContent>
            {getDemoContent(selectedDemo)}
            <div className="flex gap-2 mt-4">
              <Button onClick={() => handleUseFeature(selectedDemo)} className="bg-purple-600 hover:bg-purple-700">
                Use This Feature
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedDemo(null)}
                className="border-purple-500/30 hover:bg-purple-500/10 bg-transparent"
              >
                Close Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Permission Cards */}
      <div className="space-y-6">
        {Object.entries(permissionsByCategory).map(([category, permissions]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-purple-500 rounded"></div>
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {permissions.map((permission) => (
                <PermissionPreviewCard
                  key={permission.id}
                  permission={permission}
                  hasAccess={true}
                  isDemo={demoState.demoMode}
                  usageCount={demoState.usageStats[permission.id]?.count}
                  usageLimit={demoState.usageStats[permission.id]?.limit}
                  onTryDemo={() => handleTryDemo(permission.id)}
                  onUpgrade={() => console.log("Upgrade clicked")}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All Permissions (Locked) */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gray-500 rounded"></div>
          Locked Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PREVIEW_PERMISSIONS.filter((p) => !userPermissions.some((up) => up.id === p.id)).map((permission) => (
            <PermissionPreviewCard
              key={permission.id}
              permission={permission}
              hasAccess={false}
              onTryDemo={() => handleTryDemo(permission.id)}
              onUpgrade={() => console.log("Upgrade clicked")}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
