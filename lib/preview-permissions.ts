export interface PreviewPermission {
  id: string
  name: string
  description: string
  category: string
  previewLevel: "free" | "trial" | "pro" | "enterprise"
  demoAvailable: boolean
  limitations?: string[]
}

export interface PreviewRole {
  id: string
  name: string
  description: string
  permissions: string[]
  level: number
  trialDays?: number
  features: string[]
  limitations: string[]
}

export const PREVIEW_PERMISSIONS: PreviewPermission[] = [
  // Basic Note-Taking
  {
    id: "notes:create",
    name: "Create Notes",
    description: "Create new notes and documents",
    category: "Note-Taking",
    previewLevel: "free",
    demoAvailable: true,
    limitations: ["Maximum 10 notes in preview"],
  },
  {
    id: "notes:edit",
    name: "Edit Notes",
    description: "Edit existing notes",
    category: "Note-Taking",
    previewLevel: "free",
    demoAvailable: true,
  },
  {
    id: "notes:delete",
    name: "Delete Notes",
    description: "Delete notes permanently",
    category: "Note-Taking",
    previewLevel: "free",
    demoAvailable: true,
  },
  {
    id: "notes:organize",
    name: "Organize Notes",
    description: "Create folders and organize notes",
    category: "Note-Taking",
    previewLevel: "trial",
    demoAvailable: true,
    limitations: ["Maximum 3 folders in preview"],
  },

  // AI Features
  {
    id: "ai:chat",
    name: "AI Chat Assistant",
    description: "Chat with AI about your notes",
    category: "AI Features",
    previewLevel: "trial",
    demoAvailable: true,
    limitations: ["5 AI interactions per day in preview"],
  },
  {
    id: "ai:summarize",
    name: "AI Summarization",
    description: "Generate AI summaries of notes",
    category: "AI Features",
    previewLevel: "pro",
    demoAvailable: true,
    limitations: ["2 summaries per day in preview"],
  },
  {
    id: "ai:connections",
    name: "AI Note Connections",
    description: "AI-powered note linking and connections",
    category: "AI Features",
    previewLevel: "pro",
    demoAvailable: false,
  },
  {
    id: "ai:insights",
    name: "AI Insights",
    description: "Get AI-powered insights from your notes",
    category: "AI Features",
    previewLevel: "enterprise",
    demoAvailable: false,
  },

  // Search & Discovery
  {
    id: "search:basic",
    name: "Basic Search",
    description: "Search through your notes",
    category: "Search",
    previewLevel: "free",
    demoAvailable: true,
  },
  {
    id: "search:semantic",
    name: "Semantic Search",
    description: "AI-powered semantic search",
    category: "Search",
    previewLevel: "pro",
    demoAvailable: true,
    limitations: ["Limited to 10 search results in preview"],
  },
  {
    id: "search:filters",
    name: "Advanced Filters",
    description: "Filter notes by date, tags, and more",
    category: "Search",
    previewLevel: "trial",
    demoAvailable: true,
  },

  // Collaboration
  {
    id: "share:public",
    name: "Public Sharing",
    description: "Share notes publicly with a link",
    category: "Collaboration",
    previewLevel: "trial",
    demoAvailable: true,
    limitations: ["Shared notes expire after 24 hours in preview"],
  },
  {
    id: "share:collaborate",
    name: "Real-time Collaboration",
    description: "Collaborate on notes in real-time",
    category: "Collaboration",
    previewLevel: "pro",
    demoAvailable: false,
  },
  {
    id: "share:comments",
    name: "Comments & Feedback",
    description: "Add comments and feedback to shared notes",
    category: "Collaboration",
    previewLevel: "pro",
    demoAvailable: false,
  },

  // Export & Integration
  {
    id: "export:basic",
    name: "Basic Export",
    description: "Export notes as text or markdown",
    category: "Export",
    previewLevel: "free",
    demoAvailable: true,
  },
  {
    id: "export:advanced",
    name: "Advanced Export",
    description: "Export to PDF, Word, and other formats",
    category: "Export",
    previewLevel: "pro",
    demoAvailable: true,
    limitations: ["Watermarked exports in preview"],
  },
  {
    id: "integrations:basic",
    name: "Basic Integrations",
    description: "Connect with popular apps",
    category: "Integrations",
    previewLevel: "trial",
    demoAvailable: false,
  },
  {
    id: "integrations:advanced",
    name: "Advanced Integrations",
    description: "API access and custom integrations",
    category: "Integrations",
    previewLevel: "enterprise",
    demoAvailable: false,
  },
]

export const PREVIEW_ROLES: PreviewRole[] = [
  {
    id: "visitor",
    name: "Visitor",
    description: "Browse and explore Reflect features",
    level: 0,
    permissions: [],
    features: ["View marketing pages", "Read documentation", "Watch demo videos"],
    limitations: ["Cannot create account", "No note-taking access", "Limited feature previews"],
  },
  {
    id: "preview",
    name: "Preview User",
    description: "Try basic features with limitations",
    level: 1,
    permissions: ["notes:create", "notes:edit", "notes:delete", "search:basic", "export:basic"],
    features: ["Create up to 10 notes", "Basic note editing", "Simple search", "Text export"],
    limitations: ["Maximum 10 notes", "No AI features", "No collaboration", "Basic export only"],
  },
  {
    id: "trial",
    name: "Trial User",
    description: "14-day trial with most features",
    level: 2,
    trialDays: 14,
    permissions: [
      "notes:create",
      "notes:edit",
      "notes:delete",
      "notes:organize",
      "ai:chat",
      "search:basic",
      "search:filters",
      "share:public",
      "export:basic",
      "integrations:basic",
    ],
    features: [
      "Unlimited notes",
      "AI chat assistant (5/day)",
      "Note organization",
      "Public sharing",
      "Advanced search filters",
    ],
    limitations: [
      "14-day time limit",
      "Limited AI interactions",
      "No real-time collaboration",
      "Basic integrations only",
    ],
  },
  {
    id: "pro_preview",
    name: "Pro Preview",
    description: "Preview Pro features with limitations",
    level: 3,
    permissions: [
      "notes:create",
      "notes:edit",
      "notes:delete",
      "notes:organize",
      "ai:chat",
      "ai:summarize",
      "ai:connections",
      "search:basic",
      "search:semantic",
      "search:filters",
      "share:public",
      "share:collaborate",
      "share:comments",
      "export:basic",
      "export:advanced",
      "integrations:basic",
    ],
    features: [
      "All trial features",
      "AI summarization (2/day)",
      "Semantic search",
      "Real-time collaboration",
      "Advanced export formats",
    ],
    limitations: ["Limited AI usage", "Watermarked exports", "Preview mode only", "No API access"],
  },
]

export function getPreviewPermissionsByRole(roleId: string): PreviewPermission[] {
  const role = PREVIEW_ROLES.find((r) => r.id === roleId)
  if (!role) return []

  return PREVIEW_PERMISSIONS.filter((permission) => role.permissions.includes(permission.id))
}

export function hasPreviewPermission(userRole: string, permissionId: string): boolean {
  const role = PREVIEW_ROLES.find((r) => r.id === userRole)
  if (!role) return false

  return role.permissions.includes(permissionId)
}

export function getPermissionLimitations(permissionId: string): string[] {
  const permission = PREVIEW_PERMISSIONS.find((p) => p.id === permissionId)
  return permission?.limitations || []
}

export function canAccessDemo(permissionId: string): boolean {
  const permission = PREVIEW_PERMISSIONS.find((p) => p.id === permissionId)
  return permission?.demoAvailable || false
}
