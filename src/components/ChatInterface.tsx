import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  chatId: string | null;
  onNewChat: () => void;
}

const ChatInterface = ({ chatId }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Это демонстрационный ответ от AI модели. В реальной версии здесь будет настоящий ответ от выбранной модели.',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-border p-4 flex items-center justify-between bg-card/30 backdrop-blur">
        <div className="flex items-center space-x-3">
          <Icon name="Bot" size={24} className="text-primary" />
          <div>
            <h2 className="font-semibold">AI Ассистент</h2>
            <p className="text-xs text-muted-foreground">Онлайн</p>
          </div>
        </div>
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
            <SelectItem value="claude">Claude 3 Opus</SelectItem>
            <SelectItem value="gemini">Gemini Pro</SelectItem>
            <SelectItem value="llama">Llama 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-4 max-w-md">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <Icon name="MessageSquare" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Начните новый диалог</h3>
              <p className="text-muted-foreground">
                Задайте любой вопрос или выберите один из примеров ниже
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  'Объясни квантовую физику простыми словами',
                  'Помоги написать код на Python',
                  'Придумай идеи для контента',
                  'Проанализируй этот текст'
                ].map((example, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="text-left justify-start h-auto py-3 px-4"
                    onClick={() => setInputValue(example)}
                  >
                    <Icon name="Lightbulb" size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{example}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <Avatar className="w-8 h-8 bg-gradient-to-br from-primary to-accent">
                    <AvatarFallback className="bg-transparent text-white">
                      AI
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {message.timestamp}
                  </p>
                </div>
                {message.role === 'user' && (
                  <Avatar className="w-8 h-8 bg-secondary">
                    <AvatarFallback>
                      <Icon name="User" size={16} />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <Avatar className="w-8 h-8 bg-gradient-to-br from-primary to-accent">
                  <AvatarFallback className="bg-transparent text-white">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </ScrollArea>

      <div className="border-t border-border p-4 bg-card/30 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Напишите сообщение..."
                className="min-h-[60px] max-h-[200px] resize-none pr-12"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 bottom-2"
              >
                <Icon name="Paperclip" size={20} />
              </Button>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="h-[60px] px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
