
import React, { useState } from 'react';
import { MessageCircle, X, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log("Message sent:", message);
      toast({
        title: "Message Sent",
        description: "We'll respond to your inquiry shortly.",
      });
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-forest-600 hover:bg-forest-700'
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-6 z-40 w-80 md:w-96 bg-white rounded-xl shadow-xl transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-forest-600 text-white p-4 rounded-t-xl">
          <h3 className="font-bold">Chat with Eduardo</h3>
          <p className="text-sm opacity-80">Ask about Paraguay investment opportunities</p>
        </div>
        
        <div className="h-64 overflow-y-auto p-4 bg-gray-50">
          <div className="flex flex-col space-y-3">
            <div className="bg-forest-100 text-forest-800 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
              <p className="text-sm">Hello! How can I help you with investing in Paraguay farmland?</p>
              <span className="text-xs text-gray-500 mt-1 block">Eduardo, 1m ago</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex items-end gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[80px] resize-none"
            />
            <Button 
              type="submit" 
              className="h-10 w-10 p-0 bg-forest-600 hover:bg-forest-700"
              disabled={!message.trim()}
            >
              <Send size={18} className="text-white" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
