"use client";

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
import { Separator } from "@/components/ui/separator";
import {
  Code,
  Key,
  Zap,
  Shield,
  Globe,
  Webhook,
  Copy,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/notes",
      description: "Retrieve all notes with optional filtering",
      auth: "Required",
      params: [
        "limit",
        "offset",
        "search",
        "tags",
        "created_after",
        "updated_after",
      ],
      response: {
        data: [
          {
            id: "note_123",
            title: "My Note",
            content: "Note content...",
            tags: ["important", "project"],
            created_at: "2024-01-15T10:30:00Z",
            updated_at: "2024-01-15T14:20:00Z",
          },
        ],
        meta: {
          total: 42,
          page: 1,
          per_page: 20,
          total_pages: 3,
        },
      },
    },
    {
      method: "POST",
      path: "/api/v1/notes",
      description: "Create a new note",
      auth: "Required",
      params: ["title", "content", "tags", "connections", "template_id"],
      response: {
        id: "note_124",
        title: "New Note",
        content: "Fresh content...",
        tags: ["new"],
        created_at: "2024-01-15T15:00:00Z",
      },
    },
    {
      method: "GET",
      path: "/api/v1/notes/:id",
      description: "Retrieve a specific note with full details",
      auth: "Required",
      params: ["include_connections", "include_backlinks", "include_history"],
      response: {
        id: "note_123",
        title: "My Note",
        content: "Detailed content...",
        connections: ["note_456", "note_789"],
        backlinks: ["note_101", "note_102"],
      },
    },
  ];

  const codeExamples = {
    javascript: `// Initialize Reflect API client
import { ReflectAPI } from '@reflect/api';

const reflect = new ReflectAPI('your-api-key');

// Create a new note
const note = await reflect.notes.create({
  title: 'My Project Note',
  content: 'This is my project planning note...',
  tags: ['project', 'planning']
});

// Search notes
const results = await reflect.notes.search({
  query: 'project planning',
  tags: ['project'],
  limit: 10
});

// Create connections between notes
await reflect.connections.create({
  source_id: note.id,
  target_id: 'existing_note_id',
  type: 'relates_to'
});`,
    python: `# Install: pip install reflect-api
from reflect import ReflectAPI

# Initialize client
reflect = ReflectAPI('your-api-key')

# Create a note
note = reflect.notes.create(
    title='Research Note',
    content='My research findings...',
    tags=['research', 'important']
)

# Get all notes with filtering
notes = reflect.notes.list(
    search='research',
    tags=['important'],
    limit=20
)

# Update a note
updated_note = reflect.notes.update(
    note_id='note_123',
    content='Updated research content...'
)`,
    curl: `# Get all notes
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     "https://api.reflect.app/v1/notes?limit=10&tags=project"

# Create a new note
curl -X POST \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     -d '{
       "title": "API Test Note",
       "content": "Created via API",
       "tags": ["api", "test"]
     }' \\
     "https://api.reflect.app/v1/notes"

# Search notes
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     "https://api.reflect.app/v1/search?q=project&type=notes"`,
  };

  const webhookEvents = [
    {
      event: "note.created",
      description: "Triggered when a new note is created",
      payload: "Complete note object with metadata",
    },
    {
      event: "note.updated",
      description: "Triggered when a note is modified",
      payload: "Updated note object with change details",
    },
    {
      event: "note.deleted",
      description: "Triggered when a note is deleted",
      payload: "Note ID and deletion metadata",
    },
    {
      event: "connection.created",
      description: "Triggered when notes are connected",
      payload: "Connection object with source and target",
    },
    {
      event: "tag.created",
      description: "Triggered when a new tag is created",
      payload: "Tag object with usage statistics",
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "POST":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "PUT":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "DELETE":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Code className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold">Reflect API Documentation</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Build powerful integrations with the Reflect API. Access notes,
          connections, search, and more programmatically with our RESTful API.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              REST API
            </CardTitle>
            <CardDescription>Full HTTP API with JSON responses</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Webhook className="h-5 w-5 text-green-600" />
              Webhooks
            </CardTitle>
            <CardDescription>Real-time event notifications</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              Secure
            </CardTitle>
            <CardDescription>API key authentication & HTTPS</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Rate Limited
            </CardTitle>
            <CardDescription>1000 requests/hour per API key</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="getting-started" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="getting-started">Quick Start</TabsTrigger>
          <TabsTrigger value="authentication">Auth</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="sdks">SDKs</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Start Guide
              </CardTitle>
              <CardDescription>
                Get up and running with the Reflect API in minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">1. Get Your API Key</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Generate an API key from your account settings to
                    authenticate your requests.
                  </p>
                  <Button size="sm" className="mb-4">
                    <Key className="h-4 w-4 mr-2" />
                    Generate API Key
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">
                    2. Make Your First Request
                  </h4>
                  <div className="bg-muted rounded-lg p-3 relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                      onClick={() =>
                        copyToClipboard(
                          'curl -H "Authorization: Bearer YOUR_API_KEY" https://api.reflect.app/v1/notes',
                          "first-request"
                        )
                      }
                    >
                      {copiedCode === "first-request" ? (
                        "✓"
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                    <code className="text-sm">
                      {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.reflect.app/v1/notes`}
                    </code>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Base URL & Versioning</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Base URL</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      https://api.reflect.app
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Current Version</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      v1
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Content Type</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      application/json
                    </code>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Response Format</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  All API responses follow a consistent JSON structure:
                </p>
                <div className="bg-muted rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(
                        '{\n  "data": {...},\n  "meta": {\n    "total": 42,\n    "page": 1,\n    "per_page": 20\n  }\n}',
                        "response-format"
                      )
                    }
                  >
                    {copiedCode === "response-format" ? (
                      "✓"
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <code className="text-sm">
                    {`{
  "data": {...},
  "meta": {
    "total": 42,
    "page": 1,
    "per_page": 20
  }
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Authentication
              </CardTitle>
              <CardDescription>
                Secure your API requests with proper authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">API Key Authentication</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Include your API key in the Authorization header of every
                  request:
                </p>
                <div className="bg-muted rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(
                        "Authorization: Bearer YOUR_API_KEY",
                        "auth-header"
                      )
                    }
                  >
                    {copiedCode === "auth-header" ? (
                      "✓"
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <code className="text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">API Key Management</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Generate Keys</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create multiple API keys for different applications
                    </p>
                    <Button size="sm" variant="outline">
                      Manage Keys
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Key Rotation</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Regularly rotate keys for enhanced security
                    </p>
                    <Button size="sm" variant="outline">
                      Rotate Keys
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Rate Limiting</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <ul className="text-sm space-y-1">
                    <li>
                      • <strong>1,000 requests per hour</strong> per API key
                    </li>
                    <li>
                      • <strong>10 requests per second</strong> burst limit
                    </li>
                    <li>• Rate limit headers included in all responses</li>
                    <li>• 429 status code when limits are exceeded</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>
                Complete reference for all available endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge className={getMethodColor(endpoint.method)}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg font-mono">
                          {endpoint.path}
                        </code>
                      </div>
                      <Badge variant="outline">{endpoint.auth}</Badge>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {endpoint.description}
                    </p>

                    {endpoint.params.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Parameters:</h5>
                        <div className="flex flex-wrap gap-2">
                          {endpoint.params.map((param, paramIndex) => (
                            <code
                              key={paramIndex}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {param}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h5 className="font-medium mb-2">Example Response:</h5>
                      <div className="bg-muted rounded-lg p-4 relative">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-6 w-6 p-0"
                          onClick={() =>
                            copyToClipboard(
                              JSON.stringify(endpoint.response, null, 2),
                              `response-${index}`
                            )
                          }
                        >
                          {copiedCode === `response-${index}` ? (
                            "✓"
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                        <code className="text-sm">
                          <pre>
                            {JSON.stringify(endpoint.response, null, 2)}
                          </pre>
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>
                Ready-to-use code examples in multiple languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="bg-muted rounded-lg p-4 relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 h-6 w-6 p-0"
                        onClick={() => copyToClipboard(code, `example-${lang}`)}
                      >
                        {copiedCode === `example-${lang}` ? (
                          "✓"
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                      <code className="text-sm">
                        <pre>{code}</pre>
                      </code>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Webhook Events
              </CardTitle>
              <CardDescription>
                Subscribe to real-time events from your Reflect account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webhookEvents.map((webhook, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {webhook.event}
                      </code>
                      <Badge variant="secondary">Event</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {webhook.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Payload:</strong> {webhook.payload}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Setting Up Webhooks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  1. Create Webhook Endpoint
                </h4>
                <div className="bg-muted rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(
                        'POST /api/v1/webhooks\n{\n  "url": "https://your-app.com/webhook",\n  "events": ["note.created", "note.updated"],\n  "secret": "your-webhook-secret"\n}',
                        "webhook-create"
                      )
                    }
                  >
                    {copiedCode === "webhook-create" ? (
                      "✓"
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <code className="text-sm">
                    {`POST /api/v1/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["note.created", "note.updated"],
  "secret": "your-webhook-secret"
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  2. Verify Webhook Signature
                </h4>
                <div className="bg-muted rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(
                        "const crypto = require('crypto');\n\nfunction verifyWebhook(payload, signature, secret) {\n  const hmac = crypto.createHmac('sha256', secret);\n  const digest = hmac.update(payload).digest('hex');\n  return signature === `sha256=${digest}`;\n}",
                        "webhook-verify"
                      )
                    }
                  >
                    {copiedCode === "webhook-verify" ? (
                      "✓"
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <code className="text-sm">
                    {`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return signature === \`sha256=\${digest}\`;
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Official SDKs</CardTitle>
              <CardDescription>
                Use our official SDKs for faster development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    JavaScript/Node.js
                    <Badge variant="secondary">Official</Badge>
                  </h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">npm install @reflect/api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">
                      {`import { ReflectAPI } from '@reflect/api';

const reflect = new ReflectAPI('YOUR_API_KEY');
const notes = await reflect.notes.list();`}
                    </code>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Documentation
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    Python
                    <Badge variant="secondary">Official</Badge>
                  </h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">pip install reflect-api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">
                      {`from reflect import ReflectAPI

reflect = ReflectAPI('YOUR_API_KEY')
notes = reflect.notes.list()`}
                    </code>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Documentation
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    Go
                    <Badge variant="secondary">Official</Badge>
                  </h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">
                      go get github.com/reflect/go-sdk
                    </code>
                  </div>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">
                      {`import "github.com/reflect/go-sdk"

client := reflect.NewClient("YOUR_API_KEY")
notes, err := client.Notes.List()`}
                    </code>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Documentation
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    Ruby
                    <Badge variant="secondary">Official</Badge>
                  </h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">gem install reflect-api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">
                      {`require 'reflect'

client = Reflect::Client.new('YOUR_API_KEY')
notes = client.notes.list`}
                    </code>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community SDKs</CardTitle>
              <CardDescription>
                Third-party SDKs maintained by the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {["PHP", "C#", "Swift", "Rust", "Java", "Kotlin"].map(
                  (lang) => (
                    <div
                      key={lang}
                      className="text-center p-4 border rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">{lang}</h4>
                      <Badge variant="outline" className="mb-2">
                        Community
                      </Badge>
                      <p className="text-sm text-muted-foreground mb-3">
                        Community maintained SDK
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on GitHub
                      </Button>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Support Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">Need Help with the API?</h3>
        <p className="text-muted-foreground mb-4">
          Join our developer community, check out our guides, or contact our
          support team for assistance.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ExternalLink className="h-4 w-4 mr-2" />
            Join Discord Community
          </Button>
          <Button variant="outline">View API Status</Button>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </div>
  );
}
