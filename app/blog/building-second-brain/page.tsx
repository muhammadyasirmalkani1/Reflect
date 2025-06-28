"Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, Lightbulb, Zap, Brain } from "lucide-react"

export default function AIAssistantPage() {
  const post = {
    slug: "how-to-use-reflects-ai-assistant",
    title: "How to Use Reflect's AI Assistant for Better Thinking",
    excerpt:
      "A comprehensive guide to leveraging Reflect's AI assistant to generate ideas, make connections, and enhance your thinking process.",
    coverImage: "/img/3.svg?height=600&width=1200",
    category: "AI",
    publishDate: "April 28, 2025",
    readTime: 10,
    author: {
      name: "David Kim",
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
              Reflect's AI assistant isn't just another chatbot—it's a thinking partner that understands your entire
              knowledge base and helps you make connections you might never have discovered on your own.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="feature-card text-center">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Contextual Understanding</h3>
                <p className="text-gray-400 text-sm">AI that knows your entire knowledge base</p>
              </div>
              <div className="feature-card text-center">
                <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Idea Generation</h3>
                <p className="text-gray-400 text-sm">Spark creativity with intelligent suggestions</p>
              </div>
              <div className="feature-card text-center">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Smart Connections</h3>
                <p className="text-gray-400 text-sm">Discover hidden relationships in your notes</p>
              </div>
            </div>

            <h2>Getting Started with AI Assistance</h2>
            <p>
              The AI assistant in Reflect is always available through the command palette (Cmd+K) or by typing "/" in
              any note. But knowing when and how to use it effectively is what separates casual users from power users.
            </p>

            <h2>1. Intelligent Summarization</h2>
            <p>
              One of the most powerful features is the ability to summarize long notes or multiple related notes. Simply
              select the text you want summarized and ask the AI to create a concise overview.
            </p>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 my-6">
              <p className="text-gray-300 font-mono text-sm">
                <span className="text-purple-400">You:</span> "Summarize my notes about productivity techniques"
                <br />
                <span className="text-green-400">AI:</span> "Based on your 12 notes about productivity, here are the key
                themes: time-blocking (mentioned 8 times), the Pomodoro Technique (high success rate in your
                experiments), and morning routines (you noted 40% improvement in focus)..."
              </p>
            </div>

            <h2>2. Connection Discovery</h2>
            <p>
              The AI excels at finding unexpected connections between your notes. It can identify patterns, themes, and
              relationships that might not be immediately obvious.
            </p>

            <h2>3. Question-Driven Exploration</h2>
            <p>Instead of browsing through notes, try asking the AI specific questions about your knowledge base:</p>
            <ul>
              <li>"What are the common themes in my project retrospectives?"</li>
              <li>"How do my reading notes relate to my current work projects?"</li>
              <li>"What patterns do you see in my daily journal entries?"</li>
            </ul>

            <h2>4. Creative Brainstorming</h2>
            <p>
              Use the AI as a brainstorming partner. It can generate ideas based on your existing notes and help you
              explore new directions.
            </p>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 my-6">
              <p className="text-purple-300 mb-2">
                <strong>Advanced Tip:</strong>
              </p>
              <p className="text-gray-300">
                Ask the AI to "think like" different personas: "How would a designer approach this problem based on my
                notes?" or "What would a data scientist suggest here?"
              </p>
            </div>

            <h2>5. Research Assistance</h2>
            <p>
              When working on research projects, the AI can help you identify gaps in your knowledge, suggest areas for
              further exploration, and even help formulate research questions.
            </p>

            <h2>6. Writing and Communication</h2>
            <p>
              The AI can help you draft emails, create outlines, or even write first drafts based on your notes. It
              understands your writing style and can maintain consistency across documents.
            </p>

            <h2>7. Learning and Skill Development</h2>
            <p>
              Use the AI to create learning plans, generate quiz questions from your notes, or explain complex concepts
              in simpler terms.
            </p>

            <h2>Best Practices for AI Interaction</h2>
            <h3>Be Specific</h3>
            <p>
              The more specific your requests, the better the AI can help. Instead of "help me with my project," try
              "based on my project notes, what are the three biggest risks I should address first?"
            </p>

            <h3>Iterate and Refine</h3>
            <p>
              Don't expect perfect results on the first try. Use follow-up questions to refine the AI's responses and
              get exactly what you need.
            </p>

            <h3>Combine AI with Human Insight</h3>
            <p>
              The AI is a powerful tool, but it's most effective when combined with your own critical thinking and
              domain expertise.
            </p>

            <h2>Privacy and Security</h2>
            <p>
              Your notes and conversations with the AI are private and encrypted. The AI processes your data to provide
              personalized assistance but doesn't store or share your information.
            </p>

            <h2>Advanced Techniques</h2>
            <h3>Prompt Engineering</h3>
            <p>
              Learn to craft effective prompts by being clear about context, desired output format, and specific
              requirements.
            </p>

            <h3>Workflow Integration</h3>
            <p>
              Integrate AI assistance into your regular workflows. For example, end each week by asking the AI to
              analyze your progress and suggest improvements.
            </p>

            <h2>The Future of AI-Assisted Thinking</h2>
            <p>
              As you use Reflect's AI assistant more, it becomes better at understanding your thinking patterns and
              preferences. This creates a personalized thinking partner that grows more valuable over time.
            </p>

            <p>
              The goal isn't to replace your thinking—it's to augment it. The AI helps you see patterns you might miss,
              explore ideas you might not consider, and make connections that lead to breakthrough insights.
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
