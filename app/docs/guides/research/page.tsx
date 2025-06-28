"Client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DailyJournalingPage() {
  return (
    <>
      <div className="py-8">{/* Content inside the div */}</div>
      <div className="mb-8">
        <Link
          href="/docs/real-time-chat/server-setup"
          className="text-purple-400 hover:text-purple-300 flex items-center mb-2"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Server Setup
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">
          Client Implementation
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to implement the client-side components of a real-time chat
          system in your React application.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Setting Up the Socket.IO Client
        </h2>
        <p className="text-gray-300 mb-6">
          The client-side implementation of our real-time chat system involves
          connecting to the WebSocket server, managing chat state, and providing
          a responsive user interface. We'll use Socket.IO client with React and
          Zustand for state management.
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Socket.IO Client Setup</h3>
          <p className="text-gray-300 mb-4">
            First, let's create a service to manage our Socket.IO connection:
          </p>

          <Tabs defaultValue="typescript" className="mb-6">
            <TabsList className="bg-black/50 border border-purple-500/20">
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="typescript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// lib/socket-service.ts
import { io, Socket } from 'socket.io-client';
import { getAuthToken } from '@/lib/auth';

// Define types
export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  roomId: string;
  sender: User;
  content: string;
  attachments: Attachment[];
  timestamp: Date;
  readBy: string[];
  reactions: Reaction[];
  edited: boolean;
  deleted: boolean;
  metadata?: {
    clientId?: string;
    mentions?: string[];
    codeSnippets?: CodeSnippet[];
  };
}

export interface Attachment {
  id: string;
  type: string;
  url: string;
  name: string;
  size: number;
}

export interface Reaction {
  emoji: string;
  users: string[];
}

export interface CodeSnippet {
  language: string;
  code: string;
}

export interface TypingIndicator {
  userId: string;
  username: string;
  isTyping: boolean;
}

// Socket events
export type SocketEventHandlers = {
  'connect': () => void;
  'disconnect': () => void;
  'connect_error': (err: Error) => void;
  'new-message': (message: Message) => void;
  'user-joined': (data: { userId: string; username: string }) => void;
  'user-left': (data: { userId: string; username: string }) => void;
  'user-typing': (data: TypingIndicator) => void;
  'messages-read': (data: { userId: string; messageIds: string[] }) => void;
};

class SocketService {
  private socket: Socket | null = null;
  private eventHandlers: Partial<SocketEventHandlers> = {};

  // Initialize the socket connection
  connect() {
    if (this.socket) return;

    const token = getAuthToken();
    if (!token) {
      console.error('No auth token available');
      return;
    }

    this.socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000', {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    // Set up event listeners
    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.eventHandlers.connect?.();
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
      this.eventHandlers.disconnect?.();
    });

    this.socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
      this.eventHandlers.connect_error?.(err);
    });

    // Set up message event listeners
    this.socket.on('new-message', (message) => {
      this.eventHandlers['new-message']?.(message);
    });

    this.socket.on('user-joined', (data) => {
      this.eventHandlers['user-joined']?.(data);
    });

    this.socket.on('user-left', (data) => {
      this.eventHandlers['user-left']?.(data);
    });

    this.socket.on('user-typing', (data) => {
      this.eventHandlers['user-typing']?.(data);
    });

    this.socket.on('messages-read', (data) => {
      this.eventHandlers['messages-read']?.(data);
    });
  }

  // Disconnect the socket
  disconnect() {
    if (!this.socket) return;
    this.socket.disconnect();
    this.socket = null;
  }

  // Join a chat room
  joinRoom(roomId: string) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    this.socket.emit('join-room', roomId);
  }

  // Send a message
  sendMessage(roomId: string, content: string, attachments: Attachment[] = []) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    
    const clientId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    this.socket.emit('send-message', {
      roomId,
      content,
      attachments,
      metadata: {
        clientId
      }
    });
    
    return clientId; // Return client ID for optimistic updates
  }

  // Send typing indicator
  sendTyping(roomId: string, isTyping: boolean) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    this.socket.emit('typing', { roomId, isTyping });
  }

  // Register event handlers
  on<T extends keyof SocketEventHandlers>(
    event: T,
    handler: SocketEventHandlers[T]
  ) {
    this.eventHandlers[event] = handler;
  }

  // Check if socket is connected
  isConnected() {
    return this.socket?.connected || false;
  }
}

