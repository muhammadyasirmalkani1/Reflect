import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, AlertCircle, CheckCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create my first note?",
          a: "Press Ctrl+N or click the 'New Note' button in the sidebar. You can also use the quick search (Ctrl+K) and start typing to create a new note.",
        },
        {
          q: "Can I import notes from other apps?",
          a: "Yes! ReflectSaaS supports importing from Obsidian, Notion, Roam Research, and standard markdown files. Go to Settings → Import to get started.",
        },
        {
          q: "How do I link notes together?",
          a: "Use double brackets [[Note Title]] to create links. If the note doesn't exist, it will be created when you click the link.",
        },
      ],
    },
    {
      category: "Sync & Storage",
      questions: [
        {
          q: "Where are my notes stored?",
          a: "Notes are stored locally on your device and synced to our secure cloud servers. You always have offline access to your data.",
        },
        {
          q: "How do I sync across devices?",
          a: "Sync happens automatically when you're connected to the internet. Make sure you're logged into the same account on all devices.",
        },
        {
          q: "What happens if I lose internet connection?",
          a: "You can continue working offline. All changes will sync automatically when your connection is restored.",
        },
      ],
    },
    {
      category: "Features",
      questions: [
        {
          q: "How does the graph view work?",
          a: "The graph view visualizes connections between your notes. Each note is a node, and links between notes create edges. Use it to discover patterns and navigate your knowledge.",
        },
        {
          q: "Can I collaborate with others?",
          a: "Yes! You can share individual notes or entire workspaces with team members. Real-time collaboration is supported with live cursors and comments.",
        },
        {
          q: "How do I use templates?",
          a: "Press Ctrl+T in any note to apply a template. You can use built-in templates or create custom ones in Settings → Templates.",
        },
      ],
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "My notes aren't syncing. What should I do?",
          a: "First, check your internet connection. Then try logging out and back in. If the problem persists, contact support with your account details.",
        },
        {
          q: "The app is running slowly. How can I improve performance?",
          a: "Try closing unused tabs, clearing your browser cache, or restarting the app. Large graphs with many notes may impact performance.",
        },
        {
          q: "I accidentally deleted a note. Can I recover it?",
          a: "Yes! Go to Settings → Trash to recover deleted notes. Notes stay in trash for 30 days before permanent deletion.",
        },
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        <p className="text-lg text-muted-foreground">Find quick answers to common questions about ReflectSaaS.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">{category.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Still Need Help?
          </CardTitle>
          <CardDescription>Can't find what you're looking for? We're here to help!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <h4 className="font-medium mb-2">Documentation</h4>
              <p className="text-sm text-muted-foreground">Browse our comprehensive guides and tutorials</p>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <HelpCircle className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h4 className="font-medium mb-2">Support Chat</h4>
              <p className="text-sm text-muted-foreground">Get real-time help from our support team</p>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <AlertCircle className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <h4 className="font-medium mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">Connect with other users in our community forum</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
