import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import BlogPostCard from "@/components/blog-post-card"
import BlogCategoryFilter from "@/components/blog-category-filter"
import BlogPagination from "@/components/blog-pagination"

export default function BlogPage() {
  // In a real app, you would fetch this data from an API or CMS
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 7)

  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Reflect Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tips, and stories about productivity, note-taking, and thinking better with Reflect
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="feature-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 h-[300px] lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                <Image
                  src={featuredPost.coverImage || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4 space-x-2">
                  <span className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={featuredPost.author.avatar || "/placeholder.svg"}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredPost.author.name}</p>
                    <p className="text-gray-400 text-sm">
                      {featuredPost.publishDate} · {featuredPost.readTime} min read
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 w-fit"
                >
                  <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <BlogCategoryFilter categories={blogCategories} />
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <BlogPagination currentPage={1} totalPages={5} />

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="feature-card text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and updates from Reflect delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
