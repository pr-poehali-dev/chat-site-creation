import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface Chat {
  id: string;
  title: string;
  timestamp: string;
  preview: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
}

const ChatSidebar = ({ isOpen, selectedChatId, onSelectChat }: ChatSidebarProps) => {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Помощь с кодом React',
      timestamp: '2 часа назад',
      preview: 'Как правильно использовать useEffect...'
    },
    {
      id: '2',
      title: 'Идеи для стартапа',
      timestamp: 'Вчера',
      preview: 'Какие перспективные направления...'
    },
    {
      id: '3',
      title: 'Анализ данных',
      timestamp: '3 дня назад',
      preview: 'Помоги разобрать статистику продаж...'
    }
  ]);

  const handleNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'Новый чат',
      timestamp: 'Только что',
      preview: 'Начните диалог...'
    };
    setChats([newChat, ...chats]);
    onSelectChat(newChat.id);
  };

  const handleDeleteChat = (id: string) => {
    setChats(chats.filter(chat => chat.id !== id));
    if (selectedChatId === id) {
      onSelectChat(chats[0]?.id || '');
    }
  };

  return (
    <aside
      className={cn(
        'border-r border-border bg-card/30 backdrop-blur flex-shrink-0 transition-all duration-300',
        isOpen ? 'w-80' : 'w-0'
      )}
    >
      {isOpen && (
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <Button 
              onClick={handleNewChat}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Новый чат
            </Button>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={cn(
                    'p-3 rounded-lg cursor-pointer transition-all group relative',
                    selectedChatId === chat.id
                      ? 'bg-primary/10 border border-primary/20'
                      : 'hover:bg-muted/50'
                  )}
                  onClick={() => onSelectChat(chat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate mb-1">
                        {chat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {chat.preview}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {chat.timestamp}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChat(chat.id);
                      }}
                    >
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ChatSidebar;
