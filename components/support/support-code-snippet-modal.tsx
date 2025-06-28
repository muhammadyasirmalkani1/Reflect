"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface SupportCodeSnippetModalProps {
  isOpen: boolean
  onClose: () => void
  onAddCodeSnippet: (language: string, code: string) => void
}

const LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "rust", label: "Rust" },
  { value: "sql", label: "SQL" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "markdown", label: "Markdown" },
  { value: "bash", label: "Bash" },
  { value: "plaintext", label: "Plain Text" },
]

export default function SupportCodeSnippetModal({ isOpen, onClose, onAddCodeSnippet }: SupportCodeSnippetModalProps) {
  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState("")

  const handleSubmit = () => {
    if (code.trim()) {
      onAddCodeSnippet(language, code)
      setCode("")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black/95 backdrop-blur-md border border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-white">Add Code Snippet</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="bg-black/50 border-purple-500/30 focus:border-purple-500/50 text-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-black/95 backdrop-blur-md border border-purple-500/30">
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-purple-900/20">
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">Code</label>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="min-h-[200px] bg-black/50 border-purple-500/30 focus:border-purple-500/50 text-white font-mono"
              placeholder="Paste or type your code here..."
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              onClick={handleSubmit}
            >
              Add Snippet
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
