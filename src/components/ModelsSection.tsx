import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const models = [
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Самая мощная языковая модель с расширенными возможностями анализа и генерации',
    icon: 'Brain',
    color: 'from-green-500 to-emerald-500',
    features: ['128K контекст', 'Мультимодальность', 'Обработка кода']
  },
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Продвинутая модель с фокусом на безопасность и точность ответов',
    icon: 'Sparkles',
    color: 'from-orange-500 to-amber-500',
    features: ['200K контекст', 'Анализ документов', 'Творческие задачи']
  },
  {
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Универсальная модель от Google с широкими возможностями',
    icon: 'Gem',
    color: 'from-blue-500 to-cyan-500',
    features: ['32K контекст', 'Работа с данными', 'Мультиязычность']
  },
  {
    name: 'Llama 3',
    provider: 'Meta',
    description: 'Открытая модель с высокой производительностью',
    icon: 'Code',
    color: 'from-purple-500 to-pink-500',
    features: ['8K контекст', 'Open Source', 'Программирование']
  },
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    description: 'Европейская модель с балансом скорости и качества',
    icon: 'Zap',
    color: 'from-indigo-500 to-violet-500',
    features: ['32K контекст', 'Быстрые ответы', 'Математика']
  },
  {
    name: 'PaLM 2',
    provider: 'Google',
    description: 'Специализированная модель для научных и технических задач',
    icon: 'GraduationCap',
    color: 'from-rose-500 to-red-500',
    features: ['Научный анализ', 'Рассуждения', 'Логика']
  }
];

const ModelsSection = () => {
  return (
    <section id="models" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Доступные{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI модели
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Выбирайте подходящую модель для каждой задачи. Все модели доступны в едином интерфейсе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${model.color}`}>
                    <Icon name={model.icon as any} size={24} className="text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {model.provider}
                  </Badge>
                </div>
                <CardTitle className="mt-4">{model.name}</CardTitle>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {model.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
