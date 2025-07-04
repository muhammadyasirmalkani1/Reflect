import type { Metadata } from "next"
import RoleComparison from "@/components/preview/role-comparison"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Play, Zap, Crown, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Preview Reflect | Try Before You Buy",
  description: "Experience Reflect's powerful features with our interactive preview modes",
}

export default function PreviewPage() {
  return (
    <div className="cosmic-bg pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
            Interactive Preview
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Try Reflect Risk-Free</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-enhanced note-taking with our interactive preview modes. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none text-lg py-6 px-8">
              <Play className="mr-2 h-5 w-5" />
              Start Free Preview
            </Button>
            <Button
              variant="outline"
              className="border-purple-500/30 text-white hover:bg-purple-500/10 text-lg py-6 px-8 bg-transparent"
              asChild
            >
              <Link href="#comparison">
                <Eye className="mr-2 h-5 w-5" />
                Compare Features
              </Link>
            </Button>
          </div>
        </div>

        {/* Preview Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md hover:border-purple-500/40 transition-colors">
            <CardHeader className="text-center">
              <Star className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <CardTitle className="text-white">Quick Preview</CardTitle>
              <CardDescription>Try basic features instantly without signing up</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Create up to 10 notes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Basic editing tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Simple search
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  No AI features
                </li>
              </ul>
              <Button className="w-full bg-gray-600 hover:bg-gray-700">
                <Play className="mr-2 h-4 w-4" />
                Try Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-blue-500/20 backdrop-blur-md hover:border-blue-500/40 transition-colors ring-1 ring-blue-500/20">
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <CardTitle className="text-white">14-Day Trial</CardTitle>
              <CardDescription>Full access to most features for two weeks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Unlimited notes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  AI chat assistant (5/day)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Note organization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Public sharing
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Zap className="mr-2 h-4 w-4" />
                Start Trial
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-md hover:border-purple-500/40 transition-colors">
            <CardHeader className="text-center">
              <Crown className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-white">Pro Preview</CardTitle>
              <CardDescription>Experience premium features with limitations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  AI summarization (2/day)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Semantic search
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Real-time collaboration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  Watermarked exports
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Crown className="mr-2 h-4 w-4" />
                Preview Pro
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison */}
        <div id="comparison">
          <RoleComparison />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to unlock your thinking potential?</h2>
              <p className="text-gray-300 mb-6">
                Join thousands of users who have transformed their note-taking with Reflect's AI-powered features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                  Start Your Journey
                </Button>
                <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 bg-transparent">
                  View Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
