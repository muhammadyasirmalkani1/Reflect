"Client";
import React from "react";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Project Management | Reflect Documentation",
  description:
    "Learn how to use Reflect for effective project management, team collaboration, and workflow optimization",
};

export default function ProjectManagementPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Project Management with Reflect
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Transform your project management workflow with Reflect's
                  powerful features for planning, tracking, and collaborating on
                  projects of any size.
                </p>

                {/* Rating System */}
                <div className="mb-6">
                  contentId="project-management-guide"
                  contentType="documentation" averageRating={4.7}
                  totalRatings={156}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Workflow Optimization</Badge>
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Kanban</Badge>
                </div>
              </div>

              {/* Quick Start */}
              <Card className="mb-8 bg-purple-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="h-5 w-5 text-purple-400" />
                    Quick Start Guide
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Get your first project up and running in under 5 minutes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Create Project
                        </h4>
                        <p className="text-sm text-gray-400">
                          Set up your project structure and goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Add Team</h4>
                        <p className="text-sm text-gray-400">
                          Invite team members and assign roles
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Start Tracking
                        </h4>
                        <p className="text-sm text-gray-400">
                          Begin managing tasks and progress
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="setup">Setup</TabsTrigger>
                  <TabsTrigger value="workflows">Workflows</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Why Use Reflect for Project Management?
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Reflect combines the power of note-taking with advanced
                      project management features, creating a unified workspace
                      where ideas, plans, and execution come together
                      seamlessly.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <Users className="h-5 w-5 text-blue-400" />
                            Team Collaboration
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Real-time collaboration
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Role-based permissions
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Team communication
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Shared workspaces
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <BarChart3 className="h-5 w-5 text-green-400" />
                            Progress Tracking
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Visual progress indicators
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Milestone tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Time tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              Performance analytics
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="setup" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Setting Up Your First Project
                    </h2>

                    <div className="space-y-6">
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white">
                            1. Project Configuration
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-white mb-2">
                              Basic Information
                            </h4>
                            <ul className="space-y-1 text-gray-300 ml-4">
                              <li>• Project name and description</li>
                              <li>• Project category and type</li>
                              <li>• Start and end dates</li>
                              <li>• Budget and resource allocation</li>
                            </ul>
                          </div>

                          <div className="bg-gray-900/50 p-4 rounded-lg">
                            <h5 className="font-medium text-white mb-2">
                              Example Project Setup
                            </h5>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                              {`Project Name: "Mobile App Redesign"
Category: Software Development
Timeline: 3 months
Budget: $50,000
Team Size: 8 members`}
                            </pre>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white">
                            2. Team Setup
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                Team Roles
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-purple-400">
                                    Project Manager
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    Full project access and control
                                  </p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-blue-400">
                                    Team Lead
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    Manage team tasks and progress
                                  </p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400">
                                    Developer
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    Execute tasks and update progress
                                  </p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-yellow-400">
                                    Stakeholder
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    View-only access to reports
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="workflows" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Project Management Workflows
                    </h2>

                    <div className="grid gap-6">
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <Target className="h-5 w-5 text-purple-400" />
                            Agile/Scrum Workflow
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-gray-300">
                              Perfect for software development and iterative
                              projects with changing requirements.
                            </p>

                            <div className="grid md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="bg-purple-500/20 rounded-lg p-4 mb-2">
                                  <h4 className="font-semibold text-white">
                                    Sprint Planning
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-400">
                                  Define sprint goals and select backlog items
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="bg-blue-500/20 rounded-lg p-4 mb-2">
                                  <h4 className="font-semibold text-white">
                                    Daily Standups
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-400">
                                  Track progress and identify blockers
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="bg-green-500/20 rounded-lg p-4 mb-2">
                                  <h4 className="font-semibold text-white">
                                    Sprint Review
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-400">
                                  Demo completed work to stakeholders
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="bg-yellow-500/20 rounded-lg p-4 mb-2">
                                  <h4 className="font-semibold text-white">
                                    Retrospective
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-400">
                                  Reflect and improve team processes
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <Calendar className="h-5 w-5 text-blue-400" />
                            Kanban Workflow
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-gray-300">
                              Ideal for continuous delivery and workflow
                              optimization with visual task management.
                            </p>

                            <div className="grid md:grid-cols-5 gap-2">
                              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                                <h4 className="font-semibold text-white text-sm">
                                  Backlog
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  Ideas & requests
                                </p>
                              </div>
                              <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                                <h4 className="font-semibold text-white text-sm">
                                  To Do
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  Ready to start
                                </p>
                              </div>
                              <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                                <h4 className="font-semibold text-white text-sm">
                                  In Progress
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  Active work
                                </p>
                              </div>
                              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                                <h4 className="font-semibold text-white text-sm">
                                  Review
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  Quality check
                                </p>
                              </div>
                              <div className="bg-green-500/20 rounded-lg p-3 text-center">
                                <h4 className="font-semibold text-white text-sm">
                                  Done
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  Completed
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Advanced Features
                    </h2>

                    <div className="space-y-6">
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                            Analytics & Reporting
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-white mb-3">
                                Key Metrics
                              </h4>
                              <ul className="space-y-2 text-gray-300">
                                <li>• Velocity tracking</li>
                                <li>• Burndown charts</li>
                                <li>• Cycle time analysis</li>
                                <li>• Team productivity metrics</li>
                                <li>• Budget vs. actual spending</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-3">
                                Custom Reports
                              </h4>
                              <ul className="space-y-2 text-gray-300">
                                <li>• Executive dashboards</li>
                                <li>• Team performance reports</li>
                                <li>• Project health summaries</li>
                                <li>• Resource utilization</li>
                                <li>• Risk assessment reports</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-white">
                            <Settings className="h-5 w-5 text-blue-400" />
                            Integrations
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                Development Tools
                              </h4>
                              <ul className="space-y-1 text-gray-300 text-sm">
                                <li>• GitHub/GitLab</li>
                                <li>• Jira</li>
                                <li>• Jenkins</li>
                                <li>• Docker</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                Communication
                              </h4>
                              <ul className="space-y-1 text-gray-300 text-sm">
                                <li>• Slack</li>
                                <li>• Microsoft Teams</li>
                                <li>• Discord</li>
                                <li>• Zoom</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                Business Tools
                              </h4>
                              <ul className="space-y-1 text-gray-300 text-sm">
                                <li>• Google Workspace</li>
                                <li>• Microsoft 365</li>
                                <li>• Salesforce</li>
                                <li>• HubSpot</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Next Steps */}
              <Card className="mb-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Take the next step in your project management journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Create Your First Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    >
                      Browse Templates
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    >
                      Watch Tutorial
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <div className="mt-12">
                contentId="project-management-guide" contentType="documentation"
                title="Discussion & Questions"
              </div>
            </div>
          </div>

          {/* Community Sidebar */}
          <div className="lg:w-80 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
