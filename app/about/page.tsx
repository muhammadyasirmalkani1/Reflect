import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="cosmic-bg pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 purple-gradient-text">Our Mission</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're building tools to help people think better, remember more, and work more effectively
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 purple-gradient-text">Why we built Reflect</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Reflect was born out of our own frustration with existing note-taking tools. We found that while many
                  tools were good at capturing information, they weren't designed to help you think better or make
                  connections between ideas.
                </p>
                <p>
                  We believe that the best ideas come from connecting seemingly unrelated concepts. That's why we built
                  Reflect to automatically suggest connections between your notes, helping you build a network of
                  knowledge that grows more valuable over time.
                </p>
                <p>
                  Our mission is to help people think better, remember more, and work more effectively. We believe that
                  by building tools that augment human intelligence, we can help people solve the world's most important
                  problems.
                </p>
              </div>
            </div>

            <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Team working on Reflect"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">What we believe in</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">These core principles guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">User Privacy First</h3>
              <p className="text-gray-400">
                We believe your thoughts are private. That's why we use end-to-end encryption and never sell your data
                to third parties.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Augment, Don't Replace</h3>
              <p className="text-gray-400">
                We build AI tools that enhance human thinking, not replace it. Our goal is to help you think better, not
                think for you.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Long-term Thinking</h3>
              <p className="text-gray-400">
                We're building Reflect for the long term. We want to create a tool that you'll use for decades, not just
                months.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Beautiful Design</h3>
              <p className="text-gray-400">
                We believe that tools for thinking should be beautiful. Good design isn't just about aesthetics—it's
                about clarity of thought.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <p className="text-gray-400">
                We're constantly improving Reflect based on user feedback. We believe in shipping early and often.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Open Communication</h3>
              <p className="text-gray-400">
                We believe in being transparent with our users about our roadmap, our business model, and our values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Meet the people behind Reflect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're a small team of designers, engineers, and thinkers passionate about building tools that help people
              think better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
              <p className="text-purple-400 mb-4">Co-founder & CEO</p>
              <p className="text-gray-400">
                Previously led product at Notion. Passionate about tools for thought and human-computer interaction.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-purple-400 mb-4">Co-founder & CTO</p>
              <p className="text-gray-400">
                AI researcher with a background in natural language processing. Loves building tools that augment human
                intelligence.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Park</h3>
              <p className="text-purple-400 mb-4">Head of Design</p>
              <p className="text-gray-400">
                Designer with a focus on creating beautiful, intuitive interfaces. Previously designed products at Apple
                and Figma.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Emily Rodriguez</h3>
              <p className="text-purple-400 mb-4">Lead Engineer</p>
              <p className="text-gray-400">
                Full-stack engineer with expertise in building secure, scalable applications. Loves solving complex
                technical challenges.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Kim</h3>
              <p className="text-purple-400 mb-4">AI Research</p>
              <p className="text-gray-400">
                PhD in machine learning with a focus on knowledge graphs and semantic search. Passionate about making AI
                more accessible.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="feature-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 purple-glow-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Lisa Thompson</h3>
              <p className="text-purple-400 mb-4">Head of Operations</p>
              <p className="text-gray-400">
                Operations expert with experience scaling startups. Focused on building a sustainable business that puts
                users first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-radial opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 purple-gradient-text">Join our team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're looking for passionate people to help us build the future of thinking tools
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none text-lg py-6 px-8">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-sm font-medium mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 purple-gradient-text">We'd love to hear from you</h2>
              <p className="text-gray-300 mb-6">
                Have questions about Reflect? Want to partner with us? We're always happy to chat.
              </p>

              <div className="space-y-4">
                <div className="feature-card">
                  <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                  <p className="text-gray-400">hello@reflect.app</p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-bold mb-2">Support</h3>
                  <p className="text-gray-400">support@reflect.app</p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-bold mb-2">Press</h3>
                  <p className="text-gray-400">press@reflect.app</p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-purple-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-none py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
