"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, AlertCircle, MessageSquare } from "lucide-react"
import SupportAgentChat from "@/components/support/support-agent-chat"
import { generateMockTickets } from "@/lib/support-data"

// Types
interface SupportTicket {
  id: string
  user: {
    id: string
    name: string
    email: string
    avatar: string
  }
  subject: string
  status: "open" | "pending" | "resolved"
  priority: "low" | "medium" | "high"
  createdAt: string
  lastUpdated: string
  messageCount: number
  unreadCount: number
  tags: string[]
}

export default function SupportAgentDashboard() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [filteredTickets, setFilteredTickets] = useState<SupportTicket[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)

  // Load mock tickets
  useEffect(() => {
    const mockTickets = generateMockTickets(25)
    setTickets(mockTickets)
    setFilteredTickets(mockTickets)
  }, [])

  // Filter tickets based on search query and status filter
  useEffect(() => {
    let filtered = tickets

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (ticket) =>
          ticket.id.toLowerCase().includes(query) ||
          ticket.user.name.toLowerCase().includes(query) ||
          ticket.user.email.toLowerCase().includes(query) ||
          ticket.subject.toLowerCase().includes(query) ||
          ticket.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter)
    }

    setFilteredTickets(filtered)
  }, [searchQuery, statusFilter, tickets])

  // Handle ticket selection
  const handleTicketSelect = (ticket: SupportTicket) => {
    setSelectedTicket(ticket)
  }

  // Handle ticket status change
  const handleStatusChange = (ticketId: string, newStatus: "open" | "pending" | "resolved") => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: newStatus, lastUpdated: new Date().toISOString() } : ticket,
    )
    setTickets(updatedTickets)

    // Update selected ticket if it's the one being changed
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, status: newStatus, lastUpdated: new Date().toISOString() })
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Ticket list panel */}
      <div className="lg:col-span-1 feature-card overflow-hidden">
        <div className="p-4 border-b border-purple-900/20">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search tickets..."
              className="pl-10 bg-black/30 border-purple-500/30 focus:border-purple-500/50 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Tabs defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
              <TabsList className="bg-black/50 border border-purple-500/20">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="icon" className="border-purple-500/30 hover:bg-purple-500/10">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="h-[calc(100vh-300px)] overflow-y-auto">
          {filteredTickets.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <p>No tickets found</p>
            </div>
          ) : (
            <ul className="divide-y divide-purple-900/20">
              {filteredTickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className={`p-4 hover:bg-purple-900/10 cursor-pointer transition-colors ${
                    selectedTicket?.id === ticket.id ? "bg-purple-900/20" : ""
                  }`}
                  onClick={() => handleTicketSelect(ticket)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src={ticket.user.avatar || "/placeholder.svg"} alt={ticket.user.name} />
                      <AvatarFallback>{ticket.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white truncate">{ticket.user.name}</p>
                        <p className="text-xs text-gray-400">{new Date(ticket.lastUpdated).toLocaleDateString()}</p>
                      </div>
                      <p className="text-sm text-gray-300 truncate">{ticket.subject}</p>
                      <div className="flex items-center mt-1">
                        <Badge
                          variant="outline"
                          className={`mr-2 ${
                            ticket.status === "open"
                              ? "border-green-500/50 text-green-400"
                              : ticket.status === "pending"
                                ? "border-yellow-500/50 text-yellow-400"
                                : "border-gray-500/50 text-gray-400"
                          }`}
                        >
                          {ticket.status}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-400">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          <span>{ticket.messageCount}</span>
                          {ticket.unreadCount > 0 && (
                            <span className="ml-1 px-1.5 py-0.5 bg-purple-500 text-white text-xs rounded-full">
                              {ticket.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Chat panel */}
      <div className="lg:col-span-2">
        {selectedTicket ? (
          <SupportAgentChat
            ticket={selectedTicket}
            onStatusChange={(newStatus) => handleStatusChange(selectedTicket.id, newStatus)}
          />
        ) : (
          <div className="feature-card h-full flex flex-col items-center justify-center p-12 text-center">
            <MessageSquare className="h-16 w-16 text-purple-500/50 mb-4" />
            <h3 className="text-xl font-bold mb-2">No ticket selected</h3>
            <p className="text-gray-400 max-w-md">
              Select a ticket from the list to view the conversation and provide support to the customer.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
