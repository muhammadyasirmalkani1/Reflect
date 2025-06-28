"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { docsCategories } from "@/lib/docs-data"

export default function DocsNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full justify-between border-purple-500/30 text-white hover:bg-purple-500/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        Documentation Categories
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-black/90 backdrop-blur-md border border-purple-500/30 shadow-lg purple-glow-sm">
          <div className="py-2">
            {docsCategories.map((category) => (
              <div key={category.title} className="px-4 py-2">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-sm text-gray-300 hover:text-purple-400 rounded hover:bg-purple-900/20"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
