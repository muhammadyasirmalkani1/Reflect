"Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch this data from an API or CMS
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If post not found, you might want to handle this case
  if (!post) {
    return (
      <div className="cosmic-bg pt-24">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Post not found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
          >
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Sample related posts
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

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
            <h2>Introduction to Building a Second Brain</h2>
            <p>
              In today's information-rich world, we're constantly bombarded with ideas, insights, and information.
              Without a system to capture and organize this knowledge, valuable insights slip through the cracks of our
              memory.
            </p>
            <p>
              This is where the concept of a "Second Brain" comes in—an external, digital system that stores and
              organizes your knowledge so you can access it when you need it. And Reflect is the perfect tool to build
              this system.
            </p>
            <h2>Why Traditional Note-Taking Falls Short</h2>
            <p>
              Traditional note-taking apps treat your notes as isolated documents. They're great for capturing
              information but fall short when it comes to connecting ideas and surfacing relevant information when you
              need it.
            </p>
            <p>
              Reflect takes a different approach. Instead of organizing notes in folders or notebooks, Reflect creates a
              network of interconnected ideas. This network mimics how your brain naturally thinks—in associations and
              connections.
            </p>
            <h2>The Four Steps to Building Your Second Brain with Reflect</h2>
            <h3>1. Capture</h3>
            <p>
              The first step is to capture ideas, insights, and information as they come to you. Reflect makes this easy
              with its quick capture feature, mobile apps, and web clipper.
            </p>
            <h3>2. Organize</h3>
            <p>
              Once captured, Reflect helps you organize your notes by automatically suggesting connections to existing
              notes. You can also manually link notes together to build a web of knowledge.
            </p>
            <h3>3. Distill</h3>
            <p>
              Reflect's AI assistant helps you distill your notes by summarizing long content, extracting key points,
              and generating insights based on your existing knowledge.
            </p>
            <h3>4. Express</h3>
            <p>
              Finally, Reflect helps you express your ideas by making it easy to find relevant information when you need
              it. The powerful search feature and AI-powered connections ensure that your knowledge is always at your
              fingertips.
            </p>
            <h2>Real-World Examples</h2>
            <p>Let's look at how different professionals use Reflect to build their second brain:</p>
            <ul>
              <li>
                <strong>Researchers</strong> use Reflect to connect research papers, organize findings, and discover
                unexpected connections between different studies.
              </li>
              <li>
                <strong>Writers</strong> use Reflect to collect ideas, organize research, and outline their work, with
                the AI assistant helping to overcome writer's block.
              </li>
              <li>
                <strong>Students</strong> use Reflect to take lecture notes, connect concepts across different courses,
                and prepare for exams with AI-generated summaries and quizzes.
              </li>
              <li>
                <strong>Professionals</strong> use Reflect to manage projects, prepare for meetings, and build a
                personal knowledge base that grows more valuable over time.
              </li>
            </ul>
            <h2>Getting Started with Your Second Brain</h2>
            <p>Ready to build your own second brain with Reflect? Here's a simple way to get started:</p>
            <ol>
              <li>Create a new note for each idea, concept, or piece of information you want to remember.</li>
              <li>Use the AI assistant to help you summarize and extract key points from longer content.</li>
              <li>
                Create manual links between related notes, and pay attention to the automatic connections Reflect
                suggests.
              </li>
              <li>
                Regularly review your notes and connections to reinforce your knowledge and discover new insights.
              </li>
              <li>Use the search feature to find relevant information when you need it.</li>
            </ol>
            <p>
              Remember, building a second brain is a personal process. Experiment with different approaches and find
              what works best for you. The key is to start capturing and connecting your ideas today.
            </p>
            <h2>Conclusion</h2>
            <p>
              Building a second brain with Reflect isn't just about organizing notes—it's about extending your thinking,
              enhancing your creativity, and making connections you might otherwise miss. By externalizing your
              knowledge and creating a network of interconnected ideas, you free up mental space for deeper thinking and
              creative insights.
            </p>
            <p>
              Start building your second brain today, and watch as your digital knowledge base becomes an invaluable
              thinking partner.
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

        {/* Author bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="feature-card">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                <p className="text-gray-300 mb-4">
                  Co-founder & CEO at Reflect. Previously led product at Notion. Passionate about tools for thought and
                  human-computer interaction.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.slug} className="feature-card">
                <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                  <Image
                    src={relatedPost.coverImage || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href={`/blog/${relatedPost.slug}`} className="hover:text-purple-400 transition-colors">
                    {relatedPost.title}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-purple-400">{relatedPost.author.name}</span>
                  <span className="text-gray-400">{relatedPost.readTime} min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
