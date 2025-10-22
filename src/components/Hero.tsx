import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Работает на базе лучших AI моделей</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Общайтесь с{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              искусственным интеллектом
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Доступ к GPT-4, Claude, Gemini и другим передовым AI моделям в одном интерфейсе. 
            Начните диалог прямо сейчас.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
            <a href="#models">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="List" size={20} className="mr-2" />
                Посмотреть модели
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: 'MessageSquare', label: '1M+ чатов', color: 'text-primary' },
              { icon: 'Users', label: '50K+ пользователей', color: 'text-secondary' },
              { icon: 'Cpu', label: '10+ AI моделей', color: 'text-accent' },
              { icon: 'Clock', label: '24/7 доступность', color: 'text-primary' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <Icon name={stat.icon as any} size={32} className={`mx-auto ${stat.color}`} />
                <p className="text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
