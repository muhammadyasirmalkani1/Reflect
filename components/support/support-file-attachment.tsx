"use client"

import { useState } from "react"
import { Download, FileText, ImageIcon, File, Code, PenTool, Music, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SupportFileAttachmentProps {
  attachment: {
    id: string
    name: string
    size: number
    type: string
    url: string
  }
}

export default function SupportFileAttachment({ attachment }: SupportFileAttachmentProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const getFileIcon = () => {
    if (attachment.type.startsWith("image/")) return <ImageIcon className="h-5 w-5 text-purple-400" />
    if (attachment.type.startsWith("text/")) return <FileText className="h-5 w-5 text-purple-400" />
    if (attachment.type.startsWith("audio/")) return <Music className="h-5 w-5 text-purple-400" />
    if (attachment.type.startsWith("video/")) return <Video className="h-5 w-5 text-purple-400" />
    if (attachment.type.includes("pdf")) return <FileText className="h-5 w-5 text-purple-400" />
    if (attachment.type.includes("javascript") || attachment.type.includes("json") || attachment.type.includes("html"))
      return <Code className="h-5 w-5 text-purple-400" />
    if (attachment.type.includes("photoshop") || attachment.type.includes("illustrator"))
      return <PenTool className="h-5 w-5 text-purple-400" />
    return <File className="h-5 w-5 text-purple-400" />
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = attachment.url
    link.download = attachment.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-black/30 rounded-lg border border-purple-900/30 overflow-hidden">
      {attachment.type.startsWith("image/") ? (
        <div className="relative">
          <div
            className={`cursor-pointer transition-all duration-300 ${isImageExpanded ? "max-h-96" : "max-h-40"}`}
            onClick={() => setIsImageExpanded(!isImageExpanded)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={attachment.url || "/placeholder.svg"}
              alt={attachment.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-2 right-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-black/50 border-purple-500/30 hover:bg-purple-500/20"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      ) : null}

      <div className="p-3">
        <div className="flex items-center">
          {getFileIcon()}
          <div className="ml-2 flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">{attachment.name}</div>
            <div className="text-xs text-gray-400">{formatFileSize(attachment.size)}</div>
          </div>
          {!attachment.type.startsWith("image/") && (
            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-purple-500/30 hover:bg-purple-500/10"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
