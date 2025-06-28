import type { Metadata } from "next"
import SupportAgentDashboard from "@/components/support/support-agent-dashboard"

export const metadata: Metadata = {
  title: "Support Dashboard | Reflect Admin",
  description: "Manage customer support tickets and chat with users",
}

export default function SupportDashboardPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 purple-gradient-text">Support Dashboard</h1>
        <p className="text-gray-300 mb-8">Manage customer support tickets and provide real-time assistance to users.</p>

        <SupportAgentDashboard />
      </div>
    </div>
  )
}
