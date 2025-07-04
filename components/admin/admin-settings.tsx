"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Mail, Shield, Bell, Save, RefreshCw, AlertTriangle } from "lucide-react"
import { toast } from "sonner"

interface SystemSettings {
  general: {
    siteName: string
    siteDescription: string
    supportEmail: string
    maintenanceMode: boolean
    registrationEnabled: boolean
  }
  email: {
    smtpHost: string
    smtpPort: string
    smtpUser: string
    smtpPassword: string
    fromEmail: string
    fromName: string
  }
  security: {
    sessionTimeout: string
    maxLoginAttempts: string
    passwordMinLength: string
    requireTwoFactor: boolean
    allowPasswordReset: boolean
  }
  notifications: {
    emailNotifications: boolean
    securityAlerts: boolean
    systemUpdates: boolean
    userRegistrations: boolean
  }
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<SystemSettings>({
    general: {
      siteName: "Reflect",
      siteDescription: "AI-powered note-taking and knowledge management platform",
      supportEmail: "support@reflect.com",
      maintenanceMode: false,
      registrationEnabled: true,
    },
    email: {
      smtpHost: "smtp.gmail.com",
      smtpPort: "587",
      smtpUser: "noreply@reflect.com",
      smtpPassword: "••••••••••••",
      fromEmail: "noreply@reflect.com",
      fromName: "Reflect Team",
    },
    security: {
      sessionTimeout: "24",
      maxLoginAttempts: "5",
      passwordMinLength: "8",
      requireTwoFactor: false,
      allowPasswordReset: true,
    },
    notifications: {
      emailNotifications: true,
      securityAlerts: true,
      systemUpdates: true,
      userRegistrations: false,
    },
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Settings saved successfully!")
    } catch (error) {
      toast.error("Failed to save settings. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const updateGeneralSettings = (key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      general: { ...prev.general, [key]: value },
    }))
  }

  const updateEmailSettings = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      email: { ...prev.email, [key]: value },
    }))
  }

  const updateSecuritySettings = (key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      security: { ...prev.security, [key]: value },
    }))
  }

  const updateNotificationSettings = (key: string, value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value },
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-white">System Settings</h3>
          <p className="text-sm text-gray-400">Configure system-wide settings and preferences</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700">
          {isSaving ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-black/50 border border-purple-500/20">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
              <CardDescription>Basic site configuration and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName" className="text-gray-300">
                    Site Name
                  </Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => updateGeneralSettings("siteName", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail" className="text-gray-300">
                    Support Email
                  </Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.general.supportEmail}
                    onChange={(e) => updateGeneralSettings("supportEmail", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription" className="text-gray-300">
                  Site Description
                </Label>
                <Textarea
                  id="siteDescription"
                  value={settings.general.siteDescription}
                  onChange={(e) => updateGeneralSettings("siteDescription", e.target.value)}
                  className="bg-black/30 border-purple-500/30 text-white"
                  rows={3}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Maintenance Mode</Label>
                    <p className="text-sm text-gray-400">Temporarily disable site access for maintenance</p>
                  </div>
                  <Switch
                    checked={settings.general.maintenanceMode}
                    onCheckedChange={(checked) => updateGeneralSettings("maintenanceMode", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">User Registration</Label>
                    <p className="text-sm text-gray-400">Allow new users to register accounts</p>
                  </div>
                  <Switch
                    checked={settings.general.registrationEnabled}
                    onCheckedChange={(checked) => updateGeneralSettings("registrationEnabled", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Email Configuration</CardTitle>
              <CardDescription>SMTP settings for outgoing emails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtpHost" className="text-gray-300">
                    SMTP Host
                  </Label>
                  <Input
                    id="smtpHost"
                    value={settings.email.smtpHost}
                    onChange={(e) => updateEmailSettings("smtpHost", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort" className="text-gray-300">
                    SMTP Port
                  </Label>
                  <Input
                    id="smtpPort"
                    value={settings.email.smtpPort}
                    onChange={(e) => updateEmailSettings("smtpPort", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpUser" className="text-gray-300">
                    SMTP Username
                  </Label>
                  <Input
                    id="smtpUser"
                    value={settings.email.smtpUser}
                    onChange={(e) => updateEmailSettings("smtpUser", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword" className="text-gray-300">
                    SMTP Password
                  </Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={settings.email.smtpPassword}
                    onChange={(e) => updateEmailSettings("smtpPassword", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromEmail" className="text-gray-300">
                    From Email
                  </Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={settings.email.fromEmail}
                    onChange={(e) => updateEmailSettings("fromEmail", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromName" className="text-gray-300">
                    From Name
                  </Label>
                  <Input
                    id="fromName"
                    value={settings.email.fromName}
                    onChange={(e) => updateEmailSettings("fromName", e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <p className="text-sm text-yellow-400">
                  Test email configuration before saving to ensure emails can be sent successfully.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Security Settings</CardTitle>
              <CardDescription>Configure authentication and security policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout" className="text-gray-300">
                    Session Timeout (hours)
                  </Label>
                  <Select
                    value={settings.security.sessionTimeout}
                    onValueChange={(value) => updateSecuritySettings("sessionTimeout", value)}
                  >
                    <SelectTrigger className="bg-black/30 border-purple-500/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour</SelectItem>
                      <SelectItem value="8">8 hours</SelectItem>
                      <SelectItem value="24">24 hours</SelectItem>
                      <SelectItem value="168">7 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxLoginAttempts" className="text-gray-300">
                    Max Login Attempts
                  </Label>
                  <Select
                    value={settings.security.maxLoginAttempts}
                    onValueChange={(value) => updateSecuritySettings("maxLoginAttempts", value)}
                  >
                    <SelectTrigger className="bg-black/30 border-purple-500/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="10">10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordMinLength" className="text-gray-300">
                    Min Password Length
                  </Label>
                  <Select
                    value={settings.security.passwordMinLength}
                    onValueChange={(value) => updateSecuritySettings("passwordMinLength", value)}
                  >
                    <SelectTrigger className="bg-black/30 border-purple-500/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 characters</SelectItem>
                      <SelectItem value="8">8 characters</SelectItem>
                      <SelectItem value="12">12 characters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Require Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-400">Force all users to enable 2FA</p>
                  </div>
                  <Switch
                    checked={settings.security.requireTwoFactor}
                    onCheckedChange={(checked) => updateSecuritySettings("requireTwoFactor", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Allow Password Reset</Label>
                    <p className="text-sm text-gray-400">Enable password reset via email</p>
                  </div>
                  <Switch
                    checked={settings.security.allowPasswordReset}
                    onCheckedChange={(checked) => updateSecuritySettings("allowPasswordReset", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-black/40 border-purple-900/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Notification Settings</CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Email Notifications</Label>
                    <p className="text-sm text-gray-400">Send system notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) => updateNotificationSettings("emailNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Security Alerts</Label>
                    <p className="text-sm text-gray-400">Notify admins of security events</p>
                  </div>
                  <Switch
                    checked={settings.notifications.securityAlerts}
                    onCheckedChange={(checked) => updateNotificationSettings("securityAlerts", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">System Updates</Label>
                    <p className="text-sm text-gray-400">Notify about system maintenance and updates</p>
                  </div>
                  <Switch
                    checked={settings.notifications.systemUpdates}
                    onCheckedChange={(checked) => updateNotificationSettings("systemUpdates", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">User Registrations</Label>
                    <p className="text-sm text-gray-400">Notify admins when new users register</p>
                  </div>
                  <Switch
                    checked={settings.notifications.userRegistrations}
                    onCheckedChange={(checked) => updateNotificationSettings("userRegistrations", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
