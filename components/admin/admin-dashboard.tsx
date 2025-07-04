"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, Activity, DollarSign, TrendingUp, Server, Shield, Settings } from "lucide-react"
import AdminUserManagement from "./admin-user-management"
import AdminSystemStats from "./admin-system-stats"
import AdminAnalytics from "./admin-analytics"
import AdminSettings from "./admin-settings"
import AdminSecurityLogs from "./admin-security-logs"

interface DashboardStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  monthlyGrowth: number
  systemHealth: "healthy" | "warning" | "critical"
  activeConnections: number
  storageUsed: number
  apiCalls: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalRevenue: 0,
    monthlyGrowth: 0,
    systemHealth: "healthy",
    activeConnections: 0,
    storageUsed: 0,
    apiCalls: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStats({
        totalUsers: 12847,
        activeUsers: 8932,
        totalRevenue: 284750,
        monthlyGrowth: 12.5,
        systemHealth: "healthy",
        activeConnections: 1247,
        storageUsed: 78.5,
        apiCalls: 1847293,
      })
      setIsLoading(false)
    }
    loadStats()
  }, [])

  const getHealthBadgeVariant = (health: string) => {
    switch (health) {
      case "healthy":
        return "default"
      case "warning":
        return "secondary"
      case "critical":
        return "destructive"
      default:
        return "outline"
    }
  }

  if (isLoading) {
    return (
      <div className="cosmic-bg pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-purple-900/20 rounded w-64"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-purple-900/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cosmic-bg pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold purple-gradient-text">Admin Dashboard</h1>
            <p className="text-gray-400 mt-2">System administration and user management</p>
          </div>
          <Badge variant={getHealthBadgeVariant(stats.systemHealth)} className="text-sm">
            System {stats.systemHealth}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-gray-400">{stats.activeUsers.toLocaleString()} active this month</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-green-400">+{stats.monthlyGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">System Load</CardTitle>
              <Activity className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeConnections}</div>
              <p className="text-xs text-gray-400">Active connections</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">API Usage</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.apiCalls.toLocaleString()}</div>
              <p className="text-xs text-gray-400">Calls this month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-black/50 border border-purple-500/20">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              System
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <AdminUserManagement />
          </TabsContent>

          <TabsContent value="analytics">
            <AdminAnalytics />
          </TabsContent>

          <TabsContent value="system">
            <AdminSystemStats storageUsed={stats.storageUsed} />
          </TabsContent>

          <TabsContent value="security">
            <AdminSecurityLogs />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
