"Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, Check, X } from "lucide-react"

export default function ReflectVsTraditionalPage() {
  const post = {
    slug: "reflect-vs-traditional-note-taking",
    title: "Reflect vs. Traditional Note-Taking Apps: What's Different?",
    excerpt:
      "A detailed comparison of Reflect's approach to note-taking compared to traditional apps, and why it leads to better thinking and organization.",
    coverImage: "/img/5.svg?height=600&width=1200",
    category: "Note-taking",
    publishDate: "April 15, 2025",
    readTime: 7,
    author: {
      name: "Michael Park",
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
              Most note-taking apps are digital versions of paper notebooks—they help you capture information but don't
              fundamentally change how you think. Reflect takes a radically different approach, designed around how your
              brain actually works.
            </p>

            <h2>The Fundamental Difference: Storage vs. Thinking</h2>
            <p>
              Traditional note-taking apps are optimized for storage and retrieval. They ask: "How can we help you
              organize and find your notes?" Reflect asks a different question: "How can we help you think better?"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-4 text-red-400">Traditional Apps</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    Folder-based organization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    Notes exist in isolation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    Manual linking required
                  </li>
                  <li className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    Keyword-based search
                  </li>
                  <li className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    Static content
                  </li>
                </ul>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Reflect</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Network-based connections
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Automatic relationship discovery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    AI-powered connections
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Semantic understanding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Dynamic insights
                  </li>
                </ul>
              </div>
            </div>

            <h2>Organization: Folders vs. Networks</h2>
            <h3>The Problem with Folders</h3>
            <p>
              Folders force you to make premature decisions about where information belongs. But knowledge doesn't fit
              neatly into categories—it's interconnected, contextual, and multifaceted.
            </p>
            <p>Consider a note about "team communication." Does it belong in:</p>
            <ul>
              <li>Projects → Current Project → Team Management?</li>
              <li>Skills → Leadership → Communication?</li>
              <li>Work → Meetings → Best Practices?</li>
            </ul>
            <p>
              In traditional apps, you have to choose. In Reflect, it can connect to all relevant contexts
              automatically.
            </p>

            <h3>The Network Advantage</h3>
            <p>
              Reflect organizes information the way your brain does—through associations and connections. When you write
              about team communication, Reflect automatically suggests connections to:
            </p>
            <ul>
              <li>Previous notes about communication challenges</li>
              <li>Team members mentioned in other contexts</li>
              <li>Related concepts like leadership and project management</li>
              <li>Similar situations from past projects</li>
            </ul>

            <h2>Search: Keywords vs. Understanding</h2>
            <h3>Beyond Keyword Matching</h3>
            <p>
              Traditional search requires you to remember the exact words you used. Reflect's AI understands concepts,
              context, and relationships.
            </p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 my-6">
              <p className="text-gray-300 mb-2">
                <strong>Traditional Search:</strong>
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Search for "productivity" → Only finds notes containing that exact word
              </p>

              <p className="text-gray-300 mb-2">
                <strong>Reflect Search:</strong>
              </p>
              <p className="text-gray-400 text-sm">
                Search for "productivity" → Finds notes about efficiency, time management, workflow optimization, focus
                techniques, and more
              </p>
            </div>

            <h2>Content Creation: Static vs. Dynamic</h2>
            <h3>Living Documents</h3>
            <p>
              In traditional apps, once you write a note, it's static. In Reflect, your notes evolve and grow more
              valuable over time through:
            </p>
            <ul>
              <li>
                <strong>Automatic backlinking:</strong> New notes automatically connect to relevant existing content
              </li>
              <li>
                <strong>AI insights:</strong> Regular suggestions for connections and improvements
              </li>
              <li>
                <strong>Context awareness:</strong> Notes become more relevant as your knowledge base grows
              </li>
            </ul>

            <h2>Learning Curve: Complexity vs. Intelligence</h2>
            <h3>Traditional Apps: Simple but Limited</h3>
            <p>
              Traditional note-taking apps are easy to learn because they mimic familiar concepts (folders, documents).
              But this simplicity comes at a cost—they don't help you think better.
            </p>

            <h3>Reflect: Intelligent by Design</h3>
            <p>
              Reflect has a slightly steeper learning curve because it introduces new concepts like networked thinking
              and AI assistance. But users report that this investment pays off quickly:
            </p>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 my-6">
              <p className="text-purple-300 mb-2">
                <strong>User Feedback:</strong>
              </p>
              <p className="text-gray-300">
                "After two weeks with Reflect, I started making connections I never would have seen before. It's like
                having a thinking partner that knows everything I've ever written." - Dr. Sarah Chen, Research Scientist
              </p>
            </div>

            <h2>Collaboration: Sharing vs. Thinking Together</h2>
            <h3>Beyond Document Sharing</h3>
            <p>
              Traditional apps let you share documents. Reflect lets you share knowledge networks, complete with
              connections and context.
            </p>

            <h2>Privacy and Data: Your Knowledge, Your Control</h2>
            <p>
              Unlike traditional apps that may analyze your content for advertising or other purposes, Reflect's AI
              works entirely for you. Your notes remain private, and the AI's insights are designed to help you think
              better, not to extract value for third parties.
            </p>

            <h2>The Migration Question</h2>
            <h3>Is It Worth Switching?</h3>
            <p>
              The decision to switch note-taking apps isn't trivial—your notes represent years of accumulated knowledge.
              Here's how to think about it:
            </p>

            <h4>Switch if you:</h4>
            <ul>
              <li>Often struggle to find relevant information in your notes</li>
              <li>Feel like your notes aren't helping you generate new insights</li>
              <li>Want to discover unexpected connections in your knowledge</li>
              <li>Spend too much time organizing instead of thinking</li>
            </ul>

            <h4>Stick with traditional apps if you:</h4>
            <ul>
              <li>Primarily use notes for simple task tracking</li>
              <li>Prefer complete manual control over organization</li>
              <li>Don't need to make connections between different pieces of information</li>
            </ul>

            <h2>Making the Transition</h2>
            <p>If you decide to try Reflect, you don't have to migrate everything at once. Many users start by:</p>
            <ol>
              <li>Using Reflect for new projects while keeping old notes in their current system</li>
              <li>Gradually importing their most valuable notes</li>
              <li>Letting Reflect's AI help identify which old notes are worth migrating</li>
            </ol>

            <h2>The Future of Note-Taking</h2>
            <p>
              We believe the future of note-taking isn't about better organization—it's about augmented thinking. As AI
              becomes more sophisticated, the apps that help you think better will become increasingly valuable compared
              to those that simply store information.
            </p>

            <p>
              Traditional note-taking apps will always have their place for simple use cases. But for knowledge workers,
              researchers, writers, and anyone who needs to make sense of complex information, networked thinking tools
              like Reflect represent the next evolution in how we capture, organize, and leverage knowledge.
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
