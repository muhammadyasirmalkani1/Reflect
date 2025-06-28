"Client";

import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Reflect Documentation</h1>

      <div className="mb-8">
        <p className="text-xl text-gray-300 mb-4">
          Welcome to the Reflect documentation. Here you'll find comprehensive guides and documentation to help you
          start working with Reflect as quickly as possible.
        </p>
        <p className="text-gray-400 mb-6">
          Reflect is an AI-powered note-taking and thinking tool designed to help you organize your thoughts, generate
          ideas, and make connections between concepts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
          >
            <Link href="/docs/quick-start">Quick Start Guide</Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
            <Link href="/docs/features/ai-assistant">AI Assistant</Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
            <Link href="/docs/advanced/keyboard-shortcuts">Keyboard Shortcuts</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="feature-card">
          <h2 className="text-xl font-bold mb-3">Getting Started</h2>
          <p className="text-gray-400 mb-4">
            New to Reflect? Start here to learn the basics and get up and running quickly.
          </p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link href="/docs/quick-start" className="text-purple-400 hover:text-purple-300 flex items-center">
                Quick Start Guide <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link href="/docs/installation" className="text-purple-400 hover:text-purple-300 flex items-center">
                Installation <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link href="/docs/core-concepts" className="text-purple-400 hover:text-purple-300 flex items-center">
                Core Concepts <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <h2 className="text-xl font-bold mb-3">Features</h2>
          <p className="text-gray-400 mb-4">
            Explore Reflect's powerful features to get the most out of your note-taking experience.
          </p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link
                href="/docs/features/note-taking"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                Note Taking <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link
                href="/docs/features/ai-assistant"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                AI ChatGPT <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link
                href="/docs/features/connections"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                Connections <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <h2 className="text-xl font-bold mb-3">Advanced Usage</h2>
          <p className="text-gray-400 mb-4">
            Take your Reflect experience to the next level with advanced features and customizations.
          </p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link
                href="/docs/advanced/keyboard-shortcuts"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                Keyboard Shortcuts <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link href="/docs/advanced/templates" className="text-purple-400 hover:text-purple-300 flex items-center">
                Templates <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link href="/docs/advanced/api" className="text-purple-400 hover:text-purple-300 flex items-center">
                API <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <h2 className="text-xl font-bold mb-3">Troubleshooting</h2>
          <p className="text-gray-400 mb-4">Find solutions to common issues and get help when you need it.</p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link
                href="/docs/troubleshooting/faq"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                FAQ <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link
                href="/docs/troubleshooting/common-issues"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                Common Issues <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link
                href="/docs/troubleshooting/support"
                className="text-purple-400 hover:text-purple-300 flex items-center"
              >
                Support <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="feature-card">
        <h2 className="text-xl font-bold mb-3">Video Tutorials</h2>
        <p className="text-gray-400 mb-6">Learn how to use Reflect with these step-by-step video tutorials.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-500/20">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/80 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white">Getting Started with Reflect</h3>
              <p className="text-sm text-gray-400">Learn the basics of Reflect in this introductory tutorial.</p>
              <Button asChild variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto mt-2">
                <Link href="/docs/video-tutorials#getting-started">
                  Watch Now <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-500/20">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/80 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white">Advanced AI Features</h3>
              <p className="text-sm text-gray-400">
                Discover how to leverage Reflect's AI assistant for better thinking.
              </p>
              <Button asChild variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto mt-2">
                <Link href="/docs/video-tutorials#core-features">
                  Watch Now <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
            <Link href="/docs/video-tutorials">
              View All Video Tutorials <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
