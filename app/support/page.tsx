import type { Metadata } from "next"
import CustomerSupportChat from "@/components/support/customer-support-chat"

export const metadata: Metadata = {
  title: "Customer Support | Reflect",
  description: "Get real-time assistance from our support team",
}

export default function SupportPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Customer Support</h1>
          <p className="text-xl text-gray-300 mb-8">
            Need help with Reflect? Our support team is here to assist you. Start a conversation below and we'll respond
            as soon as possible.
          </p>

          <CustomerSupportChat />
        </div>
      </div>
    </div>
  )
}
