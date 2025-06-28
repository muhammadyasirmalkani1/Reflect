"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { docsCategories } from "@/lib/docs-data"

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="mt-6 space-y-6">
      {docsCategories.map((category) => (
        <div key={category.title}>
          <h3 className="text-sm font-semibold text-purple-400 mb-3">{category.title}</h3>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-purple-900/30 text-white border-l-2 border-purple-500"
                      : "text-gray-400 hover:text-white hover:bg-purple-900/20"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
