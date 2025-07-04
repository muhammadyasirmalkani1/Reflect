import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import VideoPlayer from "@/components/video-player"
import { videoTutorials } from "@/lib/docs-data"

export default function VideoTutorialsPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Documentation
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Video Tutorials</h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to use Reflect with these step-by-step video tutorials. Watch and follow along to master key
          features and workflows.
        </p>
      </div>

      {videoTutorials.categories.map((category) => (
        <div key={category.id} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 purple-gradient-text" id={category.id}>
            {category.title}
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {category.videos.map((video) => (
              <div key={video.id} className="feature-card overflow-hidden">
                <h3 className="text-xl font-bold mb-4">{video.title}</h3>
                <div className="mb-6">
                  <VideoPlayer
                    src={video.videoUrl}
                    poster={video.thumbnailUrl}
                    title={video.title}
                    duration={video.duration}
                  />
                </div>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">{video.description}</p>
                  {video.topics && video.topics.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2">What You'll Learn</h4>
                      <ul className="space-y-1 text-gray-300">
                        {video.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                              <svg
                                className="w-3 h-3 text-purple-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {video.timestamps && video.timestamps.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Timestamps</h4>
                    <ul className="space-y-1 text-gray-300">
                      {video.timestamps.map((timestamp, index) => (
                        <li key={index} className="flex items-start">
                          <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs mr-3 w-16 text-center">
                            {timestamp.time}
                          </code>
                          <span>{timestamp.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {video.relatedDocs && (
                  <div className="mt-6 pt-6 border-t border-purple-900/20">
                    <h4 className="text-lg font-semibold mb-2">Related Documentation</h4>
                    <div className="flex flex-wrap gap-2">
                      {video.relatedDocs.map((doc, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="outline"
                          className="border-purple-500/30 hover:bg-purple-500/10"
                          size="sm"
                        >
                          <Link href={doc.href}>{doc.title}</Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="feature-card mt-12">
        <h2 className="text-2xl font-bold mb-4">Request a Tutorial</h2>
        <p className="text-gray-300 mb-6">
          Don't see a tutorial for the feature you're looking for? Let us know what you'd like to learn, and we'll
          consider adding it to our library.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">
              Tutorial Topic
            </label>
            <input
              type="text"
              id="topic"
              className="w-full px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
              placeholder="What would you like to learn about?"
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-1">
              Additional Details
            </label>
            <textarea
              id="details"
              rows={4}
              className="w-full px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
              placeholder="Please provide any specific questions or aspects you'd like the tutorial to cover"
            ></textarea>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  )
}
