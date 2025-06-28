"Client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  Wifi,
  RefreshCw,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  HardDrive,
  CheckCircle,
  XCircle,
  Info,
} from "lucide-react"

const commonIssues = [
  {
    id: "sync-issues",
    title: "Sync Problems",
    icon: RefreshCw,
    severity: "high",
    description: "Notes not syncing between devices or sync taking too long",
    symptoms: [
      "Changes not appearing on other devices",
      'Sync indicator stuck on "syncing"',
      "Conflicting versions of the same note",
      "Old notes reappearing after deletion",
    ],
    solutions: [
      {
        step: "Check your internet connection",
        description:
          "Ensure you have a stable internet connection on all devices. Try opening a web browser to verify connectivity.",
      },
      {
        step: "Force refresh the app",
        description: "On desktop: Cmd+R (Mac) or Ctrl+R (Windows). On mobile: Pull down to refresh or restart the app.",
      },
      {
        step: "Sign out and sign back in",
        description:
          "Go to Settings > Account > Sign Out, then sign back in with your credentials. This resets the sync connection.",
      },
      {
        step: "Clear app cache (mobile)",
        description:
          "On iOS: Offload and reinstall the app. On Android: Go to Settings > Apps > Reflect > Storage > Clear Cache.",
      },
      {
        step: "Check sync settings",
        description: "Verify that sync is enabled in Settings > Sync and that you're not in offline mode.",
      },
    ],
    prevention: "Keep the app updated and avoid making simultaneous edits to the same note on multiple devices.",
  },
  {
    id: "performance",
    title: "Slow Performance",
    icon: Zap,
    severity: "medium",
    description: "App running slowly, laggy typing, or delayed responses",
    symptoms: [
      "Typing lag or delayed character input",
      "Slow app startup or loading times",
      "Sluggish navigation between notes",
      "Search taking too long to return results",
    ],
    solutions: [
      {
        step: "Restart the application",
        description:
          "Close Reflect completely and reopen it. This clears temporary memory usage and can resolve performance issues.",
      },
      {
        step: "Check available storage",
        description:
          "Ensure you have at least 1GB of free storage on your device. Low storage can significantly impact performance.",
      },
      {
        step: "Close other applications",
        description: "Close unnecessary apps running in the background to free up system resources for Reflect.",
      },
      {
        step: "Update the app",
        description:
          "Make sure you're running the latest version of Reflect, as performance improvements are regularly released.",
      },
      {
        step: "Reduce note complexity",
        description:
          "Very large notes (>10,000 words) or notes with many images can slow performance. Consider breaking them into smaller notes.",
      },
    ],
    prevention: "Regularly update the app, maintain adequate free storage, and avoid creating extremely large notes.",
  },
  {
    id: "login-issues",
    title: "Login & Authentication",
    icon: Shield,
    severity: "high",
    description: "Unable to sign in or authentication errors",
    symptoms: [
      "Invalid credentials error despite correct password",
      "Two-factor authentication not working",
      "Account locked or suspended messages",
      "Email verification issues",
    ],
    solutions: [
      {
        step: "Reset your password",
        description:
          'Click "Forgot Password" on the login screen and follow the email instructions to reset your password.',
      },
      {
        step: "Check your email for verification",
        description:
          "Look for verification emails in your inbox and spam folder. Click the verification link if you haven't already.",
      },
      {
        step: "Verify two-factor authentication",
        description:
          "Ensure your authenticator app is synced correctly. If using SMS, check that your phone number is correct in account settings.",
      },
      {
        step: "Clear browser cache (web app)",
        description: "Clear your browser's cache and cookies for reflect.app, then try logging in again.",
      },
      {
        step: "Try a different device or browser",
        description: "Test logging in from a different device or browser to isolate the issue.",
      },
    ],
    prevention: "Keep your email address updated and ensure your two-factor authentication method is accessible.",
  },
  {
    id: "mobile-issues",
    title: "Mobile App Problems",
    icon: Smartphone,
    severity: "medium",
    description: "Issues specific to iOS and Android mobile apps",
    symptoms: [
      "App crashing on startup or during use",
      "Keyboard not appearing or behaving oddly",
      "Push notifications not working",
      "App not updating in background",
    ],
    solutions: [
      {
        step: "Force close and restart the app",
        description:
          "Double-tap home button (iOS) or use recent apps (Android) to force close Reflect, then reopen it.",
      },
      {
        step: "Restart your device",
        description: "A simple device restart can resolve many mobile app issues by clearing system-level problems.",
      },
      {
        step: "Update the app",
        description: "Check the App Store (iOS) or Google Play Store (Android) for available updates to Reflect.",
      },
      {
        step: "Check notification permissions",
        description: "Go to device Settings > Notifications > Reflect and ensure notifications are enabled.",
      },
      {
        step: "Reinstall the app",
        description: "Delete and reinstall Reflect from the app store. Your data will sync back when you log in.",
      },
    ],
    prevention: "Keep your mobile OS and the Reflect app updated to the latest versions.",
  },
  {
    id: "search-issues",
    title: "Search Not Working",
    icon: Monitor,
    severity: "medium",
    description: "Search functionality not returning expected results",
    symptoms: [
      "Search returning no results for known content",
      "Search results missing recent notes",
      "Search taking too long to complete",
      "Partial or incomplete search results",
    ],
    solutions: [
      {
        step: "Rebuild search index",
        description:
          "Go to Settings > Advanced > Rebuild Search Index. This recreates the search database and can fix most search issues.",
      },
      {
        step: "Check search syntax",
        description:
          "Use simple keywords instead of complex phrases. Try searching for individual words that you know exist in your notes.",
      },
      {
        step: "Wait for sync completion",
        description:
          "If you recently added notes, wait for sync to complete before searching. New content needs to be indexed first.",
      },
      {
        step: "Clear app cache",
        description:
          "Clear the app cache to remove corrupted search data, then let the search index rebuild automatically.",
      },
      {
        step: "Check note visibility",
        description:
          "Ensure the notes you're searching for aren't in a different workspace or marked as private/archived.",
      },
    ],
    prevention: "Allow sync to complete after making changes and avoid searching immediately after creating new notes.",
  },
]

