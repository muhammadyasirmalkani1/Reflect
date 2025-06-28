"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, CheckCircle, AlertCircle } from "lucide-react"

type SubscriptionStatus = "idle" | "loading" | "success" | "error"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      // Simulate API call - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would call your API here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // })

      // if (!response.ok) throw new Error('Subscription failed')

      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to subscribe. Please try again later.")
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cosmic-radial opacity-30 z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold purple-gradient-text">Stay in the cosmic loop</h2>
        </div>

        <p className="text-gray-300 text-center mb-6 max-w-xl mx-auto">
          Get the latest articles, tutorials, and updates from Reflect delivered straight to your inbox. No spam, just
          the good stuff.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're all set!</h3>
            <p className="text-gray-300 text-center">
              Thank you for subscribing to our newsletter. Get ready for cosmic insights!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border-purple-500/30 focus:border-purple-400 h-12 text-white"
                  disabled={status === "loading"}
                  aria-label="Email address"
                />
                {status === "error" && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none h-12 px-8"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

            <p className="text-gray-400 text-sm text-center">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        )}
      </div>
    </div>
  )
}
