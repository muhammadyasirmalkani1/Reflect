"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

const userGrowthData = [
  { month: "Jan", users: 1200, active: 980 },
  { month: "Feb", users: 1450, active: 1180 },
  { month: "Mar", users: 1680, active: 1350 },
  { month: "Apr", users: 1920, active: 1580 },
  { month: "May", users: 2180, active: 1820 },
  { month: "Jun", users: 2450, active: 2100 },
]

const revenueData = [
  { month: "Jan", revenue: 12500, subscriptions: 125 },
  { month: "Feb", revenue: 15200, subscriptions: 152 },
  { month: "Mar", revenue: 18900, subscriptions: 189 },
  { month: "Apr", revenue: 22100, subscriptions: 221 },
  { month: "May", revenue: 26800, subscriptions: 268 },
  { month: "Jun", revenue: 31200, subscriptions: 312 },
]

const planDistribution = [
  { name: "Free", value: 65, color: "#8B5CF6" },
  { name: "Pro", value: 28, color: "#A78BFA" },
  { name: "Enterprise", value: 7, color: "#C4B5FD" },
]

const activityData = [
  { time: "00:00", notes: 45, searches: 23, connections: 12 },
  { time: "04:00", notes: 32, searches: 18, connections: 8 },
  { time: "08:00", notes: 128, searches: 67, connections: 34 },
  { time: "12:00", notes: 156, searches: 89, connections: 45 },
  { time: "16:00", notes: 134, searches: 78, connections: 38 },
  { time: "20:00", notes: 98, searches: 56, connections: 28 },
]

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("30d")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [timeRange])

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-purple-900/20 rounded w-1/4 mb-4"></div>
                <div className="h-64 bg-purple-900/20 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Analytics Overview</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[140px] bg-black/30 border-purple-500/30">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="growth" className="space-y-6">
        <TabsList className="bg-black/50 border border-purple-500/20">
          <TabsTrigger value="growth">User Growth</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="usage">Usage Patterns</TabsTrigger>
          <TabsTrigger value="plans">Plan Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="growth">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                User Growth
              </CardTitle>
              <CardDescription>Total and active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stackId="1"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.3}
                    name="Total Users"
                  />
                  <Area
                    type="monotone"
                    dataKey="active"
                    stackId="2"
                    stroke="#A78BFA"
                    fill="#A78BFA"
                    fillOpacity={0.5}
                    name="Active Users"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-400" />
                Revenue Analytics
              </CardTitle>
              <CardDescription>Monthly revenue and subscription growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="revenue" fill="#10B981" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-400" />
                Usage Patterns
              </CardTitle>
              <CardDescription>Daily activity patterns across different features</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="notes" stroke="#8B5CF6" strokeWidth={2} name="Notes Created" />
                  <Line type="monotone" dataKey="searches" stroke="#3B82F6" strokeWidth={2} name="Searches" />
                  <Line
                    type="monotone"
                    dataKey="connections"
                    stroke="#10B981"
                    strokeWidth={2}
                    name="Connections Made"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Plan Distribution
              </CardTitle>
              <CardDescription>Current subscription plan breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={planDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {planDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {planDistribution.map((plan, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-purple-900/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: plan.color }}></div>
                        <span className="text-white font-medium">{plan.name} Plan</span>
                      </div>
                      <span className="text-gray-300">{plan.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
