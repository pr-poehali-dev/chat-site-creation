import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Какие AI модели доступны?',
    answer: 'У нас доступны GPT-4 Turbo, Claude 3 Opus, Gemini Pro, Llama 3, Mistral Large и PaLM 2. Вы можете переключаться между моделями прямо в чате.'
  },
  {
    question: 'Сохраняется ли история моих чатов?',
    answer: 'Да, все ваши диалоги автоматически сохраняются. В бесплатном плане история доступна 7 дней, в платных планах — бессрочно. Вы можете экспортировать чаты в любое время.'
  },
  {
    question: 'Есть ли API для интеграции?',
    answer: 'API доступен в профессиональном и командном планах. Вы получите ключи доступа и полную документацию для интеграции нашего сервиса в ваши приложения.'
  },
  {
    question: 'Как работает безлимитный доступ?',
    answer: 'В платных планах нет ограничений на количество запросов к AI моделям. Вы можете вести столько диалогов, сколько нужно, без дополнительной платы.'
  },
  {
    question: 'Можно ли использовать сервис в команде?',
    answer: 'Командный план позволяет добавить до 10 участников с общим доступом к чатам, проектам и администрированию. Каждый участник получает отдельный аккаунт.'
  },
  {
    question: 'Защищены ли мои данные?',
    answer: 'Мы используем end-to-end шифрование для всех диалогов. Ваши данные не используются для обучения AI моделей и не передаются третьим лицам.'
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Частые{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на самые популярные вопросы о нашей платформе
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
