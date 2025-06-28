"Client";

import React from "react";
export const docsCategories = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start Guide", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Core Concepts", href: "/docs/core-concepts" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Note Taking", href: "/docs/features/note-taking" },
      { title: "AI ChatGPT", href: "/docs/features/ai-assistant" },
      { title: "Connections", href: "/docs/features/connections" },
      { title: "Search", href: "/docs/features/search" },
    ],
  },
  {
    title: "Advanced Usage",
    items: [
      { title: "Keyboard Shortcuts", href: "/docs/advanced/keyboard-shortcuts" },
      { title: "Templates", href: "/docs/advanced/templates" },
      { title: "Integrations", href: "/docs/advanced/integrations" },
      { title: "API", href: "/docs/advanced/api" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Daily Journaling", href: "/docs/guides/daily-journaling" },
      { title: "Project Management", href: "/docs/guides/project-management" },
      { title: "Research", href: "/docs/guides/research" },
      { title: "Knowledge Base", href: "/docs/guides/knowledge-base" },
    ],
  },
  {
    title: "Learning Resources",
    items: [
      { title: "Video Tutorials", href: "/docs/video-tutorials" },
      { title: "Webinars", href: "/docs/webinars" },
      { title: "Case Studies", href: "/docs/case-studies" },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { title: "FAQ", href: "/docs/troubleshooting/faq" },
      { title: "Common Issues", href: "/docs/troubleshooting/common-issues" },
      { title: "Support", href: "/docs/troubleshooting/support" },
    ],
  },
]

export const docsSearchResults = [
  {
    title: "Introduction to Reflect",
    content:
      "Reflect is an AI-powered note-taking and thinking tool designed to help you organize your thoughts, generate ideas, and make connections between concepts.",
    href: "/docs",
  },
  {
    title: "Quick Start Guide",
    content:
      "Get up and running with Reflect in minutes. This guide will walk you through the basics of creating notes, using the AI assistant, and connecting ideas.",
    href: "/docs/quick-start",
  },
  {
    title: "AI Assistant Features",
    content:
      "Learn how to use Reflect's AI assistant to generate ideas, summarize content, and discover connections between your notes.",
    href: "/docs/features/ai-assistant",
  },
  {
    title: "Creating Connections",
    content:
      "Discover how to create manual connections between notes and how Reflect's AI automatically suggests relevant connections.",
    href: "/docs/features/connections",
  },
  {
    title: "Advanced Search Techniques",
    content:
      "Master Reflect's powerful semantic search to find exactly what you're looking for, even if you don't remember the exact words.",
    href: "/docs/features/search",
  },
  {
    title: "Keyboard Shortcuts",
    content:
      "Boost your productivity with these keyboard shortcuts for navigating, editing, and organizing your notes in Reflect.",
    href: "/docs/advanced/keyboard-shortcuts",
  },
  {
    title: "API Documentation",
    content: "Integrate Reflect with your own tools and workflows using our comprehensive API.",
    href: "/docs/advanced/api",
  },
  {
    title: "Troubleshooting Sync Issues",
    content: "Learn how to resolve common synchronization problems between devices.",
    href: "/docs/troubleshooting/common-issues",
  },
  {
    title: "Video Tutorials",
    content: "Watch step-by-step video tutorials to learn how to use Reflect's features effectively.",
    href: "/docs/video-tutorials",
  },
]

