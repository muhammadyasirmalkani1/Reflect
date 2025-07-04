import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Keyboard, Zap, Edit, Search } from "lucide-react"

export default function KeyboardShortcutsPage() {
  const shortcuts = {
    general: [
      { keys: ["Ctrl", "N"], description: "Create new note" },
      { keys: ["Ctrl", "K"], description: "Quick search" },
      { keys: ["Ctrl", "Shift", "F"], description: "Advanced search" },
      { keys: ["Ctrl", "G"], description: "Open graph view" },
      { keys: ["Ctrl", ","], description: "Open settings" },
      { keys: ["Ctrl", "Shift", "P"], description: "Command palette" },
    ],
    editing: [
      { keys: ["Ctrl", "B"], description: "Bold text" },
      { keys: ["Ctrl", "I"], description: "Italic text" },
      { keys: ["Ctrl", "U"], description: "Underline text" },
      { keys: ["Ctrl", "Shift", "S"], description: "Strikethrough" },
      { keys: ["Ctrl", "L"], description: "Create link" },
      { keys: ["Ctrl", "Shift", "L"], description: "Insert link to note" },
      { keys: ["Ctrl", "E"], description: "Toggle edit/preview mode" },
      { keys: ["Tab"], description: "Indent list item" },
      { keys: ["Shift", "Tab"], description: "Unindent list item" },
    ],
    navigation: [
      { keys: ["Ctrl", "1"], description: "Switch to note list" },
      { keys: ["Ctrl", "2"], description: "Switch to graph view" },
      { keys: ["Ctrl", "3"], description: "Switch to calendar view" },
      { keys: ["Ctrl", "Tab"], description: "Next tab" },
      { keys: ["Ctrl", "Shift", "Tab"], description: "Previous tab" },
      { keys: ["Alt", "←"], description: "Go back" },
      { keys: ["Alt", "→"], description: "Go forward" },
    ],
    advanced: [
      { keys: ["Ctrl", "Shift", "D"], description: "Duplicate note" },
      { keys: ["Ctrl", "Shift", "Delete"], description: "Delete note" },
      { keys: ["Ctrl", "Shift", "E"], description: "Export note" },
      { keys: ["F11"], description: "Toggle fullscreen" },
      { keys: ["Ctrl", "Shift", "I"], description: "Toggle developer tools" },
      { keys: ["Ctrl", "R"], description: "Refresh/reload" },
    ],
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Keyboard className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Keyboard Shortcuts</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Master ReflectSaaS with these essential keyboard shortcuts for maximum productivity.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="editing">Editing</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                General Shortcuts
              </CardTitle>
              <CardDescription>Essential shortcuts for everyday use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shortcuts.general.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="font-mono">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Text Editing
              </CardTitle>
              <CardDescription>Shortcuts for formatting and editing text</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shortcuts.editing.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="font-mono">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Navigation
              </CardTitle>
              <CardDescription>Move around the interface quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shortcuts.navigation.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="font-mono">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Shortcuts</CardTitle>
              <CardDescription>Power user shortcuts for advanced functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shortcuts.advanced.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="font-mono">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Customization</CardTitle>
          <CardDescription>Personalize your shortcuts in Settings → Keyboard Shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You can customize most keyboard shortcuts to match your workflow. Go to Settings and look for the Keyboard
            Shortcuts section to modify or add new shortcuts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
