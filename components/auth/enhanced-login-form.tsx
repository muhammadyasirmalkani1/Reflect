"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Loader2, Shield, User, Lock } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { permissionLogger } from "@/lib/permission-logger"

export default function EnhancedLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [loginAttempts, setLoginAttempts] = useState(0)
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Log login attempt
      permissionLogger.log({
        userId: "unknown",
        userEmail: email,
        action: "login_attempt",
        resource: "auth",
        permission: "auth:login",
        granted: false,
        ip: "unknown",
        userAgent: navigator.userAgent,
        details: `Login attempt for ${email}`,
      })

      await login(email, password)

      // Log successful login
      permissionLogger.log({
        userId: "unknown", // Will be updated after login
        userEmail: email,
        action: "login_success",
        resource: "auth",
        permission: "auth:login",
        granted: true,
        ip: "unknown",
        userAgent: navigator.userAgent,
        details: `Successful login for ${email}`,
      })

      router.push("/dashboard")
    } catch (err) {
      const newAttempts = loginAttempts + 1
      setLoginAttempts(newAttempts)

      // Log failed login
      permissionLogger.log({
        userId: "unknown",
        userEmail: email,
        action: "login_failed",
        resource: "auth",
        permission: "auth:login",
        granted: false,
        ip: "unknown",
        userAgent: navigator.userAgent,
        details: `Failed login attempt ${newAttempts} for ${email}`,
      })

      if (newAttempts >= 3) {
        setError("Too many failed attempts. Please try again later or reset your password.")
      } else {
        setError(`Invalid email or password. ${3 - newAttempts} attempts remaining.`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
      <CardHeader className="space-y-1">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-purple-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Secure Login</h2>
          </div>
          <p className="text-gray-400 text-sm">Sign in with your credentials to access your account</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert className="border-red-500/20 bg-red-500/10">
              <AlertDescription className="text-red-400">{error}</AlertDescription>
            </Alert>
          )}

          {loginAttempts > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Login attempts:</span>
              <Badge variant={loginAttempts >= 3 ? "destructive" : "secondary"}>{loginAttempts}/3</Badge>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
              <User className="h-4 w-4" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loginAttempts >= 3}
              className="bg-black/20 border-purple-900/20 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300 flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loginAttempts >= 3}
                className="bg-black/20 border-purple-900/20 text-white placeholder:text-gray-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loginAttempts >= 3}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 disabled:opacity-50"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                disabled={loginAttempts >= 3}
                className="rounded border-purple-900/20 bg-black/20 text-purple-600 focus:ring-purple-600 disabled:opacity-50"
              />
              <Label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </Label>
            </div>
            <Link href="/auth/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading || loginAttempts >= 3}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : loginAttempts >= 3 ? (
              "Account Locked"
            ) : (
              <>
                <Shield className="mr-2 h-4 w-4" />
                Sign in
              </>
            )}
          </Button>

          {loginAttempts >= 3 && (
            <div className="text-center">
              <p className="text-sm text-red-400 mb-2">Account temporarily locked</p>
              <Link href="/auth/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                Reset your password to unlock
              </Link>
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-purple-900/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              disabled={loginAttempts >= 3}
              className="border-purple-900/20 bg-black/20 text-gray-300 hover:bg-purple-900/10 disabled:opacity-50"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              disabled={loginAttempts >= 3}
              className="border-purple-900/20 bg-black/20 text-gray-300 hover:bg-purple-900/10 disabled:opacity-50"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
              </svg>
              GitHub
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
