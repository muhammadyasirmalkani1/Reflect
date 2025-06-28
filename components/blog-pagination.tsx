import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className="border-purple-500/30 hover:bg-purple-500/10"
        disabled={currentPage === 1}
        asChild={currentPage !== 1}
      >
        {currentPage === 1 ? (
          <span>
            <ChevronLeft className="h-4 w-4" />
          </span>
        ) : (
          <Link href={`/blog?page=${currentPage - 1}`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        )}
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          className={
            currentPage === page
              ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              : "border-purple-500/30 hover:bg-purple-500/10"
          }
          asChild={currentPage !== page}
        >
          {currentPage === page ? <span>{page}</span> : <Link href={`/blog?page=${page}`}>{page}</Link>}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="border-purple-500/30 hover:bg-purple-500/10"
        disabled={currentPage === totalPages}
        asChild={currentPage !== totalPages}
      >
        {currentPage === totalPages ? (
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
        ) : (
          <Link href={`/blog?page=${currentPage + 1}`}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </Button>
    </div>
  )
}
