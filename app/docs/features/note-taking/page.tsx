import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PenTool, Hash, Link, Code } from "lucide-react"

export default function NoteTakingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PenTool className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Note Taking</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Master the art of digital note-taking with ReflectSaaS's powerful and intuitive features.
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="formatting">Formatting</TabsTrigger>
          <TabsTrigger value="linking">Linking</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Creating Your First Note</CardTitle>
              <CardDescription>Learn the fundamentals of note creation and basic editing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Quick Note Creation</h4>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm">
                    Press <Badge variant="outline">Ctrl + N</Badge> to create a new note instantly
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Note Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Title: Automatically generated from first line or set manually</li>
                  <li>• Body: Rich text content with markdown support</li>
                  <li>• Metadata: Tags, creation date, last modified</li>
                  <li>• Connections: Linked notes and backlinks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formatting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Markdown Formatting
              </CardTitle>
              <CardDescription>Use markdown syntax for rich text formatting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Text Formatting</h4>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    <div>**Bold text**</div>
                    <div>*Italic text*</div>
                    <div>~~Strikethrough~~</div>
                    <div>`Inline code`</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Structure</h4>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    <div># Heading 1</div>
                    <div>## Heading 2</div>
                    <div>- List item</div>
                    <div>1. Numbered item</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="linking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                Note Linking
              </CardTitle>
              <CardDescription>Connect your thoughts with bidirectional links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Creating Links</h4>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm font-mono">[[Note Title]]</div>
                  <p className="text-sm mt-2">
                    Creates a link to another note. If the note doesn't exist, it will be created when clicked.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Link Types</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-md">
                    <h5 className="font-medium text-sm">Direct Links</h5>
                    <p className="text-xs text-muted-foreground">[[Target Note]]</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <h5 className="font-medium text-sm">Alias Links</h5>
                    <p className="text-xs text-muted-foreground">[[Target Note|Display Text]]</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Tags and Organization
              </CardTitle>
              <CardDescription>Keep your notes organized with tags and folders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Using Tags</h4>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm font-mono">#productivity #ideas #project-alpha</div>
                  <p className="text-sm mt-2">Add tags anywhere in your note to categorize and find content easily.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Nested Tags</h4>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm font-mono">#project/alpha #project/beta</div>
                  <p className="text-sm mt-2">Create hierarchical tag structures for better organization.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
