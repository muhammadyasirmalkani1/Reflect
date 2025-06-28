"Client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileIcon as FileTemplate, Plus, Copy, Edit, Zap, Calendar, Briefcase, BookOpen, Target } from "lucide-react"

export default function TemplatesPage() {
  const templateCategories = [
    {
      title: "Daily & Weekly",
      icon: Calendar,
      templates: [
        {
          name: "Daily Journal",
          description: "Structured daily reflection and planning",
          tags: ["daily", "reflection", "planning"],
          preview: `# Daily Journal - {{date}}

## Morning Intentions
- [ ] Top 3 priorities for today
- [ ] How I cwant to feel today
- [ ] One thing I'm grateful for

## Evening Reflection
- What went well today?
- What could I improve?
- Tomorrow's focus

## Notes & Thoughts
`,
        },
        {
          name: "Weekly Review",
          description: "Comprehensive weekly planning and review",
          tags: ["weekly", "review", "planning"],
          preview: `# Weekly Review - Week of {{date}}

## Last Week's Wins
- 
- 
- 

## Areas for Improvement
- 
- 
- 

## Next Week's Goals
- [ ] 
- [ ] 
- [ ] 

## Key Metrics
- Projects completed:
- Goals achieved:
- Lessons learned:
`,
        },
      ],
    },
    {
      title: "Project Management",
      icon: Briefcase,
      templates: [
        {
          name: "Project Kickoff",
          description: "Comprehensive project planning template",
          tags: ["project", "planning", "kickoff"],
          preview: `# Project: {{project_name}}

## Project Overview
**Start Date:** {{date}}
**End Date:** 
**Project Manager:** 
**Team Members:** 

## Objectives
- 
- 
- 

## Deliverables
- [ ] 
- [ ] 
- [ ] 

## Timeline
| Phase | Start Date | End Date | Owner |
|-------|------------|----------|-------|
|       |            |          |       |

## Risks & Mitigation
- **Risk:** 
  **Mitigation:** 

## Success Criteria
- 
- 
- 
`,
        },
        {
          name: "Meeting Notes",
          description: "Structured meeting documentation",
          tags: ["meeting", "notes", "action-items"],
          preview: `# Meeting: {{meeting_title}}

**Date:** {{date}}
**Time:** {{time}}
**Attendees:** 
**Meeting Type:** 

## Agenda
1. 
2. 
3. 

## Discussion Points
### Topic 1
- 
- 

### Topic 2
- 
- 

## Action Items
- [ ] **{{person}}** - {{action}} (Due: {{date}})
- [ ] **{{person}}** - {{action}} (Due: {{date}})

## Next Steps
- 
- 

## Next Meeting
**Date:** 
**Agenda:** 
`,
        },
      ],
    },
    {
      title: "Learning & Research",
      icon: BookOpen,
      templates: [
        {
          name: "Book Notes",
          description: "Comprehensive book reading and note-taking",
          tags: ["book", "reading", "notes"],
          preview: `# Book Notes: {{book_title}}

**Author:** {{author}}
**Genre:** 
**Pages:** 
**Started:** {{date}}
**Finished:** 

## Rating
⭐⭐⭐⭐⭐ ({{rating}}/5)

## Key Takeaways
1. 
2. 
3. 

## Favorite Quotes
> "{{quote}}" - Page {{page}}

> "{{quote}}" - Page {{page}}

## Chapter Notes
### Chapter 1: {{chapter_title}}
- 
- 

## Action Items
- [ ] 
- [ ] 

## Related Books/Resources
- [[{{related_book}}]]
- [[{{related_article}}]]
`,
        },
        {
          name: "Research Template",
          description: "Structured research documentation",
          tags: ["research", "analysis", "documentation"],
          preview: `# Research: {{research_topic}}

**Date:** {{date}}
**Research Question:** 
**Hypothesis:** 

## Background
- 
- 

## Sources
1. **{{source_title}}** - {{author}} ({{year}})
   - Key points:
   - Relevance:

2. **{{source_title}}** - {{author}} ({{year}})
   - Key points:
   - Relevance:

## Findings
### Key Finding 1
- Evidence:
- Implications:

### Key Finding 2
- Evidence:
- Implications:

## Conclusions
- 
- 

## Next Steps
- [ ] 
- [ ] 

## Related Research
- [[{{related_topic}}]]
`,
        },
      ],
    },
    {
      title: "Goal Setting",
      icon: Target,
      templates: [
        {
          name: "SMART Goals",
          description: "Structured goal setting framework",
          tags: ["goals", "planning", "smart"],
          preview: `# Goal: {{goal_title}}

**Created:** {{date}}
**Target Date:** 
**Category:** 

## SMART Criteria
- **Specific:** What exactly do I want to achieve?
- **Measurable:** How will I measure progress?
- **Achievable:** Is this goal realistic?
- **Relevant:** Why is this goal important?
- **Time-bound:** When will I complete this?

## Action Plan
### Phase 1: {{phase_name}}
- [ ] {{action_item}}
- [ ] {{action_item}}

### Phase 2: {{phase_name}}
- [ ] {{action_item}}
- [ ] {{action_item}}

## Success Metrics
- 
- 

## Potential Obstacles
- **Obstacle:** 
  **Solution:** 

## Progress Updates
### {{date}}
- Progress:
- Challenges:
- Next steps:

## Resources Needed
- 
- 

## Accountability
**Accountability Partner:** 
**Check-in Schedule:** 
`,
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FileTemplate className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold">Templates</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Jumpstart your productivity with pre-built templates for common workflows and use cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Creating Templates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="font-medium mb-2">How to create a template:</p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Create a new note with your desired structure</li>
                <li>
                  Use variables like <code className="bg-muted px-1 rounded">{"{{date}}"}</code> for dynamic content
                </li>
                <li>Save as template from the note menu</li>
                <li>Organize with tags and categories</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Template Variables
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="font-medium mb-2">Available variables:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <code className="bg-muted px-1 rounded">{"{{date}}"}</code> - Current date
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">{"{{time}}"}</code> - Current time
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">{"{{title}}"}</code> - Note title
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">{"{{user}}"}</code> - Your name
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        {templateCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {category.templates.map((template, templateIndex) => (
                <Card key={templateIndex} className="h-fit">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription className="mt-1">{template.description}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Copy className="h-4 w-4 mr-1" />
                          Use
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {template.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-2">Template Preview</h4>
                      <pre className="text-xs text-muted-foreground whitespace-pre-wrap overflow-x-auto">
                        {template.preview}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Template Features</CardTitle>
            <CardDescription>Power up your templates with advanced functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Conditional Logic</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use conditional statements to create dynamic templates:
              </p>
              <div className="bg-muted rounded-lg p-3">
                <code className="text-xs">
                  {`{{#if project_type === "client"}}
## Client Information
**Client Name:** 
**Contact:** 
{{/if}}`}
                </code>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Loops & Lists</h4>
              <p className="text-sm text-muted-foreground mb-2">Generate repeated content with loops:</p>
              <div className="bg-muted rounded-lg p-3">
                <code className="text-xs">
                  {`{{#each team_members}}
- **{{name}}** - {{role}}
{{/each}}`}
                </code>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">AI-Enhanced Templates</h4>
              <p className="text-sm text-muted-foreground mb-2">Let AI help generate template content:</p>
              <div className="bg-muted rounded-lg p-3">
                <code className="text-xs">
                  {`{{ai:generate "Create 5 discussion questions about {{topic}}"}}

{{ai:summarize "{{meeting_transcript}}"}}`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Template Library</h3>
        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
          Browse hundreds of community-created templates in the Template Library. Share your own templates and discover
          new workflows.
        </p>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Browse Template Library
        </Button>
      </div>
    </div>
  )
}
