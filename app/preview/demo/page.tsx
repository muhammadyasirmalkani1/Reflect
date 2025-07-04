import type { Metadata } from "next"
import PermissionDemo from "@/components/preview/permission-demo"

export const metadata: Metadata = {
  title: "Interactive Demo | Reflect Preview",
  description: "Try Reflect's features with our interactive permission-based demo",
}

export default function PreviewDemoPage() {
  return (
    <div className="cosmic-bg pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 purple-gradient-text">Interactive Feature Demo</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience Reflect's powerful features with realistic limitations and usage tracking
          </p>
        </div>

        <PermissionDemo />
      </div>
    </div>
  )
}
