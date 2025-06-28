 "Client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, Keyboard, Zap, Target } from "lucide-react"

export default function KeyboardShortcutsPage() {
  const post = {
    slug: "mastering-keyboard-shortcuts",
    title: "Mastering Keyboard Shortcuts: 10x Your Reflect Productivity",
    excerpt:
      "Learn the essential keyboard shortcuts and power-user techniques that will transform how you work with Reflect.",
    coverImage: "/img/7.svg?height=600&width=1200",
    category: "Productivity",
    publishDate: "April 1, 2025",
    readTime: 8, 
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  }

  const shortcuts = [
    {
      category: "Navigation",
      items: [
        { keys: "Cmd + K", description: "Open command palette" },
        { keys: "Cmd + P", description: "Quick note search" },
        { keys: "Cmd + Shift + N", description: "Create new note" },
        { keys: "Cmd + O", description: "Open note" },
        { keys: "Cmd + W", description: "Close current note" },
      ],
    },
    {
      category: "Editing",
      items: [
        { keys: "Cmd + B", description: "Bold text" },
        { keys: "Cmd + I", description: "Italic text" },
        { keys: "Cmd + U", description: "Underline text" },
        { keys: "Cmd + Shift + K", description: "Insert link" },
        { keys: "Cmd + /", description: "Toggle comment" },
      ],
    },
    {
      category: "AI & Search",
      items: [
        { keys: "Cmd + J", description: "Ask AI assistant" },
        { keys: "Cmd + F", description: "Search in note" },
        { keys: "Cmd + Shift + F", description: "Global search" },
        { keys: "Cmd + G", description: "Find next" },
        { keys: "Cmd + Shift + G", description: "Find previous" },
      ],
    },
    {
      category: "Organization",
      items: [
        { keys: "Cmd + D", description: "Duplicate note" },
        { keys: "Cmd + Shift + D", description: "Delete note" },
        { keys: "Cmd + T", description: "Add tag" },
        { keys: "Cmd + L", description: "Create link" },
        { keys: "Cmd + Shift + L", description: "View backlinks" },
      ],
    },
  ]

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
              The difference between a casual Reflect user and a power user often comes down to one thing: keyboard
              shortcuts. While clicking through menus works, mastering keyboard shortcuts can literally 10x your
              productivity and transform your thinking workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="feature-card text-center">
                <Keyboard className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Muscle Memory</h3>
                <p className="text-gray-400 text-sm">Build automatic workflows that don't interrupt your thinking</p>
              </div>
              <div className="feature-card text-center">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Speed</h3>
                <p className="text-gray-400 text-sm">Execute commands 5-10x faster than using menus</p>
              </div>
              <div className="feature-card text-center">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Focus</h3>
                <p className="text-gray-400 text-sm">Stay in flow state without breaking concentration</p>
              </div>
            </div>

            <h2>The Psychology of Keyboard Shortcuts</h2>
            <p>
              Before diving into specific shortcuts, it's important to understand why they're so powerful. When you use
              a mouse to navigate menus, you're engaging your visual processing system and breaking your train of
              thought. Keyboard shortcuts become muscle memory, allowing your conscious mind to stay focused on ideas
              rather than interface navigation.
            </p>

            <h2>Essential Shortcuts by Category</h2>

            {shortcuts.map((category, index) => (
              <div key={index} className="my-8">
                <h3>{category.category}</h3>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <div className="space-y-3">
                    {category.items.map((shortcut, shortcutIndex) => (
                      <div key={shortcutIndex} className="flex justify-between items-center">
                        <span className="text-gray-300">{shortcut.description}</span>
                        <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <h2>Power User Workflows</h2>
            <h3>The Quick Capture Flow</h3>
            <p>
              This is the most important workflow to master. When inspiration strikes, you need to capture it without
              losing momentum:
            </p>
            <ol>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Shift + N
                </kbd>{" "}
                - Create new note
              </li>
              <li>Type your idea immediately</li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + T
                </kbd>{" "}
                - Add relevant tags
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + S
                </kbd>{" "}
                - Save and continue
              </li>
            </ol>

            <h3>The Research Connection Flow</h3>
            <p>When you're deep in research and want to connect ideas:</p>
            <ol>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Shift + F
                </kbd>{" "}
                - Search for related concepts
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + L
                </kbd>{" "}
                - Create links to relevant notes
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + J
                </kbd>{" "}
                - Ask AI for additional connections
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Shift + L
                </kbd>{" "}
                - Review backlinks for context
              </li>
            </ol>

            <h3>The Daily Review Flow</h3>
            <p>For your daily or weekly review sessions:</p>
            <ol>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + K
                </kbd>{" "}
                - Open command palette
              </li>
              <li>Type "recent" to see recently modified notes</li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + J
                </kbd>{" "}
                - Ask AI to summarize recent activity
              </li>
              <li>
                Use{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Tab
                </kbd>{" "}
                to switch between related notes
              </li>
            </ol>

            <h2>Advanced Techniques</h2>
            <h3>Chord Combinations</h3>
            <p>Advanced users often combine shortcuts in rapid succession. Practice these common combinations:</p>
            <ul>
              <li>
                <strong>Quick Link Creation:</strong>{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + A
                </kbd>{" "}
                →{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + L
                </kbd>{" "}
                (Select all, then create link)
              </li>
              <li>
                <strong>Duplicate and Edit:</strong>{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + D
                </kbd>{" "}
                →{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + A
                </kbd>{" "}
                → Start typing (Duplicate note, select all, replace)
              </li>
              <li>
                <strong>Search and Replace:</strong>{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + F
                </kbd>{" "}
                →{" "}
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Shift + H
                </kbd>{" "}
                (Find, then replace)
              </li>
            </ul>

            <h3>Context-Aware Shortcuts</h3>
            <p>Some shortcuts behave differently depending on context:</p>
            <ul>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Enter
                </kbd>{" "}
                in search results opens the note; in edit mode creates a new line
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Tab
                </kbd>{" "}
                indents in lists but navigates in forms
              </li>
              <li>
                <kbd className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-purple-300 text-sm font-mono">
                  Cmd + Click
                </kbd>{" "}
                opens links in new tabs
              </li>
            </ul>

            <h2>Building Your Shortcut Muscle Memory</h2>
            <h3>The 21-Day Challenge</h3>
            <p>Research shows it takes about 21 days to form a habit. Here's a progressive approach:</p>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 my-6">
              <p className="text-purple-300 mb-2">
                <strong>Week 1: Foundation</strong>
              </p>
              <p className="text-gray-300 mb-4">Master the big 5: Cmd+K, Cmd+N, Cmd+F, Cmd+S, Cmd+J</p>

              <p className="text-purple-300 mb-2">
                <strong>Week 2: Navigation</strong>
              </p>
              <p className="text-gray-300 mb-4">Add navigation shortcuts: Cmd+P, Cmd+O, Cmd+W, Cmd+Tab</p>

              <p className="text-purple-300 mb-2">
                <strong>Week 3: Power Features</strong>
              </p>
              <p className="text-gray-300">Incorporate advanced shortcuts: Cmd+L, Cmd+T, Cmd+Shift+L, Cmd+D</p>
            </div>

            <h3>Practice Techniques</h3>
            <ul>
              <li>
                <strong>Deliberate Practice:</strong> Force yourself to use shortcuts even when it's slower initially
              </li>
              <li>
                <strong>Sticky Notes:</strong> Put shortcut reminders on your monitor for the first week
              </li>
              <li>
                <strong>Daily Challenges:</strong> Try to complete common tasks using only keyboard shortcuts
              </li>
            </ul>

            <h2>Customizing Your Shortcuts</h2>
            <h3>Personal Optimization</h3>
            <p>Reflect allows you to customize shortcuts based on your workflow:</p>
            <ul>
              <li>Identify your most common actions</li>
              <li>Assign easy-to-remember shortcuts to frequent tasks</li>
              <li>Create shortcuts for your personal templates</li>
              <li>Set up shortcuts for your most-used tags</li>
            </ul>

            <h2>Platform-Specific Tips</h2>
            <h3>Mac vs. Windows</h3>
            <p>While most shortcuts are similar, there are key differences:</p>
            <ul>
              <li>
                <strong>Mac:</strong> Cmd key is primary modifier
              </li>
              <li>
                <strong>Windows:</strong> Ctrl key replaces Cmd in most shortcuts
              </li>
              <li>
                <strong>Alt/Option:</strong> Used for special characters and alternate functions
              </li>
            </ul>

            <h2>Troubleshooting Common Issues</h2>
            <h3>Shortcuts Not Working?</h3>
            <ul>
              <li>Check if other apps are intercepting the shortcuts</li>
              <li>Ensure Reflect has focus (click in the app first)</li>
              <li>Some shortcuts only work in specific contexts (editing vs. viewing)</li>
              <li>Browser shortcuts might conflict with Reflect shortcuts</li>
            </ul>

            <h2>The Compound Effect</h2>
            <p>
              The real power of keyboard shortcuts isn't just speed—it's the compound effect of staying in flow state.
              When you can execute commands without thinking, your brain stays focused on ideas rather than interface
              mechanics.
            </p>

            <p>Users who master keyboard shortcuts report:</p>
            <ul>
              <li>50% faster note creation and editing</li>
              <li>Better idea capture (less friction = more ideas recorded)</li>
              <li>Improved focus and flow state maintenance</li>
              <li>Reduced cognitive load from interface navigation</li>
            </ul>

            <h2>Beyond Shortcuts: Workflow Optimization</h2>
            <p>Once you've mastered shortcuts, consider these advanced workflow optimizations:</p>
            <ul>
              <li>
                <strong>Template Shortcuts:</strong> Create shortcuts for your most-used templates
              </li>
              <li>
                <strong>Macro Combinations:</strong> Chain multiple shortcuts for complex operations
              </li>
              <li>
                <strong>Context Switching:</strong> Use shortcuts to quickly switch between different types of work
              </li>
            </ul>

            <h2>Your Next Steps</h2>
            <p>
              Don't try to learn all shortcuts at once. Pick 3-5 that address your biggest pain points and practice them
              for a week. Once they become automatic, add 3-5 more.
            </p>

            <p>
              Remember: the goal isn't to memorize every shortcut—it's to eliminate friction between your thoughts and
              your notes. Master the shortcuts that matter most to your workflow, and you'll find that Reflect becomes
              an extension of your thinking rather than a tool you have to consciously operate.
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
