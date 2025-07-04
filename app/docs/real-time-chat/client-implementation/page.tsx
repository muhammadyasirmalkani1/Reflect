"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ClientImplementationPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link
          href="/docs/real-time-chat/server-setup"
          className="text-purple-400 hover:text-purple-300 flex items-center mb-2"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Server Setup
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Client Implementation</h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to implement the client-side components of a real-time chat system in your React application.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Socket.IO Client Setup</h2>
        <p className="text-gray-300 mb-6">
          The client-side implementation involves connecting to the WebSocket server and managing chat state.
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Basic Socket Service</h3>
          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              {`// lib/socket-service.ts
import { io, Socket } from 'socket.io-client'

class SocketService {
  private socket: Socket | null = null

  connect() {
    this.socket = io('http://localhost:4000')
    
    this.socket.on('connect', () => {
      console.log('Connected to server')
    })
  }

  sendMessage(roomId: string, content: string) {
    if (this.socket) {
      this.socket.emit('send-message', { roomId, content })
    }
  }

  on(event: string, callback: Function) {
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }
}

export const socketService = new SocketService()`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">React Chat Hook</h2>
        <div className="feature-card mb-8">
          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              {`// hooks/use-chat.ts
import { useState, useEffect } from 'react'
import { socketService } from '@/lib/socket-service'

export function useChat(roomId: string) {
  const [messages, setMessages] = useState([])
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    socketService.connect()
    setIsConnected(true)

    socketService.on('message', (message) => {
      setMessages(prev => [...prev, message])
    })

    return () => {
      setIsConnected(false)
    }
  }, [])

  const sendMessage = (content: string) => {
    socketService.sendMessage(roomId, content)
  }

  return { messages, isConnected, sendMessage }
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Chat Component</h2>
        <div className="feature-card mb-8">
          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              {`// components/chat.tsx
import { useState } from 'react'
import { useChat } from '@/hooks/use-chat'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Chat({ roomId }: { roomId: string }) {
  const [input, setInput] = useState('')
  const { messages, isConnected, sendMessage } = useChat(roomId)

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input)
      setInput('')
    }
  }

  return (
    <div className="flex flex-col h-96 border rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={!isConnected}
        />
        <Button onClick={handleSend} disabled={!isConnected}>
          Send
        </Button>
      </div>
    </div>
  )
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Advanced Features</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• File attachments and media sharing</li>
              <li>• Typing indicators and read receipts</li>
              <li>• Message reactions and threading</li>
              <li>• User presence and status</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Performance</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Message pagination and virtualization</li>
              <li>• Optimistic updates</li>
              <li>• Connection retry logic</li>
              <li>• Offline message queuing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
