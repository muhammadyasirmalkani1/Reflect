import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Terminal, Download } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Download className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Installation Guide</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Get ReflectSaaS up and running in minutes with our comprehensive installation guide.
        </p>
      </div>

      <Tabs defaultValue="quick" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quick">Quick Start</TabsTrigger>
          <TabsTrigger value="manual">Manual Setup</TabsTrigger>
          <TabsTrigger value="docker">Docker</TabsTrigger>
        </TabsList>

        <TabsContent value="quick" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Quick Installation
              </CardTitle>
              <CardDescription>The fastest way to get started with ReflectSaaS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    1
                  </Badge>
                  <div>
                    <h4 className="font-medium">Clone the repository</h4>
                    <div className="bg-muted p-3 rounded-md mt-2 font-mono text-sm">
                      git clone https://github.com/your-org/reflectsaas.git
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    2
                  </Badge>
                  <div>
                    <h4 className="font-medium">Install dependencies</h4>
                    <div className="bg-muted p-3 rounded-md mt-2 font-mono text-sm">cd reflectsaas && npm install</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    3
                  </Badge>
                  <div>
                    <h4 className="font-medium">Set up environment variables</h4>
                    <div className="bg-muted p-3 rounded-md mt-2 font-mono text-sm">cp .env.example .env.local</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    4
                  </Badge>
                  <div>
                    <h4 className="font-medium">Start the development server</h4>
                    <div className="bg-muted p-3 rounded-md mt-2 font-mono text-sm">npm run dev</div>
                  </div>
                </div>
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Your ReflectSaaS instance should now be running at http://localhost:3000
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Manual Setup</CardTitle>
              <CardDescription>Step-by-step manual installation for custom configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Prerequisites</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Node.js 18.0 or higher
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    MongoDB 5.0 or higher
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Redis 6.0 or higher
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Environment Configuration</h3>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm">
                    {`# Database
MONGODB_URI=mongodb://localhost:27017/reflectsaas
REDIS_URL=redis://localhost:6379

# Server
PORT=3000
CLIENT_URL=http://localhost:3000

# Socket.IO
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docker" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Docker Installation</CardTitle>
              <CardDescription>Run ReflectSaaS using Docker containers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`# Using Docker Compose
docker-compose up -d

# Or build manually
docker build -t reflectsaas .
docker run -p 3000:3000 reflectsaas`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