// Create a singleton instance
const socketService = new SocketService();

export default socketService;`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="javascript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// lib/socket-service.js
import { io } from 'socket.io-client';
import { getAuthToken } from '@/lib/auth';

class SocketService {
  constructor() {
    this.socket = null;
    this.eventHandlers = {};
  }

  // Initialize the socket connection
  connect() {
    if (this.socket) return;

    const token = getAuthToken();
    if (!token) {
      console.error('No auth token available');
      return;
    }

    this.socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000', {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    // Set up event listeners
    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.eventHandlers.connect?.();
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
      this.eventHandlers.disconnect?.();
    });

    this.socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
      this.eventHandlers.connect_error?.(err);
    });

    // Set up message event listeners
    this.socket.on('new-message', (message) => {
      this.eventHandlers['new-message']?.(message);
    });

    this.socket.on('user-joined', (data) => {
      this.eventHandlers['user-joined']?.(data);
    });

    this.socket.on('user-left', (data) => {
      this.eventHandlers['user-left']?.(data);
    });

    this.socket.on('user-typing', (data) => {
      this.eventHandlers['user-typing']?.(data);
    });

    this.socket.on('messages-read', (data) => {
      this.eventHandlers['messages-read']?.(data);
    });
  }

  // Disconnect the socket
  disconnect() {
    if (!this.socket) return;
    this.socket.disconnect();
    this.socket = null;
  }

  // Join a chat room
  joinRoom(roomId) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    this.socket.emit('join-room', roomId);
  }

  // Send a message
  sendMessage(roomId, content, attachments = []) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    
    const clientId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    this.socket.emit('send-message', {
      roomId,
      content,
      attachments,
      metadata: {
        clientId
      }
    });
    
    return clientId; // Return client ID for optimistic updates
  }

  // Send typing indicator
  sendTyping(roomId, isTyping) {
    if (!this.socket) {
      console.error('Socket not connected');
      return;
    }
    this.socket.emit('typing', { roomId, isTyping });
  }

  // Register event handlers
  on(event, handler) {
    this.eventHandlers[event] = handler;
  }

  // Check if socket is connected
  isConnected() {
    return this.socket?.connected || false;
  }
}

// Create a singleton instance
const socketService = new SocketService();

export default socketService;`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Chat State Management
        </h2>
        <p className="text-gray-300 mb-6">
          Next, let's create a Zustand store to manage our chat state. This will
          handle messages, typing indicators, and user presence:
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Chat Store with Zustand</h3>

          <Tabs defaultValue="typescript" className="mb-6">
            <TabsList className="bg-black/50 border border-purple-500/20">
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="typescript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// lib/stores/chat-store.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import socketService, { Message, TypingIndicator, User } from '@/lib/socket-service';
import { fetchMessages } from '@/lib/api';

interface ChatState {
  // Current active room
  currentRoomId: string | null;
  
  // Messages by room ID
  messagesByRoom: Record<string, Message[]>;
  
  // Optimistic messages that are pending confirmation
  pendingMessages: Record<string, Message[]>;
  
  // Users currently typing in each room
  typingUsers: Record<string, TypingIndicator[]>;
  
  // Online users in each room
  onlineUsers: Record<string, User[]>;
  
  // Loading states
  isLoadingMessages: boolean;
  isLoadingMoreMessages: boolean;
  
