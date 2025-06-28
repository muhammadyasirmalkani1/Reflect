import type { ReactNode } from "react"

interface GetStartedStepProps {
  number: number
  title: string
  description: string
  children: ReactNode
  isLast?: boolean
}

export default function GetStartedStep({ number, title, description, children, isLast = false }: GetStartedStepProps) {
  return (
    <div className={`mb-20 ${isLast ? "" : "relative"}`}>
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-purple-600/0 z-0"></div>
      )}
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-2xl font-bold text-white">{number}</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
        <div className="ml-20">{children}</div>
      </div>
    </div>
  )
}
