export interface PermissionLog {
  id: string
  userId: string
  userEmail: string
  action: string
  resource: string
  permission: string
  granted: boolean
  timestamp: string
  ip: string
  userAgent: string
  details?: string
}

class PermissionLogger {
  private logs: PermissionLog[] = []

  log(entry: Omit<PermissionLog, "id" | "timestamp">) {
    const logEntry: PermissionLog = {
      ...entry,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
    }

    this.logs.push(logEntry)

    // In a real implementation, you would send this to your logging service
    console.log("Permission Log:", logEntry)

    // Keep only last 1000 logs in memory
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000)
    }
  }

  getLogs(filters?: {
    userId?: string
    action?: string
    resource?: string
    granted?: boolean
    startDate?: string
    endDate?: string
  }): PermissionLog[] {
    let filteredLogs = [...this.logs]

    if (filters) {
      if (filters.userId) {
        filteredLogs = filteredLogs.filter((log) => log.userId === filters.userId)
      }
      if (filters.action) {
        filteredLogs = filteredLogs.filter((log) => log.action === filters.action)
      }
      if (filters.resource) {
        filteredLogs = filteredLogs.filter((log) => log.resource === filters.resource)
      }
      if (filters.granted !== undefined) {
        filteredLogs = filteredLogs.filter((log) => log.granted === filters.granted)
      }
      if (filters.startDate) {
        filteredLogs = filteredLogs.filter((log) => log.timestamp >= filters.startDate!)
      }
      if (filters.endDate) {
        filteredLogs = filteredLogs.filter((log) => log.timestamp <= filters.endDate!)
      }
    }

    return filteredLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }

  getLogStats() {
    const total = this.logs.length
    const granted = this.logs.filter((log) => log.granted).length
    const denied = total - granted

    const resourceStats = this.logs.reduce(
      (acc, log) => {
        acc[log.resource] = (acc[log.resource] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const actionStats = this.logs.reduce(
      (acc, log) => {
        acc[log.action] = (acc[log.action] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return {
      total,
      granted,
      denied,
      grantedPercentage: total > 0 ? Math.round((granted / total) * 100) : 0,
      resourceStats,
      actionStats,
    }
  }
}

export const permissionLogger = new PermissionLogger()
