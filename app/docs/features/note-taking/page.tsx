"Client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, FileText, ImageIcon, Bold, Italic, List, CheckSquare } from "lucide-react"

export default function NoteTakingPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs/core-concepts" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Core-Concepts
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Note Taking</h1>
        <p className="text-xl text-gray-300 mb-6">
          Master the art of effective note-taking with Reflect's powerful and intuitive tools.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
          <Image
            src="/img/Signature.svg?height=400&width=800"
            alt="Note Taking Interface"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Creating Your First Note</h2>
        <p className="text-gray-300 mb-6">
          Getting started with note-taking in Reflect is simple and intuitive. Every note is a flexible canvas where you
          can capture thoughts, ideas, and information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Quick Start</h3>
            <ol className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  1
                </span>
                <span>
                  Click the "+" button or press{" "}
                  <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+N</kbd>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  2
                </span>
                <span>Give your note a descriptive title</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  3
                </span>
                <span>Start writing in the editor</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  4
                </span>
                <span>Your note saves automatically</span>
              </li>
            </ol>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Pro Tips</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Use descriptive titles for better searchability</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Start with a brain dump, organize later</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Link to related notes as you write</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Use templates for recurring note types</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Rich Text Formatting</h2>
        <p className="text-gray-300 mb-6">
          Reflect supports rich text formatting to help you structure and emphasize your content effectively.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Basic Formatting</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <Bold className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Bold text</span>
                </div>
                <code className="text-xs text-gray-400">**text** or Ctrl+B</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <Italic className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Italic text</span>
                </div>
                <code className="text-xs text-gray-400">*text* or Ctrl+I</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <span className="w-4 h-4 text-purple-400 mr-2 font-mono text-xs">H</span>
                  <span className="text-gray-300">Headings</span>
                </div>
                <code className="text-xs text-gray-400"># ## ### ####</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <span className="w-4 h-4 text-purple-400 mr-2 font-mono text-xs">~</span>
                  <span className="text-gray-300">Strikethrough</span>
                </div>
                <code className="text-xs text-gray-400">~~text~~</code>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Lists and Structure</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <List className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Bullet list</span>
                </div>
                <code className="text-xs text-gray-400">- item or *</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <span className="w-4 h-4 text-purple-400 mr-2 font-mono text-xs">1.</span>
                  <span className="text-gray-300">Numbered list</span>
                </div>
                <code className="text-xs text-gray-400">1. item</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <CheckSquare className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Task list</span>
                </div>
                <code className="text-xs text-gray-400">- [ ] task</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-purple-500/20">
                <div className="flex items-center">
                  <span className="w-4 h-4 text-purple-400 mr-2 font-mono text-xs"></span>
                  <span className="text-gray-300">Quote block</span>
                </div>
                <code className="text-xs text-gray-400">{"> quote"}</code>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-card mb-6">
          <h3 className="text-xl font-bold mb-4">Markdown Example</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-200 mb-2">Markdown Input:</h4>
              <div className="bg-black/50 p-4 rounded border border-purple-500/20 font-mono text-sm">
                <div className="text-gray-300">
                  # Project Planning
                  <br />
                  <br />
                  ## Goals
                  <br />- **Primary**: Launch by Q2
                  <br />- *Secondary*: 10k users
                  <br />
                  <br />
                  ## Tasks
                  <br />- [x] Research phase
                  <br />- [ ] Design mockups
                  <br />- [ ] Development
                  <br />
                  <br />
                  {'> "The best time to plant a tree was 20 years ago. The second best time is now."'}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-2">Rendered Output:</h4>
              <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                <h1 className="text-2xl font-bold text-white mb-4">Project Planning</h1>
                <h2 className="text-xl font-bold text-gray-200 mb-2">Goals</h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                  <li>
                    <strong>Primary</strong>: Launch by Q2
                  </li>
                  <li>
                    <em>Secondary</em>: 10k users
                  </li>
                </ul>
                <h2 className="text-xl font-bold text-gray-200 mb-2">Tasks</h2>
                <ul className="mb-4 text-gray-300">
                  <li className="flex items-center">
                    <input type="checkbox" checked className="mr-2" /> Research phase
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Design mockups
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Development
                  </li>
                </ul>
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300">
                  "The best time to plant a tree was 20 years ago. The second best time is now."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Linking and Connections</h2>
        <p className="text-gray-300 mb-6">
          One of Reflect's most powerful features is the ability to create connections between your notes.
        </p>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Creating Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Double Bracket Links</h4>
                <p className="text-gray-300 text-sm mb-3">The most common way to link notes together.</p>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                  <code className="text-sm text-gray-300">
                    This connects to [[Another Note]]
                    <br />
                    You can also use [[Custom Link Text|Actual Note Title]]
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Hashtag Links</h4>
                <p className="text-gray-300 text-sm mb-3">Create categorical connections using tags.</p>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                  <code className="text-sm text-gray-300">
                    This note is about #productivity
                    <br />
                    Multiple tags: #work #planning #goals
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Backlinks</h3>
            <p className="text-gray-300 mb-4">
              When you link to a note, Reflect automatically creates a backlink. This creates a bidirectional connection
              that helps you navigate your knowledge base.
            </p>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <div className="mb-3">
                <h4 className="font-bold text-purple-300 mb-1">Note A mentions:</h4>
                <p className="text-gray-300 text-sm">I learned about [[Machine Learning]] today...</p>
              </div>
              <div className="border-t border-purple-500/20 pt-3">
                <h4 className="font-bold text-purple-300 mb-1">Machine Learning note shows:</h4>
                <p className="text-gray-300 text-sm">
                  <strong>Linked References:</strong>
                  <br />• Note A - "I learned about Machine Learning today..."
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Link Suggestions</h3>
            <p className="text-gray-300 mb-4">
              Reflect's AI can suggest relevant links as you write, helping you discover connections you might have
              missed.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Automatic suggestions based on content similarity</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Context-aware recommendations while typing</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Smart tag suggestions based on existing taxonomy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Media and Attachments</h2>
        <p className="text-gray-300 mb-6">
          Enhance your notes with images, files, and other media to create rich, comprehensive documentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card">
            <ImageIcon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Images</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Drag and drop images directly into notes</li>
              <li>• Paste from clipboard with Ctrl+V</li>
              <li>• Support for PNG, JPG, GIF, WebP</li>
              <li>• Automatic image optimization</li>
              <li>• Alt text for accessibility</li>
            </ul>
            <div className="bg-black/50 p-3 rounded border border-purple-500/20">
              <code className="text-xs text-gray-300">
                ![Alt text](image-url)
                <br />
                or drag & drop
              </code>
            </div>
          </div>

          <div className="feature-card">
            <FileText className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">File Attachments</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• PDF documents</li>
              <li>• Office files (Word, Excel, PowerPoint)</li>
              <li>• Audio recordings</li>
              <li>• Video files</li>
              <li>• Code files and archives</li>
            </ul>
            <div className="bg-black/50 p-3 rounded border border-purple-500/20">
              <code className="text-xs text-gray-300">
                [File Name](file-url)
                <br />
                Max size: 100MB per file
              </code>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-bold mb-4">Embedding Content</h3>
          <p className="text-gray-300 mb-4">Embed external content directly in your notes for a seamless experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-3 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">YouTube Videos</h4>
              <code className="text-xs text-gray-300">
                Paste YouTube URL
                <br />
                Auto-embeds player
              </code>
            </div>
            <div className="bg-black/50 p-3 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Tweets</h4>
              <code className="text-xs text-gray-300">
                Paste Twitter URL
                <br />
                Shows full tweet
              </code>
            </div>
            <div className="bg-black/50 p-3 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Web Pages</h4>
              <code className="text-xs text-gray-300">
                Paste any URL
                <br />
                Creates preview card
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Organization Strategies</h2>
        <p className="text-gray-300 mb-6">
          While Reflect doesn't use traditional folders, there are several effective ways to organize your notes.
        </p>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Tagging System</h3>
            <p className="text-gray-300 mb-4">
              Use hashtags to create flexible, overlapping categories for your notes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Hierarchical Tags</h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20 mb-3">
                  <code className="text-sm text-gray-300">
                    #work
                    <br />
                    #work/projects
                    <br />
                    #work/projects/alpha
                    <br />
                    #work/meetings
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Multi-dimensional Tags</h4>
                <div className="bg-black/50 p-3 rounded border border-purple-500/20 mb-3">
                  <code className="text-sm text-gray-300">
                    #status/in-progress
                    <br />
                    #priority/high
                    <br />
                    #type/research
                    <br />
                    #team/engineering
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Index Notes</h3>
            <p className="text-gray-300 mb-4">Create "hub" notes that serve as entry points to related topics.</p>
            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Example: Project Alpha Index</h4>
              <div className="text-gray-300 text-sm">
                <p className="mb-2">## Overview</p>
                <p className="mb-2">[[Project Alpha - Goals and Objectives]]</p>
                <p className="mb-2">[[Project Alpha - Timeline and Milestones]]</p>
                <p className="mb-2">## Team</p>
                <p className="mb-2">[[Project Alpha - Team Members]]</p>
                <p className="mb-2">[[Project Alpha - Roles and Responsibilities]]</p>
                <p className="mb-2">## Resources</p>
                <p>[[Project Alpha - Budget and Resources]]</p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Daily Notes</h3>
            <p className="text-gray-300 mb-4">
              Use daily notes as a capture mechanism and launching pad for more permanent notes.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Quick capture of thoughts and ideas</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Meeting notes and action items</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Links to important notes created that day</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Reflection and review of the day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Templates</h3>
            <p className="text-gray-300 mb-4">Create reusable note templates for common formats and workflows.</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Meeting notes template</li>
              <li>• Project planning template</li>
              <li>• Daily journal template</li>
              <li>• Research note template</li>
              <li>• Book review template</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Quick Capture</h3>
            <p className="text-gray-300 mb-4">Rapidly capture ideas without interrupting your workflow.</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Global hotkey for instant capture</li>
              <li>• Browser extension for web clipping</li>
              <li>• Mobile quick add widget</li>
              <li>• Email-to-note functionality</li>
              <li>• Voice-to-text transcription</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Version History</h3>
            <p className="text-gray-300 mb-4">Track changes and revert to previous versions of your notes.</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Automatic version snapshots</li>
              <li>• Visual diff comparison</li>
              <li>• One-click restore</li>
              <li>• 30-day history retention</li>
              <li>• Export version history</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-gray-300 mb-4">Share and collaborate on notes with team members.</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Real-time collaborative editing</li>
              <li>• Comment and suggestion system</li>
              <li>• Permission management</li>
              <li>• Share via secure links</li>
              <li>• Team workspaces</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Best Practices</h2>
        <div className="space-y-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Writing Effective Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-300 mb-2">✅ Do</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Write in your own words</li>
                  <li>• Use clear, descriptive titles</li>
                  <li>• Link to related concepts</li>
                  <li>• Add context and examples</li>
                  <li>• Review and update regularly</li>
                  <li>• Use consistent formatting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-300 mb-2">❌ Don't</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Copy-paste without processing</li>
                  <li>• Use vague or generic titles</li>
                  <li>• Create isolated notes</li>
                  <li>• Overcomplicate structure</li>
                  <li>• Neglect regular maintenance</li>
                  <li>• Mix unrelated topics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Workflow Recommendations</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-gray-200">Capture First</strong>
                  <p className="text-sm">Get ideas down quickly without worrying about perfect organization</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-gray-200">Process Later</strong>
                  <p className="text-sm">Review, refine, and add connections during dedicated processing time</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-gray-200">Connect Actively</strong>
                  <p className="text-sm">Look for opportunities to link new notes to existing knowledge</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-gray-200">Review Regularly</strong>
                  <p className="text-sm">Periodically revisit and update notes to keep them current and valuable</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/core-concepts">
            <ArrowLeft className="mr-2 h-4 w-4" /> Core Concepts
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/features/ai-assistant">
            AI Assistant <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
