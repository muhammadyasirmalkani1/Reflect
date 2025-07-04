"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  Database,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

interface SystemStats {
  cpu: { usage: number; cores: number; temperature: number }
  memory: { used: number; total: number; percentage: number }
  storage: { used: number; total: number; percentage: number }
  network: { inbound: number; outbound: number; connections: number }
  database: { connections: number; queries: number; responseTime: number }
  uptime: number
  lastBackup: string
  services: Array<{ name: string; status: "healthy" | "warning" | "error"; uptime: number }>
}

interface AdminSystemStatsProps {
  storageUsed: number
}

export default function AdminSystemStats({ storageUsed }: AdminSystemStatsProps) {
  const [stats, setStats] = useState<SystemStats>({
    cpu: { usage: 0, cores: 8, temperature: 0 },
    memory: { used: 0, total: 32, percentage: 0 },
    storage: { used: 0, total: 1000, percentage: 0 },
    network: { inbound: 0, outbound: 0, connections: 0 },
    database: { connections: 0, queries: 0, responseTime: 0 },
    uptime: 0,
    lastBackup: "",
    services: [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const loadSystemStats = async () => {
    // Simulate loading system stats
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStats({
      cpu: {
        usage: Math.floor(Math.random() * 40) + 20,
        cores: 8,
        temperature: Math.floor(Math.random() * 20) + 45,
      },
      memory: {
        used: Math.floor(Math.random() * 10) + 18,
        total: 32,
        percentage: Math.floor(((Math.floor(Math.random() * 10) + 18) / 32) * 100),
      },
      storage: {
        used: storageUsed,
        total: 100,
        percentage: storageUsed,
      },
      network: {
        inbound: Math.floor(Math.random() * 500) + 200,
        outbound: Math.floor(Math.random() * 300) + 150,
        connections: Math.floor(Math.random() * 500) + 1000,
      },
      database: {
        connections: Math.floor(Math.random() * 50) + 25,
        queries: Math.floor(Math.random() * 1000) + 500,
        responseTime: Math.floor(Math.random() * 50) + 10,
      },
      uptime: 99.97,
      lastBackup: new Date(Date.now() - Math.random() * 3600000).toISOString(),
      services: [
        { name: "API Server", status: "healthy", uptime: 99.99 },
        { name: "Database", status: "healthy", uptime: 99.95 },
        { name: "Redis Cache", status: "healthy", uptime: 99.98 },
        { name: "File Storage", status: "warning", uptime: 99.85 },
        { name: "Search Engine", status: "healthy", uptime: 99.92 },
        { name: "WebSocket Server", status: "healthy", uptime: 99.96 },
      ],
    })
    setIsLoading(false)
    setLastUpdated(new Date())
  }

  useEffect(() => {
    loadSystemStats()
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadSystemStats, 30000)
    return () => clearInterval(interval)
  }, [storageUsed])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      case "error":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-purple-900/20 rounded w-1/4 mb-4"></div>
                <div className="h-32 bg-purple-900/20 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with refresh */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-white">System Status</h3>
          <p className="text-sm text-gray-400">Last updated: {lastUpdated.toLocaleTimeString()}</p>
        </div>
        <Button
          onClick={loadSystemStats}
          variant="outline"
          size="sm"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* System Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.cpu.usage}%</div>
            <Progress value={stats.cpu.usage} className="mt-2" />
            <p className="text-xs text-gray-400 mt-2">
              {stats.cpu.cores} cores • {stats.cpu.temperature}°C
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Memory</CardTitle>
            <Activity className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.memory.percentage}%</div>
            <Progress value={stats.memory.percentage} className="mt-2" />
            <p className="text-xs text-gray-400 mt-2">
              {stats.memory.used}GB / {stats.memory.total}GB
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Storage</CardTitle>
            <HardDrive className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.storage.percentage}%</div>
            <Progress value={stats.storage.percentage} className="mt-2" />
            <p className="text-xs text-gray-400 mt-2">
              {stats.storage.used}GB / {stats.storage.total}GB
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Network & Database Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wifi className="h-5 w-5 text-blue-400" />
              Network Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Inbound Traffic</span>
              <span className="text-white font-mono">{stats.network.inbound} MB/s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Outbound Traffic</span>
              <span className="text-white font-mono">{stats.network.outbound} MB/s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Connections</span>
              <span className="text-white font-mono">{stats.network.connections.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="h-5 w-5 text-purple-400" />
              Database Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Connections</span>
              <span className="text-white font-mono">{stats.database.connections}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Queries/sec</span>
              <span className="text-white font-mono">{stats.database.queries}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Avg Response Time</span>
              <span className="text-white font-mono">{stats.database.responseTime}ms</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Status */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Server className="h-5 w-5 text-green-400" />
            Service Status
          </CardTitle>
          <CardDescription>
            Overall system uptime: {stats.uptime}% • Last backup: {new Date(stats.lastBackup).toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-purple-900/20"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(service.status)}
                  <span className="text-white font-medium">{service.name}</span>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className={`${getStatusColor(service.status)} border-current`}>
                    {service.status}
                  </Badge>
                  <p className="text-xs text-gray-400 mt-1">{service.uptime}% uptime</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
