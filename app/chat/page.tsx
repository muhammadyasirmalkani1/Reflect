import ChatInterface from "@/components/chat/chat-interface"

export default function ChatPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 purple-gradient-text">Chat</h1>
        <p className="text-gray-300 mb-8">
          Chat with your notes and collaborate with team members. Share code snippets and files seamlessly.
        </p>

        <ChatInterface />
      </div>
    </div>
  )
}
