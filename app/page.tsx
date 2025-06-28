import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Shield, Zap, MessageSquare, Sparkles, Clock, Globe } from "lucide-react"
import NewsletterSubscription from "@/components/newsletter-subscription"

export default function Home() {
  return (
    <div className="cosmic-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Think better with Reflect</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Give your brain superpowers with our AI-powered note-taking and thinking tool
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none text-lg py-6 px-8">
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-white hover:bg-purple-500/10 text-lg py-6 px-8"
              >
                See how it works
              </Button>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reflect-%20SaaS%20Landing%20Page%20Reflect%20Landing%20Page-KQhaxN1iizviFowIvxbLLKxJmH0dqd.jpeg"
              alt="Reflect app interface"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">
              Everything you need to think clearly
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reflect combines the best of note-taking, journaling, and AI assistance in one seamless experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-400">Get intelligent suggestions and connections between your notes and ideas</p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Search</h3>
              <p className="text-gray-400">Find anything in your notes instantly with our powerful semantic search</p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400">
                Your thoughts are private. We use military-grade encryption to keep them that way
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat with Your Notes</h3>
              <p className="text-gray-400">
                Ask questions about your notes and get intelligent answers from your personal AI
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beautiful Interface</h3>
              <p className="text-gray-400">A clean, distraction-free environment designed for deep thinking</p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sync Everywhere</h3>
              <p className="text-gray-400">Access your notes from any device, anywhere, anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                AI Assistant
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Notes with an AI assistant</h2>
              <p className="text-xl text-gray-300 mb-8">
                Reflect's AI assistant helps you organize your thoughts, generate ideas, and make connections between
                concepts you might have missed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Generate ideas</h3>
                    <p className="text-gray-400">
                      Ask your AI to brainstorm ideas, outline projects, or summarize complex topics
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Make connections</h3>
                    <p className="text-gray-400">
                      Discover relationships between your notes that you might have missed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Save time</h3>
                    <p className="text-gray-400">Let AI handle the busy work so you can focus on what matters</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/features"
                  className="text-purple-400 font-medium flex items-center hover:text-purple-300 transition-colors"
                >
                  Learn more about AI features <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="AI Assistant Interface"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
              Security
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Never lose information</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your notes are encrypted and backed up automatically, so you never have to worry about losing your
              thoughts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400">
                Your notes are encrypted before they leave your device, ensuring that only you can access them
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automatic Backups</h3>
              <p className="text-gray-400">
                Your notes are backed up in real-time, so you never have to worry about losing your work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <NewsletterSubscription />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">We like keeping things simple</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">One plan, one price, everything included</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="feature-card text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
              <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
              <div className="text-4xl font-bold mb-2">
                $10<span className="text-xl text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Everything you need to think better</p>

              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Unlimited notes and connections</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">AI assistant included</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">End-to-end encryption</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Sync across all devices</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none py-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Think better with Reflect</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of thinkers, writers, and creators who use Reflect to organize their thoughts and ideas
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none text-lg py-6 px-8">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
