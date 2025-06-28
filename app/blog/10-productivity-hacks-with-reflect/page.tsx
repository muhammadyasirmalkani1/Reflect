"Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"

export default function ProductivityHacksPage() {
  const post = {
    slug: "10-productivity-hacks-with-reflect",
    title: "10 Productivity Hacks with Reflect",
    excerpt:
      "Discover powerful productivity techniques that leverage Reflect's unique features to help you work smarter, not harder.",
    coverImage: "/img/2.svg?height=600&width=1200",
    category: "Productivity",
    publishDate: "May 5, 2025",
    readTime: 6,
    author: {
      name: "Sarah Johnson",
      avatar: "/img/1.jpg?height=100&width=100",
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
              Productivity isn't about working harder—it's about working smarter. Reflect's unique approach to
              note-taking and knowledge management opens up powerful productivity techniques that traditional apps
              simply can't match.
            </p>

            <h2>1. The Daily Brain Dump</h2>
            <p>
              Start each day by dumping everything on your mind into Reflect. Don't worry about organization—just get it
              all out. Reflect's AI will help you make sense of it later and suggest connections you might have missed.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 my-6">
              <p className="text-purple-300 mb-2">
                <strong>Pro Tip:</strong>
              </p>
              <p className="text-gray-300">
                Use the quick capture feature (Cmd+Shift+N) to instantly create a new note without breaking your flow.
              </p>
            </div>

            <h2>2. The Connection Web Strategy</h2>
            <p>
              Instead of filing notes in folders, let Reflect build a web of connections. When you link related notes,
              you're creating a knowledge network that mirrors how your brain actually thinks.
            </p>

            <h2>3. AI-Powered Meeting Prep</h2>
            <p>
              Before important meetings, ask Reflect's AI to summarize all relevant notes and suggest talking points.
              It's like having a personal research assistant that knows your entire knowledge base.
            </p>

            <h2>4. The Weekly Review Ritual</h2>
            <p>
              Every Friday, review your week's notes and let Reflect's AI generate insights. You'll be amazed at the
              patterns and opportunities you discover.
            </p>

            <h2>5. Template Automation</h2>
            <p>
              Create templates for recurring tasks like project planning, meeting notes, or daily journals. Reflect's
              template system saves time and ensures consistency.
            </p>

            <h2>6. The Search-First Approach</h2>
            <p>
              Instead of browsing through folders, use Reflect's powerful search to find information. The AI understands
              context, so you can search for concepts, not just keywords.
            </p>

            <h2>7. Cross-Project Pollination</h2>
            <p>
              Let Reflect suggest connections between different projects. Often, insights from one area can solve
              problems in another—but only if you can see the connections.
            </p>

            <h2>8. The Idea Parking Lot</h2>
            <p>
              Create a dedicated note for random ideas that pop up during focused work. Review and process these ideas
              during designated "idea time" to maintain focus.
            </p>

            <h2>9. Collaborative Knowledge Building</h2>
            <p>
              Share relevant notes with team members and build collective knowledge. Reflect's sharing features make it
              easy to collaborate without losing context.
            </p>

            <h2>10. The Learning Loop</h2>
            <p>
              After completing projects or learning new skills, create reflection notes. Ask yourself: What worked? What
              didn't? What would you do differently? These insights become invaluable for future projects.
            </p>

            <h2>Putting It All Together</h2>
            <p>
              The key to productivity with Reflect isn't using every feature—it's finding the combination that works for
              your unique workflow. Start with one or two techniques and gradually incorporate others as they become
              natural.
            </p>

            <p>
              Remember, the goal isn't to have the most organized notes—it's to have a system that helps you think
              better, work smarter, and achieve your goals more effectively.
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
