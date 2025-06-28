import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Download, Globe, Smartphone, Laptop } from "lucide-react"
import GetStartedStep from "@/components/get-started-step"

export default function GetStartedPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Get Started with Reflect</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to set up Reflect and start thinking better today
          </p>
        </div>

        {/* Steps Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create Account</h3>
              <p className="text-gray-400">Sign up for Reflect and set up your account</p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Install Reflect</h3>
              <p className="text-gray-400">Download and install Reflect on your devices</p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Using</h3>
              <p className="text-gray-400">Create your first note and explore features</p>
            </div>
          </div>
        </div>

        {/* Step 1: Create Account */}
        <GetStartedStep
          number={1}
          title="Create Your Reflect Account"
          description="Sign up for Reflect to get started with your personal knowledge base."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Visit the Reflect Website</h4>
                    <p className="text-gray-300">
                      Go to{" "}
                      <a href="#" className="text-purple-400 hover:text-purple-300">
                        reflect.app
                      </a>{" "}
                      and click the "Get Started" button.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Enter Your Information</h4>
                    <p className="text-gray-300">
                      Provide your email address and create a secure password for your account.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Verify Your Email</h4>
                    <p className="text-gray-300">
                      Check your inbox for a verification email from Reflect and click the verification link.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Complete Your Profile</h4>
                    <p className="text-gray-300">
                      Add your name and profile picture to personalize your Reflect experience.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                <Link href="#">
                  Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Reflect signup screen"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </GetStartedStep>

        {/* Step 2: Install Reflect */}
        <GetStartedStep
          number={2}
          title="Install Reflect on Your Devices"
          description="Download and install Reflect on all your devices to access your notes anywhere."
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Choose Your Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="feature-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Laptop className="w-12 h-12 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">Desktop</h4>
                <p className="text-gray-400 mb-4">For macOS and Windows</p>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/30 hover:bg-purple-500/10"
                    size="sm"
                  >
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> macOS
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/30 hover:bg-purple-500/10"
                    size="sm"
                  >
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> Windows
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">Mobile</h4>
                <p className="text-gray-400 mb-4">For iOS and Android</p>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/30 hover:bg-purple-500/10"
                    size="sm"
                  >
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> iOS App Store
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/30 hover:bg-purple-500/10"
                    size="sm"
                  >
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> Google Play
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">Web App</h4>
                <p className="text-gray-400 mb-4">Use in your browser</p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                  size="sm"
                >
                  <Link href="#">Open Web App</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Installation Instructions</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Download the Installer</h4>
                  <p className="text-gray-300">
                    Choose the appropriate installer for your operating system and download it.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Run the Installer</h4>
                  <p className="text-gray-300">Open the downloaded file and follow the installation instructions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Sign In to Your Account</h4>
                  <p className="text-gray-300">
                    Once installed, open Reflect and sign in with the account you created in Step 1.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Enable Sync</h4>
                  <p className="text-gray-300">
                    Make sure sync is enabled to keep your notes updated across all your devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GetStartedStep>

        {/* Step 3: Start Using Reflect */}
        <GetStartedStep
          number={3}
          title="Start Using Reflect"
          description="Create your first note and explore Reflect's powerful features."
          isLast={true}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Reflect interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Create Your First Note</h4>
                    <p className="text-gray-300">
                      Click the "+" button in the top right corner or use the keyboard shortcut{" "}
                      <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Cmd</kbd> +{" "}
                      <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">N</kbd> to
                      create a new note.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Try the AI Assistant</h4>
                    <p className="text-gray-300">
                      Type <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">/ai</kbd>{" "}
                      in your note to bring up the AI assistant and try generating ideas or summarizing content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Connect Your Notes</h4>
                    <p className="text-gray-300">
                      Create a second note and link it to your first note by typing{" "}
                      <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">[[</kbd> and
                      selecting the first note from the dropdown.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Explore the Graph View</h4>
                    <p className="text-gray-300">
                      Click the "Graph" button in the sidebar to see a visual representation of your notes and their
                      connections.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                <Link href="/docs/quick-start">
                  View Quick Start Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-6">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6 border border-purple-500/20">
                <h4 className="text-lg font-bold mb-3">Watch Tutorials</h4>
                <p className="text-gray-400 mb-4">Learn how to use Reflect effectively with our video tutorials.</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/10"
                  size="sm"
                >
                  <Link href="/docs/video-tutorials">Watch Tutorials</Link>
                </Button>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-purple-500/20">
                <h4 className="text-lg font-bold mb-3">Read Documentation</h4>
                <p className="text-gray-400 mb-4">
                  Explore our comprehensive documentation to learn about all features.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/10"
                  size="sm"
                >
                  <Link href="/docs">Read Docs</Link>
                </Button>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-purple-500/20">
                <h4 className="text-lg font-bold mb-3">Join Community</h4>
                <p className="text-gray-400 mb-4">Connect with other Reflect users to share tips and workflows.</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/10"
                  size="sm"
                >
                  <Link href="#">Join Discord</Link>
                </Button>
              </div>
            </div>
          </div>
        </GetStartedStep>

        {/* Help and Support */}
        <div className="mt-20">
          <div className="feature-card text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions or need assistance, our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                <Link href="/docs/troubleshooting/faq">View FAQ</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                <Link href="/docs/troubleshooting/common-issues">Common Issues</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                <Link href="/docs/troubleshooting/support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
