"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface BlogCategoryFilterProps {
  categories: string[]
}

export default function BlogCategoryFilter({ categories }: BlogCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
    }
    // In a real app, you would filter posts by category here
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        className={
          activeCategory === null
            ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
            : "border-purple-500/30 hover:bg-purple-500/10"
        }
        onClick={() => setActiveCategory(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={
            activeCategory === category
              ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              : "border-purple-500/30 hover:bg-purple-500/10"
          }
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
