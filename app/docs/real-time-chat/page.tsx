import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import RealTimeChatDiagram from "@/components/docs/real-time-chat-diagram"

export default function RealTimeChatPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Documentation
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Real-Time Chat Implementation</h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to implement real-time chat functionality in your Reflect application using WebSockets and modern
          React patterns.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Overview</h2>
        <p className="text-gray-300 mb-4">
          Real-time chat is a powerful feature that enables instant communication between users. This guide will walk
          you through implementing a robust real-time chat system in Reflect using WebSockets, with a focus on
          performance, reliability, and user experience.
        </p>

        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
          <RealTimeChatDiagram />
        </div>

        <p className="text-gray-300 mb-6">Our real-time chat implementation consists of several key components:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">WebSocket Connection</h3>
            <p className="text-gray-300">
              A persistent connection between the client and server that allows for bidirectional communication without
              the overhead of HTTP requests.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Message Management</h3>
            <p className="text-gray-300">
              Handling message sending, receiving, and storage, including support for text, code snippets, and file
              attachments.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">State Synchronization</h3>
            <p className="text-gray-300">
              Keeping the chat state synchronized across all connected clients, with optimistic updates and conflict
              resolution.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Presence Indicators</h3>
            <p className="text-gray-300">
              Showing when users are online, typing, or have read messages, enhancing the interactive experience.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Getting Started</h2>
        <p className="text-gray-300 mb-6">
          To implement real-time chat in your Reflect application, you'll need to set up both client and server
          components. Let's start with the basic requirements:
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Prerequisites</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Node.js server with WebSocket support (using Socket.IO or a similar library)</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Client-side WebSocket library (Socket.IO client)</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Database for message persistence (MongoDB, PostgreSQL, etc.)</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Authentication system to identify users</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-3">Installation</h3>
        <p className="text-gray-300 mb-4">First, install the necessary dependencies for both client and server:</p>

        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Server dependencies:</p>
          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm mb-4">
            npm install socket.io express @socket.io/mongo-adapter mongodb
          </div>

          <p className="text-sm text-gray-400 mb-2">Client dependencies:</p>
          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
            npm install socket.io-client zustand
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div></div>
          <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
            <Link href="/docs/real-time-chat/server-setup">
              Server Setup <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
