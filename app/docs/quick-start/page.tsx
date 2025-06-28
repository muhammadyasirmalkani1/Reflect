"Client";

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Documentation
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Quick Start Guide</h1>
        <p className="text-xl text-gray-300 mb-6">
          Get up and running with Reflect in minutes. This guide will walk you through the basics of creating notes,
          using the AI assistant, and connecting ideas.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">1. Create Your Account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p className="text-gray-300 mb-4">
              To get started with Reflect, you'll need to create an account. Visit our website and click the "Get
              Started" button.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">1</span>
                </div>
                <span>
                  Go to{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    reflect.app
                  </a>{" "}
                  and click "Get Started"
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">2</span>
                </div>
                <span>Enter your email address and create a password</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">3</span>
                </div>
                <span>Verify your email address</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">4</span>
                </div>
                <span>Complete the optional onboarding survey to personalize your experience</span>
              </li>
            </ul>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
            >
              <Link href="#">Create Your Account</Link>
            </Button>
          </div>
          <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src="/img/Computer.jpeg?height=300&width=500"
              alt="Reflect signup screen"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">2. Install Reflect</h2>
        <p className="text-gray-300 mb-4">
          Reflect works on all major platforms. Choose your platform below to get started:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">macOS</h3>
            <p className="text-gray-400 mb-4">For macOS 10.15 or later</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="#">Download for Mac</Link>
            </Button>
          </div>

          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3h18v18H3zM15 19h2v-6h-2zM11 19h2V9h-2zM7 19h2v-4H7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Windows</h3>
            <p className="text-gray-400 mb-4">For Windows 10 or later</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="#">Download for Windows</Link>
            </Button>
          </div>

          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v3H3V3h18v3H10v12h11zm-9-2V8H5v8h7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Web App</h3>
            <p className="text-gray-400 mb-4">Use Reflect in your browser</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="#">Open Web App</Link>
            </Button>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="text-lg font-bold mb-2">Mobile Apps</h3>
          <p className="text-gray-300 mb-4">
            Reflect is also available on iOS and Android. Scan the QR code below or search for "Reflect" in the App
            Store or Google Play.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-4">
              <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                  </svg>
                  App Store
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  Google Play
                </Link>
              </Button>
            </div>
            <div className="w-24 h-24 bg-purple p-2 rounded">
              <div className="w-full h-full bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">3. Create Your First Note</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src="/img/Code-1.png?height=250&width=450"
              alt="Creating a note in Reflect"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="text-gray-300 mb-4">Now that you've installed Reflect, let's create your first note:</p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">1</span>
                </div>
                <span>
                  Click the "+" button in the top right corner or use the keyboard shortcut{" "}
                  <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Cmd</kbd> +{" "}
                  <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">N</kbd>
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">2</span>
                </div>
                <span>Give your note a title by typing at the top of the page</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">3</span>
                </div>
                <span>Start writing your note. You can use Markdown formatting if you're familiar with it</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">4</span>
                </div>
                <span>Your note is automatically saved as you type</span>
              </li>
            </ul>
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Pro Tip</h4>
              <p className="text-gray-300">
                Use the <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/</code>{" "}
                command to access formatting options, insert media, and more. Try typing{" "}
                <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/</code> in your
                note to see all available commands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">4. Try the AI Assistant</h2>
        <p className="text-gray-300 mb-4">
          One of Reflect's most powerful features is the AI assistant. Let's try it out:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">1</span>
                </div>
                <span>
                  In your note, type{" "}
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/ai</code> to
                  bring up the AI command menu
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">2</span>
                </div>
                <span>
                  Select "Generate ideas" or type{" "}
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                    /ai generate ideas about [your topic]
                  </code>
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">3</span>
                </div>
                <span>The AI will generate a list of ideas related to your topic</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">4</span>
                </div>
                <span>You can accept, edit, or regenerate the AI's suggestions</span>
              </li>
            </ul>
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Try These AI Commands</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                    /ai summarize
                  </code>{" "}
                  - Summarize your note
                </li>
                <li>
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/ai expand</code>{" "}
                  - Expand on a specific point
                </li>
                <li>
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/ai outline</code>{" "}
                  - Create an outline for your topic
                </li>
              </ul>
            </div>
          </div>
          <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src="/img/Code-2.png?height=300&width=500"
              alt="Using the AI assistant in Reflect"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">5. Connect Your Notes</h2>
        <p className="text-gray-300 mb-4">
          Reflect's power comes from connecting your notes to build a network of knowledge:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <Image
              src="/img/Code-3.png?height=300&width=500"
              alt="Connecting notes in Reflect"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">1</span>
                </div>
                <span>Create a second note by clicking the "+" button again</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">2</span>
                </div>
                <span>
                  To create a manual link, type{" "}
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">[[</code> followed
                  by the name of your first note
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">3</span>
                </div>
                <span>Select the note from the dropdown and press Enter</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-400 text-xs">4</span>
                </div>
                <span>
                  You can also use the AI to suggest connections by typing{" "}
                  <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/ai connect</code>
                </span>
              </li>
            </ul>
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Pro Tip</h4>
              <p className="text-gray-300">
                View your note connections visually by clicking the "Graph View" button in the sidebar or using the
                keyboard shortcut{" "}
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Cmd</kbd> +{" "}
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">G</kbd>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Next Steps</h2>
        <p className="text-gray-300 mb-6">
          Congratulations! You've learned the basics of using Reflect. Here are some next steps to explore:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Explore Features</h3>
            <p className="text-gray-400 mb-4">Discover all the powerful features Reflect has to offer.</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="/docs/features">View Features</Link>
            </Button>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Learn Advanced Usage</h3>
            <p className="text-gray-400 mb-4">Take your note-taking to the next level with advanced techniques.</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="/docs/advanced">Advanced Guide</Link>
            </Button>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Join the Community</h3>
            <p className="text-gray-400 mb-4">Connect with other Reflect users to share tips and workflows.</p>
            <Button asChild variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
              <Link href="#">Join Discord</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Introduction
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/installation">
            Installation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
