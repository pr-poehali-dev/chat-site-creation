import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatSidebar from '@/components/ChatSidebar';
import ChatInterface from '@/components/ChatInterface';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-lg h-16 flex items-center px-4 flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block">
                AI Chat
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar 
          isOpen={sidebarOpen} 
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
        <ChatInterface 
          chatId={selectedChatId}
          onNewChat={() => setSelectedChatId(null)}
        />
      </div>
    </div>
  );
};

export default Chat;
