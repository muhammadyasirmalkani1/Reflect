import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Zap, Calendar } from "lucide-react"

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Search className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Search & Discovery</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Find information quickly with powerful search capabilities and intelligent discovery features.
        </p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Search</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
          <TabsTrigger value="ai">AI Search</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Search</CardTitle>
              <CardDescription>Fast and intuitive search across all your notes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Search Shortcuts</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 border rounded-md">
                    <Badge variant="outline">Ctrl + K</Badge>
                    <span className="text-sm">Open quick search</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-md">
                    <Badge variant="outline">Ctrl + Shift + F</Badge>
                    <span className="text-sm">Advanced search</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Search Types</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Full-text:</strong> Search within note content
                  </li>
                  <li>
                    • <strong>Title search:</strong> Find notes by title
                  </li>
                  <li>
                    • <strong>Tag search:</strong> Filter by tags
                  </li>
                  <li>
                    • <strong>Link search:</strong> Find connected notes
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Search Operators</CardTitle>
              <CardDescription>Use powerful operators for precise search results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Text Operators</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-muted p-2 rounded font-mono">"exact phrase"</div>
                      <div className="bg-muted p-2 rounded font-mono">word1 AND word2</div>
                      <div className="bg-muted p-2 rounded font-mono">word1 OR word2</div>
                      <div className="bg-muted p-2 rounded font-mono">-excluded</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Field Operators</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-muted p-2 rounded font-mono">title:project</div>
                      <div className="bg-muted p-2 rounded font-mono">tag:productivity</div>
                      <div className="bg-muted p-2 rounded font-mono">created:2024-01</div>
                      <div className="bg-muted p-2 rounded font-mono">modified:today</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="filters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Search Filters
              </CardTitle>
              <CardDescription>Narrow down results with powerful filtering options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date Filters
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Today</li>
                    <li>• This week</li>
                    <li>• This month</li>
                    <li>• Custom range</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Content Type</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Notes only</li>
                    <li>• With attachments</li>
                    <li>• With links</li>
                    <li>• Orphaned notes</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Size & Length</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Short notes (&lt;100 words)</li>
                    <li>• Medium notes</li>
                    <li>• Long notes (&gt;1000 words)</li>
                    <li>• Empty notes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI-Powered Search
              </CardTitle>
              <CardDescription>Semantic search that understands context and meaning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Semantic Search</h4>
                <p className="text-sm text-muted-foreground">
                  Search by meaning, not just keywords. Find related concepts even when exact words don't match.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm">
                    <strong>Example:</strong> Search for "productivity tips" and find notes about "getting things done"
                    and "time management"
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Question-Based Search</h4>
                <p className="text-sm text-muted-foreground">
                  Ask questions in natural language and get relevant answers from your notes.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm">
                    <strong>Example:</strong> "What did I learn about React hooks last month?"
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Smart Suggestions</h4>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered suggestions for related notes and topics as you search.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
