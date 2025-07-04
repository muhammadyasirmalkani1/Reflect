import type { Metadata } from "next"
import ProtectedRoute from "@/components/auth/protected-route"
import AdminDashboard from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | Reflect",
  description: "System administration and user management dashboard",
}

export default function AdminPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  )
}
