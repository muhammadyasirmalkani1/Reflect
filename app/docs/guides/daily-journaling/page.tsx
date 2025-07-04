import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Target, TrendingUp } from "lucide-react"

export default function DailyJournalingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Daily Journaling Guide</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Build a sustainable daily journaling practice that enhances self-reflection and personal growth.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Getting Started with Daily Notes
            </CardTitle>
            <CardDescription>Establish a consistent daily journaling routine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium">Setting Up Your Daily Template</h4>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm whitespace-pre-wrap">{`# {{date:dddd, MMMM DD, YYYY}}

## Morning Intentions
- What are my top 3 priorities today?
- How am I feeling right now?
- What am I grateful for?

## Daily Log
### Work
- 

### Personal
- 

### Learning
- 

## Evening Reflection
- What went well today?
- What could I improve?
- What did I learn?

## Tomorrow's Focus
- [ ] 
- [ ] 
- [ ] 

---
Tags: #daily-notes #{{date:YYYY-MM}}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Journaling Techniques
            </CardTitle>
            <CardDescription>Proven methods to make your journaling more effective</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Morning Pages</h4>
                <p className="text-sm text-muted-foreground">
                  Write 3 pages of stream-of-consciousness thoughts first thing in the morning.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Clears mental clutter</li>
                  <li>• Reveals patterns in thinking</li>
                  <li>• Boosts creativity</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Gratitude Practice</h4>
                <p className="text-sm text-muted-foreground">
                  Daily gratitude entries to shift focus to positive aspects of life.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 3 things you're grateful for</li>
                  <li>• Why each matters to you</li>
                  <li>• How it made you feel</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Goal Tracking</h4>
                <p className="text-sm text-muted-foreground">Monitor progress on personal and professional goals.</p>
                <ul className="text-sm space-y-1">
                  <li>• Daily actions toward goals</li>
                  <li>• Obstacles encountered</li>
                  <li>• Lessons learned</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Mood Tracking</h4>
                <p className="text-sm text-muted-foreground">Track emotional patterns and identify triggers.</p>
                <ul className="text-sm space-y-1">
                  <li>• Rate mood 1-10</li>
                  <li>• Note contributing factors</li>
                  <li>• Track over time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Building the Habit
            </CardTitle>
            <CardDescription>Strategies to maintain consistency in your journaling practice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Start Small</h4>
                <p className="text-sm text-muted-foreground">
                  Begin with just 5 minutes daily. Consistency matters more than length.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Same Time Daily</h4>
                <p className="text-sm text-muted-foreground">
                  Choose a specific time and stick to it. Morning or evening work best.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Use Prompts</h4>
                <p className="text-sm text-muted-foreground">
                  When stuck, use prompts to guide your writing and maintain flow.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Weekly Review Process</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Every Sunday, review your week's entries to identify patterns and insights.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <div className="space-y-2 text-sm">
                  <div>• What themes emerged this week?</div>
                  <div>• What patterns do I notice in my mood/energy?</div>
                  <div>• What goals did I make progress on?</div>
                  <div>• What challenges did I face repeatedly?</div>
                  <div>• What am I learning about myself?</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Journaling Prompts</CardTitle>
            <CardDescription>Use these prompts when you're not sure what to write about</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Self-Reflection</h4>
                <ul className="space-y-2 text-sm">
                  <li>• What am I avoiding and why?</li>
                  <li>• What would I do if I weren't afraid?</li>
                  <li>• What patterns do I notice in my behavior?</li>
                  <li>• What am I most proud of recently?</li>
                  <li>• How have I grown in the past month?</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Future Planning</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Where do I see myself in 5 years?</li>
                  <li>• What skills do I want to develop?</li>
                  <li>• What legacy do I want to leave?</li>
                  <li>• What would make tomorrow better than today?</li>
                  <li>• What dreams am I putting off?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
