import type { Metadata } from "next"
import ProtectedRoute from "@/components/auth/protected-route"
import DashboardContent from "@/components/dashboard/dashboard-content"

export const metadata: Metadata = {
  title: "Dashboard | Reflect",
  description: "Your personal productivity dashboard",
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
