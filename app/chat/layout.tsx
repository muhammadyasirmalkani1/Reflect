import type React from "react"

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="cosmic-bg pt-24">{children}</div>
}