  // Actions
  setCurrentRoom: (roomId: string) => void;
  loadMessages: (roomId: string) => Promise<void>;
  loadMoreMessages: (roomId: string, beforeTimestamp: string) => Promise<void>;
  sendMessage: (content: string, attachments?: any[]) => void;
  setTyping: (isTyping: boolean) => void;
  markMessagesAsRead: (messageIds: string[]) => void;
  
  // Socket event handlers
  handleNewMessage: (message: Message) => void;
  handleUserTyping: (data: TypingIndicator) => void;
  handleUserJoined: (data: { userId: string; username: string }) => void;
  handleUserLeft: (data: { userId: string; username: string }) => void;
  handleMessagesRead: (data: { userId: string; messageIds: string[] }) => void;
}

const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        currentRoomId: null,
        messagesByRoom: {},
        pendingMessages: {},
        typingUsers: {},
        onlineUsers: {},
        isLoadingMessages: false,
        isLoadingMoreMessages: false,
        
        // Set current room and join it
        setCurrentRoom: (roomId) => {
          set({ currentRoomId: roomId });
          socketService.joinRoom(roomId);
          
          // Initialize room data if it doesn't exist
          set((state) => ({
            messagesByRoom: {
              ...state.messagesByRoom,
              [roomId]: state.messagesByRoom[roomId] || [],
            },
            pendingMessages: {
              ...state.pendingMessages,
              [roomId]: state.pendingMessages[roomId] || [],
            },
            typingUsers: {
              ...state.typingUsers,
              [roomId]: state.typingUsers[roomId] || [],
            },
            onlineUsers: {
              ...state.onlineUsers,
              [roomId]: state.onlineUsers[roomId] || [],
            },
          }));
          
          // Load messages for this room
          get().loadMessages(roomId);
        },
        
        // Load messages for a room
        loadMessages: async (roomId) => {
          set({ isLoadingMessages: true });
          
          try {
            const messages = await fetchMessages(roomId);
            
            set((state) => ({
              messagesByRoom: {
                ...state.messagesByRoom,
                [roomId]: messages,
              },
              isLoadingMessages: false,
            }));
          } catch (error) {
            console.error('Error loading messages:', error);
            set({ isLoadingMessages: false });
          }
        },
        
        // Load more messages (pagination)
        loadMoreMessages: async (roomId, beforeTimestamp) => {
          set({ isLoadingMoreMessages: true });
          
          try {
            const messages = await fetchMessages(roomId, { before: beforeTimestamp });
            
            set((state) => ({
              messagesByRoom: {
                ...state.messagesByRoom,
                [roomId]: [...messages, ...state.messagesByRoom[roomId]],
              },
              isLoadingMoreMessages: false,
            }));
          } catch (error) {
            console.error('Error loading more messages:', error);
            set({ isLoadingMoreMessages: false });
          }
        },
        
        // Send a message
        sendMessage: (content, attachments = []) => {
          const { currentRoomId } = get();
          if (!currentRoomId) return;
          
          // Create an optimistic message
          const clientId = socketService.sendMessage(currentRoomId, content, attachments);
          
          const optimisticMessage: Message = {
            id: \`pending-\${clientId}\`,
            roomId: currentRoomId,
            sender: {
              // This should be the current user's info
              id: 'current-user-id', // Replace with actual user ID
              name: 'Current User', // Replace with actual user name
              avatar: '/placeholder.svg', // Replace with actual user avatar
            },
            content,
            attachments,
            timestamp: new Date(),
            readBy: [],
            reactions: [],
            edited: false,
            deleted: false,
            metadata: {
              clientId,
            },
          };
          
          // Add to pending messages
          set((state) => ({
            pendingMessages: {
              ...state.pendingMessages,
              [currentRoomId]: [...(state.pendingMessages[currentRoomId] || []), optimisticMessage],
            },
          }));
        },
        
        // Set typing indicator
        setTyping: (isTyping) => {
          const { currentRoomId } = get();
          if (!currentRoomId) return;
          
          socketService.sendTyping(currentRoomId, isTyping);
        },
        
        // Mark messages as read
        markMessagesAsRead: async (messageIds) => {
          const { currentRoomId } = get();
          if (!currentRoomId) return;
          
          try {
            // Call API to mark messages as read
            await fetch(\`/api/rooms/\${currentRoomId}/read\`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ messageIds }),
            });
          } catch (error) {
            console.error('Error marking messages as read:', error);
          }
        },
        
        // Handle new message from socket
        handleNewMessage: (message) => {
          const { pendingMessages } = get();
          const roomId = message.roomId;
          
          // Check if this is a confirmation of a pending message
          const isPendingMessage = message.metadata?.clientId && 
            pendingMessages[roomId]?.some(m => m.metadata?.clientId === message.metadata?.clientId);
          
          set((state) => {
            // Add message to the room
            const updatedMessages = {
              ...state.messagesByRoom,
              [roomId]: [...(state.messagesByRoom[roomId] || []), message],
            };
            
            // If this was a pending message, remove it from pending
            let updatedPendingMessages = state.pendingMessages;
            if (isPendingMessage) {
              updatedPendingMessages = {
                ...state.pendingMessages,
                [roomId]: state.pendingMessages[roomId]?.filter(
                  m => m.metadata?.clientId !== message.metadata?.clientId
                ) || [],
              };
            }
            
            return {
              messagesByRoom: updatedMessages,
              pendingMessages: updatedPendingMessages,
            };
          });
        },
        
        // Handle typing indicator
        handleUserTyping: (data) => {
          const { typingUsers } = get();
          const roomId = data.userId.split(':')[1]; // Assuming format "room:123"
          
          set((state) => {
            // Update or add typing indicator
            const roomTypingUsers = state.typingUsers[roomId] || [];
            const userIndex = roomTypingUsers.findIndex(u => u.userId === data.userId);
            
            let updatedTypingUsers;
            if (userIndex >= 0) {
              // Update existing user
              if (data.isTyping) {
                updatedTypingUsers = [
                  ...roomTypingUsers.slice(0, userIndex),
                  data,
                  ...roomTypingUsers.slice(userIndex + 1),
                ];
              } else {
                // Remove user if not typing
                updatedTypingUsers = [
                  ...roomTypingUsers.slice(0, userIndex),
                  ...roomTypingUsers.slice(userIndex + 1),
                ];
              }
            } else if (data.isTyping) {
              // Add new typing user
              updatedTypingUsers = [...roomTypingUsers, data];
            } else {
              updatedTypingUsers = roomTypingUsers;
            }
            
            return {
              typingUsers: {
                ...state.typingUsers,
                [roomId]: updatedTypingUsers,
              },
            };
          });
        },
        
        // Handle user joined event
        handleUserJoined: (data) => {
          const roomId = data.userId.split(':')[1]; // Assuming format "room:123"
          
          set((state) => {
            const roomUsers = state.onlineUsers[roomId] || [];
            
            // Check if user is already in the list
            if (roomUsers.some(u => u.id === data.userId)) {
              return state;
            }
            
            // Add user to online users
            return {
              onlineUsers: {
                ...state.onlineUsers,
                [roomId]: [
                  ...roomUsers,
                  {
                    id: data.userId,
                    name: data.username,
                    avatar: '/placeholder.svg', // Default avatar
                  },
                ],
              },
            };
          });
        },
        
        // Handle user left event
        handleUserLeft: (data) => {
          const roomId = data.userId.split(':')[1]; // Assuming format "room:123"
          
          set((state) => {
            const roomUsers = state.onlineUsers[roomId] || [];
            
            // Remove user from online users
            return {
              onlineUsers: {
                ...state.onlineUsers,
                [roomId]: roomUsers.filter(u => u.id !== data.userId),
              },
              // Also remove from typing users if they were typing
              typingUsers: {
                ...state.typingUsers,
                [roomId]: (state.typingUsers[roomId] || []).filter(u => u.userId !== data.userId),
              },
            };
          });
        },
        
        // Handle messages read event
        handleMessagesRead: (data) => {
          const { currentRoomId } = get();
          if (!currentRoomId) return;
          
          set((state) => {
            // Update read status for messages
            const roomMessages = state.messagesByRoom[currentRoomId] || [];
            const updatedMessages = roomMessages.map(message => {
              if (data.messageIds.includes(message.id) && !message.readBy.includes(data.userId)) {
                return {
                  ...message,
                  readBy: [...message.readBy, data.userId],
                };
              }
              return message;
            });
            
            return {
              messagesByRoom: {
                ...state.messagesByRoom,
                [currentRoomId]: updatedMessages,
              },
            };
          });
        },
      }),
      {
        name: 'reflect-chat-storage',
        partialize: (state) => ({
          // Only persist messages, not loading states or callbacks
          messagesByRoom: state.messagesByRoom,
        }),
      }
    )
  )
);

// Initialize socket event handlers
socketService.on('new-message', useChatStore.getState().handleNewMessage);
socketService.on('user-typing', useChatStore.getState().handleUserTyping);
socketService.on('user-joined', useChatStore.getState().handleUserJoined);
socketService.on('user-left', useChatStore.getState().handleUserLeft);
socketService.on('messages-read', useChatStore.getState().handleMessagesRead);

export default useChatStore;`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="javascript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// lib/stores/chat-store.js
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import socketService from '@/lib/socket-service';
import { fetchMessages } from '@/lib/api';

const useChatStore = create(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        currentRoomId: null,
        messagesByRoom: {},
        pendingMessages: {},
        typingUsers: {},
        onlineUsers: {},
        isLoadingMessages: false,
        isLoadingMoreMessages: false,
        
        // Set current room and join it
        setCurrentRoom: (roomId) => {
          set({ currentRoomId: roomId });
          socketService.joinRoom(roomId);
          
          // Initialize room data if it doesn't exist
          set((state) => ({
            messagesByRoom: {
              ...state.messagesByRoom,
              [roomId]: state.messagesByRoom[roomId] || [],
            },
            pendingMessages: {
              ...state.pendingMessages,
              [roomId]: state.pendingMessages[roomId] || [],
            },
            typingUsers: {
              ...state.typingUsers,
              [roomId]: state.typingUsers[roomId] || [],
            },
            onlineUsers: {
              ...state.onlineUsers,
              [roomId]: state.onlineUsers[roomId] || [],
            },
          }));
          
          // Load messages for this room
          get().loadMessages(roomId);
        },
        
        // Load messages for a room
        loadMessages: async (roomId) => {
          set({ isLoadingMessages: true });
          
          try {
            const messages = await fetchMessages(roomId);
            
            set((state) => ({
              messagesByRoom: {
                ...state.messagesByRoom,
                [roomId]: messages,
              },
              isLoadingMessages: false,
            }));
          } catch (error) {
            console.error('Error loading messages:', error);
            set({ isLoadingMessages: false });
          }
        },
        
        // Load more messages (pagination)
        loadMoreMessages: async (roomId, beforeTimestamp) => {
          set({ isLoadingMoreMessages: true });
          
          try {
            const messages = await fetchMessages(roomId, { before: beforeTimestamp });
            
            set((state) => ({
              messagesByRoom: {
                ...state.messagesByRoom,
                [roomId]: [...messages, ...state.messagesByRoom[roomId]],
              },
              isLoadingMoreMessages: false,
            }));
          } catch (error) {
            console.error('Error loading more messages:', error);
            set({ isLoadingMoreMessages: false });
          }
        },
        
        // Send a message
        sendMessage: (content, attachments = []) => {
          const { currentRoomId } = get();
          if (!currentRoomId) return;
          
          // Create an optimistic message
          const clientId = socketService.sendMessage(currentRoomId, content, attachments);
          
          const optimisticMessage = {
            id: \`pending-\${clientId}\`,
            roomId: currentRoomId,
`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
