"Client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, FileText, Link2, Brain, Search, Zap, Users } from "lucide-react"

export default function CoreConceptsPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs/installation" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Installation
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Core Concepts</h1>
        <p className="text-xl text-gray-300 mb-6">
          Understanding the fundamental concepts behind Reflect will help you get the most out of your note-taking
          experience.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
          <Image
            src="/img/Server-Connection.svg?height=400&width=800"
            alt="Reflect Core Concepts Overview"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">The Building Blocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="feature-card">
            <FileText className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Notes</h3>
            <p className="text-gray-300">
              The foundation of Reflect. Each note is a flexible canvas where you can capture thoughts, ideas, and
              information using rich text, images, and links.
            </p>
          </div>
          <div className="feature-card">
            <Link2 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Connections</h3>
            <p className="text-gray-300">
              Link notes together to create a web of knowledge. Connections help you discover relationships between
              ideas and build a comprehensive knowledge base.
            </p>
          </div>
          <div className="feature-card">
            <Brain className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Assistant</h3>
            <p className="text-gray-300">
              Your intelligent writing companion that helps generate ideas, summarize content, and discover connections
              between your notes automatically.
            </p>
          </div>
          <div className="feature-card">
            <Search className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Graph View</h3>
            <p className="text-gray-300">
              Visualize your knowledge network as an interactive graph, showing how your notes connect and revealing
              patterns in your thinking.
            </p>
          </div>
          <div className="feature-card">
            <Zap className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Templates</h3>
            <p className="text-gray-300">
              Pre-designed note structures for common use cases like daily journals, meeting notes, project planning,
              and research documentation.
            </p>
          </div>
          <div className="feature-card">
            <Users className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-gray-300">
              Share notes and collaborate with others in real-time, making Reflect perfect for team projects and
              knowledge sharing.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">How Notes Work</h2>
        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Atomic Notes</h3>
            <p className="text-gray-300 mb-4">
              Each note in Reflect represents a single idea or concept. This "atomic" approach makes it easier to link
              related ideas and prevents notes from becoming unwieldy documents.
            </p>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-gray-200 mb-2">
                Example: Instead of one large "Project Alpha" note, create:
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• "Project Alpha - Goals"</li>
                <li>• "Project Alpha - Timeline"</li>
                <li>• "Project Alpha - Team Members"</li>
                <li>• "Project Alpha - Budget"</li>
              </ul>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Evergreen Notes</h3>
            <p className="text-gray-300 mb-4">
              Notes in Reflect are designed to be "evergreen" - continuously updated and refined over time rather than
              created once and forgotten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                <h4 className="font-bold text-red-300 mb-2">❌ Temporary Notes</h4>
                <p className="text-gray-300 text-sm">Meeting notes from 2023-01-15</p>
              </div>
              <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                <h4 className="font-bold text-green-300 mb-2">✅ Evergreen Notes</h4>
                <p className="text-gray-300 text-sm">Best practices for team meetings</p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Note Hierarchy</h3>
            <p className="text-gray-300 mb-4">
              While Reflect doesn't use traditional folders, you can create hierarchical relationships through linking
              and tagging.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-400 rounded mr-3"></span>
                <span>Main Topic Note</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="w-3 h-3 bg-purple-300 rounded mr-3"></span>
                <span>Subtopic Note 1</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="w-3 h-3 bg-purple-300 rounded mr-3"></span>
                <span>Subtopic Note 2</span>
              </div>
              <div className="flex items-center ml-8">
                <span className="w-2 h-2 bg-purple-200 rounded mr-3"></span>
                <span>Detail Note</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">The Connection System</h2>
        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Bidirectional Links</h3>
            <p className="text-gray-300 mb-4">
              When you link Note A to Note B, Reflect automatically creates a backlink from Note B to Note A. This
              creates a web of interconnected knowledge.
            </p>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-300">Note A</span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-purple-400"></div>
                    <ArrowRight className="w-4 h-4 text-purple-400 mx-1" />
                    <div className="w-8 h-0.5 bg-purple-400"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-300">Note B</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">Bidirectional connection automatically created</p>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Link Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                <h4 className="font-bold text-purple-300 mb-2">[[Direct Links]]</h4>
                <p className="text-gray-300 text-sm">Explicit connections between notes using double brackets</p>
              </div>
              <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                <h4 className="font-bold text-purple-300 mb-2">#Tags</h4>
                <p className="text-gray-300 text-sm">Categorical connections using hashtags</p>
              </div>
              <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                <h4 className="font-bold text-purple-300 mb-2">AI Suggestions</h4>
                <p className="text-gray-300 text-sm">Automatic connections discovered by AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Knowledge Graph</h2>
        <div className="feature-card mb-6">
          <h3 className="text-xl font-bold mb-4">Visualizing Your Knowledge</h3>
          <p className="text-gray-300 mb-4">
            The knowledge graph is a visual representation of all your notes and their connections. It helps you:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Discover unexpected connections between ideas</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Identify knowledge gaps and orphaned notes</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Navigate your knowledge base intuitively</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Understand the structure of your thinking</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Workflows and Processes</h2>
        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Capture → Process → Connect</h3>
            <p className="text-gray-300 mb-4">The core Reflect workflow follows a simple three-step process:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-400">1</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Capture</h4>
                <p className="text-gray-300 text-sm">
                  Quickly record ideas, thoughts, and information without worrying about organization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Process</h4>
                <p className="text-gray-300 text-sm">
                  Review, refine, and expand your notes with additional context and insights
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Connect</h4>
                <p className="text-gray-300 text-sm">
                  Link notes together and discover relationships to build your knowledge network
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Progressive Summarization</h3>
            <p className="text-gray-300 mb-4">
              A technique for distilling information over time, making your notes more valuable with each review:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded mr-3"></div>
                <span className="text-gray-300">Layer 1: Original content</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                <span className="text-gray-300">Layer 2: Bold important passages</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                <span className="text-gray-300">Layer 3: Highlight key insights</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                <span className="text-gray-300">Layer 4: Executive summary</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Do's</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Write in your own words</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Link liberally between notes</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Review and update notes regularly</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Use descriptive note titles</span>
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Don'ts</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-300">Copy-paste without processing</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-300">Create isolated notes</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-300">Worry about perfect organization</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-300">Use vague or generic titles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/installation">
            <ArrowLeft className="mr-2 h-4 w-4" /> Installation
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/features/note-taking">
            Note Taking <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
