import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="cosmic-bg pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              No hidden fees, no complicated tiers. Just one plan with everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="feature-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-gray-600"></div>
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-2">
                  $0<span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-6">Perfect for trying out Reflect</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Up to 100 notes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Basic AI features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Sync between 2 devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Standard encryption</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Community support</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-none py-6">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="feature-card relative overflow-hidden border-purple-500/30 purple-glow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-purple-900/40 text-purple-400 text-xs font-medium">
                Popular
              </div>
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-2">
                  $10<span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-6">Everything you need to think better</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Unlimited notes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Advanced AI assistant</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Sync across unlimited devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Automatic backups</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none py-6">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center purple-gradient-text">Compare Plans</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-900/20">
                    <th className="py-4 px-6 text-left text-lg font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold">Free</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Notes</td>
                    <td className="py-4 px-6 text-center text-gray-300">Up to 100</td>
                    <td className="py-4 px-6 text-center text-gray-300">Unlimited</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">AI Assistant</td>
                    <td className="py-4 px-6 text-center text-gray-300">Basic</td>
                    <td className="py-4 px-6 text-center text-gray-300">Advanced</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Device Sync</td>
                    <td className="py-4 px-6 text-center text-gray-300">2 devices</td>
                    <td className="py-4 px-6 text-center text-gray-300">Unlimited</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Encryption</td>
                    <td className="py-4 px-6 text-center text-gray-300">Standard</td>
                    <td className="py-4 px-6 text-center text-gray-300">End-to-end</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Support</td>
                    <td className="py-4 px-6 text-center text-gray-300">Community</td>
                    <td className="py-4 px-6 text-center text-gray-300">Priority</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Integrations</td>
                    <td className="py-4 px-6 text-center text-gray-300">Basic</td>
                    <td className="py-4 px-6 text-center text-gray-300">Advanced</td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-4 px-6 text-gray-300">Automatic Backups</td>
                    <td className="py-4 px-6 text-center text-gray-300">—</td>
                    <td className="py-4 px-6 text-center text-gray-300">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Can I switch between plans?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the changes will take effect
                immediately. If you downgrade, the changes will take effect at the end of your current billing cycle.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Do you offer annual billing?</h3>
              <p className="text-gray-400">
                Yes, we offer annual billing with a 20% discount compared to monthly billing. You can choose your
                preferred billing cycle during signup or change it later in your account settings.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">What happens if I exceed my plan limits?</h3>
              <p className="text-gray-400">
                If you're on the Free plan and reach your note limit, you'll need to upgrade to the Pro plan to add more
                notes. We'll notify you when you're approaching your limit.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-400">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Reflect Pro, you can request a
                full refund within 30 days of your purchase.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-2">Do you offer discounts for students or non-profits?</h3>
              <p className="text-gray-400">
                Yes, we offer special pricing for students, educators, and non-profit organizations. Please contact our
                support team with verification of your status to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">
              Ready to transform your thinking?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of thinkers, writers, and creators who use Reflect to organize their thoughts and ideas
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none text-lg py-6 px-8">
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-white hover:bg-purple-500/10 text-lg py-6 px-8"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
