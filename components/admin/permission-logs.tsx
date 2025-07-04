"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Eye, Shield, CheckCircle, XCircle, Activity } from "lucide-react"
import { permissionLogger, type PermissionLog } from "@/lib/permission-logger"

export default function PermissionLogs() {
  const [logs, setLogs] = useState<PermissionLog[]>([])
  const [filteredLogs, setFilteredLogs] = useState<PermissionLog[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [actionFilter, setActionFilter] = useState<string>("all")
  const [resourceFilter, setResourceFilter] = useState<string>("all")
  const [grantedFilter, setGrantedFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    const loadLogs = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const allLogs = permissionLogger.getLogs()
      const logStats = permissionLogger.getLogStats()
      setLogs(allLogs)
      setFilteredLogs(allLogs)
      setStats(logStats)
      setIsLoading(false)
    }
    loadLogs()
  }, [])

  useEffect(() => {
    let filtered = logs

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (log) =>
          log.userEmail.toLowerCase().includes(query) ||
          log.action.toLowerCase().includes(query) ||
          log.resource.toLowerCase().includes(query) ||
          log.permission.toLowerCase().includes(query),
      )
    }

    if (actionFilter !== "all") {
      filtered = filtered.filter((log) => log.action === actionFilter)
    }

    if (resourceFilter !== "all") {
      filtered = filtered.filter((log) => log.resource === resourceFilter)
    }

    if (grantedFilter !== "all") {
      filtered = filtered.filter((log) => log.granted === (grantedFilter === "granted"))
    }

    setFilteredLogs(filtered)
  }, [searchQuery, actionFilter, resourceFilter, grantedFilter, logs])

  const getActionBadge = (action: string) => {
    switch (action) {
      case "login_attempt":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Login Attempt</Badge>
      case "login_success":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Login Success</Badge>
      case "login_failed":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Login Failed</Badge>
      case "check":
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Permission Check</Badge>
      case "check_any":
        return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Any Permission</Badge>
      case "check_all":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">All Permissions</Badge>
      default:
        return <Badge variant="outline">{action}</Badge>
    }
  }

  const getGrantedIcon = (granted: boolean) => {
    return granted ? <CheckCircle className="h-4 w-4 text-green-400" /> : <XCircle className="h-4 w-4 text-red-400" />
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
    <div className="space-y-6">
      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Logs</p>
                  <p className="text-2xl font-bold text-white">{stats.total}</p>
                </div>
                <Activity className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Granted</p>
                  <p className="text-2xl font-bold text-green-400">{stats.granted}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Denied</p>
                  <p className="text-2xl font-bold text-red-400">{stats.denied}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-white">{stats.grantedPercentage}%</p>
                </div>
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Logs Table */}
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-400" />
                Permission Logs
              </CardTitle>
              <CardDescription>Monitor user permission checks and access attempts</CardDescription>
            </div>
            <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 bg-transparent">
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
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="check">Check</SelectItem>
                <SelectItem value="login_attempt">Login Attempt</SelectItem>
                <SelectItem value="login_success">Login Success</SelectItem>
                <SelectItem value="login_failed">Login Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={resourceFilter} onValueChange={setResourceFilter}>
              <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
                <SelectValue placeholder="Resource" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Resources</SelectItem>
                <SelectItem value="auth">Auth</SelectItem>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="notes">Notes</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Select value={grantedFilter} onValueChange={setGrantedFilter}>
              <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="granted">Granted</SelectItem>
                <SelectItem value="denied">Denied</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Logs Table */}
          <div className="rounded-md border border-purple-900/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-purple-900/20 hover:bg-purple-900/5">
                  <TableHead className="text-gray-300">User</TableHead>
                  <TableHead className="text-gray-300">Action</TableHead>
                  <TableHead className="text-gray-300">Resource</TableHead>
                  <TableHead className="text-gray-300">Permission</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Timestamp</TableHead>
                  <TableHead className="text-gray-300 w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id} className="border-purple-900/20 hover:bg-purple-900/5">
                    <TableCell className="text-gray-300">{log.userEmail}</TableCell>
                    <TableCell>{getActionBadge(log.action)}</TableCell>
                    <TableCell className="text-gray-300 capitalize">{log.resource}</TableCell>
                    <TableCell className="text-gray-300 font-mono text-sm">{log.permission}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getGrantedIcon(log.granted)}
                        <span className={log.granted ? "text-green-400" : "text-red-400"}>
                          {log.granted ? "Granted" : "Denied"}
                        </span>
                      </div>
                    </TableCell>
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
            <div className="text-center py-8 text-gray-400">No permission logs found matching your criteria.</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
