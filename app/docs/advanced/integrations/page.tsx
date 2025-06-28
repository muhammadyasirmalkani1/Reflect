"Client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plug, Zap, Calendar, Mail, FileText, Database, Cloud, Settings } from "lucide-react"

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      title: "Productivity & Task Management",
      icon: Zap,
      integrations: [
        {
          name: "Notion",
          description: "Sync notes and databases between Reflect and Notion",
          status: "Available",
          features: ["Two-way sync", "Database integration", "Page embedding"],
          setup: "Connect via API key in Settings > Integrations",
        },
        {
          name: "Todoist",
          description: "Create tasks from notes and sync project information",
          status: "Available",
          features: ["Task creation", "Project sync", "Due date mapping"],
          setup: "Authenticate with Todoist account",
        },
        {
          name: "Trello",
          description: "Convert notes to cards and sync board information",
          status: "Available",
          features: ["Card creation", "Board sync", "Checklist integration"],
          setup: "Connect via Trello Power-Up",
        },
        {
          name: "Asana",
          description: "Sync tasks and project notes with Asana",
          status: "Beta",
          features: ["Task sync", "Project integration", "Team collaboration"],
          setup: "Beta access required",
        },
      ],
    },
    {
      title: "Calendar & Scheduling",
      icon: Calendar,
      integrations: [
        {
          name: "Google Calendar",
          description: "Sync events and create meeting notes automatically",
          status: "Available",
          features: ["Event sync", "Auto meeting notes", "Calendar embedding"],
          setup: "OAuth authentication with Google",
        },
        {
          name: "Outlook Calendar",
          description: "Microsoft Calendar integration for seamless scheduling",
          status: "Available",
          features: ["Event sync", "Meeting integration", "Teams compatibility"],
          setup: "Microsoft account authentication",
        },
        {
          name: "Calendly",
          description: "Auto-generate notes for scheduled meetings",
          status: "Available",
          features: ["Meeting prep notes", "Attendee information", "Follow-up templates"],
          setup: "Calendly webhook configuration",
        },
      ],
    },
    {
      title: "Communication",
      icon: Mail,
      integrations: [
        {
          name: "Slack",
          description: "Share notes and get notifications in Slack channels",
          status: "Available",
          features: ["Note sharing", "Channel notifications", "Search integration"],
          setup: "Install Reflect Slack app",
        },
        {
          name: "Discord",
          description: "Share research and collaborate with Discord communities",
          status: "Available",
          features: ["Note sharing", "Bot commands", "Server integration"],
          setup: "Add Reflect bot to server",
        },
        {
          name: "Microsoft Teams",
          description: "Collaborate on notes within Teams channels",
          status: "Available",
          features: ["Channel integration", "File sharing", "Meeting notes"],
          setup: "Install Teams app from marketplace",
        },
        {
          name: "Gmail",
          description: "Save emails as notes and create email templates",
          status: "Beta",
          features: ["Email to note", "Template integration", "Contact sync"],
          setup: "Gmail API authentication",
        },
      ],
    },
    {
      title: "Development & Documentation",
      icon: FileText,
      integrations: [
        {
          name: "GitHub",
          description: "Link notes to repositories and sync documentation",
          status: "Available",
          features: ["Repo linking", "Issue integration", "Documentation sync"],
          setup: "GitHub OAuth authentication",
        },
        {
          name: "GitLab",
          description: "Integrate with GitLab projects and wikis",
          status: "Available",
          features: ["Project integration", "Wiki sync", "Issue tracking"],
          setup: "GitLab personal access token",
        },
        {
          name: "Confluence",
          description: "Sync documentation between Reflect and Confluence",
          status: "Available",
          features: ["Page sync", "Space integration", "Version control"],
          setup: "Atlassian account connection",
        },
        {
          name: "Linear",
          description: "Connect notes to Linear issues and projects",
          status: "Beta",
          features: ["Issue linking", "Project sync", "Status updates"],
          setup: "Linear API key required",
        },
      ],
    },
    {
      title: "Cloud Storage",
      icon: Cloud,
      integrations: [
        {
          name: "Google Drive",
          description: "Sync files and embed documents in notes",
          status: "Available",
          features: ["File sync", "Document embedding", "Folder integration"],
          setup: "Google Drive API authentication",
        },
        {
          name: "Dropbox",
          description: "Access and embed Dropbox files in your notes",
          status: "Available",
          features: ["File access", "Link sharing", "Folder sync"],
          setup: "Dropbox app authorization",
        },
        {
          name: "OneDrive",
          description: "Microsoft OneDrive integration for file management",
          status: "Available",
          features: ["File sync", "Office integration", "SharePoint compatibility"],
          setup: "Microsoft account authentication",
        },
        {
          name: "iCloud",
          description: "Sync with iCloud Drive for Apple ecosystem integration",
          status: "Coming Soon",
          features: ["File sync", "iOS integration", "macOS compatibility"],
          setup: "Apple ID authentication",
        },
      ],
    },
    {
      title: "Research & Knowledge",
      icon: Database,
      integrations: [
        {
          name: "Zotero",
          description: "Import research papers and citations",
          status: "Available",
          features: ["Citation import", "PDF annotation", "Bibliography generation"],
          setup: "Zotero API key configuration",
        },
        {
          name: "Mendeley",
          description: "Academic reference management integration",
          status: "Available",
          features: ["Reference import", "PDF sync", "Collaboration"],
          setup: "Mendeley account connection",
        },
        {
          name: "Readwise",
          description: "Import highlights from books and articles",
          status: "Available",
          features: ["Highlight import", "Book sync", "Review system"],
          setup: "Readwise API token",
        },
        {
          name: "Pocket",
          description: "Save and organize articles for later reading",
          status: "Beta",
          features: ["Article import", "Tag sync", "Reading list"],
          setup: "Pocket account authentication",
        },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Coming Soon":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Plug className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold">Integrations</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Connect Reflect with your favorite tools and services to create a seamless workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">50+ Integrations</CardTitle>
            <CardDescription>Connect with popular productivity, development, and research tools</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Two-way Sync</CardTitle>
            <CardDescription>Keep your data synchronized across all your connected applications</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Custom Webhooks</CardTitle>
            <CardDescription>Build custom integrations with our webhook API and automation tools</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-8">
        {integrationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {category.integrations.map((integration, integrationIndex) => (
                <Card key={integrationIndex}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {integration.name}
                          <Badge className={getStatusColor(integration.status)}>{integration.status}</Badge>
                        </CardTitle>
                        <CardDescription className="mt-1">{integration.description}</CardDescription>
                      </div>
                      <Button
                        size="sm"
                        disabled={integration.status === "Coming Soon"}
                        variant={integration.status === "Available" ? "default" : "outline"}
                      >
                        {integration.status === "Available"
                          ? "Connect"
                          : integration.status === "Beta"
                            ? "Join Beta"
                            : "Coming Soon"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Features</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {integration.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Setup</h4>
                        <p className="text-sm text-muted-foreground">{integration.setup}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Custom Integrations
            </CardTitle>
            <CardDescription>Build your own integrations with our API and webhook system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Webhook API</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Receive real-time notifications when notes are created, updated, or deleted.
              </p>
              <div className="bg-muted rounded-lg p-3">
                <code className="text-xs">
                  {`POST https://api.reflect.app/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["note.created", "note.updated"],
  "secret": "your-webhook-secret"
}`}
                </code>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">REST API</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Full CRUD operations for notes, tags, and connections.
              </p>
              <div className="bg-muted rounded-lg p-3">
                <code className="text-xs">
                  {`GET /api/v1/notes
POST /api/v1/notes
PUT /api/v1/notes/:id
DELETE /api/v1/notes/:id`}
                </code>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm">View API Docs</Button>
              <Button size="sm" variant="outline">
                Get API Key
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Marketplace</CardTitle>
            <CardDescription>Discover community-built integrations and share your own</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Popular Community Integrations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Obsidian Vault Sync</li>
                  <li>• Roam Research Import</li>
                  <li>• Anki Flashcard Generator</li>
                  <li>• Spotify Playlist Notes</li>
                  <li>• Weather Journal Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Submit Your Integration</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Built something cool? Share it with the community and get featured.
                </p>
                <Button size="sm" variant="outline">
                  Submit Integration
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Need Help?</h3>
        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
          Having trouble setting up an integration? Our support team is here to help you get connected.
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Contact Support
          </Button>
          <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
            View Setup Guides
          </Button>
        </div>
      </div>
    </div>
  )
}
