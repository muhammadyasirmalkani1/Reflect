"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Code, Send, Smile } from "lucide-react"
import ChatMessage from "@/components/chat/chat-message"
import CodeSnippetModal from "@/components/chat/code-snippet-modal"
import FileAttachmentPreview from "@/components/chat/file-attachment-preview"
import { generateMockMessages } from "@/lib/chat-data"

export default function ChatInterface() {
  const [messages, setMessages] = useState(generateMockMessages())
  const [inputValue, setInputValue] = useState("")
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "" && attachments.length === 0) return

    const newMessage = {
      id: Date.now().toString(),
      sender: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: true,
      },
      content: inputValue,
      timestamp: new Date().toISOString(),
      attachments: attachments.map((file) => ({
        id: Date.now().toString() + file.name,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      })),
    }

    setMessages([...messages, newMessage])
    setInputValue("")
    setAttachments([])
    setAttachmentPreviews([])

    // Simulate a response after a short delay
    setTimeout(() => {
      const responseMessage = {
        id: (Date.now() + 1).toString(),
        sender: {
          name: "Reflect AI",
          avatar: "/placeholder.svg?height=40&width=40",
          isCurrentUser: false,
        },
        content: "I've received your message. Is there anything else you'd like to discuss?",
        timestamp: new Date().toISOString(),
        attachments: [],
      }
      setMessages((prev) => [...prev, responseMessage])
    }, 1000)
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
    <div className="flex flex-col h-[calc(100vh-200px)] feature-card">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Attachment previews */}
      {attachments.length > 0 && (
        <div className="px-4 py-2 border-t border-purple-900/20 flex flex-wrap gap-2">
          {attachments.map((file, index) => (
            <FileAttachmentPreview
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
          />
          <Button
            onClick={handleSendMessage}
            className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-full p-2 h-auto"
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
          >
            <Paperclip className="h-4 w-4 mr-1" />
            Attach
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-500/30 hover:bg-purple-500/10"
            onClick={() => setIsCodeModalOpen(true)}
          >
            <Code className="h-4 w-4 mr-1" />
            Code
          </Button>
          <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-500/10">
            <Smile className="h-4 w-4 mr-1" />
            Emoji
          </Button>
        </div>
      </div>

      {/* Code snippet modal */}
      <CodeSnippetModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        onAddCodeSnippet={handleAddCodeSnippet}
      />
    </div>
  )
}
