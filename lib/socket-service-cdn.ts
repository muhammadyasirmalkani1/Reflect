"use client"

import { useEffect, useState } from "react"

export function useSocketIO() {
  const [socket, setSocket] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadSocketIO = async () => {
      try {
        // Check if Socket.IO is already loaded
        if (window.io) {
          initializeSocket()
          return
        }

        // Load Socket.IO from CDN
        const script = document.createElement("script")
        script.src = "https://cdn.socket.io/4.7.2/socket.io.min.js"
        script.async = true
        script.onload = () => initializeSocket()
        script.onerror = () => {
          setError(new Error("Failed to load Socket.IO from CDN"))
          setIsLoading(false)
        }
        document.head.appendChild(script)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error loading Socket.IO"))
        setIsLoading(false)
      }
    }

    const initializeSocket = () => {
      try {
        const io = window.io
        const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000", {
          reconnection: true,
          reconnectionAttempts: 5,
          reconnectionDelay: 1000,
        })

        setSocket(socketInstance)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to initialize Socket.IO"))
        setIsLoading(false)
      }
    }

    loadSocketIO()

    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [])

  return { socket, isLoading, error }
}

// Add this to make TypeScript happy
declare global {
  interface Window {
    io: any
  }
}
