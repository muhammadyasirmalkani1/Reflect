"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, AlertTriangle, Search, Download, Eye, Lock, Unlock, UserX, Activity } from "lucide-react"

interface SecurityLog {
  id: string
  timestamp: string
  event: string
  severity: "low" | "medium" | "high" | "critical"
  user: string
  ip: string
  userAgent: string
  details: string
  status: "resolved" | "investigating" | "open"
}

export default function AdminSecurityLogs() {
  const [logs, setLogs] = useState<SecurityLog[]>([])
  const [filteredLogs, setFilteredLogs] = useState<SecurityLog[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [severityFilter, setSeverityFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load mock security logs
    const loadLogs = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const mockLogs: SecurityLog[] = [
        {
          id: "1",
          timestamp: "2024-06-11T16:45:23Z",
          event: "Failed Login Attempt",
          severity: "medium",
          user: "unknown@attacker.com",
          ip: "192.168.1.100",
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          details: "Multiple failed login attempts detected from same IP",
          status: "investigating",
        },
        {
          id: "2",
          timestamp: "2024-06-11T15:30:12Z",
          event: "Suspicious API Usage",
          severity: "high",
          user: "john.doe@example.com",
          ip: "203.0.113.45",
          userAgent: "curl/7.68.0",
          details: "Unusual API request pattern detected - 500+ requests in 1 minute",
          status: "open",
        },
        {
          id: "3",
          timestamp: "2024-06-11T14:22:45Z",
          event: "Admin Access",
          severity: "low",
          user: "admin@reflect.com",
          ip: "10.0.0.5",
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          details: "Admin user accessed user management panel",
          status: "resolved",
        },
        {
          id: "4",
          timestamp: "2024-06-11T13:15:33Z",
          event: "Password Reset",
          severity: "low",
          user: "sarah.wilson@company.com",
          ip: "172.16.0.10",
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          details: "User requested password reset via email",
          status: "resolved",
        },
        {
          id: "5",
          timestamp: "2024-06-11T12:08:17Z",
          event: "Account Lockout",
          severity: "medium",
          user: "mike.chen@startup.io",
          ip: "198.51.100.25",
          userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15",
          details: "Account locked due to 5 consecutive failed login attempts",
          status: "resolved",
        },
        {
          id: "6",
          timestamp: "2024-06-11T11:45:02Z",
          event: "Data Export",
          severity: "medium",
          user: "emma.taylor@research.edu",
          ip: "203.0.113.78",
          userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
          details: "User exported large dataset (2.5GB) - unusual for this account",
          status: "investigating",
        },
        {
          id: "7",
          timestamp: "2024-06-11T10:30:45Z",
          event: "Permission Escalation",
          severity: "critical",
          user: "alex.rodriguez@agency.com",
          ip: "192.0.2.15",
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          details: "User attempted to access admin endpoints without proper permissions",
          status: "open",
        },
      ]
      setLogs(mockLogs)
      setFilteredLogs(mockLogs)
      setIsLoading(false)
    }
    loadLogs()
  }, [])

  // Filter logs based on search and filters
  useEffect(() => {
    let filtered = logs

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (log) =>
          log.event.toLowerCase().includes(query) ||
          log.user.toLowerCase().includes(query) ||
          log.ip.includes(query) ||
          log.details.toLowerCase().includes(query),
      )
    }

    // Severity filter
    if (severityFilter !== "all") {
      filtered = filtered.filter((log) => log.severity === severityFilter)
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((log) => log.status === statusFilter)
    }

    setFilteredLogs(filtered)
  }, [searchQuery, severityFilter, statusFilter, logs])

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Critical</Badge>
      case "high":
        return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "resolved":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Resolved</Badge>
      case "investigating":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Investigating</Badge>
      case "open":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Open</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getEventIcon = (event: string) => {
    if (event.includes("Login")) return <Lock className="h-4 w-4" />
    if (event.includes("API")) return <Activity className="h-4 w-4" />
    if (event.includes("Admin")) return <Shield className="h-4 w-4" />
    if (event.includes("Password")) return <Unlock className="h-4 w-4" />
    if (event.includes("Lockout")) return <UserX className="h-4 w-4" />
    return <AlertTriangle className="h-4 w-4" />
  }

  if (isLoading) {
    return (
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardContent className="p-8">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-purple-900/20 rounded w-1/4"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-purple-900/20 rounded"></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-400" />
              Security Logs
            </CardTitle>
            <CardDescription>Monitor security events and potential threats</CardDescription>
          </div>
          <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search logs..."
              className="pl-10 bg-black/30 border-purple-500/30 focus:border-purple-500/50 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severity</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Security Logs Table */}
        <div className="rounded-md border border-purple-900/20 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-purple-900/20 hover:bg-purple-900/5">
                <TableHead className="text-gray-300">Event</TableHead>
                <TableHead className="text-gray-300">Severity</TableHead>
                <TableHead className="text-gray-300">User</TableHead>
                <TableHead className="text-gray-300">IP Address</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Timestamp</TableHead>
                <TableHead className="text-gray-300 w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="border-purple-900/20 hover:bg-purple-900/5">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getEventIcon(log.event)}
                      <span className="text-white font-medium">{log.event}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getSeverityBadge(log.severity)}</TableCell>
                  <TableCell className="text-gray-300">{log.user}</TableCell>
                  <TableCell className="text-gray-300 font-mono">{log.ip}</TableCell>
                  <TableCell>{getStatusBadge(log.status)}</TableCell>
                  <TableCell className="text-gray-300">{new Date(log.timestamp).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center py-8 text-gray-400">No security logs found matching your criteria.</div>
        )}
      </CardContent>
    </Card>
  )
}
