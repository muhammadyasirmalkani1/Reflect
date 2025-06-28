"Client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link
          href="/docs/features/connections"
          className="text-purple-400 hover:text-purple-300 flex items-center mb-2"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Connections
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Search</h1>
        <p className="text-xl text-gray-300 mb-6">
          Reflect's AI helps you organize your thoughts, generate ideas, and
          make connections between concepts.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
        </div>

        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Overview
        </h2>
        <p className="text-gray-300 mb-4">
          The AI is one of Reflect's most powerful features. It uses advanced
          natural language processing to understand your notes and provide
          intelligent suggestions, summaries, and connections.
        </p>
        <p className="text-gray-300 mb-6">
          Unlike traditional note-taking apps, Reflect doesn't just store your
          notes—it helps you think better by surfacing relevant information when
          you need it and generating new insights based on your existing
          knowledge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Key Capabilities</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Generate ideas and outlines
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Summarize long notes and articles
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Discover connections between notes
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Answer questions about your notes
                </span>
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Save time by automating routine tasks
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Overcome writer's block with AI-generated suggestions
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Discover insights you might have missed
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="w-3 h-3 text-purple-400"
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
                <span className="text-gray-300">
                  Build a more connected knowledge base
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          How to Use the AI Assistant
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Accessing the AI Assistant</h3>
          <p className="text-gray-300 mb-4">
            You can access the AI assistant in several ways:
          </p>
          <ul className="space-y-2 mb-6 text-gray-300">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <span className="text-purple-400 text-xs">1</span>
              </div>
              <span>Click the AI button in the top toolbar of any note</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <span className="text-purple-400 text-xs">2</span>
              </div>
              <span>
                Use the keyboard shortcut{" "}
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                  Ctrl
                </kbd>{" "}
                +{" "}
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                  Space
                </kbd>
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <span className="text-purple-400 text-xs">3</span>
              </div>
              <span>
                Type{" "}
                <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                  /ai
                </code>{" "}
                in any note to bring up the AI command menu
              </span>
            </li>
          </ul>

          <div className="feature-card mb-8">
            <h4 className="text-lg font-bold mb-2">Pro Tip</h4>
            <p className="text-gray-300">
              You can customize the AI chat behavior in Settings → AI Assistant.
              This allows you to adjust the creativity level, response length,
              and other parameters to suit your preferences.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Common AI Commands</h3>
          <p className="text-gray-300 mb-4">
            Here are some useful commands you can use with the AI assistant:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-900/20">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                    Command
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                    Description
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-900/20">
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai summarize
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Summarize the current note
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai summarize in 3 bullet points
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/20">
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai expand
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Expand on a topic or idea
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai expand on the benefits of meditation
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/20">
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai connect
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Find connections to other notes
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai connect this to my project notes
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/20">
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai outline
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Create an outline for a topic
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai outline for my research paper
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/20">
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai ask
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Ask a question about your notes
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                      /ai ask what did I write about quantum computing?
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Example Use Cases</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Research Assistant</h4>
              <p className="text-gray-300 mb-3">
                Use the AI to help with research by summarizing articles,
                generating questions, and connecting ideas across your research
                notes.
              </p>
              <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                <code className="text-sm text-gray-300">
                  /ai summarize this research paper and highlight the key
                  findings
                </code>
              </div>
            </div>

            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Writing Assistant</h4>
              <p className="text-gray-300 mb-3">
                Overcome writer's block by asking the AI to help generate ideas,
                outlines, or even draft sections of your writing.
              </p>
              <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                <code className="text-sm text-gray-300">
                  /ai help me brainstorm 10 creative opening paragraphs for my
                  blog post
                </code>
              </div>
            </div>

            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Learning Companion</h4>
              <p className="text-gray-300 mb-3">
                Enhance your learning by asking the AI to explain concepts,
                create quizzes, or connect new information to what you already
                know.
              </p>
              <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                <code className="text-sm text-gray-300">
                  /ai explain the concept of neural networks in simple terms and
                  relate it to my notes on machine learning
                </code>
              </div>
            </div>

            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Project Manager</h4>
              <p className="text-gray-300 mb-3">
                Use the AI to help organize project notes, generate task lists,
                and identify dependencies between different parts of your
                project.
              </p>
              <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                <code className="text-sm text-gray-300">
                  /ai create a timeline and task breakdown for my website
                  redesign project
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Privacy and Security
        </h2>
        <p className="text-gray-300 mb-4">
          We take your privacy seriously. Here's how we protect your data when
          using the AI assistant:
        </p>

        <ul className="space-y-3 mb-6 text-gray-300">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
              <svg
                className="w-3 h-3 text-purple-400"
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
            <span>
              All AI processing is done on our secure servers with end-to-end
              encryption
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
              <svg
                className="w-3 h-3 text-purple-400"
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
            <span>Your notes are never used to train our AI models</span>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
              <svg
                className="w-3 h-3 text-purple-400"
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
            <span>
              You can disable AI features entirely in Settings → Privacy if you
              prefer
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
              <svg
                className="w-3 h-3 text-purple-400"
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
            <span>
              We comply with GDPR, CCPA, and other privacy regulations
            </span>
          </li>
        </ul>

        <div className="feature-card">
          <h4 className="text-lg font-bold mb-2">Local Processing Option</h4>
          <p className="text-gray-300">
            Pro users can enable local AI processing, which runs the AI
            assistant directly on your device without sending data to our
            servers. This option provides maximum privacy but may be less
            powerful than our cloud-based AI.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">
              Does the AI assistant work offline?
            </h3>
            <p className="text-gray-300">
              The standard AI assistant requires an internet connection.
              However, Pro users can enable the local processing option, which
              works offline with a smaller, less powerful AI model.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">
              Can I customize the AI's responses?
            </h3>
            <p className="text-gray-300">
              Yes, you can adjust the AI's creativity level, response length,
              and tone in Settings → AI Assistant. You can also create custom AI
              commands for your specific workflows.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">
              Is there a limit to how much I can use the AI assistant?
            </h3>
            <p className="text-gray-300">
              Free users have a monthly quota of AI requests. Pro users have
              unlimited access to the AI assistant. You can view your current
              usage in Settings → Account.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">
              How accurate is the AI assistant?
            </h3>
            <p className="text-gray-300">
              While our AI is highly advanced, it's not perfect. Always review
              AI-generated content for accuracy, especially for critical or
              sensitive information. The AI works best as a thinking partner,
              not a replacement for your own judgment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/features/note-taking">
            <ArrowLeft className="mr-2 h-4 w-4" /> Note Taking
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/features/connections">
            Connections <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
