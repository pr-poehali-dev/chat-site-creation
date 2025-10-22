import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Бесплатный',
    price: '0',
    description: 'Для знакомства с платформой',
    features: [
      'GPT-3.5 и базовые модели',
      '50 запросов в день',
      'История чатов 7 дней',
      'Базовая поддержка'
    ],
    cta: 'Начать бесплатно',
    highlighted: false
  },
  {
    name: 'Профессиональный',
    price: '990',
    description: 'Для продуктивной работы',
    features: [
      'Все премиум модели (GPT-4, Claude)',
      'Безлимитные запросы',
      'Бессрочная история чатов',
      'Приоритетная поддержка',
      'API доступ',
      'Экспорт диалогов'
    ],
    cta: 'Выбрать план',
    highlighted: true
  },
  {
    name: 'Командный',
    price: '4990',
    description: 'Для команд и организаций',
    features: [
      'Все из Профессионального',
      'До 10 участников',
      'Общие чаты и проекты',
      'Администрирование',
      'SLA 99.9%',
      'Персональный менеджер'
    ],
    cta: 'Связаться с нами',
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Простые и прозрачные{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              тарифы
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий план. Без скрытых платежей и долгосрочных обязательств.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.highlighted 
                  ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                  : 'bg-card/50 backdrop-blur'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== '0' && <span className="text-muted-foreground ml-2">₽/месяц</span>}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link to="/chat" className="w-full">
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
