export interface Permission {
  id: string
  name: string
  description: string
  category: string
  resource: string
  action: string
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  level: number
}

export const PERMISSIONS: Permission[] = [
  // User Management
  {
    id: "users:read",
    name: "View Users",
    description: "View user profiles and information",
    category: "User Management",
    resource: "users",
    action: "read",
  },
  {
    id: "users:write",
    name: "Edit Users",
    description: "Edit user profiles and information",
    category: "User Management",
    resource: "users",
    action: "write",
  },
  {
    id: "users:delete",
    name: "Delete Users",
    description: "Delete user accounts",
    category: "User Management",
    resource: "users",
    action: "delete",
  },
  {
    id: "users:suspend",
    name: "Suspend Users",
    description: "Suspend or activate user accounts",
    category: "User Management",
    resource: "users",
    action: "suspend",
  },

  // Notes Management
  {
    id: "notes:read",
    name: "View Notes",
    description: "View personal notes",
    category: "Notes",
    resource: "notes",
    action: "read",
  },
  {
    id: "notes:write",
    name: "Create/Edit Notes",
    description: "Create and edit notes",
    category: "Notes",
    resource: "notes",
    action: "write",
  },
  {
    id: "notes:delete",
    name: "Delete Notes",
    description: "Delete notes",
    category: "Notes",
    resource: "notes",
    action: "delete",
  },
  {
    id: "notes:share",
    name: "Share Notes",
    description: "Share notes with other users",
    category: "Notes",
    resource: "notes",
    action: "share",
  },
  {
    id: "notes:export",
    name: "Export Notes",
    description: "Export notes to external formats",
    category: "Notes",
    resource: "notes",
    action: "export",
  },

  // Admin Functions
  {
    id: "admin:dashboard",
    name: "Admin Dashboard",
    description: "Access admin dashboard",
    category: "Administration",
    resource: "admin",
    action: "read",
  },
  {
    id: "admin:settings",
    name: "System Settings",
    description: "Modify system settings",
    category: "Administration",
    resource: "admin",
    action: "write",
  },
  {
    id: "admin:logs",
    name: "View Logs",
    description: "View system and security logs",
    category: "Administration",
    resource: "admin",
    action: "logs",
  },
  {
    id: "admin:analytics",
    name: "View Analytics",
    description: "View system analytics and reports",
    category: "Administration",
    resource: "admin",
    action: "analytics",
  },

  // Content Management
  {
    id: "content:read",
    name: "View Content",
    description: "View blog posts and content",
    category: "Content",
    resource: "content",
    action: "read",
  },
  {
    id: "content:write",
    name: "Create/Edit Content",
    description: "Create and edit blog posts",
    category: "Content",
    resource: "content",
    action: "write",
  },
  {
    id: "content:publish",
    name: "Publish Content",
    description: "Publish and unpublish content",
    category: "Content",
    resource: "content",
    action: "publish",
  },
  {
    id: "content:moderate",
    name: "Moderate Content",
    description: "Moderate user-generated content",
    category: "Content",
    resource: "content",
    action: "moderate",
  },

  // Support
  {
    id: "support:read",
    name: "View Support Tickets",
    description: "View support tickets",
    category: "Support",
    resource: "support",
    action: "read",
  },
  {
    id: "support:respond",
    name: "Respond to Tickets",
    description: "Respond to support tickets",
    category: "Support",
    resource: "support",
    action: "respond",
  },
  {
    id: "support:escalate",
    name: "Escalate Tickets",
    description: "Escalate support tickets",
    category: "Support",
    resource: "support",
    action: "escalate",
  },
]

export const ROLES: Role[] = [
  {
    id: "user",
    name: "User",
    description: "Standard user with basic permissions",
    level: 1,
    permissions: ["notes:read", "notes:write", "notes:delete", "notes:share", "notes:export", "content:read"],
  },
  {
    id: "moderator",
    name: "Moderator",
    description: "Content moderator with additional permissions",
    level: 2,
    permissions: [
      "notes:read",
      "notes:write",
      "notes:delete",
      "notes:share",
      "notes:export",
      "content:read",
      "content:write",
      "content:moderate",
      "support:read",
      "support:respond",
      "users:read",
    ],
  },
  {
    id: "admin",
    name: "Administrator",
    description: "Full system administrator",
    level: 3,
    permissions: [
      "users:read",
      "users:write",
      "users:delete",
      "users:suspend",
      "notes:read",
      "notes:write",
      "notes:delete",
      "notes:share",
      "notes:export",
      "admin:dashboard",
      "admin:settings",
      "admin:logs",
      "admin:analytics",
      "content:read",
      "content:write",
      "content:publish",
      "content:moderate",
      "support:read",
      "support:respond",
      "support:escalate",
    ],
  },
]

export function getPermissionsByRole(roleId: string): Permission[] {
  const role = ROLES.find((r) => r.id === roleId)
  if (!role) return []

  return PERMISSIONS.filter((permission) => role.permissions.includes(permission.id))
}

export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.includes(requiredPermission)
}

export function hasAnyPermission(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.some((permission) => userPermissions.includes(permission))
}

export function hasAllPermissions(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.every((permission) => userPermissions.includes(permission))
}
