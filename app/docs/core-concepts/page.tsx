import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Link, Search, MessageSquare, Zap } from "lucide-react"

export default function CoreConceptsPage() {
  const concepts = [
    {
      icon: Brain,
      title: "Reflective Thinking",
      description:
        "The core philosophy behind ReflectSaaS - capturing thoughts, connecting ideas, and building knowledge over time.",
      details: [
        "Daily reflection practices",
        "Thought capture and organization",
        "Pattern recognition in your thinking",
        "Long-term knowledge building",
      ],
    },
    {
      icon: Link,
      title: "Bidirectional Linking",
      description:
        "Create connections between notes and ideas to build a web of knowledge that grows more valuable over time.",
      details: [
        "[[Note Title]] syntax for linking",
        "Automatic backlink generation",
        "Visual graph of connections",
        "Contextual link suggestions",
      ],
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find information quickly with AI-powered search that understands context and relationships.",
      details: [
        "Full-text search across all notes",
        "Semantic search capabilities",
        "Tag-based filtering",
        "Search within specific time ranges",
      ],
    },
    {
      icon: MessageSquare,
      title: "Real-time Collaboration",
      description: "Work together with team members in real-time, sharing insights and building collective knowledge.",
      details: [
        "Live collaborative editing",
        "Comment and discussion threads",
        "Shared workspaces",
        "Permission management",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Core Concepts</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Understanding the fundamental principles that make ReflectSaaS a powerful tool for thought and knowledge
          management.
        </p>
      </div>

      <div className="grid gap-6">
        {concepts.map((concept, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <concept.icon className="h-6 w-6 text-primary" />
                {concept.title}
              </CardTitle>
              <CardDescription className="text-base">{concept.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {concept.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started with Core Concepts</CardTitle>
          <CardDescription>Ready to put these concepts into practice?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Start Reflecting</h4>
              <p className="text-sm text-muted-foreground">Begin with daily notes and thoughts</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Create Connections</h4>
              <p className="text-sm text-muted-foreground">Link related ideas together</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Explore Patterns</h4>
              <p className="text-sm text-muted-foreground">Discover insights in your knowledge graph</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
