import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileIcon as FileTemplate, Calendar, Briefcase, BookOpen } from "lucide-react"

export default function TemplatesPage() {
  const templates = {
    daily: {
      title: "Daily Note Template",
      content: `# {{date:YYYY-MM-DD}}

## Today's Focus
- [ ] 

## Notes


## Reflections


## Tomorrow's Priorities
- [ ] 

---
Tags: #daily-notes #{{date:YYYY-MM}}`,
    },
    meeting: {
      title: "Meeting Notes Template",
      content: `# Meeting: {{title}}

**Date:** {{date:YYYY-MM-DD}}
**Attendees:** 
**Duration:** 

## Agenda
1. 

## Discussion Points


## Action Items
- [ ] 
- [ ] 

## Next Steps


---
Tags: #meetings #{{project}}`,
    },
    project: {
      title: "Project Template",
      content: `# Project: {{title}}

## Overview


## Goals
- [ ] 
- [ ] 

## Timeline
- **Start Date:** {{date:YYYY-MM-DD}}
- **Target Completion:** 

## Resources
- [[]]
- [[]]

## Progress Log


---
Tags: #projects #{{status}}`,
    },
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileTemplate className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Templates</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Create consistent, structured notes with powerful templates and automation.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="built-in">Built-in</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
          <TabsTrigger value="variables">Variables</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What are Templates?</CardTitle>
              <CardDescription>Templates provide structure and consistency for your notes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium mb-2">Daily Notes</h4>
                  <p className="text-sm text-muted-foreground">Consistent daily reflection structure</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium mb-2">Meeting Notes</h4>
                  <p className="text-sm text-muted-foreground">Capture meetings systematically</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium mb-2">Project Planning</h4>
                  <p className="text-sm text-muted-foreground">Organize projects consistently</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Using Templates</CardTitle>
              <CardDescription>How to apply templates to your notes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">1</Badge>
                <span className="text-sm">Create a new note or open existing one</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">2</Badge>
                <span className="text-sm">
                  Press{" "}
                  <Badge variant="outline" className="mx-1">
                    Ctrl + T
                  </Badge>{" "}
                  or use the template button
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">3</Badge>
                <span className="text-sm">Select your desired template from the list</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Badge variant="outline">4</Badge>
                <span className="text-sm">Fill in any prompted variables</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="built-in" className="space-y-6">
          {Object.entries(templates).map(([key, template]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
                <CardDescription>Ready-to-use template for {key} notes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-sm whitespace-pre-wrap">{template.content}</pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Creating Custom Templates</CardTitle>
              <CardDescription>Build templates tailored to your specific needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Template Creation Steps</h4>
                <ol className="space-y-2 text-sm">
                  <li>1. Go to Settings → Templates</li>
                  <li>2. Click "New Template"</li>
                  <li>3. Give your template a name and description</li>
                  <li>4. Write your template content with variables</li>
                  <li>5. Test and save your template</li>
                </ol>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Template Best Practices</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use clear, descriptive headings</li>
                  <li>• Include relevant tags for organization</li>
                  <li>• Add placeholder text to guide users</li>
                  <li>• Use variables for dynamic content</li>
                  <li>• Keep templates focused and not too complex</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="variables" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Variables</CardTitle>
              <CardDescription>Dynamic content that gets replaced when using templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Date Variables</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-muted p-2 rounded font-mono">{"{{date:YYYY-MM-DD}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{date:MMM DD, YYYY}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{time:HH:mm}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{timestamp}}"}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Content Variables</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-muted p-2 rounded font-mono">{"{{title}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{cursor}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{selection}}"}</div>
                      <div className="bg-muted p-2 rounded font-mono">{"{{clipboard}}"}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Custom Variables</h4>
                  <p className="text-sm text-muted-foreground">
                    Create your own variables that prompt for input when the template is used.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="text-sm font-mono">{"{{project}} - Prompts for project name"}</div>
                    <div className="text-sm font-mono">{"{{status}} - Prompts for status"}</div>
                    <div className="text-sm font-mono">{"{{priority}} - Prompts for priority level"}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
