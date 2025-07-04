import type React from "react"
import type { Metadata } from "next"
import DocsNav from "@/components/docs-nav"
import DocsSidebar from "@/components/docs-sidebar"
import DocsSearch from "@/components/docs-search"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Documentation | Reflect",
  description: "Learn how to use Reflect to organize your thoughts and ideas",
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Navigation */}
          <div className="md:hidden mb-6">
            <DocsNav />
            <div className="mt-4">
              <Suspense>
                <DocsSearch />
              </Suspense>
            </div>
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Suspense>
                <DocsSearch />
              </Suspense>
              <DocsSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
