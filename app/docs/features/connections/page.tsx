"Client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Network, Brain, Zap, Eye } from "lucide-react";

export default function ConnectionsPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link
          href="/docs/features/ai-assistant"
          className="text-purple-400 hover:text-purple-300 flex items-center mb-2"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to AI Assistant
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">
          Connections
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Build a web of interconnected knowledge by linking your notes together
          and discovering hidden relationships.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
        </div>
        <Image
          src="/img/8.jpeg?height=400&width=800"
          alt="Note Taking Interface"
          width={800}
          height={400}
          className="w-full h-auto"
        />

        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Why Connections Matter
        </h2>
        <p className="text-gray-300 mb-6">
          Traditional note-taking creates isolated documents. Reflect's
          connection system transforms your notes into a living, breathing
          knowledge network where ideas can cross-pollinate and new insights
          emerge from unexpected relationships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="feature-card">
            <Brain className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Enhanced Memory</h3>
            <p className="text-gray-300">
              Connected notes mirror how your brain naturally stores
              information, making it easier to remember and recall knowledge.
            </p>
          </div>
          <div className="feature-card">
            <Zap className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Serendipitous Discovery</h3>
            <p className="text-gray-300">
              Stumble upon forgotten notes and unexpected connections that spark
              new ideas and creative solutions.
            </p>
          </div>
          <div className="feature-card">
            <Network className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Knowledge Synthesis</h3>
            <p className="text-gray-300">
              Combine insights from different domains to create new
              understanding and innovative approaches.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">
          Types of Connections
        </h2>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">
              Direct Links [[Note Title]]
            </h3>
            <p className="text-gray-300 mb-4">
              The most explicit way to connect notes. Use double brackets to
              create bidirectional links between related concepts.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Creating Links</h4>
                <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                  <code className="text-sm text-gray-300">
                    I'm studying [[Machine Learning]] and its
                    <br />
                    applications in [[Natural Language Processing]].
                    <br />
                    <br />
                    The [[Transformer Architecture]] is particularly
                    <br />
                    interesting for [[Text Generation]] tasks.
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">
                  Link Variations
                </h4>
                <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                  <code className="text-sm text-gray-300">
                    [[Note Title]] - Standard link
                    <br />
                    [[Display Text|Actual Note]] - Custom text
                    <br />
                    [[#Section]] - Link to section
                    <br />
                    [[Note#Section]] - Link to specific section
                  </code>
                </div>
              </div>
            </div>

            <div className="feature-card bg-blue-900/10 border-blue-500/20">
              <h4 className="text-lg font-bold mb-2">
                Pro Tip: Link as You Think
              </h4>
              <p className="text-gray-300">
                Don't wait until you're done writing to add links. Create
                connections as ideas occur to you - this captures the natural
                flow of your thinking and creates more meaningful relationships.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Tags #topic</h3>
            <p className="text-gray-300 mb-4">
              Tags create categorical connections, allowing you to group related
              notes by theme, project, or any other organizing principle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Flat Tags</h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20 mb-3">
                  <code className="text-sm text-gray-300">
                    #productivity #work #ideas #research
                  </code>
                </div>
                <p className="text-gray-300 text-sm">
                  Simple, single-level categorization
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">
                  Hierarchical Tags
                </h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20 mb-3">
                  <code className="text-sm text-gray-300">
                    #work/projects/alpha
                    <br />
                    #work/meetings/standup
                    <br />
                    #personal/health/fitness
                  </code>
                </div>
                <p className="text-gray-300 text-sm">
                  Multi-level organization with inheritance
                </p>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">
                Tag Strategy Examples
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-bold text-gray-200 mb-1">By Status</h5>
                  <div className="text-gray-300">
                    #status/draft
                    <br />
                    #status/review
                    <br />
                    #status/complete
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-200 mb-1">By Priority</h5>
                  <div className="text-gray-300">
                    #priority/urgent
                    <br />
                    #priority/high
                    <br />
                    #priority/low
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-200 mb-1">By Type</h5>
                  <div className="text-gray-300">
                    #type/meeting
                    <br />
                    #type/research
                    <br />
                    #type/idea
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Backlinks</h3>
            <p className="text-gray-300 mb-4">
              Automatically generated reverse connections that show which notes
              link to the current note. This creates a bidirectional web of
              knowledge.
            </p>

            <div className="bg-black/50 p-4 rounded border border-purple-500/20 mb-6">
              <div className="mb-4">
                <h4 className="font-bold text-purple-300 mb-2">
                  Note: "Artificial Intelligence"
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  Content about AI concepts, history, and applications...
                </p>

                <div className="border-t border-purple-500/20 pt-3">
                  <h5 className="font-bold text-gray-200 mb-2">
                    Linked References (5)
                  </h5>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Machine Learning Basics</strong> - "AI is the
                      broader field that encompasses..."
                    </li>
                    <li>
                      • <strong>Ethics in Technology</strong> - "The rise of AI
                      brings new ethical considerations..."
                    </li>
                    <li>
                      • <strong>Future of Work</strong> - "AI automation will
                      likely transform many industries..."
                    </li>
                    <li>
                      • <strong>Neural Networks</strong> - "These are a key
                      component of modern AI systems..."
                    </li>
                    <li>
                      • <strong>Data Science Career</strong> - "Understanding AI
                      is crucial for data scientists..."
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="feature-card bg-green-900/10 border-green-500/20">
              <h4 className="text-lg font-bold mb-2">
                Backlinks Reveal Patterns
              </h4>
              <p className="text-gray-300">
                Notes with many backlinks often represent important concepts in
                your knowledge base. Use this information to identify key themes
                and potential areas for deeper exploration.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">AI-Suggested Connections</h3>
            <p className="text-gray-300 mb-4">
              Reflect's AI analyzes your notes to suggest relevant connections
              you might have missed, helping you discover unexpected
              relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">How It Works</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-400 text-xs">1</span>
                    </div>
                    <span>AI analyzes content similarity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-400 text-xs">2</span>
                    </div>
                    <span>Identifies conceptual relationships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-400 text-xs">3</span>
                    </div>
                    <span>Suggests relevant connections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-400 text-xs">4</span>
                    </div>
                    <span>You approve or dismiss suggestions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">
                  Types of Suggestions
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Similar topics and themes</li>
                  <li>• Complementary concepts</li>
                  <li>• Historical connections</li>
                  <li>• Cross-domain relationships</li>
                  <li>• Contradictory viewpoints</li>
                  <li>• Supporting evidence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">
          Graph View
        </h2>
        <p className="text-gray-300 mb-6">
          Visualize your knowledge network as an interactive graph where notes
          are nodes and connections are edges. This bird's-eye view reveals the
          structure of your thinking.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="feature-card">
            <Eye className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Visual Navigation</h3>
            <p className="text-gray-300 mb-4">
              Navigate your knowledge base visually by clicking on nodes and
              following connections. This intuitive approach often leads to
              unexpected discoveries.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Click nodes to open notes</li>
              <li>• Hover for quick previews</li>
              <li>• Zoom and pan to explore</li>
              <li>• Filter by tags or date</li>
              <li>• Search within the graph</li>
            </ul>
          </div>

          <div className="feature-card">
            <Network className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Pattern Recognition</h3>
            <p className="text-gray-300 mb-4">
              The graph view reveals patterns in your knowledge that aren't
              obvious when viewing notes individually.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Identify knowledge clusters</li>
              <li>• Find orphaned notes</li>
              <li>• Discover central concepts</li>
              <li>• Spot missing connections</li>
              <li>• Understand information flow</li>
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-bold mb-4">Graph Customization</h3>
          <p className="text-gray-300 mb-4">
            Customize the graph view to focus on what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Layout Options</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Force-directed layout</li>
                <li>• Hierarchical tree</li>
                <li>• Circular arrangement</li>
                <li>• Timeline view</li>
              </ul>
            </div>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Visual Styling</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Node size by importance</li>
                <li>• Color coding by tags</li>
                <li>• Edge thickness by strength</li>
                <li>• Highlight paths</li>
              </ul>
            </div>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Filtering</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Show/hide by tags</li>
                <li>• Date range filtering</li>
                <li>• Connection depth limits</li>
                <li>• Orphan node toggle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">
          Connection Strategies
        </h2>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">
              The PARA Method Integration
            </h3>
            <p className="text-gray-300 mb-4">
              Adapt the PARA method (Projects, Areas, Resources, Archive) using
              Reflect's connection system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">
                  Traditional PARA
                </h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                  <div className="text-gray-300 text-sm">
                    📁 Projects/
                    <br />
                    &nbsp;&nbsp;📁 Website Redesign/
                    <br />
                    &nbsp;&nbsp;📁 Marketing Campaign/
                    <br />
                    📁 Areas/
                    <br />
                    &nbsp;&nbsp;📁 Health/
                    <br />
                    &nbsp;&nbsp;📁 Finance/
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Reflect PARA</h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                  <div className="text-gray-300 text-sm">
                    #project/website-redesign
                    <br />
                    #project/marketing-campaign
                    <br />
                    #area/health
                    <br />
                    #area/finance
                    <br />
                    [[Project Index]]
                    <br />
                    [[Area Dashboard]]
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Zettelkasten Principles</h3>
            <p className="text-gray-300 mb-4">
              Apply proven knowledge management principles from the Zettelkasten
              method.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Atomic Notes</h4>
                <p className="text-gray-300 text-sm mb-3">
                  One idea per note for maximum linkability
                </p>
                <div className="bg-green-900/20 p-3 rounded border border-green-500/20">
                  <p className="text-green-300 text-sm">
                    ✅ "The Compound Effect in Learning"
                  </p>
                  <p className="text-red-300 text-sm">
                    ❌ "My Thoughts on Learning and Education"
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">
                  Unique Identifiers
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  Use timestamps or unique IDs for permanent links
                </p>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                  <code className="text-gray-300 text-sm">
                    [[202312151430 - Compound Effect]]
                    <br />
                    [[20231215-learning-principles]]
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">
              Progressive Connection Building
            </h3>
            <p className="text-gray-300 mb-4">
              Build your connection network gradually and systematically.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    Start with Obvious Connections
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Link directly related concepts and build confidence with the
                    system.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    Add Contextual Links
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Connect notes that share context, time period, or source
                    material.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    Explore Conceptual Relationships
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Link ideas that complement, contrast, or build upon each
                    other.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    Create Unexpected Connections
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Link seemingly unrelated ideas to spark creativity and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">
          Advanced Connection Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Map of Content (MOC)</h3>
            <p className="text-gray-300 mb-4">
              Create hub notes that serve as entry points to related topics.
            </p>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">
                Example: Productivity MOC
              </h4>
              <div className="text-gray-300 text-sm">
                ## Core Concepts
                <br />
                [[Time Management]]
                <br />
                [[Goal Setting]]
                <br />
                [[Habit Formation]]
                <br />
                <br />
                ## Techniques
                <br />
                [[Pomodoro Technique]]
                <br />
                [[Getting Things Done]]
                <br />
                [[Time Blocking]]
                <br />
                <br />
                ## Tools
                <br />
                [[Task Management Apps]]
                <br />
                [[Calendar Systems]]
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Connection Types</h3>
            <p className="text-gray-300 mb-4">
              Use different connection types to add meaning to your links.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded mr-3"></span>
                <span className="text-gray-300">Supports/Evidence</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded mr-3"></span>
                <span className="text-gray-300">Contradicts/Opposes</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded mr-3"></span>
                <span className="text-gray-300">Builds Upon</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded mr-3"></span>
                <span className="text-gray-300">Similar To</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded mr-3"></span>
                <span className="text-gray-300">Inspired By</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Temporal Connections</h3>
            <p className="text-gray-300 mb-4">
              Link notes based on when they were created or when events
              occurred.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Daily note chains</li>
              <li>• Project timelines</li>
              <li>• Learning progressions</li>
              <li>• Historical sequences</li>
              <li>• Seasonal patterns</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Strength Indicators</h3>
            <p className="text-gray-300 mb-4">
              Not all connections are equal. Use indicators to show relationship
              strength.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-1 bg-red-400 rounded mr-3"></div>
                <span className="text-gray-300">Weak connection</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-2 bg-yellow-400 rounded mr-3"></div>
                <span className="text-gray-300">Moderate connection</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-3 bg-green-400 rounded mr-3"></div>
                <span className="text-gray-300">Strong connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">
          Best Practices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Connection Hygiene</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Review and prune weak connections regularly</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Add context to explain why notes are connected</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Use consistent naming conventions</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Balance breadth and depth in connections</span>
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Common Pitfalls</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span>Over-linking everything to everything</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span>Creating connections without purpose</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span>Ignoring orphaned notes</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span>Relying only on AI suggestions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/features/ai-assistant">
            <ArrowLeft className="mr-2 h-4 w-4" /> AI Assistant
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/features/search">
            Search <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
