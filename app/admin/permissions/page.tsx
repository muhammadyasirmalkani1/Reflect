import type { Metadata } from "next"
import ProtectedRoute from "@/components/auth/protected-route"
import PermissionLogs from "@/components/admin/permission-logs"

export const metadata: Metadata = {
  title: "Permission Logs | Admin",
  description: "Monitor user permissions and access logs",
}

export default function PermissionLogsPage() {
  return (
    <ProtectedRoute requiredPermission="admin:logs">
      <div className="cosmic-bg pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Permission Management</h1>
            <p className="text-gray-400">Monitor and analyze user permission access patterns</p>
          </div>
          <PermissionLogs />
        </div>
      </div>
    </ProtectedRoute>
  )
}
