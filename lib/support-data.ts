"Client";

import React from "react";
import { v4 as uuidv4 } from "uuid"
import { subDays, subHours, subMinutes } from "date-fns"

// Generate mock support tickets
export function generateMockTickets(count: number) {
  const statuses = ["open", "pending", "resolved"]
  const priorities = ["low", "medium", "high"]
  const subjects = [
    "Can't access my account",
    "Feature request: Dark mode",
    "Error when creating a new note",
    "How do I export my data?",
    "Billing question about Pro plan",
    "App crashes on startup",
    "Missing notes after sync",
    "Integration with Google Calendar",
    "Password reset not working",
    "Trouble with AI assistant",
  ]
  const tags = [
    "account",
    "billing",
    "bug",
    "feature-request",
    "mobile",
    "desktop",
    "sync",
    "ai",
    "security",
    "performance",
  ]
  const users = [
    {
      id: "user-1",
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-2",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-4",
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-5",
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return Array.from({ length: count }).map((_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)] as "open" | "pending" | "resolved"
    const user = users[Math.floor(Math.random() * users.length)]
    const subject = subjects[Math.floor(Math.random() * subjects.length)]
    const priority = priorities[Math.floor(Math.random() * priorities.length)] as "low" | "medium" | "high"
    const createdAt = subDays(new Date(), Math.floor(Math.random() * 30)).toISOString()
    const lastUpdated = subHours(new Date(), Math.floor(Math.random() * 24)).toISOString()
    const messageCount = Math.floor(Math.random() * 20) + 1
    const unreadCount = status === "open" ? Math.floor(Math.random() * 5) : 0

    // Generate 1-3 random tags
    const ticketTags: string[] = []
    const tagCount = Math.floor(Math.random() * 3) + 1
    for (let j = 0; j < tagCount; j++) {
      const tag = tags[Math.floor(Math.random() * tags.length)]
      if (!ticketTags.includes(tag)) {
        ticketTags.push(tag)
      }
    }

    return {
      id: uuidv4(),
      user,
      subject,
      status,
      priority,
      createdAt,
      lastUpdated,
      messageCount,
      unreadCount,
      tags: ticketTags,
    }
  })
}

// Generate mock messages for a ticket
export function generateMockMessages(ticketId: string, user: any, count: number) {
  const agentResponses = [
    "Hi there! How can I help you today?",
    "I understand your concern. Let me look into this for you.",
    "Could you please provide more details about the issue you're experiencing?",
    "Have you tried clearing your cache and restarting the application?",
    "I'm checking our system to see what might be causing this issue.",
    "Thank you for bringing this to our attention. We'll fix it as soon as possible.",
    "Is there anything else you'd like help with today?",
    "I've created a ticket for our development team to investigate this further.",
    "This is a known issue that we're currently working on. We expect to have a fix in our next update.",
    "Let me know if you have any other questions!",
  ]

  const userMessages = [
    "Hi, I'm having trouble with my account",
    "The app keeps crashing when I try to create a new note",
    "I can't seem to sync my notes between my devices",
    "How do I export all my data?",
    "Is there a way to integrate with other apps?",
    "The AI assistant isn't working properly",
    "I'm getting an error message when I try to log in",
    "Can you help me with setting up my account?",
    "I'd like to request a new feature",
    "My subscription payment failed",
  ]

  const messages = []
  let messageTime = new Date(user.createdAt)

  // First message is always from the user
  messages.push({
    id: uuidv4(),
    sender: {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      isAgent: false,
    },
    content: userMessages[Math.floor(Math.random() * userMessages.length)],
    timestamp: messageTime.toISOString(),
    attachments: [],
  })

  // Generate the rest of the messages
  for (let i = 1; i < count; i++) {
    // Advance time by 5-30 minutes
    messageTime = subMinutes(messageTime, -(Math.floor(Math.random() * 25) + 5))

    // Alternate between agent and user
    const isAgent = i % 2 === 1

    messages.push({
      id: uuidv4(),
      sender: {
        id: isAgent ? "agent-1" : user.id,
        name: isAgent ? "Support Agent" : user.name,
        avatar: isAgent ? "/placeholder.svg?height=40&width=40" : user.avatar,
        isAgent,
      },
      content: isAgent
        ? agentResponses[Math.floor(Math.random() * agentResponses.length)]
        : userMessages[Math.floor(Math.random() * userMessages.length)],
      timestamp: messageTime.toISOString(),
      attachments: [],
    })
  }

  return messages
}
