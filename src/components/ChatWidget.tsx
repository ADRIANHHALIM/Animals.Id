import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input"; // Using Input instead of Command
import { cn } from "@/lib/utils";
import Fuse from 'fuse.js'; // You'll need to: npm install fuse.js

// Predefined FAQ answers for quick responses
const faqAnswers = {
  "How often should I groom my pet?": "The frequency of grooming depends on your pet's breed, coat type, and lifestyle. Generally, most dogs benefit from professional grooming every 4-6 weeks, while cats may require less frequent sessions.",
  "Do you offer mobile services?": "Yes, we offer mobile grooming and basic veterinary services in select areas. This is perfect for pets who experience anxiety in new environments or for owners with busy schedules.",
  "What's included in a basic grooming package?": "Our basic grooming package includes a bath with standard shampoo, blow-dry, brush-out, nail trimming, ear cleaning, and a light trim if needed.",
  "How do I prepare my pet for their first grooming session?": "To prepare your pet for their first grooming session, we recommend getting them comfortable with being touched on their paws, ears, and face. A light brushing routine at home can also help acclimate them to the grooming process.",
  "What health services do you offer?": "Through our partner veterinary network, we offer wellness exams, vaccinations, microchipping, preventative care consultations, and treatment for minor ailments."
};

// Sample automated responses based on keywords
const keywordResponses = [
  { keywords: ["price", "cost", "fee", "pricing", "package"], response: "Our service packages start at $49 for basic care. Please check our pricing section for detailed information on all our packages." },
  { keywords: ["book", "appointment", "schedule", "reservation"], response: "You can book an appointment through our online booking system. Just click the 'Book Now' button on our services page." },
  { keywords: ["location", "address", "where"], response: "We have multiple locations across the city. You can find the nearest one by entering your zip code on our locations page." },
  { keywords: ["cancel", "reschedule"], response: "You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any fees." },
  { keywords: ["contact", "phone", "email"], response: "You can reach our customer service team at contact@animals.id or call us at (555) 123-4567." },
];

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

type QuickReply = {
  text: string;
  action: string;
};

const quickReplies: QuickReply[] = [
  { text: "Book Appointment", action: "book" },
  { text: "View Services", action: "services" },
  { text: "Check Pricing", action: "pricing" },
  { text: "Contact Us", action: "contact" },
];

const TypingIndicator = () => (
  <div className="typing-indicator">
    <div className="typing-circle" />
    <div className="typing-circle" />
    <div className="typing-circle" />
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you with your pet care needs today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Fuse for fuzzy searching
  const fuse = new Fuse(Object.keys(faqAnswers), {
    threshold: 0.4,
    distance: 100,
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTimestamp = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  const handleQuickReply = (reply: QuickReply) => {
    setInput(reply.text);
    handleSendMessage(undefined, reply.text);
  };

  const generateResponse = (userInput: string): string => {
    // Fuzzy search in FAQ questions
    const fuseResults = fuse.search(userInput);
    if (fuseResults.length > 0) {
      const bestMatch = fuseResults[0].item;
      return faqAnswers[bestMatch as keyof typeof faqAnswers];
    }

    // Keyword matching with improved context
    const userInputLower = userInput.toLowerCase();
    for (const item of keywordResponses) {
      if (item.keywords.some(keyword => userInputLower.includes(keyword))) {
        return item.response;
      }
    }

    return "I'm not sure I understand. You can try:\n- Asking about our services\n- Booking an appointment\n- Checking our pricing\n- Finding our locations";
  };

  const handleSendMessage = async (e?: React.FormEvent, quickReplyText?: string) => {
    if (e) e.preventDefault();
    
    const messageText = quickReplyText || input;
    if (messageText.trim() === "") return;

    try {
      // Add user message
      const userMessage: Message = {
        id: Date.now(),
        text: messageText,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);
      setError(null);

      // Simulate API delay and generate response
      await new Promise(resolve => setTimeout(resolve, 1000));
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateResponse(messageText),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 h-[500px] flex flex-col shadow-xl rounded-2xl overflow-hidden border-gray-200">
          <div className="flex justify-between items-center p-3 bg-animal-blue text-white">
            <h3 className="font-semibold">Pet Services Chat</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-animal-blue/90"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <CardContent className="flex-grow overflow-y-auto p-3 pt-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex w-full",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[80%] p-3 rounded-lg shadow-sm",
                  message.isUser 
                    ? "bg-animal-blue text-white rounded-br-none" 
                    : "bg-white text-gray-800 rounded-bl-none"
                )}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <span className={cn(
                    "text-[10px] mt-1 block opacity-70",
                    message.isUser ? "text-blue-100" : "text-gray-500"
                  )}>
                    {formatTimestamp(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm rounded-bl-none">
                  <TypingIndicator />
                </div>
              </div>
            )}
            
            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded mx-auto max-w-[90%]">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-3 border-t bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickReplies.map((reply) => (
                <Button
                  key={reply.action}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs hover:bg-animal-blue/10"
                >
                  {reply.text}
                </Button>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow focus:ring-animal-blue"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-animal-blue hover:bg-animal-blue/90 text-white"
                disabled={isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg bg-animal-blue hover:bg-animal-blue/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;
