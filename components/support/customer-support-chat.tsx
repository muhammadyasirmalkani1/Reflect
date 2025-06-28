"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Code, Send, Smile, X, Loader2, MinusCircle, PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import SupportMessage from "@/components/support/support-message"
import SupportCodeSnippetModal from "@/components/support/support-code-snippet-modal"
import SupportFileAttachmentPreview from "@/components/support/support-file-attachment-preview"
import { useSupportChat } from "@/hooks/use-support-chat"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CustomerSupportChat() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const {
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
  } = useSupportChat()

  // Connect to support chat when component mounts
  useEffect(() => {
    connect()
    return () => disconnect()
  }, [connect, disconnect])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages, isMinimized])

  const scrollToBottom = () => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "" && attachments.length === 0) return

    // Process attachments
    const processedAttachments = attachments.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }))

    // Send message
    sendMessage(inputValue, processedAttachments)

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

      // Check file size limit (10MB)
      const oversizedFiles = newFiles.filter((file) => file.size > 10 * 1024 * 1024)
      if (oversizedFiles.length > 0) {
        toast({
          title: "File too large",
          description: "Files must be less than 10MB",
          variant: "destructive",
        })
        return
      }

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
    <div className="relative">
      <div
        className={`fixed bottom-0 right-4 z-50 w-full max-w-md transition-all duration-300 ease-in-out ${
          isMinimized ? "h-16" : "h-[600px] max-h-[80vh]"
        }`}
      >
        <div className="feature-card h-full flex flex-col overflow-hidden">
          {/* Chat header */}
          <div className="border-b border-purple-900/20 p-4 flex items-center justify-between bg-black/60">
            <div className="flex items-center">
              <div className="relative mr-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                {isConnected && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
                )}
              </div>
              <div>
                <h3 className="font-bold text-white">Reflect Support</h3>
                <div className="flex items-center">
                  {isConnecting ? (
                    <span className="text-xs text-gray-400 flex items-center">
                      <Loader2 className="w-3 h-3 mr-1 animate-spin" /> Connecting...
                    </span>
                  ) : isConnected ? (
                    <span className="text-xs text-green-400">Online</span>
                  ) : (
                    <span className="text-xs text-gray-400">Offline</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {ticketId && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="mr-2 border-purple-500/30">
                        #{ticketId.substring(0, 8)}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ticket ID: {ticketId}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <PlusCircle className="h-5 w-5" /> : <MinusCircle className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white"
                onClick={disconnect}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Chat content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                      <span className="text-3xl text-purple-400">?</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">How can we help?</h3>
                    <p className="text-gray-400 max-w-xs">
                      Start a conversation with our support team. We're here to help with any questions about Reflect.
                    </p>
                  </div>
                ) : (
                  messages.map((message) => <SupportMessage key={message.id} message={message} />)
                )}

                {/* Agent typing indicator */}
                {isAgentTyping && (
                  <div className="flex items-center text-gray-400 text-sm">
                    {supportAgent && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={supportAgent.avatar || "/placeholder.svg"} alt={supportAgent.name} />
                        <AvatarFallback>{supportAgent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
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
                    disabled={!isConnected}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-full p-2 h-auto"
                    disabled={!isConnected || (inputValue.trim() === "" && attachments.length === 0)}
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
                    disabled={!isConnected}
                  >
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 hover:bg-purple-500/10"
                    onClick={() => setIsCodeModalOpen(true)}
                    disabled={!isConnected}
                  >
                    <Code className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 hover:bg-purple-500/10"
                    disabled={!isConnected}
                  >
                    <Smile className="h-4 w-4 mr-1" />
                    Emoji
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
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
