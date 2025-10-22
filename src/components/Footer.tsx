import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Chat
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Современная платформа для общения с искусственным интеллектом
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#models" className="hover:text-foreground transition-colors">
                  Модели
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <Link to="/chat" className="hover:text-foreground transition-colors">
                  Начать чат
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API документация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 AI Chat. Все права защищены.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
