"Client";

import React from "react";
import { MessageCircle, Mail, Phone, Clock, Users, Headphones, FileText, Video, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400",
    action: "Start Chat",
    href: "#chat",
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 4 hours",
    color: "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400",
    action: "Send Email",
    href: "#email",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    color: "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400",
    action: "Call Now",
    href: "#phone",
  },
  {
    title: "Video Call",
    description: "Schedule a screen-sharing session",
    icon: Video,
    availability: "By appointment",
    responseTime: "Same day",
    color: "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400",
    action: "Schedule Call",
    href: "#schedule",
  },
]

const supportResources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: FileText,
    link: "/docs",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    link: "/tutorials",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and experts",
    icon: Users,
    link: "/community",
  },
  {
    title: "Status Page",
    description: "Check system status and uptime",
    icon: Zap,
    link: "/status",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get Support</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're here to help you succeed with ReflectAI. Choose the support option that works best for you.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => {
            const IconComponent = channel.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <div
                    className={`w-12 h-12 rounded-lg ${channel.color} flex items-center justify-center mx-auto mb-4 border border-blue-200 dark:border-purple-600/30`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{channel.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{channel.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      {channel.availability}
                    </div>
                    <div className="inline-block px-2 py-1 rounded-full bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 text-xs font-medium">
                      {channel.responseTime}
                    </div>
                  </div>
                  <a
                    href={channel.href}
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 dark:bg-purple-600 px-4 py-2 text-white font-medium hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors"
                  >
                    {channel.action}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                <Mail className="h-5 w-5 text-blue-600 dark:text-purple-400" />
                Send us a Message
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Subject</label>
                <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500">
                  <option value="">Select a topic</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="integration">Integration Help</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Priority Level
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500">
                  <option value="">Select priority</option>
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Issue affecting work</option>
                  <option value="high">High - Service disruption</option>
                  <option value="urgent">Urgent - Critical system down</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Message</label>
                <textarea
                  placeholder="Please describe your issue or question in detail..."
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
                ></textarea>
              </div>

              <button className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-purple-600 px-4 py-2 text-white font-medium hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>

          {/* Support Resources */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                  <Headphones className="h-5 w-5 text-blue-600 dark:text-purple-400" />
                  Support Hours
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Live Chat</span>
                    <span className="font-medium text-slate-900 dark:text-white">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Email Support</span>
                    <span className="font-medium text-slate-900 dark:text-white">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Phone Support</span>
                    <span className="font-medium text-slate-900 dark:text-white">Mon-Fri 9AM-6PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Emergency Line</span>
                    <span className="font-medium text-slate-900 dark:text-white">24/7 (Enterprise only)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Self-Service Resources</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Find answers quickly with our comprehensive resources
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {supportResources.map((resource, index) => {
                    const IconComponent = resource.icon
                    return (
                      <Link
                        key={index}
                        href={resource.link}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <div className="bg-blue-100 dark:bg-purple-600/20 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-blue-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 dark:text-white">{resource.title}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{resource.description}</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-purple-600 dark:to-purple-800 rounded-lg text-white border border-blue-200 dark:border-purple-600/30">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Enterprise Support</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get priority support, dedicated account management, and SLA guarantees.
                </p>
                <a
                  href="#enterprise"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-blue-600 dark:text-purple-600 font-medium hover:bg-slate-100 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Looking for answers to common questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Our FAQ section covers a wide range of topics to help you get the most out of ReflectAI.
          </p>
          <Link
            href="/troubleshooting/faq"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-purple-600 px-6 py-3 text-white font-medium hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors"
          >
            Browse FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}
