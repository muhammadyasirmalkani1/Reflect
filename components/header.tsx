"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-purple-900/20 bg-black/80 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-2">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-sm opacity-70"></div>
            <div className="absolute inset-1 bg-black rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center text-purple-400 font-bold">R</div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
            Reflect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
            Blog
          </Link>
          <Link href="/docs" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
            Docs
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
            Log in
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-purple-900/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/features"
              className="text-gray-300 hover:text-purple-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-purple-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-purple-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/docs"
              className="text-gray-300 hover:text-purple-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-purple-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-purple-900/20">
              <Button variant="ghost" className="justify-start text-gray-300 hover:text-purple-400">
                Log in
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
