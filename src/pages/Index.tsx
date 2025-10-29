import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Code2",
      title: "Веб-разработка",
      description: "Создание современных веб-приложений с использованием передовых технологий"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разработка нативных и кроссплатформенных мобильных решений"
    },
    {
      icon: "Database",
      title: "Backend-системы",
      description: "Проектирование надежной серверной архитектуры и API"
    },
    {
      icon: "Cloud",
      title: "Облачные решения",
      description: "Миграция и оптимизация инфраструктуры в облаке"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Аудит безопасности и защита от киберугроз"
    },
    {
      icon: "BarChart3",
      title: "Аналитика данных",
      description: "Разработка систем сбора и анализа бизнес-данных"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce платформа",
      category: "Веб-разработка",
      description: "Высоконагруженная платформа для онлайн-торговли с интеграцией платежных систем"
    },
    {
      title: "Корпоративная CRM",
      category: "Enterprise решение",
      description: "Комплексная система управления взаимоотношениями с клиентами"
    },
    {
      title: "Мобильный банкинг",
      category: "Финтех",
      description: "Безопасное мобильное приложение для управления финансами"
    },
    {
      title: "IoT панель управления",
      category: "IoT & Аналитика",
      description: "Система мониторинга и управления устройствами интернета вещей"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Terminal" size={28} className="text-accent" />
            <span className="text-2xl font-bold text-primary">DevStudio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Портфолио
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Создаём программное обеспечение для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Разрабатываем надежные digital-решения, которые масштабируют ваш бизнес и оптимизируют процессы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-base">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки от проектирования до внедрения и поддержки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-card group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Портфолио проектов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешных проектов для различных отраслей бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden group bg-card"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent/90 p-0">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами для обсуждения вашей задачи. Мы предложим оптимальное решение и рассчитаем стоимость
          </p>
          <Button size="lg" variant="secondary" className="text-base">
            Получить консультацию
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Terminal" size={24} className="text-accent" />
              <span className="font-bold text-primary">DevStudio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 DevStudio. IT-разработка и digital-решения
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
