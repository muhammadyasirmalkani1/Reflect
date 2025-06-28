"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paperclip, Code, Send, Smile, Clock, MoreHorizontal, User, Mail, Tag } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SupportMessage from "@/components/support/support-message"
import SupportCodeSnippetModal from "@/components/support/support-code-snippet-modal"
import SupportFileAttachmentPreview from "@/components/support/support-file-attachment-preview"
import { generateMockMessages } from "@/lib/support-data"
import { formatDistanceToNow } from "date-fns"

interface SupportAgentChatProps {
  ticket: {
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
  onStatusChange: (status: "open" | "pending" | "resolved") => void
}

export default function SupportAgentChat({ ticket, onStatusChange }: SupportAgentChatProps) {
  const [inputValue, setInputValue] = useState("")
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const [isCustomerTyping, setIsCustomerTyping] = useState(false)
  const [showCustomerInfo, setShowCustomerInfo] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Load mock messages
  useEffect(() => {
    const mockMessages = generateMockMessages(ticket.id, ticket.user, 10)
    setMessages(mockMessages)
  }, [ticket])

  // Simulate customer typing occasionally
  useEffect(() => {
    const randomTyping = () => {
      if (Math.random() > 0.7 && ticket.status !== "resolved") {
        setIsCustomerTyping(true)

        typingTimeoutRef.current = setTimeout(
          () => {
            setIsCustomerTyping(false)
          },
          3000 + Math.random() * 5000,
        )
      }

      // Schedule next typing event
      setTimeout(randomTyping, 15000 + Math.random() * 30000)
    }

    // Start the random typing simulation
    const timeout = setTimeout(randomTyping, 5000)

    return () => {
      clearTimeout(timeout)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [ticket.status])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "" && attachments.length === 0) return

    // Process attachments
    const processedAttachments = attachments.map((file) => ({
      id: Math.random().toString(36).substring(2),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }))

    // Create new message
    const newMessage = {
      id: Date.now().toString(),
      sender: {
        id: "agent-1",
        name: "Support Agent",
        avatar: "/placeholder.svg?height=40&width=40",
        isAgent: true,
      },
      content: inputValue,
      timestamp: new Date().toISOString(),
      attachments: processedAttachments,
    }

    // Add message to state
    setMessages((prev) => [...prev, newMessage])

    // Clear input and attachments
    setInputValue("")
    setAttachments([])
    setAttachmentPreviews([])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments((prev) => [...prev, ...newFiles])

      // Create previews for the files
      newFiles.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target?.result) {
              setAttachmentPreviews((prev) => [...prev, e.target!.result as string])
            }
          }
          reader.readAsDataURL(file)
        } else {
          // For non-image files, we don't need a preview
          setAttachmentPreviews((prev) => [...prev, ""])
        }
      })
    }
  }

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
    setAttachmentPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleAddCodeSnippet = (language: string, code: string) => {
    const codeBlock = `\`\`\`${language}\n${code}\n\`\`\``
    setInputValue((prev) => prev + (prev ? "\n\n" : "") + codeBlock)
    setIsCodeModalOpen(false)
  }

  return (
    <div className="feature-card h-full flex flex-col overflow-hidden">
      {/* Chat header */}
      <div className="border-b border-purple-900/20 p-4 flex items-center justify-between bg-black/60">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={ticket.user.avatar || "/placeholder.svg"} alt={ticket.user.name} />
            <AvatarFallback>{ticket.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="font-bold text-white mr-2">{ticket.user.name}</h3>
              <Badge
                variant="outline"
                className={`${
                  ticket.status === "open"
                    ? "border-green-500/50 text-green-400"
                    : ticket.status === "pending"
                      ? "border-yellow-500/50 text-yellow-400"
                      : "border-gray-500/50 text-gray-400"
                }`}
              >
                {ticket.status}
              </Badge>
            </div>
            <p className="text-sm text-gray-400 truncate">{ticket.subject}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-500/30 hover:bg-purple-500/10"
            onClick={() => setShowCustomerInfo(!showCustomerInfo)}
          >
            <User className="h-4 w-4 mr-1" />
            Info
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
                <Clock className="h-4 w-4 mr-1" />
                Status
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/95 backdrop-blur-md border border-purple-500/30">
              <DropdownMenuLabel>Change Status</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-purple-900/20" />
              <DropdownMenuItem
                className={`${ticket.status === "open" ? "bg-purple-900/20" : ""}`}
                onClick={() => onStatusChange("open")}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Open
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${ticket.status === "pending" ? "bg-purple-900/20" : ""}`}
                onClick={() => onStatusChange("pending")}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  Pending
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${ticket.status === "resolved" ? "bg-purple-900/20" : ""}`}
                onClick={() => onStatusChange("resolved")}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                  Resolved
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/95 backdrop-blur-md border border-purple-500/30">
              <DropdownMenuItem>Assign to another agent</DropdownMenuItem>
              <DropdownMenuItem>Add internal note</DropdownMenuItem>
              <DropdownMenuItem>View ticket history</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-purple-900/20" />
              <DropdownMenuItem className="text-red-400 hover:text-red-300">Close ticket</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <SupportMessage key={message.id} message={message} />
            ))}

            {/* Customer typing indicator */}
            {isCustomerTyping && (
              <div className="flex items-center text-gray-400 text-sm">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={ticket.user.avatar || "/placeholder.svg"} alt={ticket.user.name} />
                  <AvatarFallback>{ticket.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="bg-black/40 rounded-full px-4 py-2">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Attachment previews */}
          {attachments.length > 0 && (
            <div className="px-4 py-2 border-t border-purple-900/20 flex flex-wrap gap-2">
              {attachments.map((file, index) => (
                <SupportFileAttachmentPreview
                  key={index}
                  file={file}
                  preview={attachmentPreviews[index]}
                  onRemove={() => handleRemoveAttachment(index)}
                />
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="border-t border-purple-900/20 p-4">
            <div className="relative">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="min-h-[80px] w-full bg-black/30 border-purple-900/30 focus:border-purple-500/50 text-white resize-none pr-12"
                disabled={ticket.status === "resolved"}
              />
              <Button
                onClick={handleSendMessage}
                className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-full p-2 h-auto"
                disabled={ticket.status === "resolved" || (inputValue.trim() === "" && attachments.length === 0)}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center mt-2 space-x-2">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple />
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500/30 hover:bg-purple-500/10"
                onClick={() => fileInputRef.current?.click()}
                disabled={ticket.status === "resolved"}
              >
                <Paperclip className="h-4 w-4 mr-1" />
                Attach
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500/30 hover:bg-purple-500/10"
                onClick={() => setIsCodeModalOpen(true)}
                disabled={ticket.status === "resolved"}
              >
                <Code className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500/30 hover:bg-purple-500/10"
                disabled={ticket.status === "resolved"}
              >
                <Smile className="h-4 w-4 mr-1" />
                Emoji
              </Button>
            </div>
          </div>
        </div>

        {/* Customer info sidebar */}
        {showCustomerInfo && (
          <div className="w-80 border-l border-purple-900/20 p-4 overflow-y-auto bg-black/30">
            <h3 className="text-lg font-bold mb-4">Customer Information</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Contact</h4>
                <div className="feature-card p-3">
                  <div className="flex items-center mb-2">
                    <User className="h-4 w-4 text-purple-400 mr-2" />
                    <span className="text-sm text-white">{ticket.user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-purple-400 mr-2" />
                    <span className="text-sm text-white">{ticket.user.email}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Ticket Details</h4>
                <div className="feature-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">ID</span>
                    <span className="text-sm text-white">#{ticket.id.substring(0, 8)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Created</span>
                    <span className="text-sm text-white">
                      {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Updated</span>
                    <span className="text-sm text-white">
                      {formatDistanceToNow(new Date(ticket.lastUpdated), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Priority</span>
                    <Badge
                      variant="outline"
                      className={`${
                        ticket.priority === "high"
                          ? "border-red-500/50 text-red-400"
                          : ticket.priority === "medium"
                            ? "border-yellow-500/50 text-yellow-400"
                            : "border-green-500/50 text-green-400"
                      }`}
                    >
                      {ticket.priority}
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Tags</h4>
                <div className="feature-card p-3">
                  <div className="flex flex-wrap gap-2">
                    {ticket.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-purple-500/30">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                      + Add tag
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Customer History</h4>
                <div className="feature-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Previous tickets</span>
                    <span className="text-sm text-white">3</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Account created</span>
                    <span className="text-sm text-white">6 months ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Subscription</span>
                    <Badge variant="outline" className="border-purple-500/30">
                      Pro Plan
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Code snippet modal */}
      <SupportCodeSnippetModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        onAddCodeSnippet={handleAddCodeSnippet}
      />
    </div>
  )
}
