"Client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Calendar,
  Heart,
  Target,
  TrendingUp,
  Lightbulb,
  Clock,
  Star,
} from "lucide-react";

export default function ResearchPage() {
  const journalingBenefits = [
    {
      icon: Heart,
      title: "Mental Clarity",
      description:
        "Process thoughts and emotions through structured reflection",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description:
        "Monitor progress toward personal and professional objectives",
    },
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      description:
        "Identify trends in mood, productivity, and behavior over time",
    },
    {
      icon: Lightbulb,
      title: "Creative Insights",
      description:
        "Capture spontaneous ideas and connect them to larger themes",
    },
  ];

  const journalingTemplates = [
    {
      name: "Morning Pages",
      description: "Stream-of-consciousness writing to start your day",
      template: `# Morning Pages - {{date}}

## Stream of Consciousness
*Write continuously for 10 minutes without stopping*

## Today's Intentions
- [ ] 
- [ ] 
- [ ] 

## Gratitude
1. 
2. 
3. 

## Energy Level: ⭐⭐⭐⭐⭐
## Mood: 😊`,
    },
    {
      name: "Evening Reflection",
      description: "End-of-day review and planning for tomorrow",
      template: `# Evening Reflection - {{date}}

## Today's Highlights
### What went well?
- 
- 

### What could be improved?
- 
- 

## Lessons Learned
- 

## Tomorrow's Focus
- [ ] 
- [ ] 
- [ ] 

## Gratitude
- 

## Energy Level: ⭐⭐⭐⭐⭐
## Overall Rating: {{rating}}/10`,
    },
    {
      name: "Weekly Review",
      description: "Comprehensive weekly analysis and planning",
      template: `# Weekly Review - Week of {{date}}

## Week Overview
**Theme:** 
**Key Focus Areas:** 

## Accomplishments
- 
- 
- 

## Challenges Faced
- 
- 

## Insights & Learnings
- 
- 

## Next Week's Goals
- [ ] 
- [ ] 
- [ ] 

## Areas for Improvement
- 
- 

## Gratitude & Appreciation
- 
- 

## Energy & Mood Trends
**Average Energy:** ⭐⭐⭐⭐⭐
**Mood Pattern:** 
**Sleep Quality:** 

## Action Items
- [ ] 
- [ ] `,
    },
  ];

  const journalingPrompts = [
    "What am I most grateful for today?",
    "What challenged me today and how did I handle it?",
    "What would I do differently if I could relive today?",
    "What patterns am I noticing in my thoughts and behaviors?",
    "What small win can I celebrate today?",
    "How did I grow or learn something new today?",
    "What relationships did I nurture today?",
    "What am I looking forward to tomorrow?",
    "How did I take care of my physical and mental health today?",
    "What creative ideas came to me today?",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-orange-600" />
          <h1 className="text-3xl font-bold">Daily Journaling</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Transform your daily reflection practice with structured journaling
          templates and AI-powered insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {journalingBenefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <benefit.icon className="h-5 w-5 text-orange-600" />
                {benefit.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {benefit.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Getting Started with Daily Journaling
            </CardTitle>
            <CardDescription>
              Build a sustainable journaling habit with these proven strategies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Morning Routine</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Set aside 10-15 minutes each morning</li>
                  <li>Choose a consistent time and location</li>
                  <li>Start with a simple template</li>
                  <li>Focus on intentions and gratitude</li>
                  <li>Don't worry about perfect writing</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Evening Routine</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Reflect on the day's events</li>
                  <li>Identify wins and challenges</li>
                  <li>Extract lessons learned</li>
                  <li>Set intentions for tomorrow</li>
                  <li>Practice gratitude</li>
                </ol>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-3">Building the Habit</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h5 className="font-medium mb-1">Start Small</h5>
                  <p className="text-sm text-muted-foreground">
                    Begin with just 5 minutes daily
                  </p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h5 className="font-medium mb-1">Be Consistent</h5>
                  <p className="text-sm text-muted-foreground">
                    Same time, same place every day
                  </p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h5 className="font-medium mb-1">Track Progress</h5>
                  <p className="text-sm text-muted-foreground">
                    Use streaks and reminders
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Journaling Templates</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {journalingTemplates.map((template, index) => (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                  <Button size="sm" className="w-fit">
                    Use Template
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-3">
                    <h4 className="text-sm font-medium mb-2">
                      Template Preview
                    </h4>
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap overflow-x-auto max-h-48">
                      {template.template}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Daily Journaling Prompts
            </CardTitle>
            <CardDescription>
              Use these prompts when you're not sure what to write about
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {journalingPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <p className="text-sm">{prompt}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              AI-Powered Insights
            </CardTitle>
            <CardDescription>
              Let AI help you discover patterns and insights in your journaling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Mood Tracking</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  AI analyzes your entries to track mood patterns and emotional
                  trends over time.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Weekly mood summaries</li>
                  <li>• Trigger identification</li>
                  <li>• Emotional pattern recognition</li>
                  <li>• Personalized insights</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Goal Progress</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Track progress toward your goals and get suggestions for
                  improvement.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Goal achievement tracking</li>
                  <li>• Progress visualization</li>
                  <li>• Obstacle identification</li>
                  <li>• Success pattern analysis</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Weekly AI Summary</h4>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm italic">
                  "This week, you showed consistent gratitude practices and
                  maintained high energy levels. Your main challenges centered
                  around time management, but you demonstrated good
                  problem-solving skills. Consider exploring the productivity
                  techniques you mentioned on Tuesday."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Advanced Journaling Techniques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">The 5-Minute Journal</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Quick daily practice focusing on gratitude and intention.
                </p>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs space-y-1">
                    <p>
                      <strong>Morning:</strong>
                    </p>
                    <p>• 3 things I'm grateful for</p>
                    <p>• What would make today great?</p>
                    <p>• Daily affirmation</p>
                    <br />
                    <p>
                      <strong>Evening:</strong>
                    </p>
                    <p>• 3 amazing things that happened</p>
                    <p>• How could today have been better?</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stream of Consciousness</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Write continuously without editing to unlock deeper thoughts.
                </p>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs space-y-1">
                    <p>
                      <strong>Rules:</strong>
                    </p>
                    <p>• Write for 10-20 minutes non-stop</p>
                    <p>• Don't edit or censor yourself</p>
                    <p>• Keep your hand moving</p>
                    <p>• Don't worry about grammar</p>
                    <p>• Let thoughts flow naturally</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Themed Journaling</h4>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-medium text-sm">Gratitude Monday</h5>
                  <p className="text-xs text-muted-foreground">
                    Focus on appreciation
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-medium text-sm">Wisdom Tuesday</h5>
                  <p className="text-xs text-muted-foreground">
                    Lessons learned
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-medium text-sm">Wonder Wednesday</h5>
                  <p className="text-xs text-muted-foreground">
                    Curiosity and questions
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-medium text-sm">Throwback Thursday</h5>
                  <p className="text-xs text-muted-foreground">
                    Memories and reflection
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-5 w-5 text-orange-600" />
          <h3 className="font-semibold text-orange-900 dark:text-orange-100">
            Pro Tip
          </h3>
        </div>
        <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
          The key to successful journaling is consistency over perfection. Start
          with just 5 minutes a day and gradually build your practice. Use
          Reflect's daily note feature to automatically create your journal
          entries and never miss a day.
        </p>
        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
          Start Daily Journaling
        </Button>
      </div>
    </div>
  );
}
import React from "react";