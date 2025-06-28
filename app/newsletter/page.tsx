import NewsletterSubscription from "@/components/newsletter-subscription"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewsletterPage() {
  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Join the Reflect Newsletter</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest features, tutorials, and insights to help you think better with Reflect.
          </p>
        </div>

        <NewsletterSubscription />

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center purple-gradient-text">What to expect</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Product Updates</h3>
              <p className="text-gray-400">Be the first to know about new features and improvements to Reflect.</p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Tutorials & Guides</h3>
              <p className="text-gray-400">Learn how to get the most out of Reflect with detailed tutorials.</p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Thinking Tips</h3>
              <p className="text-gray-400">Discover techniques to enhance your thinking and note-taking process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
