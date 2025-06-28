"Client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Clock, Star } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "TechCorp Increases Productivity by 40%",
    company: "TechCorp Solutions",
    industry: "Software Development",
    description:
      "How TechCorp leveraged ReflectAI to streamline their development workflow and boost team productivity.",
    results: ["40% increase in development speed", "60% reduction in code review time", "25% fewer bugs in production"],
    testimonial: "ReflectAI transformed how our team approaches problem-solving. The insights are invaluable.",
    author: "Sarah Johnson, CTO",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Productivity", "Development", "Enterprise"],
  },
  {
    id: 2,
    title: "StartupX Scales Customer Support",
    company: "StartupX",
    industry: "E-commerce",
    description: "A growing startup used ReflectAI to handle customer inquiries and improve satisfaction rates.",
    results: ["80% faster response times", "95% customer satisfaction rate", "50% reduction in support costs"],
    testimonial: "We couldn't have scaled our support team without ReflectAI. It's been a game-changer.",
    author: "Mike Chen, Founder",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Customer Support", "Scaling", "Startup"],
  },
  {
    id: 3,
    title: "EduLearn Personalizes Student Experience",
    company: "EduLearn Platform",
    industry: "Education",
    description: "Educational platform uses ReflectAI to create personalized learning paths for students.",
    results: [
      "70% improvement in learning outcomes",
      "85% student engagement rate",
      "30% increase in course completion",
    ],
    testimonial: "ReflectAI helps us understand each student's unique learning style and adapt accordingly.",
    author: "Dr. Emily Rodriguez, Head of Product",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Education", "Personalization", "AI Learning"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br purple-slate-50 purple-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold white-slate-900 mb-4">Success Stories</h1>
          <p className="text-4xl font-bold white-slate-900 mb-4 max-w-3xl mx-auto">
            Discover how organizations across industries are transforming their operations with ReflectAI
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold white-slate-900">500+</div>
              <div className="text-sm white-slate-600">Happy Customers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold white-slate-900">45%</div>
              <div className="text-sm white-slate-600">Avg. Productivity Gain</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold white-slate-900">60%</div>
              <div className="text-sm white-slate-600">Time Saved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold whiteslate-900">4.9/5</div>
              <div className="text-sm whiteslate-600">Customer Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl white-slate-900">{study.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {study.company} • {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="white-slate-600 mb-6">{study.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold white-slate-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center white-slate-600">
                            <ArrowRight className="h-4 w-4 white-green-600 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-blue-600 pl-4 mb-4">
                      <p className="text-slate-700 italic">"{study.testimonial}"</p>
                      <footer className="text-sm text-slate-500 mt-2">— {study.author}</footer>
                    </blockquote>

                    <Button variant="outline" className="mt-4">
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
                <div
                  className={`bg-slate-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of organizations already transforming their operations with ReflectAI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-golden-600"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