const troubleshootingSteps = [
  {
    title: "Basic Troubleshooting",
    steps: [
      "Restart the Reflect application",
      "Check your internet connection",
      "Update to the latest version",
      "Sign out and sign back in",
      "Clear app cache/data",
    ],
  },
  {
    title: "Advanced Solutions",
    steps: [
      "Rebuild search index",
      "Reset sync settings",
      "Check device storage space",
      "Disable browser extensions",
      "Contact support with logs",
    ],
  },
]

export default function CommonIssuesPage() {
  return (
    <Card title="Common Issues & Solutions">
      <CardContent>
        <p className="text-gray-300">
          Quick solutions to the most frequently encountered problems with Reflect. Follow these step-by-step guides to resolve issues quickly.
        </p>
      </CardContent>
      <div className="space-y-8">
        {/* Quick Troubleshooting */}
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Info className="w-5 h-5 text-blue-400" />
              Quick Troubleshooting Guide
            </CardTitle>
            <CardDescription className="text-gray-300">
              Try these basic steps first - they resolve 80% of common issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                <TabsTrigger value="basic" className="data-[state=active]:bg-purple-600">
                  Basic Steps
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-purple-600">
                  Advanced
                </TabsTrigger>
              </TabsList>
              {troubleshootingSteps.map((section, index) => (
                <TabsContent key={index} value={index === 0 ? "basic" : "advanced"} className="mt-4">
                  <div className="space-y-3">
                    {section.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Common Issues</h2>
          <div className="space-y-6">
            {commonIssues.map((issue) => {
              const Icon = issue.icon
              return (
                <Card key={issue.id} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-purple-400" />
                        <div>
                          <CardTitle className="text-white">{issue.title}</CardTitle>
                          <CardDescription className="text-gray-300 mt-1">{issue.description}</CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant={issue.severity === "high" ? "destructive" : "secondary"}
                        className={
                          issue.severity === "high" ? "bg-red-600/20 text-red-300" : "bg-yellow-600/20 text-yellow-300"
                        }
                      >
                        {issue.severity === "high" ? "High Priority" : "Medium Priority"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Symptoms */}
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        Common Symptoms
                      </h4>
                      <ul className="space-y-2">
                        {issue.symptoms.map((symptom, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Step-by-Step Solutions
                      </h4>
                      <div className="space-y-4">
                        {issue.solutions.map((solution, index) => (
                          <div key={index} className="border border-gray-700 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="space-y-2">
                                <h5 className="font-medium text-white">{solution.step}</h5>
                                <p className="text-gray-300 text-sm">{solution.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prevention */}
                    <Alert className="border-purple-500/20 bg-purple-900/20">
                      <AlertTriangle className="h-4 w-4 text-purple-400" />
                      <AlertDescription className="text-purple-200">
                        <strong>Prevention:</strong> {issue.prevention}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* System Status */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Wifi className="w-5 h-5 text-green-400" />
              System Status
            </CardTitle>
            <CardDescription className="text-gray-300">Current status of Reflect services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { service: "Reflect Web App", status: "operational" },
                { service: "Mobile Apps", status: "operational" },
                { service: "Sync Services", status: "operational" },
                { service: "AI Assistant", status: "operational" },
                { service: "API Services", status: "operational" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">{item.service}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-green-400 text-sm capitalize">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View Detailed Status Page
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <CardContent className="text-center py-8">
            <HardDrive className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Still experiencing issues?</h3>
            <p className="text-gray-300 mb-6">
              If these solutions don't resolve your problem, our support team is ready to provide personalized
              assistance.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">Contact Support</Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Report a Bug
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  )
}
export const metadata = {
  title: "Common Issues & Solutions | Reflect",
  description: "Quick solutions to the most frequently encountered problems with Reflect. Follow these step-by-step guides to resolve issues quickly.",
}
export const dynamic = "force-dynamic" // Ensure this page is always fresh
export const revalidate = 0 // Disable caching for this page
export const fetchCache = "force-no-store" // Disable fetch caching for this page
export const runtime = "edge" // Use edge runtime for better performance
export const preferredRegion = "auto" // Automatically select the best region for this page
export const alt = "Common Issues & Solutions | Reflect"
export const openGraph = {
  title: "Common Issues & Solutions | Reflect",
  description: "Quick solutions to the most frequently encountered problems with Reflect. Follow these step-by-step guides to resolve issues quickly.",
  url: "https://reflect.app/docs/troubleshooting/common-issues",
  siteName: "Reflect",
    images: [
      {
        url: "https://reflect.app/images/og/common-issues.png",
      },
    ],
  }