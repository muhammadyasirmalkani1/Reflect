"use client"
import { formatDistanceToNow } from "date-fns"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SupportFileAttachment from "@/components/support/support-file-attachment"

interface SupportMessageProps {
  message: {
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
}

export default function SupportMessage({ message }: SupportMessageProps) {
  const [copiedSnippets, setCopiedSnippets] = useState<Record<string, boolean>>({})

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSnippets({ ...copiedSnippets, [id]: true })
    setTimeout(() => {
      setCopiedSnippets({ ...copiedSnippets, [id]: false })
    }, 2000)
  }

  return (
    <div className={`flex ${message.sender.isAgent ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] ${
          message.sender.isAgent
            ? "bg-black/40 rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl"
            : "bg-purple-900/20 rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl"
        } p-4 ${message.status === "sending" ? "opacity-70" : ""}`}
      >
        <div className="flex items-center mb-2">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
            <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-medium text-white">{message.sender.name}</span>
            <span className="text-xs text-gray-400 ml-2">
              {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
            </span>
          </div>
        </div>

        {message.content && (
          <div className="prose prose-invert max-w-none text-gray-300">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  const codeId = `code-${Math.random().toString(36).substr(2, 9)}`

                  return !inline && match ? (
                    <div className="relative">
                      <div className="flex items-center justify-between bg-black/50 px-4 py-2 rounded-t-md border-b border-purple-900/30">
                        <span className="text-sm text-purple-400">{match[1]}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                          onClick={() => copyToClipboard(String(children).replace(/\n$/, ""), codeId)}
                        >
                          {copiedSnippets[codeId] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-b-md !mt-0 !bg-black/50"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="bg-black/30 px-1 py-0.5 rounded text-purple-300" {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.attachments.map((attachment) => (
              <SupportFileAttachment key={attachment.id} attachment={attachment} />
            ))}
          </div>
        )}

        {/* Message status indicator */}
        {!message.sender.isAgent && message.status && (
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-400">
              {message.status === "sending" && "Sending..."}
              {message.status === "sent" && "Sent"}
              {message.status === "delivered" && "Delivered"}
              {message.status === "read" && "Read"}
              {message.status === "error" && "Failed to send"}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
