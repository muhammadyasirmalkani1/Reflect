"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { docsSearchResults } from "@/lib/docs-data"

export default function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const filteredResults = searchQuery
    ? docsSearchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const handleResultClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search documentation..."
            className="pl-10 bg-black/30 border-purple-500/30 focus:border-purple-500/50 text-white"
            onClick={() => setIsOpen(true)}
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/95 backdrop-blur-md border border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-white">Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Input
            placeholder="Search documentation..."
            className="bg-black/50 border-purple-500/30 focus:border-purple-500/50 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {searchQuery && filteredResults.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No results found</p>
          ) : (
            <ul className="space-y-2">
              {filteredResults.map((result) => (
                <li key={result.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-purple-900/20"
                    onClick={() => handleResultClick(result.href)}
                  >
                    <div>
                      <div className="font-medium text-white">{result.title}</div>
                      <div className="text-sm text-gray-400 truncate">{result.content.substring(0, 100)}...</div>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
