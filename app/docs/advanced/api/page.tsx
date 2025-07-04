import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Key, Shield, Zap, ExternalLink, Book, Terminal, Globe, Lock } from "lucide-react"

export default function APIDocumentationPage() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/notes",
      description: "Retrieve all notes with optional filtering",
      auth: "Required",
      params: ["limit", "offset", "search", "tags"],
    },
    {
      method: "POST",
      path: "/api/v1/notes",
      description: "Create a new note",
      auth: "Required",
      params: ["title", "content", "tags", "connections"],
    },
    {
      method: "GET",
      path: "/api/v1/notes/{id}",
      description: "Retrieve a specific note by ID",
      auth: "Required",
      params: ["include_connections", "include_metadata"],
    },
    {
      method: "PUT",
      path: "/api/v1/notes/{id}",
      description: "Update an existing note",
      auth: "Required",
      params: ["title", "content", "tags", "connections"],
    },
    {
      method: "DELETE",
      path: "/api/v1/notes/{id}",
      description: "Delete a note",
      auth: "Required",
      params: [],
    },
    {
      method: "GET",
      path: "/api/v1/connections",
      description: "Retrieve note connections and graph data",
      auth: "Required",
      params: ["note_id", "depth", "type"],
    },
    {
      method: "POST",
      path: "/api/v1/search",
      description: "Search notes with AI-powered semantic search",
      auth: "Required",
      params: ["query", "limit", "semantic", "filters"],
    },
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-800"
      case "POST":
        return "bg-blue-100 text-blue-800"
      case "PUT":
        return "bg-yellow-100 text-yellow-800"
      case "DELETE":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">API Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference for the ReflectSaaS REST API. Build powerful integrations and automate your workflow.
        </p>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          All API endpoints require authentication. Get your API key from the{" "}
          <a href="/settings/api" className="text-blue-600 hover:underline">
            settings page
          </a>
          .
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Auth</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Base URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">https://api.reflectsaas.com/v1</div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rate Limits</CardTitle>
                <CardDescription>API usage limits per plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Free Plan</span>
                  <span className="text-muted-foreground">100 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Pro Plan</span>
                  <span className="text-muted-foreground">1,000 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Enterprise</span>
                  <span className="text-muted-foreground">10,000 requests/hour</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Format</CardTitle>
                <CardDescription>All responses are in JSON format</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`{
  "success": true,
  "data": {},
  "message": "string"
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="mr-2 h-5 w-5" />
                API Key Authentication
              </CardTitle>
              <CardDescription>Use your API key in the Authorization header for all requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Header Format</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">Authorization: Bearer YOUR_API_KEY</div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Example Request</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>curl -H "Authorization: Bearer sk-..." https://api.reflectsaas.com/v1/notes</div>
                </div>
              </div>

              <Alert>
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  Keep your API key secure. Never expose it in client-side code or public repositories.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Your API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Navigate to Settings → API Keys</li>
                <li>Click "Generate New API Key"</li>
                <li>Give your key a descriptive name</li>
                <li>Copy and store the key securely</li>
                <li>Use the key in your API requests</li>
              </ol>
              <Button>
                <Key className="mr-2 h-4 w-4" />
                Manage API Keys
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-6">
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                    <Badge variant="outline">{endpoint.auth}</Badge>
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {endpoint.params.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Parameters</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create a Note</CardTitle>
              <CardDescription>POST /api/v1/notes</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{`// Request
curl -X POST https://api.reflectsaas.com/v1/notes
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Content-Type: application/json"
  -d '{"title": "My New Note", "content": "This is the note content", "tags": ["productivity", "ideas"]}'

