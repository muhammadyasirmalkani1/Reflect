import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  publishDate: string
  readTime: number
  author: {
    name: string
    avatar: string
  }
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="feature-card h-full flex flex-col">
      <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={225}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-purple-400 text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 flex-grow">
        <Link href={`/blog/${post.slug}`} className="hover:text-purple-400 transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-purple-900/20">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-300">{post.author.name}</span>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center mr-3">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{post.publishDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime} min</span>
          </div>
        </div>
      </div>
    </div>
  )
}
