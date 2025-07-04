import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Video, Calendar, Clock, Users } from "lucide-react"

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: "Advanced Note-Taking Strategies",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Dr. Sarah Chen",
      description: "Learn advanced techniques for capturing, organizing, and connecting your thoughts effectively.",
      topics: ["Zettelkasten method", "Progressive summarization", "Concept mapping"],
      registrationOpen: true,
    },
    {
      title: "Building Your Second Brain",
      date: "2024-02-22",
      time: "1:00 PM EST",
      duration: "90 minutes",
      presenter: "Marcus Rodriguez",
      description: "Transform your note-taking into a powerful knowledge management system.",
      topics: ["PARA method", "Knowledge graphs", "Spaced repetition"],
      registrationOpen: true,
    },
    {
      title: "Team Collaboration Best Practices",
      date: "2024-03-01",
      time: "3:00 PM EST",
      duration: "45 minutes",
      presenter: "Lisa Thompson",
      description: "Maximize team productivity with collaborative knowledge sharing.",
      topics: ["Shared workspaces", "Review workflows", "Knowledge handoffs"],
      registrationOpen: true,
    },
  ]

  const pastWebinars = [
    {
      title: "Getting Started with ReflectSaaS",
      date: "2024-01-18",
      duration: "45 minutes",
      presenter: "Alex Johnson",
      description: "A comprehensive introduction to ReflectSaaS features and workflows.",
      views: 1247,
      rating: 4.8,
    },
    {
      title: "Daily Journaling for Personal Growth",
      date: "2024-01-11",
      duration: "60 minutes",
      presenter: "Dr. Emily Watson",
      description: "Develop a sustainable journaling practice that drives self-improvement.",
      views: 892,
      rating: 4.9,
    },
    {
      title: "Research and Academic Writing",
      date: "2024-01-04",
      duration: "75 minutes",
      presenter: "Prof. David Kim",
      description: "Leverage ReflectSaaS for academic research and scholarly writing.",
      views: 634,
      rating: 4.7,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Webinars & Training</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Join our expert-led webinars to master ReflectSaaS and improve your knowledge management skills.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Webinars
          </h2>
          <div className="grid gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle>{webinar.title}</CardTitle>
                      <CardDescription>{webinar.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Upcoming
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.presenter}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button>Register Now</Button>
                    <Button variant="outline">Add to Calendar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Past Webinars</h2>
          <div className="grid gap-4">
            {pastWebinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{webinar.title}</CardTitle>
                      <CardDescription>{webinar.description}</CardDescription>
                    </div>
                    <Badge variant="outline">Recorded</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.presenter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.views} views</span>
                      </div>
                    </div>
                    <Button variant="outline">Watch Recording</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Request a Topic</CardTitle>
            <CardDescription>Have a specific topic you'd like us to cover? Let us know!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We regularly host webinars based on community requests. Popular topics include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Badge variant="outline">Productivity workflows</Badge>
                <Badge variant="outline">Academic research</Badge>
                <Badge variant="outline">Creative writing</Badge>
                <Badge variant="outline">Project management</Badge>
                <Badge variant="outline">Team collaboration</Badge>
                <Badge variant="outline">Knowledge synthesis</Badge>
              </div>
              <Button>Suggest a Topic</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
