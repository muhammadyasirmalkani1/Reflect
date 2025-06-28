"Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, Search, FileText, Network } from "lucide-react"

export default function ResearchWorkflowPage() {
  const post = {
    slug: "research-workflow-with-reflect",
    title: "The Ultimate Research Workflow with Reflect",
    excerpt:
      "How academic researchers and professionals are using Reflect to streamline their research process and make breakthrough connections.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    category: "Research",
    publishDate: "April 22, 2025",
    readTime: 12,
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  }

  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Back to blog link */}
        <div className="mb-8">
          <Link href="/blog" className="text-purple-400 hover:text-purple-300 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>

        {/* Article header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mr-6">
              <p className="text-white font-medium">{post.author.name}</p>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-3">{post.publishDate}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>

            <p>
              Research is fundamentally about making connections—between ideas, studies, theories, and evidence.
              Traditional research tools force you to think in silos, but Reflect's networked approach mirrors how
              breakthrough discoveries actually happen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="feature-card text-center">
                <Search className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Smart Discovery</h3>
                <p className="text-gray-400 text-sm">Find relevant research across your entire knowledge base</p>
              </div>
              <div className="feature-card text-center">
                <FileText className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Structured Notes</h3>
                <p className="text-gray-400 text-sm">Organize findings with consistent templates</p>
              </div>
              <div className="feature-card text-center">
                <Network className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Connection Mapping</h3>
                <p className="text-gray-400 text-sm">Visualize relationships between concepts</p>
              </div>
            </div>

            <h2>The Research Workflow Framework</h2>
            <p>
              After working with hundreds of researchers, we've identified a workflow that maximizes both efficiency and
              insight generation. Here's how to implement it in Reflect:
            </p>

            <h2>Phase 1: Literature Discovery and Capture</h2>
            <h3>Setting Up Your Research Infrastructure</h3>
            <p>Start by creating a research template that you'll use for every paper, article, or source you review:</p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 my-6">
              <p className="text-gray-300 font-mono text-sm">
                <strong>Research Paper Template:</strong>
                <br />• **Citation:** [Full citation]
                <br />• **Key Question:** What problem does this solve?
                <br />• **Methodology:** How did they approach it?
                <br />• **Key Findings:** What did they discover?
                <br />• **Limitations:** What are the gaps?
                <br />• **Connections:** How does this relate to other work?
                <br />• **Personal Notes:** My thoughts and questions
              </p>
            </div>

            <h3>The Progressive Summarization Method</h3>
            <p>
              Don't try to capture everything at once. Use Reflect's AI to help you progressively distill information:
            </p>
            <ol>
              <li>
                <strong>First Pass:</strong> Capture key quotes and main arguments
              </li>
              <li>
                <strong>Second Pass:</strong> Use AI to summarize and identify themes
              </li>
              <li>
                <strong>Third Pass:</strong> Connect to existing research in your knowledge base
              </li>
            </ol>

            <h2>Phase 2: Analysis and Synthesis</h2>
            <h3>The Connection Web Strategy</h3>
            <p>
              This is where Reflect truly shines. Instead of organizing papers by topic or date, let the AI help you
              discover thematic connections:
            </p>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 my-6">
              <p className="text-purple-300 mb-2">
                <strong>Pro Tip:</strong>
              </p>
              <p className="text-gray-300">
                Ask the AI: "What are the common methodological approaches across my machine learning papers?" or "Which
                studies contradict each other and why?"
              </p>
            </div>

            <h3>Identifying Research Gaps</h3>
            <p>Use Reflect's AI to analyze your entire research collection and identify:</p>
            <ul>
              <li>Underexplored areas in your field</li>
              <li>Methodological gaps between studies</li>
              <li>Contradictory findings that need resolution</li>
              <li>Emerging trends that haven't been fully investigated</li>
            </ul>

            <h2>Phase 3: Hypothesis Development</h2>
            <h3>The Question Cascade Method</h3>
            <p>Start with broad questions and use Reflect's AI to help you drill down:</p>
            <ol>
              <li>
                <strong>Domain Question:</strong> What's the big picture problem?
              </li>
              <li>
                <strong>Research Question:</strong> What specific aspect can I investigate?
              </li>
              <li>
                <strong>Testable Hypothesis:</strong> What can I prove or disprove?
              </li>
            </ol>

            <h2>Phase 4: Writing and Documentation</h2>
            <h3>From Notes to Narrative</h3>
            <p>Reflect's AI can help you transform your research notes into coherent narratives:</p>
            <ul>
              <li>Generate literature review outlines based on your notes</li>
              <li>Identify the strongest evidence for your arguments</li>
              <li>Suggest counterarguments you should address</li>
              <li>Help maintain consistent terminology across documents</li>
            </ul>

            <h2>Real-World Case Studies</h2>
            <h3>Dr. Sarah Chen - Neuroscience Research</h3>
            <p>
              "I was studying memory formation across 200+ papers. Reflect's AI helped me discover that studies using
              similar methodologies were reaching different conclusions—not because of the science, but because of
              subtle differences in participant selection criteria. This insight led to my breakthrough paper on
              methodology standardization."
            </p>

            <h3>Marcus Thompson - Market Research</h3>
            <p>
              "In competitive intelligence, patterns matter more than individual data points. Reflect helped me connect
              consumer behavior studies with economic indicators and social media trends. The AI spotted a correlation
              between weather patterns and purchasing behavior that became the foundation for our seasonal strategy."
            </p>

            <h2>Advanced Research Techniques</h2>
            <h3>Cross-Disciplinary Discovery</h3>
            <p>Some of the most important breakthroughs happen at the intersection of disciplines. Use Reflect to:</p>
            <ul>
              <li>Import research from adjacent fields</li>
              <li>Ask the AI to find unexpected connections</li>
              <li>Explore how methods from one field might apply to another</li>
            </ul>

            <h3>Collaborative Research</h3>
            <p>When working with research teams:</p>
            <ul>
              <li>Share relevant note collections with team members</li>
              <li>Use AI to synthesize different perspectives</li>
              <li>Create shared research templates for consistency</li>
              <li>Track how different team members interpret the same data</li>
            </ul>

            <h2>Avoiding Common Research Pitfalls</h2>
            <h3>Confirmation Bias</h3>
            <p>
              Ask Reflect's AI to actively look for evidence that contradicts your hypothesis. This helps ensure you're
              building robust arguments.
            </p>

            <h3>Information Overload</h3>
            <p>
              Use progressive summarization and AI-powered synthesis to avoid drowning in data. Focus on insights, not
              just information collection.
            </p>

            <h3>Losing the Forest for the Trees</h3>
            <p>
              Regularly ask the AI to help you step back and see the bigger picture. What story is your research
              telling?
            </p>

            <h2>Measuring Research Success</h2>
            <p>Track your research effectiveness by monitoring:</p>
            <ul>
              <li>Connection density: How many links between your notes?</li>
              <li>Insight generation: How often do you discover new patterns?</li>
              <li>Question evolution: How do your research questions develop?</li>
              <li>Output quality: Are you producing more impactful work?</li>
            </ul>

            <h2>The Future of AI-Assisted Research</h2>
            <p>
              We're moving toward a future where AI doesn't just help you organize research—it actively participates in
              the discovery process. Reflect's AI is already helping researchers:
            </p>
            <ul>
              <li>Generate novel research questions</li>
              <li>Identify promising research directions</li>
              <li>Suggest experimental designs</li>
              <li>Predict which studies might be worth replicating</li>
            </ul>

            <p>
              The researchers who embrace these AI-powered workflows today will have a significant advantage in
              tomorrow's knowledge economy. They'll be able to process more information, make better connections, and
              generate insights faster than ever before.
            </p>

            <p>
              Remember: the goal isn't to replace human insight with AI—it's to augment human intelligence with machine
              capabilities. The best research happens when human creativity and AI processing power work together.
            </p>
          </div>

          {/* Article actions */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-purple-900/20">
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                <ThumbsUp className="mr-2 h-4 w-4" /> Like
              </Button>
              <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                <Bookmark className="mr-2 h-4 w-4" /> Save
              </Button>
            </div>
            <div>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                <Link href="/get-started">Try Reflect Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
