import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code } from "lucide-react"
import { ExternalLink, Zap, Cloud, FileText, Calendar, MessageSquare, GitBranch } from "lucide-react"

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Notion",
      description: "Sync your notes and databases with Notion workspaces",
      category: "Productivity",
      status: "Available",
      icon: <FileText className="h-6 w-6" />,
      features: ["Two-way sync", "Database import", "Page templates"],
      setup: "Connect via OAuth and select workspaces to sync",
    },
    {
      name: "Obsidian",
      description: "Import your Obsidian vault and maintain graph connections",
      category: "Note-taking",
      status: "Available",
      icon: <GitBranch className="h-6 w-6" />,
      features: ["Vault import", "Link preservation", "Plugin compatibility"],
      setup: "Upload vault folder or connect via file system",
    },
    {
      name: "Google Drive",
      description: "Access and sync documents from Google Drive",
      category: "Cloud Storage",
      status: "Available",
      icon: <Cloud className="h-6 w-6" />,
      features: ["Document sync", "Real-time collaboration", "Version history"],
      setup: "Authenticate with Google and select folders",
    },
    {
      name: "Slack",
      description: "Share insights and collaborate with team members",
      category: "Communication",
      status: "Beta",
      icon: <MessageSquare className="h-6 w-6" />,
      features: ["Message sharing", "Channel integration", "Bot commands"],
      setup: "Install Slack app and configure channels",
    },
    {
      name: "Zapier",
      description: "Automate workflows with 5000+ apps",
      category: "Automation",
      status: "Available",
      icon: <Zap className="h-6 w-6" />,
      features: ["Trigger automation", "Data transformation", "Multi-step workflows"],
      setup: "Create Zapier account and configure triggers",
    },
    {
      name: "Calendar Apps",
      description: "Sync with Google Calendar, Outlook, and Apple Calendar",
      category: "Productivity",
      status: "Available",
      icon: <Calendar className="h-6 w-6" />,
      features: ["Event sync", "Meeting notes", "Schedule integration"],
      setup: "Connect calendar accounts via OAuth",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Beta":
        return "bg-yellow-100 text-yellow-800"
      case "Coming Soon":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Integrations</h1>
        <p className="text-xl text-muted-foreground">
          Connect ReflectSaaS with your favorite tools and services to create a seamless workflow.
        </p>
      </div>

      <Alert>
        <Zap className="h-4 w-4" />
        <AlertDescription>
          New integrations are added regularly. Request specific integrations through our{" "}
          <a href="/support" className="text-blue-600 hover:underline">
            support channel
          </a>
          .
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="note-taking">Note-taking</TabsTrigger>
          <TabsTrigger value="cloud">Cloud Storage</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">{integration.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <Badge className={getStatusColor(integration.status)}>{integration.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">{integration.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {integration.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Setup</h4>
                    <p className="text-sm text-muted-foreground">{integration.setup}</p>
                  </div>
                  <Button className="w-full" variant={integration.status === "Available" ? "default" : "secondary"}>
                    {integration.status === "Available" ? "Configure" : "Learn More"}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="productivity" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {integrations
              .filter((i) => i.category === "Productivity")
              .map((integration, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">{integration.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge className={getStatusColor(integration.status)}>{integration.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{integration.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {integration.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full">
                      Configure
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="mr-2 h-5 w-5" />
            Custom Integrations
          </CardTitle>
          <CardDescription>Build your own integrations using our API and webhooks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Webhooks</h4>
              <p className="text-sm text-muted-foreground">
                Receive real-time notifications when notes are created, updated, or connected.
              </p>
              <Button variant="outline" size="sm">
                Configure Webhooks
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">REST API</h4>
              <p className="text-sm text-muted-foreground">
                Full programmatic access to your notes, connections, and insights.
              </p>
              <Button variant="outline" size="sm">
                View API Docs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration Support</CardTitle>
          <CardDescription>Need help setting up integrations or have questions?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Integration Guides
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
