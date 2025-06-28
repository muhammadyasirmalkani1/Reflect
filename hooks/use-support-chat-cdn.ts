"use client"

import { useState, useEffect, useCallback } from "react"
import { useSocketIO } from "@/lib/socket-service-cdn"
import { useToast } from "@/hooks/use-toast"

export function useSupportChat() {
  const [messages, setMessages] = useState<any[]>([])
  const [isAgentTyping, setIsAgentTyping] = useState(false)
  const [supportAgent, setSupportAgent] = useState<any>(null)
  const [ticketId, setTicketId] = useState<string | null>(null)
  const [ticketStatus, setTicketStatus] = useState<string>("open")
  const { socket, isLoading, error } = useSocketIO()
  const { toast } = useToast()

  // Handle connection status
  const isConnected = !!socket?.connected
  const isConnecting = isLoading || (socket && !socket.connected)

  // Connect to support chat
  const connect = useCallback(() => {
    // The socket is automatically connected when the hook is initialized
    if (socket) {
      // Join support channel
      socket.emit("join-support", { userId: "user-123" }) // Replace with actual user ID
    }
  }, [socket])

  // Disconnect from support chat
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect()
    }
  }, [socket])

  // Send a message
  const sendMessage = useCallback(
    (content: string, attachments: any[] = []) => {
      if (!socket || !isConnected) {
        toast({
          title: "Not connected",
          description: "Please wait until connection is established",
          variant: "destructive",
        })
        return
      }

      const message = {
        id: Date.now().toString(),
        content,
        attachments,
        timestamp: new Date().toISOString(),
      }

      socket.emit("send-support-message", message)

      // Add message to local state (optimistic update)
      setMessages((prev) => [
        ...prev,
        {
          ...message,
          sender: {
            id: "user-123", // Replace with actual user ID
            name: "You",
            avatar: "/placeholder.svg?height=40&width=40",
            isCurrentUser: true,
          },
        },
      ])
    },
    [socket, isConnected, toast],
  )

  // Set up socket event listeners
  useEffect(() => {
    if (!socket) return

    // Handle incoming messages
    socket.on("support-message", (message: any) => {
      setMessages((prev) => [...prev, message])
    })

    // Handle agent typing indicator
    socket.on("agent-typing", (isTyping: boolean) => {
      setIsAgentTyping(isTyping)
    })

    // Handle agent info
    socket.on("agent-assigned", (agent: any) => {
      setSupportAgent(agent)
      toast({
        title: "Agent assigned",
        description: `${agent.name} has been assigned to your chat`,
      })
    })

    // Handle ticket creation
    socket.on("ticket-created", (ticket: any) => {
      setTicketId(ticket.id)
      setTicketStatus(ticket.status)
      toast({
        title: "Support ticket created",
        description: `Ticket #${ticket.id.substring(0, 8)} has been created`,
      })
    })

    // Handle ticket status updates
    socket.on("ticket-status-updated", (status: string) => {
      setTicketStatus(status)
      toast({
        title: "Ticket status updated",
        description: `Your ticket is now ${status}`,
      })
    })

    // Handle connection errors
    socket.on("connect_error", (err: Error) => {
      toast({
        title: "Connection error",
        description: err.message,
        variant: "destructive",
      })
    })

    return () => {
      socket.off("support-message")
      socket.off("agent-typing")
      socket.off("agent-assigned")
      socket.off("ticket-created")
      socket.off("ticket-status-updated")
      socket.off("connect_error")
    }
  }, [socket, toast])

  // Handle connection error
  useEffect(() => {
    if (error) {
      toast({
        title: "Socket.IO Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }, [error, toast])

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
