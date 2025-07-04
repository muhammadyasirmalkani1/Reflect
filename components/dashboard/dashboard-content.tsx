"use client"

import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, FileText, Search, Users, Settings, LogOut, Plus, TrendingUp, Clock, Star } from "lucide-react"

export default function DashboardContent() {
  const { user, logout } = useAuth()

  const stats = [
    { label: "Total Notes", value: "127", icon: FileText, change: "+12%" },
    { label: "AI Insights", value: "43", icon: Brain, change: "+8%" },
    { label: "Connections", value: "89", icon: Users, change: "+15%" },
    { label: "Searches", value: "234", icon: Search, change: "+23%" },
  ]

  const recentNotes = [
    { title: "Project Planning Meeting", date: "2 hours ago", tags: ["work", "planning"] },
    { title: "Book Notes: Atomic Habits", date: "1 day ago", tags: ["reading", "habits"] },
    { title: "Weekly Reflection", date: "3 days ago", tags: ["reflection", "personal"] },
    { title: "Research: AI in Education", date: "5 days ago", tags: ["research", "ai"] },
  ]

  return (
    <div className="cosmic-bg min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.firstName}!</h1>
            <p className="text-gray-400">Here's what's happening with your knowledge today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-purple-500/20 text-purple-400">
              {user?.plan} Plan
            </Badge>
            <Button
              onClick={logout}
              variant="outline"
              className="border-purple-900/20 text-gray-300 hover:bg-purple-900/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-black/40 border-purple-900/20 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <stat.icon className="h-8 w-8 text-purple-400 mb-2" />
                    <span className="text-green-400 text-xs font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Notes */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Recent Notes</CardTitle>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Note
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNotes.map((note, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-black/20 border border-purple-900/10"
                    >
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{note.title}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400 text-sm flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {note.date}
                          </span>
                          <div className="flex space-x-1">
                            {note.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md mb-6">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Note
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-900/20 text-gray-300 hover:bg-purple-900/10"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search Knowledge
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-900/20 text-gray-300 hover:bg-purple-900/10"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  AI Insights
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-900/20 text-gray-300 hover:bg-purple-900/10"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </CardContent>
            </Card>

            {/* User Profile Card */}
            <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {user?.firstName?.[0]}
                      {user?.lastName?.[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-gray-400 text-sm">{user?.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Plan:</span>
                    <Badge variant="outline" className="border-purple-500/20 text-purple-400">
                      {user?.plan}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Role:</span>
                    <span className="text-white capitalize">{user?.role}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Member since:</span>
                    <span className="text-white">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
