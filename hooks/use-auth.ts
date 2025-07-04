"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "user" | "admin" | "moderator"
  plan: "free" | "pro" | "enterprise"
  avatar?: string
  createdAt: string
  lastLoginAt: string
  permissions: string[]
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => Promise<void>
  hasPermission: (permission: string) => boolean
  hasRole: (role: string) => boolean
}

interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("auth_token")
      if (token) {
        // Simulate API call to verify token and get user data
        const mockUser: User = {
          id: "1",
          email: "user@example.com",
          firstName: "John",
          lastName: "Doe",
          role: "user",
          plan: "pro",
          avatar: "/placeholder.svg?height=40&width=40",
          createdAt: "2024-01-01T00:00:00Z",
          lastLoginAt: new Date().toISOString(),
          permissions: ["read:notes", "write:notes", "delete:notes", "share:notes"],
        }
        setUser(mockUser)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      localStorage.removeItem("auth_token")
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      const mockUser: User = {
        id: "1",
        email,
        firstName: "John",
        lastName: "Doe",
        role: "user",
        plan: "pro",
        avatar: "/placeholder.svg?height=40&width=40",
        createdAt: "2024-01-01T00:00:00Z",
        lastLoginAt: new Date().toISOString(),
        permissions: ["read:notes", "write:notes", "delete:notes", "share:notes"],
      }

      localStorage.setItem("auth_token", "mock_token_123")
      setUser(mockUser)
    } catch (error) {
      throw new Error("Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful registration
      const mockUser: User = {
        id: "1",
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: "user",
        plan: "free",
        avatar: "/placeholder.svg?height=40&width=40",
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        permissions: ["read:notes", "write:notes"],
      }

      localStorage.setItem("auth_token", "mock_token_123")
      setUser(mockUser)
    } catch (error) {
      throw new Error("Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    setUser(null)
  }

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setUser({ ...user, ...userData })
    } catch (error) {
      throw new Error("Failed to update user")
    }
  }

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission) || false
  }

  const hasRole = (role: string): boolean => {
    return user?.role === role || false
  }

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
    hasPermission,
    hasRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
