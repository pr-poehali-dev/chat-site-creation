import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Hero from '@/components/Hero';
import ModelsSection from '@/components/ModelsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Chat
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#models" className="text-foreground/80 hover:text-foreground transition-colors">
                Модели
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
                Тарифы
              </a>
              <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
                FAQ
              </a>
              <Link to="/chat">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Начать чат
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#models" className="block text-foreground/80 hover:text-foreground transition-colors">
                Модели
              </a>
              <a href="#pricing" className="block text-foreground/80 hover:text-foreground transition-colors">
                Тарифы
              </a>
              <a href="#faq" className="block text-foreground/80 hover:text-foreground transition-colors">
                FAQ
              </a>
              <Link to="/chat">
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Начать чат
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      <Hero />
      <ModelsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
