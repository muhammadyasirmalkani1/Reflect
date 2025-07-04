const { Server } = require("socket.io")
const http = require("http")
const express = require("express")

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:4000",
    methods: ["GET", "POST"],
  },
})

// Support agents store (in a real app, this would be in a database)
const supportAgents = {
  "agent-1": {
    id: "agent-1",
    name: "Alex Support",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  "agent-2": {
    id: "agent-2",
    name: "Sam Helper",
    avatar: "/placeholder.svg?height=40&width=40",
  },
}

// Active tickets
const activeTickets = new Map()

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  // Handle user joining support
  socket.on("join-support", ({ userId }) => {
    // Create or retrieve ticket
    const ticketId = `ticket-${Date.now()}`

    // Assign a random agent
    const agentIds = Object.keys(supportAgents)
    const randomAgentId = agentIds[Math.floor(Math.random() * agentIds.length)]
    const agent = supportAgents[randomAgentId]

    // Store ticket info
    activeTickets.set(ticketId, {
      id: ticketId,
      userId,
      agentId: agent.id,
      status: "open",
      createdAt: new Date().toISOString(),
    })

    // Join ticket room
    socket.join(ticketId)

    // Send ticket and agent info to client
    socket.emit("ticket-created", { id: ticketId, status: "open" })
    socket.emit("agent-assigned", agent)

    // Send welcome message
    socket.emit("support-message", {
      id: `msg-${Date.now()}`,
      sender: {
        ...agent,
        isCurrentUser: false,
      },
      content: "Hello! How can I help you today?",
      timestamp: new Date().toISOString(),
      attachments: [],
    })
  })

  // Handle user sending a message
  socket.on("send-support-message", (message) => {
    // Find the ticket this user is part of
    let userTicket = null
    for (const [ticketId, ticket] of activeTickets.entries()) {
      if (ticket.userId === message.userId) {
        userTicket = { id: ticketId, ...ticket }
        break
      }
    }

    if (!userTicket) {
      socket.emit("error", { message: "No active ticket found" })
      return
    }

    // Broadcast message to agents in this ticket room
    socket.to(userTicket.id).emit("client-message", {
      ...message,
      ticketId: userTicket.id,
    })

    // Simulate agent typing after a short delay
    setTimeout(() => {
      socket.emit("agent-typing", true)

      // Simulate agent response after a delay
      setTimeout(
        () => {
          socket.emit("agent-typing", false)

          const agent = supportAgents[userTicket.agentId]
          socket.emit("support-message", {
            id: `msg-${Date.now()}`,
            sender: {
              ...agent,
              isCurrentUser: false,
            },
            content: getAutoResponse(message.content),
            timestamp: new Date().toISOString(),
            attachments: [],
          })
        },
        3000 + Math.random() * 2000,
      )
    }, 1000)
  })

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id)
  })
})

// Simple auto-response generator
function getAutoResponse(message) {
  const responses = [
    "Thank you for your message. Let me look into this for you.",
    "I understand your concern. Let me check what I can do to help.",
    "Thanks for reaching out. I'm checking on this right now.",
    "I appreciate your patience. Let me find the best solution for you.",
    "I'm looking into your request and will get back to you shortly.",
  ]

  return responses[Math.floor(Math.random() * responses.length)]
}

// Start server
const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`)
})
