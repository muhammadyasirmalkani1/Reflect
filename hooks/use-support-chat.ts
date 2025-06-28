"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useToast } from "@/hooks/use-toast"
import { v4 as uuidv4 } from "uuid"

// Types
interface SupportAgent {
  id: string
  name: string
  avatar: string
}

interface SupportMessage {
  id: string
  sender: {
    id: string
    name: string
    avatar: string
    isAgent: boolean
  }
  content: string
  timestamp: string
  attachments: Array<{
    id: string
    name: string
    size: number
    type: string
    url: string
  }>
  status?: "sending" | "sent" | "delivered" | "read" | "error"
}

interface SupportChatState {
  messages: SupportMessage[]
  isConnected: boolean
  isConnecting: boolean
  supportAgent: SupportAgent | null
  isAgentTyping: boolean
  ticketId: string | null
  ticketStatus: "open" | "pending" | "resolved" | null
  connect: () => void
  disconnect: () => void
  sendMessage: (content: string, attachments?: any[]) => void
}

// Mock data for demo purposes
const MOCK_AGENTS = [
  {
    id: "agent-1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "agent-2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "agent-3",
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const AUTO_RESPONSES = [
  "Hi there! I'm here to help. What can I assist you with today?",
  "Thanks for reaching out. Could you please provide more details about your issue?",
  "I understand your concern. Let me look into this for you.",
  "Have you tried clearing your cache and restarting the application?",
  "That's a great question! Let me explain how that feature works.",
  "I'm checking our documentation for the most up-to-date information on this.",
  "Would you mind sharing a screenshot of the error you're seeing?",
  "I've created a ticket for this issue. Our development team will investigate further.",
  "Is there anything else you'd like help with today?",
  "Thank you for your patience. I'm still working on finding a solution for you.",
]

export function useSupportChat(): SupportChatState {
  const [messages, setMessages] = useState<SupportMessage[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [supportAgent, setSupportAgent] = useState<SupportAgent | null>(null)
  const [isAgentTyping, setIsAgentTyping] = useState(false)
  const [ticketId, setTicketId] = useState<string | null>(null)
  const [ticketStatus, setTicketStatus] = useState<"open" | "pending" | "resolved" | null>(null)
  const { toast } = useToast()

  // Use refs to store timeouts so they can be cleared
  const connectTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const responseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (connectTimeoutRef.current) clearTimeout(connectTimeoutRef.current)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
      if (responseTimeoutRef.current) clearTimeout(responseTimeoutRef.current)
    }
  }, [])

  // Connect to support chat
  const connect = useCallback(() => {
    setIsConnecting(true)

    // Simulate connection delay
    connectTimeoutRef.current = setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)

      // Assign a random agent
      const randomAgent = MOCK_AGENTS[Math.floor(Math.random() * MOCK_AGENTS.length)]
      setSupportAgent(randomAgent)

      // Generate a ticket ID
      const newTicketId = uuidv4()
      setTicketId(newTicketId)
      setTicketStatus("open")

      // Show typing indicator after a short delay
      typingTimeoutRef.current = setTimeout(() => {
        setIsAgentTyping(true)

        // Send welcome message after "typing"
        responseTimeoutRef.current = setTimeout(() => {
          setIsAgentTyping(false)

          const welcomeMessage: SupportMessage = {
            id: uuidv4(),
            sender: {
              id: randomAgent.id,
              name: randomAgent.name,
              avatar: randomAgent.avatar,
              isAgent: true,
            },
            content: `Hello! I'm ${randomAgent.name} from the Reflect support team. How can I help you today?`,
            timestamp: new Date().toISOString(),
            attachments: [],
          }

          setMessages([welcomeMessage])
        }, 2000)
      }, 1000)

      toast({
        title: "Connected to support",
        description: "You are now connected to our support team.",
      })
    }, 1500)
  }, [toast])

  // Disconnect from support chat
  const disconnect = useCallback(() => {
    // Clear any pending timeouts
    if (connectTimeoutRef.current) clearTimeout(connectTimeoutRef.current)
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    if (responseTimeoutRef.current) clearTimeout(responseTimeoutRef.current)

    setIsConnected(false)
    setIsConnecting(false)
    setIsAgentTyping(false)

    // Don't reset messages or ticket info to preserve chat history

    toast({
      title: "Disconnected from support",
      description: "Your chat session has ended.",
    })
  }, [toast])

  // Send a message
  const sendMessage = useCallback(
    (content: string, attachments: any[] = []) => {
      if (!isConnected) return

      // Create a new message
      const newMessage: SupportMessage = {
        id: uuidv4(),
        sender: {
          id: "current-user",
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          isAgent: false,
        },
        content,
        timestamp: new Date().toISOString(),
        attachments,
        status: "sending",
      }

      // Add message to state
      setMessages((prev) => [...prev, newMessage])

      // Simulate message sending delay
      setTimeout(() => {
        setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "sent" } : msg)))

        // Simulate message delivery
        setTimeout(() => {
          setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg)))

          // Show agent typing indicator
          typingTimeoutRef.current = setTimeout(() => {
            setIsAgentTyping(true)

            // Send auto response
            responseTimeoutRef.current = setTimeout(
              () => {
                setIsAgentTyping(false)

                // Mark user message as read
                setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg)))

                // Generate agent response
                if (supportAgent) {
                  const responseMessage: SupportMessage = {
                    id: uuidv4(),
                    sender: {
                      id: supportAgent.id,
                      name: supportAgent.name,
                      avatar: supportAgent.avatar,
                      isAgent: true,
                    },
                    content: AUTO_RESPONSES[Math.floor(Math.random() * AUTO_RESPONSES.length)],
                    timestamp: new Date().toISOString(),
                    attachments: [],
                  }

                  setMessages((prev) => [...prev, responseMessage])
                }
              },
              2000 + Math.random() * 2000,
            ) // Random typing time between 2-4 seconds
          }, 1000)
        }, 500)
      }, 1000)
    },
    [isConnected, supportAgent],
  )

  return {
    messages,
    isConnected,
    isConnecting,
    supportAgent,
    isAgentTyping,
    ticketId,
    ticketStatus,
    connect,
    disconnect,
    sendMessage,
  }
}
