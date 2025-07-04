import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, ArrowRight, Eye, GitBranch } from "lucide-react"

export default function ConnectionsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Network className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Connections & Graph View</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Visualize and navigate the relationships between your notes to discover new insights and patterns.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Understanding Connections
            </CardTitle>
            <CardDescription>How ReflectSaaS builds and maintains relationships between your notes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium">Forward Links</h4>
                <p className="text-sm text-muted-foreground">
                  Links you explicitly create using [[Note Title]] syntax. These represent intentional connections
                  you've made.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm font-mono">This relates to [[Project Planning]]</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Backlinks</h4>
                <p className="text-sm text-muted-foreground">
                  Automatically generated links showing which notes reference the current note.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <div className="font-medium">Referenced by:</div>
                  <div>• Meeting Notes - 2024-01-15</div>
                  <div>• Weekly Review</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Graph Visualization
            </CardTitle>
            <CardDescription>Explore your knowledge network visually</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">Local Graph</Badge>
                <ArrowRight className="h-4 w-4" />
                <span className="text-sm">Shows connections for the current note</span>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">Global Graph</Badge>
                <ArrowRight className="h-4 w-4" />
                <span className="text-sm">Displays your entire knowledge network</span>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">Filtered View</Badge>
                <ArrowRight className="h-4 w-4" />
                <span className="text-sm">Focus on specific tags or topics</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Graph Controls</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 bg-muted rounded text-center">
                  <div className="font-mono">Zoom</div>
                  <div className="text-xs text-muted-foreground">Mouse wheel</div>
                </div>
                <div className="p-2 bg-muted rounded text-center">
                  <div className="font-mono">Pan</div>
                  <div className="text-xs text-muted-foreground">Click + drag</div>
                </div>
                <div className="p-2 bg-muted rounded text-center">
                  <div className="font-mono">Select</div>
                  <div className="text-xs text-muted-foreground">Click node</div>
                </div>
                <div className="p-2 bg-muted rounded text-center">
                  <div className="font-mono">Filter</div>
                  <div className="text-xs text-muted-foreground">Right panel</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connection Strategies</CardTitle>
            <CardDescription>Best practices for building meaningful connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">1. Start with Natural Links</h4>
                <p className="text-sm text-muted-foreground">
                  When writing, naturally reference other notes that come to mind. Don't force connections.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">2. Use MOCs (Maps of Content)</h4>
                <p className="text-sm text-muted-foreground">
                  Create index notes that link to related topics, serving as entry points to different areas of
                  knowledge.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">3. Regular Graph Review</h4>
                <p className="text-sm text-muted-foreground">
                  Periodically explore your graph to discover unexpected connections and orphaned notes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">4. Connect Across Time</h4>
                <p className="text-sm text-muted-foreground">
                  Link current thoughts to past notes to see how your thinking has evolved.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
