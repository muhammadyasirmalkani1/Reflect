import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Shield,
  Zap,
  MessageSquare,
  Sparkles,
  Clock,
  Globe,
  Lightbulb,
  Search,
  LinkIcon,
  FileText,
  PenTool,
  Layers,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="cosmic-bg pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">
              Features that empower your thinking
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover all the ways Reflect can help you capture, connect, and create better ideas
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                  AI Assistant
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 purple-gradient-text">Notes with an AI assistant</h2>
                <p className="text-gray-300 mb-6">
                  Reflect's AI assistant helps you organize your thoughts, generate ideas, and make connections between
                  concepts you might have missed.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Generate ideas and outlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Discover connections between notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Chat with your notes and get answers</span>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="AI Assistant Interface"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Connections Interface"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                  Connections
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 purple-gradient-text">
                  Connect your ideas effortlessly
                </h2>
                <p className="text-gray-300 mb-6">
                  Reflect automatically suggests connections between your notes, helping you build a network of
                  knowledge.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <LinkIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Automatic link suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Discover unexpected relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Layers className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Build a knowledge graph over time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                  Search
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 purple-gradient-text">Find anything instantly</h2>
                <p className="text-gray-300 mb-6">
                  Reflect's powerful search understands what you're looking for, even if you don't use the exact words.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Semantic search understands concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Lightning fast results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <FileText className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Search across all your notes</span>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Search Interface"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Editor Interface"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                  Editor
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 purple-gradient-text">
                  Beautiful distraction-free writing
                </h2>
                <p className="text-gray-300 mb-6">
                  Focus on your thoughts with our clean, minimal editor designed for deep thinking.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <PenTool className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Rich text formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Distraction-free mode</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Auto-save as you type</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">All Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to capture, connect, and create better ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
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

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <LinkIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automatic Connections</h3>
              <p className="text-gray-400">Discover relationships between your notes that you might have missed</p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich Text Editor</h3>
              <p className="text-gray-400">Format your notes with headings, lists, code blocks, and more</p>
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Ready to think better?</h2>
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
