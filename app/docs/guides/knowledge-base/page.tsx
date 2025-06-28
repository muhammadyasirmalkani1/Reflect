"client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KnowledgeBasePage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link
          href="/docs/real-time-chat"
          className="text-purple-400 hover:text-purple-300 flex items-center mb-2"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Real-Time Chat
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">
          Server Setup for Real-Time Chat
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to set up a robust WebSocket server for handling real-time
          chat communications.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Setting Up the WebSocket Server
        </h2>
        <p className="text-gray-300 mb-6">
          The server component of our real-time chat system is responsible for
          managing WebSocket connections, authenticating users, and relaying
          messages between clients. We'll use Socket.IO with Express to create a
          robust WebSocket server.
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Basic Server Setup</h3>
          <p className="text-gray-300 mb-4">
            Let's start by creating a basic Express server with Socket.IO
            integration:
          </p>

          <Tabs defaultValue="javascript" className="mb-6">
            <TabsList className="bg-black/50 border border-purple-500/20">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/mongo-adapter');
const { MongoClient } = require('mongodb');

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO with CORS configuration
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// MongoDB connection for message persistence
const mongoClient = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:3000/reflect');

async function main() {
  // Connect to MongoDB
  await mongoClient.connect();
  
  // Get the collection we want to use for the adapter
  const mongoCollection = mongoClient.db().collection('socket.io-adapter-events');
  
  // Create the adapter
  io.adapter(createAdapter(mongoCollection));
  
  // Middleware for authentication
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    
    // Verify the token (implement your own verification logic)
    if (isValidToken(token)) {
      // Attach user data to the socket
      socket.user = getUserFromToken(token);
      next();
    } else {
      next(new Error('Authentication error'));
    }
  });

  // Handle connection events
  io.on('connection', (socket) => {
    console.log(\`User connected: \${socket.user.id}\`);
    
    // Join user to their personal room
    socket.join(\`user:\${socket.user.id}\`);
    
    // Handle joining chat rooms
    socket.on('join-room', (roomId) => {
      socket.join(\`room:\${roomId}\`);
      console.log(\`\${socket.user.id} joined room \${roomId}\`);
      
      // Notify others in the room
      socket.to(\`room:\${roomId}\`).emit('user-joined', {
        userId: socket.user.id,
        username: socket.user.name
      });
    });
    
    // Handle new messages
    socket.on('send-message', async (data) => {
      const { roomId, content, attachments = [] } = data;
      
      // Create message object
      const message = {
        id: generateUniqueId(),
        roomId,
        sender: {
          id: socket.user.id,
          name: socket.user.name,
          avatar: socket.user.avatar
        },
        content,
        attachments,
        timestamp: new Date()
      };
      
      // Save message to database
      await saveMessageToDatabase(message);
      
      // Broadcast to everyone in the room including sender
      io.to(\`room:\${roomId}\`).emit('new-message', message);
    });
    
    // Handle typing indicators
    socket.on('typing', (data) => {
      const { roomId, isTyping } = data;
      
      socket.to(\`room:\${roomId}\`).emit('user-typing', {
        userId: socket.user.id,
        username: socket.user.name,
        isTyping
      });
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(\`User disconnected: \${socket.user.id}\`);
      
      // Notify all rooms the user was in
      socket.rooms.forEach(room => {
        if (room.startsWith('room:')) {
          const roomId = room.replace('room:', '');
          socket.to(room).emit('user-left', {
            userId: socket.user.id,
            username: socket.user.name
          });
        }
      });
    });
  });

  // Start the server
  const PORT = process.env.PORT || 4000;
  server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
}

// Helper functions (implement these based on your authentication system)
function isValidToken(token) {
  // Implement token validation logic
  return true; // Placeholder
}

function getUserFromToken(token) {
  // Implement user extraction from token
  return { id: 'user-123', name: 'John Doe', avatar: '/avatar.png' }; // Placeholder
}

function generateUniqueId() {
  // Implement unique ID generation
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

async function saveMessageToDatabase(message) {
  // Implement database saving logic
  await mongoClient.db().collection('messages').insertOne(message);
}

// Run the server
main().catch(console.error);`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="typescript" className="mt-4">
              <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {`// server.ts
import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { createAdapter } from '@socket.io/mongo-adapter';
import { MongoClient } from 'mongodb';

// Define types
interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Message {
  id: string;
  roomId: string;
  sender: User;
  content: string;
  attachments: Attachment[];
  timestamp: Date;
}

interface Attachment {
  id: string;
  type: string;
  url: string;
  name: string;
  size: number;
}

interface AuthenticatedSocket extends Socket {
  user: User;
}

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO with CORS configuration
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// MongoDB connection for message persistence
const mongoClient = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017/reflect');

async function main() {
  // Connect to MongoDB
  await mongoClient.connect();
  
  // Get the collection we want to use for the adapter
  const mongoCollection = mongoClient.db().collection('socket.io-adapter-events');
  
  // Create the adapter
  io.adapter(createAdapter(mongoCollection));
  
  // Middleware for authentication
  io.use((socket: Socket, next) => {
    const token = socket.handshake.auth.token;
    
    // Verify the token (implement your own verification logic)
    if (isValidToken(token)) {
      // Attach user data to the socket
      (socket as AuthenticatedSocket).user = getUserFromToken(token);
      next();
    } else {
      next(new Error('Authentication error'));
    }
  });

  // Handle connection events
  io.on('connection', (socket: Socket) => {
    const authenticatedSocket = socket as AuthenticatedSocket;
    const user = authenticatedSocket.user;
    
    console.log(\`User connected: \${user.id}\`);
    
    // Join user to their personal room
    socket.join(\`user:\${user.id}\`);
    
    // Handle joining chat rooms
    socket.on('join-room', (roomId: string) => {
      socket.join(\`room:\${roomId}\`);
      console.log(\`\${user.id} joined room \${roomId}\`);
      
      // Notify others in the room
      socket.to(\`room:\${roomId}\`).emit('user-joined', {
        userId: user.id,
        username: user.name
      });
    });
    
    // Handle new messages
    socket.on('send-message', async (data: { roomId: string; content: string; attachments?: Attachment[] }) => {
      const { roomId, content, attachments = [] } = data;
      
      // Create message object
      const message: Message = {
        id: generateUniqueId(),
        roomId,
        sender: {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        },
        content,
        attachments,
        timestamp: new Date()
      };
      
      // Save message to database
      await saveMessageToDatabase(message);
      
      // Broadcast to everyone in the room including sender
      io.to(\`room:\${roomId}\`).emit('new-message', message);
    });
    
    // Handle typing indicators
    socket.on('typing', (data: { roomId: string; isTyping: boolean }) => {
      const { roomId, isTyping } = data;
      
      socket.to(\`room:\${roomId}\`).emit('user-typing', {
        userId: user.id,
        username: user.name,
        isTyping
      });
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(\`User disconnected: \${user.id}\`);
      
      // Notify all rooms the user was in
      socket.rooms.forEach(room => {
        if (room.startsWith('room:')) {
          const roomId = room.replace('room:', '');
          socket.to(room).emit('user-left', {
            userId: user.id,
            username: user.name
          });
        }
      });
    });
  });

  // Start the server
  const PORT = process.env.PORT || 4000;
  server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
}

// Helper functions (implement these based on your authentication system)
function isValidToken(token: string): boolean {
  // Implement token validation logic
  return true; // Placeholder
}

function getUserFromToken(token: string): User {
  // Implement user extraction from token
  return { id: 'user-123', name: 'John Doe', avatar: '/avatar.png' }; // Placeholder
}

function generateUniqueId(): string {
  // Implement unique ID generation
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

async function saveMessageToDatabase(message: Message): Promise<void> {
  // Implement database saving logic
  await mongoClient.db().collection('messages').insertOne(message);
}

// Run the server
main().catch(console.error);`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <p className="text-gray-300 mt-6">
            This server setup provides the foundation for our real-time chat
            system. It includes:
          </p>
          <ul className="space-y-2 text-gray-300 mt-4">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-3 h-3 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>WebSocket server with Socket.IO</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-3 h-3 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Authentication middleware</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-3 h-3 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Room-based messaging</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-3 h-3 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Typing indicators</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-3 h-3 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>MongoDB integration for message persistence</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Message Persistence
        </h2>
        <p className="text-gray-300 mb-6">
          Storing messages in a database is crucial for providing message
          history when users connect or reconnect to the chat. Let's expand our
          server to include robust message persistence:
        </p>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">Message Database Schema</h3>
          <p className="text-gray-300 mb-4">
            Here's a recommended schema for storing chat messages in MongoDB:
          </p>

          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
            <pre className="text-gray-300 whitespace-pre-wrap">
              {`// Message schema
{
  _id: ObjectId,          // Unique message ID
  roomId: String,         // ID of the chat room
  sender: {
    id: String,           // User ID
    name: String,         // User display name
    avatar: String        // User avatar URL
  },
  content: String,        // Message text content
  attachments: [          // Array of attachments
    {
      id: String,         // Attachment ID
      type: String,       // MIME type
      url: String,        // URL to the attachment
      name: String,       // Original filename
      size: Number        // File size in bytes
    }
  ],
  timestamp: Date,        // When the message was sent
  readBy: [String],       // Array of user IDs who have read the message
  reactions: [            // Array of reactions to the message
    {
      emoji: String,      // Emoji code
      users: [String]     // User IDs who reacted with this emoji
    }
  ],
  edited: Boolean,        // Whether the message has been edited
  editHistory: [          // History of edits
    {
      content: String,    // Previous content
      timestamp: Date     // When the edit was made
    }
  ],
  deleted: Boolean,       // Soft delete flag
  metadata: {             // Additional metadata
    clientId: String,     // Client-generated ID for optimistic updates
    mentions: [String],   // User IDs mentioned in the message
    codeSnippets: [       // Code snippets in the message
      {
        language: String, // Programming language
        code: String      // The code content
      }
    ]
  }
}`}
            </pre>
          </div>
        </div>

        <div className="feature-card mb-8">
          <h3 className="text-xl font-bold mb-3">
            Message Retrieval Functions
          </h3>
          <p className="text-gray-300 mb-4">
            Add these functions to your server to handle message history
            retrieval:
          </p>

          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
            <pre className="text-gray-300 whitespace-pre-wrap">
              {`// Message retrieval functions

// Get recent messages for a room
async function getRecentMessages(roomId, limit = 50) {
  return await mongoClient
    .db()
    .collection('messages')
    .find({ roomId, deleted: { $ne: true } })
    .sort({ timestamp: -1 })
    .limit(limit)
    .toArray();
}

// Get messages before a certain timestamp (for pagination)
async function getMessagesBefore(roomId, beforeTimestamp, limit = 50) {
  return await mongoClient
    .db()
    .collection('messages')
    .find({
      roomId,
      deleted: { $ne: true },
      timestamp: { $lt: new Date(beforeTimestamp) }
    })
    .sort({ timestamp: -1 })
    .limit(limit)
    .toArray();
}

// Mark messages as read by a user
async function markMessagesAsRead(roomId, userId, messageIds) {
  await mongoClient
    .db()
    .collection('messages')
    .updateMany(
      { 
        roomId, 
        _id: { $in: messageIds.map(id => new ObjectId(id)) },
        readBy: { $ne: userId }
      },
      { $push: { readBy: userId } }
    );
}

// Add these endpoints to your Express app
app.get('/api/rooms/:roomId/messages', authenticateUser, async (req, res) => {
  try {
    const { roomId } = req.params;
    const { before, limit } = req.query;
    
    let messages;
    if (before) {
      messages = await getMessagesBefore(roomId, before, parseInt(limit) || 50);
    } else {
      messages = await getRecentMessages(roomId, parseInt(limit) || 50);
    }
    
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.post('/api/rooms/:roomId/read', authenticateUser, async (req, res) => {
  try {
    const { roomId } = req.params;
    const { messageIds } = req.body;
    const userId = req.user.id;
    
    await markMessagesAsRead(roomId, userId, messageIds);
    
    // Notify other users that these messages have been read
    io.to(\`room:\${roomId}\`).emit('messages-read', {
      userId,
      messageIds
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error marking messages as read:', error);
    res.status(500).json({ error: 'Failed to mark messages as read' });
  }
});`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">
          Scaling Considerations
        </h2>
        <p className="text-gray-300 mb-4">
          As your chat application grows, you'll need to consider scaling your
          WebSocket server. Here are some strategies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Horizontal Scaling</h3>
            <p className="text-gray-300">
              Use Socket.IO's Redis or MongoDB adapter to enable multiple server
              instances to work together. This allows you to distribute the load
              across multiple servers.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Connection Pooling</h3>
            <p className="text-gray-300">
              Optimize database connections by implementing connection pooling
              to reduce the overhead of creating new connections for each
              operation.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Message Queues</h3>
            <p className="text-gray-300">
              For high-volume scenarios, consider using a message queue like
              RabbitMQ or Kafka to handle message processing and ensure delivery
              even during high load.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Caching</h3>
            <p className="text-gray-300">
              Implement Redis caching for frequently accessed data like recent
              messages and user presence information to reduce database load.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-bold mb-3">
            Load Balancing Configuration
          </h3>
          <p className="text-gray-300 mb-4">
            When using multiple server instances behind a load balancer, ensure
            sticky sessions are enabled or use the Socket.IO Redis adapter:
          </p>

          <div className="bg-black/50 p-4 rounded-md border border-purple-500/20 font-mono text-sm">
            <pre className="text-gray-300 whitespace-pre-wrap">
              {`// Using Redis adapter for horizontal scaling
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: process.env.REDIS_URL });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  console.log('Socket.IO Redis adapter initialized');
});`}
            </pre>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/real-time-chat">
            <ArrowLeft className="mr-2 h-4 w-4" /> Overview
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-500/10"
        >
          <Link href="/docs/real-time-chat/client-implementation">
            Client Implementation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
