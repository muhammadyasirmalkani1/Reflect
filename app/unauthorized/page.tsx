import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldX, ArrowLeft, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Unauthorized | Reflect",
  description: "You don't have permission to access this page",
}

export default function UnauthorizedPage() {
  return (
    <div className="cosmic-bg min-h-screen flex items-center justify-center px-4">
      <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md max-w-md w-full">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <ShieldX className="mx-auto h-16 w-16 text-red-400" />
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
              <p className="text-gray-400">
                You don't have permission to access this page. Please contact your administrator if you believe this is
                an error.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline" className="border-purple-900/20 text-gray-300 hover:bg-purple-900/10">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
