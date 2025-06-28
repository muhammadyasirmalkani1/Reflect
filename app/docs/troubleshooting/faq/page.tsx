"Client";

import React from "react";
import { MessageCircle, Book, Settings, Zap, Shield } from "lucide-react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Book,
    color:
      "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 border-blue-200 dark:border-purple-600/30",
    questions: [
      {
        question: "How do I create my first ReflectAI project?",
        answer:
          "To create your first project, log into your dashboard and click 'New Project'. Choose a template or start from scratch, then follow the setup wizard to configure your AI model and data sources.",
      },
      {
        question: "What are the system requirements?",
        answer:
          "ReflectAI works on any modern web browser. For optimal performance, we recommend Chrome, Firefox, or Safari with at least 4GB RAM. Mobile apps are available for iOS and Android.",
      },
      {
        question: "How long does initial setup take?",
        answer:
          "Most users complete their initial setup within 10-15 minutes. This includes account verification, basic configuration, and connecting your first data source.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Usage",
    icon: Zap,
    color:
      "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 border-blue-200 dark:border-purple-600/30",
    questions: [
      {
        question: "Can I integrate ReflectAI with my existing tools?",
        answer:
          "Yes! ReflectAI offers integrations with 100+ popular tools including Slack, Microsoft Teams, Google Workspace, Salesforce, and many more. Check our integrations page for the full list.",
      },
      {
        question: "How accurate are the AI insights?",
        answer:
          "Our AI models achieve 95%+ accuracy on most tasks. Accuracy improves over time as the system learns from your specific use cases and feedback.",
      },
      {
        question: "Can I customize the AI responses?",
        answer:
          "You can train custom models, adjust response parameters, and create custom prompts to match your specific needs and brand voice.",
      },
      {
        question: "Is there a limit to how much data I can process?",
        answer:
          "Limits depend on your plan. Starter plans include 10GB monthly processing, while Enterprise plans offer unlimited processing with priority support.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Billing",
    icon: Settings,
    color:
      "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 border-blue-200 dark:border-purple-600/30",
    questions: [
      {
        question: "How do I upgrade my plan?",
        answer:
          "Go to Settings > Billing in your dashboard. You can upgrade instantly with immediate access to new features. Downgrades take effect at the next billing cycle.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel anytime without penalties. Your account remains active until the end of your current billing period, and you'll retain access to your data.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 30-day money-back guarantee for annual plans and a 7-day guarantee for monthly plans. Contact support for refund requests.",
      },
      {
        question: "How do I add team members?",
        answer:
          "In your dashboard, go to Team > Invite Members. Enter email addresses and assign roles. Team members will receive invitation emails to join your workspace.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    icon: Shield,
    color:
      "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 border-blue-200 dark:border-purple-600/30",
    questions: [
      {
        question: "How secure is my data?",
        answer:
          "We use enterprise-grade security with AES-256 encryption, SOC 2 compliance, and regular security audits. Your data is encrypted both in transit and at rest.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Data is stored in secure, GDPR-compliant data centers. You can choose your preferred region (US, EU, or Asia-Pacific) during setup.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes, you can export all your data at any time in standard formats (JSON, CSV, PDF). Go to Settings > Data Export to download your information.",
      },
      {
        question: "Do you share data with third parties?",
        answer:
          "Never. We don't sell, rent, or share your data with third parties. Your information is used solely to provide and improve our services to you.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: MessageCircle,
    color:
      "bg-blue-100 dark:bg-purple-600/20 text-blue-600 dark:text-purple-400 border-blue-200 dark:border-purple-600/30",
    questions: [
      {
        question: "Why is my AI model responding slowly?",
        answer:
          "Slow responses can be due to high server load, complex queries, or large datasets. Try simplifying your query or contact support if the issue persists.",
      },
      {
        question: "I'm getting error messages. What should I do?",
        answer:
          "First, try refreshing the page. If the error persists, check our status page for known issues. For persistent problems, contact support with the error code.",
      },
      {
        question: "My integrations aren't working properly.",
        answer:
          "Verify your API keys are correct and have proper permissions. Check if the third-party service is experiencing issues. Reconnect the integration if needed.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email, and follow the reset instructions. If you don't receive the email, check your spam folder.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Find quick answers to common questions about ReflectAI
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                    <div className={`p-2 rounded-lg border ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {category.title}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-slate-200 dark:border-slate-800 pb-6 last:border-b-0 last:pb-0"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-purple-600 dark:to-purple-800 rounded-lg p-8 text-center border border-blue-200 dark:border-purple-600/30">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-200 dark:text-purple-200" />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Still need help?
          </h3>
          <p className="text-lg text-blue-100 dark:text-purple-100 mb-6">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/troubleshooting/support"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-blue-600 dark:text-purple-600 font-medium hover:bg-slate-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-md border border-blue-300 dark:border-purple-300 px-6 py-3 text-white font-medium hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