// Response
{
  "success": true,
  "data": {
    "id": "note_123",
    "title": "My New Note",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "message": "Note created successfully"
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Notes</CardTitle>
              <CardDescription>POST /api/v1/search</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{`// Request
curl -X POST https://api.reflectsaas.com/v1/search
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Content-Type: application/json"
  -d '{"query": "productivity tips", "limit": 10, "semantic": true}'

// Response
{
  "success": true,
  "data": {
    "results": [...],
    "total": 25
  },
  "message": "Search completed"
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Webhook Events
              </CardTitle>
              <CardDescription>Receive real-time notifications when events occur in your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">note.created</h4>
                    <Badge variant="secondary">High Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when a new note is created</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">note.updated</h4>
                    <Badge variant="secondary">High Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when a note is modified</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">note.deleted</h4>
                    <Badge variant="outline">Medium Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when a note is permanently deleted</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">connection.created</h4>
                    <Badge variant="outline">Medium Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when notes are connected</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">connection.removed</h4>
                    <Badge variant="outline">Low Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when note connections are removed</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">search.performed</h4>
                    <Badge variant="secondary">High Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when AI-powered searches are executed</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">ai.suggestion</h4>
                    <Badge variant="outline">Medium Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when AI generates suggestions or insights</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">user.login</h4>
                    <Badge variant="outline">Low Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when a user logs into their account</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">integration.connected</h4>
                    <Badge variant="outline">Low Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when a third-party integration is connected</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">backup.completed</h4>
                    <Badge variant="outline">Low Volume</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Triggered when automated backups are completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Webhook Security
              </CardTitle>
              <CardDescription>Secure webhook implementation with signature verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  All webhooks are signed with HMAC-SHA256. Always verify signatures to ensure authenticity.
                </AlertDescription>
              </Alert>

              <div>
                <h4 className="font-medium mb-3">Signature Verification</h4>
                <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`// Node.js signature verification
const crypto = require('crypto');
const signature  = req.headers['x-reflect-signature'];
const payload    = JSON.stringify(req.body);
const secret     = process.env.WEBHOOK_SECRET;

const expected = crypto
  .createHmac('sha256', secret)
  .update(payload, 'utf8')
  .digest('hex');

const isValid = crypto.timingSafeEqual(
  Buffer.from(signature, 'hex'),
  Buffer.from(expected,  'hex')
);`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-3">Python Signature Verification</h4>
                <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`# Python signature verification
import hmac
import hashlib
import json

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected_signature)`}</code>
                </pre>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Security Headers</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="bg-gray-100 px-2 py-1 rounded">X-Reflect-Signature</code> - HMAC signature
                    </div>
                    <div>
                      <code className="bg-gray-100 px-2 py-1 rounded">X-Reflect-Timestamp</code> - Unix timestamp
                    </div>
                    <div>
                      <code className="bg-gray-100 px-2 py-1 rounded">X-Reflect-Event</code> - Event type
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Best Practices</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Verify timestamp to prevent replay attacks</li>
                    <li>• Use HTTPS endpoints only</li>
                    <li>• Implement idempotency keys</li>
                    <li>• Return 200 status for successful processing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook Configuration</CardTitle>
              <CardDescription>Set up and manage your webhook endpoints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{`{
  "id": "evt_1234567890",
  "event": "note.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "api_version": "v1",
  "data": {
    "note_id": "note_123",
    "title": "New Note",
    "user_id": "user_456",
    "created_at": "2024-01-15T10:30:00Z",
    "tags": ["productivity", "ideas"]
  },
  "previous_attributes": null
}`}</code>
              </pre>

              <div className="grid gap-4 md:grid-cols-2">
                <Button>
                  <Zap className="mr-2 h-4 w-4" />
                  Configure Webhooks
                </Button>
                <Button variant="outline">
                  <Terminal className="mr-2 h-4 w-4" />
                  Test Webhook
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery & Retry Policy</CardTitle>
              <CardDescription>Understanding webhook delivery guarantees and retry behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Delivery Guarantees</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• At-least-once delivery</li>
                    <li>• 30-second timeout per request</li>
                    <li>• Automatic retries on failure</li>
                    <li>• Dead letter queue for failed events</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Retry Schedule</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Immediate retry</li>
                    <li>• 5 minutes later</li>
                    <li>• 30 minutes later</li>
                    <li>• 2 hours later</li>
                    <li>• 12 hours later</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  Webhooks that fail after all retry attempts are stored for 7 days and can be manually replayed from
                  the dashboard.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook Filtering</CardTitle>
              <CardDescription>Configure which events to receive and apply filters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{`{
  "url": "https://your-app.com/webhooks/reflect",
  "events": ["note.created", "note.updated"],
  "filters": {
    "user_id": ["user_123", "user_456"],
    "tags": ["important", "project-alpha"]
  },
  "active": true,
  "secret": "whsec_..."
}`}</code>
              </pre>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">Event Filtering</h5>
                  <p className="text-xs text-muted-foreground">Choose specific events to receive</p>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">User Filtering</h5>
                  <p className="text-xs text-muted-foreground">Filter by specific user IDs</p>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">Tag Filtering</h5>
                  <p className="text-xs text-muted-foreground">Filter by note tags or categories</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting Webhooks</CardTitle>
              <CardDescription>Common issues and debugging tips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-medium text-sm">Webhook Not Receiving Events</h5>
                  <p className="text-sm text-muted-foreground">
                    Check endpoint URL, ensure HTTPS, verify firewall settings
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h5 className="font-medium text-sm">Signature Verification Failing</h5>
                  <p className="text-sm text-muted-foreground">
                    Ensure you're using the correct webhook secret and HMAC-SHA256
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-sm">High Latency or Timeouts</h5>
                  <p className="text-sm text-muted-foreground">
                    Optimize endpoint response time, consider async processing
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-sm">Duplicate Events</h5>
                  <p className="text-sm text-muted-foreground">
                    Implement idempotency using the event ID to handle duplicates
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Terminal className="mr-2 h-4 w-4" />
                  View Webhook Logs
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="mr-2 h-4 w-4" />
                  Test Endpoint
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>SDKs and Libraries</CardTitle>
          <CardDescription>
            Official and community-maintained libraries for popular programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">JavaScript/Node.js</h4>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">npm install @reflectsaas/sdk</div>
              <Button variant="outline" size="sm">
                <Book className="mr-2 h-4 w-4" />
                View Docs
              </Button>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Python</h4>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">pip install reflectsaas</div>
              <Button variant="outline" size="sm">
                <Book className="mr-2 h-4 w-4" />
                View Docs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Get support with API integration and development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Terminal className="mr-2 h-4 w-4" />
              API Playground
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Developer Forum
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
