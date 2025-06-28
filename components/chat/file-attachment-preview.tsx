"use client"

import { X, FileText, ImageIcon, File, Code, PenTool, Music, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileAttachmentPreviewProps {
  file: File
  preview: string
  onRemove: () => void
}

export default function FileAttachmentPreview({ file, preview, onRemove }: FileAttachmentPreviewProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const getFileIcon = () => {
    if (file.type.startsWith("image/")) return <ImageIcon className="h-5 w-5 text-purple-400" />
    if (file.type.startsWith("text/")) return <FileText className="h-5 w-5 text-purple-400" />
    if (file.type.startsWith("audio/")) return <Music className="h-5 w-5 text-purple-400" />
    if (file.type.startsWith("video/")) return <Video className="h-5 w-5 text-purple-400" />
    if (file.type.includes("pdf")) return <FileText className="h-5 w-5 text-purple-400" />
    if (file.type.includes("javascript") || file.type.includes("json") || file.type.includes("html"))
      return <Code className="h-5 w-5 text-purple-400" />
    if (file.type.includes("photoshop") || file.type.includes("illustrator"))
      return <PenTool className="h-5 w-5 text-purple-400" />
    return <File className="h-5 w-5 text-purple-400" />
  }

  return (
    <div className="relative bg-black/30 rounded-lg border border-purple-900/30 overflow-hidden max-w-[200px]">
      {file.type.startsWith("image/") && preview ? (
        <div className="h-24 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview || "/placeholder.svg"} alt={file.name} className="w-full h-full object-cover" />
        </div>
      ) : null}

      <div className="p-2">
        <div className="flex items-center">
          {getFileIcon()}
          <div className="ml-2 flex-1 min-w-0">
            <div className="text-xs font-medium text-white truncate">{file.name}</div>
            <div className="text-xs text-gray-400">{formatFileSize(file.size)}</div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1 right-1 h-5 w-5 rounded-full bg-black/50 border-purple-500/30 hover:bg-purple-500/20 p-0"
        onClick={onRemove}
      >
        <X className="h-3 w-3 text-white" />
      </Button>
    </div>
  )
}
