"Client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Keyboard, Command, Search, Edit, FileText, Zap, Settings, Navigation } from "lucide-react"

export default function KeyboardShortcutsPage() {
  const shortcutCategories = [
    {
      title: "Navigation",
      icon: Navigation,
      shortcuts: [
        { keys: ["Cmd", "K"], description: "Quick search", windows: ["Ctrl", "K"] },
        { keys: ["Cmd", "P"], description: "Command palette", windows: ["Ctrl", "P"] },
        { keys: ["Cmd", "G"], description: "Go to graph view", windows: ["Ctrl", "G"] },
        { keys: ["Cmd", "1"], description: "Go to notes", windows: ["Ctrl", "1"] },
        { keys: ["Cmd", "2"], description: "Go to daily notes", windows: ["Ctrl", "2"] },
        { keys: ["Cmd", "3"], description: "Go to templates", windows: ["Ctrl", "3"] },
        { keys: ["Cmd", "\\"], description: "Toggle sidebar", windows: ["Ctrl", "\\"] },
        { keys: ["Cmd", "Shift", "F"], description: "Focus mode", windows: ["Ctrl", "Shift", "F"] },
      ],
    },
    {
      title: "Note Creation & Editing",
      icon: Edit,
      shortcuts: [
        { keys: ["Cmd", "N"], description: "New note", windows: ["Ctrl", "N"] },
        { keys: ["Cmd", "Shift", "N"], description: "New daily note", windows: ["Ctrl", "Shift", "N"] },
        { keys: ["Cmd", "D"], description: "Duplicate note", windows: ["Ctrl", "D"] },
        { keys: ["Cmd", "S"], description: "Save note", windows: ["Ctrl", "S"] },
        { keys: ["Cmd", "Z"], description: "Undo", windows: ["Ctrl", "Z"] },
        { keys: ["Cmd", "Shift", "Z"], description: "Redo", windows: ["Ctrl", "Y"] },
        { keys: ["Cmd", "A"], description: "Select all", windows: ["Ctrl", "A"] },
        { keys: ["Cmd", "X"], description: "Cut", windows: ["Ctrl", "X"] },
        { keys: ["Cmd", "C"], description: "Copy", windows: ["Ctrl", "C"] },
        { keys: ["Cmd", "V"], description: "Paste", windows: ["Ctrl", "V"] },
      ],
    },
    {
      title: "Text Formatting",
      icon: FileText,
      shortcuts: [
        { keys: ["Cmd", "B"], description: "Bold text", windows: ["Ctrl", "B"] },
        { keys: ["Cmd", "I"], description: "Italic text", windows: ["Ctrl", "I"] },
        { keys: ["Cmd", "U"], description: "Underline text", windows: ["Ctrl", "U"] },
        { keys: ["Cmd", "Shift", "S"], description: "Strikethrough", windows: ["Ctrl", "Shift", "S"] },
        { keys: ["Cmd", "E"], description: "Inline code", windows: ["Ctrl", "E"] },
        { keys: ["Cmd", "Shift", "C"], description: "Code block", windows: ["Ctrl", "Shift", "C"] },
        { keys: ["Cmd", "K"], description: "Insert link", windows: ["Ctrl", "K"] },
        { keys: ["Cmd", "Shift", "H"], description: "Highlight text", windows: ["Ctrl", "Shift", "H"] },
      ],
    },
    {
      title: "AI Assistant",
      icon: Zap,
      shortcuts: [
        { keys: ["Cmd", "J"], description: "Open AI assistant", windows: ["Ctrl", "J"] },
        { keys: ["Cmd", "Shift", "A"], description: "AI autocomplete", windows: ["Ctrl", "Shift", "A"] },
        { keys: ["Cmd", "Shift", "S"], description: "AI summarize", windows: ["Ctrl", "Shift", "S"] },
        { keys: ["Cmd", "Shift", "T"], description: "AI translate", windows: ["Ctrl", "Shift", "T"] },
        { keys: ["Cmd", "Shift", "E"], description: "AI expand", windows: ["Ctrl", "Shift", "E"] },
        { keys: ["Cmd", "Shift", "R"], description: "AI rewrite", windows: ["Ctrl", "Shift", "R"] },
      ],
    },
    {
      title: "Search & Discovery",
      icon: Search,
      shortcuts: [
        { keys: ["Cmd", "F"], description: "Find in note", windows: ["Ctrl", "F"] },
        { keys: ["Cmd", "Shift", "F"], description: "Find in all notes", windows: ["Ctrl", "Shift", "F"] },
        { keys: ["Cmd", "G"], description: "Find next", windows: ["F3"] },
        { keys: ["Cmd", "Shift", "G"], description: "Find previous", windows: ["Shift", "F3"] },
        { keys: ["Cmd", "R"], description: "Replace", windows: ["Ctrl", "H"] },
        { keys: ["Cmd", "Shift", "R"], description: "Replace all", windows: ["Ctrl", "Shift", "H"] },
      ],
    },
    {
      title: "System & Settings",
      icon: Settings,
      shortcuts: [
        { keys: ["Cmd", ","], description: "Open preferences", windows: ["Ctrl", ","] },
        { keys: ["Cmd", "Shift", "P"], description: "Command palette", windows: ["Ctrl", "Shift", "P"] },
        { keys: ["Cmd", "Shift", "D"], description: "Toggle dark mode", windows: ["Ctrl", "Shift", "D"] },
        { keys: ["Cmd", "Shift", "I"], description: "Developer tools", windows: ["F12"] },
        { keys: ["Cmd", "Q"], description: "Quit application", windows: ["Alt", "F4"] },
        { keys: ["Cmd", "W"], description: "Close window", windows: ["Ctrl", "W"] },
      ],
    },
  ]

  const KeyboardKey = ({ children }: { children: string }) => (
    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
      {children}
    </kbd>
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Keyboard className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Keyboard Shortcuts</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Master Reflect with these keyboard shortcuts to boost your productivity and streamline your workflow.
        </p>
      </div>

      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-2">
          <Command className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">Platform Note</h3>
        </div>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          On Windows and Linux, <kbd className="px-1 py-0.5 text-xs bg-blue-100 dark:bg-blue-800 rounded">Cmd</kbd> is
          replaced with <kbd className="px-1 py-0.5 text-xs bg-blue-100 dark:bg-blue-800 rounded">Ctrl</kbd>.
          Alternative shortcuts for Windows are shown where different.
        </p>
      </div>

      <div className="grid gap-6">
        {shortcutCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5" />
                {category.title}
              </CardTitle>
              <CardDescription>Essential shortcuts for {category.title.toLowerCase()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.shortcuts.map((shortcut, shortcutIndex) => (
                  <div key={shortcutIndex} className="flex items-center justify-between py-2">
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <div key={keyIndex} className="flex items-center gap-1">
                            <KeyboardKey>{key}</KeyboardKey>
                            {keyIndex < shortcut.keys.length - 1 && (
                              <span className="text-xs text-muted-foreground">+</span>
                            )}
                          </div>
                        ))}
                      </div>
                      {shortcut.windows && (
                        <>
                          <span className="text-xs text-muted-foreground mx-2">|</span>
                          <div className="flex items-center gap-1">
                            {shortcut.windows.map((key, keyIndex) => (
                              <div key={keyIndex} className="flex items-center gap-1">
                                <KeyboardKey>{key}</KeyboardKey>
                                {keyIndex < shortcut.windows.length - 1 && (
                                  <span className="text-xs text-muted-foreground">+</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Customizing Shortcuts</CardTitle>
            <CardDescription>Personalize your keyboard shortcuts to match your workflow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">How to Customize</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Open Reflect preferences with <KeyboardKey>Cmd</KeyboardKey> + <KeyboardKey>,</KeyboardKey>
                </li>
                <li>Navigate to the "Keyboard Shortcuts" section</li>
                <li>Click on any shortcut to edit it</li>
                <li>Press your desired key combination</li>
                <li>Save your changes</li>
              </ol>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2">Tips for Custom Shortcuts</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Avoid conflicts with system shortcuts</li>
                <li>Use memorable combinations that make sense to you</li>
                <li>Consider your most-used features for the easiest shortcuts</li>
                <li>Test shortcuts in different contexts to ensure they work everywhere</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Pro Tip</h3>
        <p className="text-sm text-green-800 dark:text-green-200">
          Print this page or bookmark it for quick reference while you're learning the shortcuts. Most users find they
          can memorize their most-used shortcuts within a week of regular use.
        </p>
      </div>
    </div>
  )
}