export const videoTutorials = {
  categories: [
    {
      id: "getting-started",
      title: "Getting Started",
      videos: [
        {
          id: "intro-to-reflect",
          title: "Introduction to Reflect",
          description:
            "This introductory tutorial gives you an overview of Reflect and its core features. Learn how to navigate the interface, create your first note, and understand the basic concepts.",
          videoUrl: "/videos/Capilot.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "5:32",
          topics: [
            "Overview of the Reflect interface",
            "Creating your first note",
            "Basic navigation and organization",
            "Understanding the core concepts",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction" },
            { time: "0:45", label: "Interface overview" },
            { time: "1:30", label: "Creating your first note" },
            { time: "2:45", label: "Basic navigation" },
            { time: "4:15", label: "Core concepts" },
          ],
          relatedDocs: [
            { title: "Quick Start Guide", href: "/docs/quick-start" },
            { title: "Core Concepts", href: "/docs/core-concepts" },
          ],
        },
        {
          id: "installation-setup",
          title: "Installation and Setup",
          description:
            "Learn how to install Reflect on different platforms and set up your account. This tutorial covers installation on macOS, Windows, and mobile devices, as well as initial account configuration.",
          videoUrl: "/videos/installation-setup.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "7:15",
          topics: [
            "Installing Reflect on macOS",
            "Installing Reflect on Windows",
            "Setting up Reflect on mobile devices",
            "Initial account configuration",
            "Syncing between devices",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction" },
            { time: "0:30", label: "macOS installation" },
            { time: "2:15", label: "Windows installation" },
            { time: "3:45", label: "Mobile setup" },
            { time: "5:00", label: "Account configuration" },
            { time: "6:30", label: "Syncing between devices" },
          ],
          relatedDocs: [
            { title: "Installation", href: "/docs/installation" },
            { title: "Quick Start Guide", href: "/docs/quick-start" },
          ],
        },
      ],
    },
    {
      id: "core-features",
      title: "Core Features",
      videos: [
        {
          id: "ai-assistant",
          title: "Mastering the AI Assistant",
          description:
            "Discover the full potential of Reflect's AI assistant. This tutorial shows you how to use AI to generate ideas, summarize content, create outlines, and make connections between your notes.",
          videoUrl: "/videos/ai-assistant.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "10:24",
          topics: [
            "Using AI commands",
            "Generating ideas and outlines",
            "Summarizing content",
            "Finding connections between notes",
            "Customizing AI behavior",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction to the AI assistant" },
            { time: "1:15", label: "Basic AI commands" },
            { time: "3:00", label: "Generating ideas" },
            { time: "4:45", label: "Summarizing content" },
            { time: "6:30", label: "Finding connections" },
            { time: "8:15", label: "Customizing AI behavior" },
          ],
          relatedDocs: [
            { title: "AI Assistant", href: "/docs/features/ai-assistant" },
            { title: "Advanced AI Usage", href: "/docs/advanced/ai-customization" },
          ],
        },
        {
          id: "connections-linking",
          title: "Creating Connections and Links",
          description:
            "Learn how to create a network of knowledge by connecting your notes. This tutorial covers manual linking, automatic connections, and visualizing your knowledge graph.",
          videoUrl: "/videos/connections-linking.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "8:47",
          topics: [
            "Creating manual links between notes",
            "Understanding automatic connections",
            "Using the graph view",
            "Building a knowledge network",
            "Finding related notes",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction to connections" },
            { time: "1:00", label: "Creating manual links" },
            { time: "2:30", label: "Automatic connections" },
            { time: "4:15", label: "Using the graph view" },
            { time: "6:00", label: "Building a knowledge network" },
            { time: "7:30", label: "Finding related notes" },
          ],
          relatedDocs: [
            { title: "Connections", href: "/docs/features/connections" },
            { title: "Graph View", href: "/docs/features/graph-view" },
          ],
        },
        {
          id: "search-techniques",
          title: "Advanced Search Techniques",
          description:
            "Master Reflect's powerful search capabilities to find exactly what you're looking for. This tutorial covers basic and advanced search syntax, filters, and semantic search.",
          videoUrl: "/videos/search-techniques.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "6:38",
          topics: [
            "Basic search functionality",
            "Advanced search syntax",
            "Using filters and tags",
            "Semantic search capabilities",
            "Saving and reusing searches",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction to search" },
            { time: "0:45", label: "Basic search" },
            { time: "1:30", label: "Advanced search syntax" },
            { time: "3:00", label: "Filters and tags" },
            { time: "4:15", label: "Semantic search" },
            { time: "5:30", label: "Saving searches" },
          ],
          relatedDocs: [
            { title: "Search", href: "/docs/features/search" },
            { title: "Advanced Search Syntax", href: "/docs/advanced/search-syntax" },
          ],
        },
      ],
    },
    {
      id: "advanced-usage",
      title: "Advanced Usage",
      videos: [
        {
          id: "keyboard-shortcuts",
          title: "Keyboard Shortcuts and Productivity",
          description:
            "Boost your productivity with keyboard shortcuts and advanced editing techniques. This tutorial shows you how to navigate, edit, and organize your notes efficiently.",
          videoUrl: "/videos/keyboard-shortcuts.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "7:52",
          topics: [
            "Essential keyboard shortcuts",
            "Navigation shortcuts",
            "Editing shortcuts",
            "Custom shortcuts",
            "Productivity workflows",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction" },
            { time: "0:30", label: "Essential shortcuts" },
            { time: "2:15", label: "Navigation shortcuts" },
            { time: "3:45", label: "Editing shortcuts" },
            { time: "5:00", label: "Custom shortcuts" },
            { time: "6:30", label: "Productivity workflows" },
          ],
          relatedDocs: [
            { title: "Keyboard Shortcuts", href: "/docs/advanced/keyboard-shortcuts" },
            { title: "Productivity Tips", href: "/docs/guides/productivity" },
          ],
        },
        {
          id: "templates-workflows",
          title: "Templates and Workflows",
          description:
            "Learn how to use templates to streamline your note-taking and create consistent workflows. This tutorial covers creating, using, and sharing templates.",
          videoUrl: "/videos/templates-workflows.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "9:15",
          topics: [
            "Creating custom templates",
            "Using built-in templates",
            "Template variables and placeholders",
            "Sharing templates",
            "Building workflows with templates",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction to templates" },
            { time: "1:00", label: "Built-in templates" },
            { time: "2:30", label: "Creating custom templates" },
            { time: "4:15", label: "Template variables" },
            { time: "6:00", label: "Sharing templates" },
            { time: "7:30", label: "Workflow examples" },
          ],
          relatedDocs: [
            { title: "Templates", href: "/docs/advanced/templates" },
            { title: "Workflow Examples", href: "/docs/guides/workflows" },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      title: "Use Cases and Examples",
      videos: [
        {
          id: "research-workflow",
          title: "Research Workflow with Reflect",
          description:
            "See how to use Reflect for academic or professional research. This tutorial demonstrates a complete research workflow from collecting sources to writing a final paper.",
          videoUrl: "/videos/research-workflow.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "12:36",
          topics: [
            "Setting up a research project",
            "Collecting and organizing sources",
            "Taking research notes",
            "Creating literature connections",
            "Outlining and writing with AI assistance",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction" },
            { time: "1:15", label: "Setting up a research project" },
            { time: "3:00", label: "Collecting sources" },
            { time: "5:30", label: "Taking research notes" },
            { time: "7:45", label: "Creating connections" },
            { time: "9:30", label: "Outlining with AI" },
            { time: "11:00", label: "Final writing process" },
          ],
          relatedDocs: [
            { title: "Research Guide", href: "/docs/guides/research" },
            { title: "Academic Templates", href: "/docs/templates/academic" },
          ],
        },
        {
          id: "daily-journaling",
          title: "Daily Journaling and Reflection",
          description:
            "Learn how to use Reflect for daily journaling and personal reflection. This tutorial covers setting up a journaling habit, using templates, and discovering insights over time.",
          videoUrl: "/videos/daily-journaling.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "8:22",
          topics: [
            "Setting up a daily journal",
            "Using journal templates",
            "Reflection techniques",
            "Tracking habits and moods",
            "Finding patterns with AI",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction to journaling" },
            { time: "1:00", label: "Setting up a daily journal" },
            { time: "2:30", label: "Journal templates" },
            { time: "4:15", label: "Reflection techniques" },
            { time: "5:45", label: "Tracking habits and moods" },
            { time: "7:00", label: "Finding patterns with AI" },
          ],
          relatedDocs: [
            { title: "Daily Journaling", href: "/docs/guides/daily-journaling" },
            { title: "Journal Templates", href: "/docs/templates/journaling" },
          ],
        },
        {
          id: "project-management",
          title: "Project Management with Reflect",
          description:
            "Discover how to use Reflect for managing projects and tasks. This tutorial shows you how to organize project notes, track tasks, and collaborate with team members.",
          videoUrl: "/videos/project-management.mp4",
          thumbnailUrl: "/placeholder.svg?height=720&width=1280",
          duration: "11:05",
          topics: [
            "Setting up a project workspace",
            "Creating project outlines",
            "Task tracking and management",
            "Meeting notes and action items",
            "Project timeline and milestones",
          ],
          timestamps: [
            { time: "0:00", label: "Introduction" },
            { time: "1:15", label: "Setting up a project workspace" },
            { time: "3:00", label: "Project outlines" },
            { time: "4:45", label: "Task tracking" },
            { time: "6:30", label: "Meeting notes" },
            { time: "8:15", label: "Project timeline" },
            { time: "10:00", label: "Collaboration tips" },
          ],
          relatedDocs: [
            { title: "Project Management", href: "/docs/guides/project-management" },
            { title: "Collaboration", href: "/docs/features/collaboration" },
          ],
        },
      ],
    },
  ],
}
