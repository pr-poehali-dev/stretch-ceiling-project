import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [area, setArea] = useState<number>(20);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const pricePerSqM = 450;
  const totalPrice = area * pricePerSqM;
  const discount = 15;
  const finalPrice = totalPrice * (1 - discount / 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !name) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя и телефон",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: `${name}, скидка ${discount}% зафиксирована за вами. Мы перезвоним в течение 15 минут.`,
    });
    setPhone('');
    setName('');
    setMessage('');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">П</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Профкомфорт</h1>
                <p className="text-xs text-muted-foreground">Производство в Тюмени</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['hero', 'calculator', 'advantages', 'portfolio', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {section === 'hero' && 'Главная'}
                  {section === 'calculator' && 'Калькулятор'}
                  {section === 'advantages' && 'Преимущества'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                🎁 Специальное предложение
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Натяжной потолок <span className="text-accent">в подарок</span> при заказе мебели
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Собственное производство в Тюмени. Премиальное качество от производителя без посредников.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')} className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Рассчитать стоимость
                  <Icon name="Calculator" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Наши работы
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
              <div className="flex gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-accent" />
                  <span>Гарантия 10 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span>Монтаж за 1 день</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 h-[500px] flex items-center justify-center">
                <Icon name="Home" size={200} className="text-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Рассчитайте стоимость за 30 секунд</h2>
            <p className="text-muted-foreground text-lg">Узнайте точную цену вашего потолка прямо сейчас</p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="area" className="text-lg mb-2 block">Площадь потолка (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="text-lg"
                    min="1"
                  />
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-4"
                  />
                </div>

                <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>Площадь:</span>
                    <span className="font-semibold">{area} м²</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Цена за м²:</span>
                    <span className="font-semibold">{pricePerSqM} ₽</span>
                  </div>
                  <div className="flex justify-between text-lg text-muted-foreground line-through">
                    <span>Итого:</span>
                    <span>{totalPrice.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="text-xl font-bold">Со скидкой {discount}%:</span>
                    <span className="text-3xl font-bold text-accent">{finalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-lg"
                  onClick={() => scrollToSection('contacts')}
                >
                  Зафиксировать скидку
                  <Icon name="Lock" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Мы — производители с 15-летним опытом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Factory',
                title: 'Собственное производство',
                description: 'Контролируем каждый этап от закупки материалов до монтажа. Цены без наценок посредников.'
              },
              {
                icon: 'Award',
                title: 'Гарантия 10 лет',
                description: 'Уверены в качестве наших потолков. Официальная гарантия и бесплатное обслуживание.'
              },
              {
                icon: 'Users',
                title: 'Опытные мастера',
                description: 'Команда из 25 профессионалов. Средний опыт работы — 8 лет. Монтаж за 1 день.'
              },
              {
                icon: 'Palette',
                title: 'Широкий выбор',
                description: '500+ видов полотен, любые цвета и фактуры. Поможем подобрать идеальное решение.'
              },
              {
                icon: 'Gift',
                title: 'Потолок в подарок',
                description: 'При заказе встраиваемой мебели натяжной потолок устанавливаем бесплатно!'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Экологичные материалы с сертификатами. Безопасно для детей и аллергиков.'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg">Более 2000 реализованных проектов в Тюмени</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/08104111-45dd-483d-af53-5f3a20fc9756.jpg',
                title: 'Гостиная с магнитными треками',
                area: 32
              },
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/f5911159-0551-4910-994d-a06dcf6c3ae7.jpg',
                title: 'Спальня премиум-класса',
                area: 25
              },
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/8dba3c56-1f9d-4d85-8e65-8c4f1abc89bf.jpg',
                title: 'Кухня с теневым потолком',
                area: 28
              },
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/87061401-124c-4962-ad92-c0ffd1fbcc5b.jpg',
                title: 'Офисное пространство',
                area: 45
              },
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/ec0e53e1-4c88-4c73-9ce9-c4acc127b6c5.jpg',
                title: 'Современная гостиная',
                area: 38
              },
              { 
                img: 'https://cdn.poehali.dev/projects/c091c39b-83fa-4a37-8d71-85120a05f22c/files/808aaea2-320e-4e98-8cfa-75ca48470964.jpg',
                title: 'Столовая зона',
                area: 30
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <Icon name="Eye" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Натяжной потолок с магнитными треками, {item.area} м²</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Что говорят наши клиенты</h2>
            <p className="text-muted-foreground text-lg">Более 500 положительных отзывов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна Петрова', text: 'Заказывали кухню, потолок сделали в подарок! Качество отличное, монтаж быстрый. Рекомендую!', rating: 5 },
              { name: 'Сергей Иванов', text: 'Работали профессионалы. Замер, консультация, установка — всё на высшем уровне. Цена приятно удивила.', rating: 5 },
              { name: 'Мария Сидорова', text: 'Собственное производство — это большой плюс. Выбрали нужный оттенок из каталога. Результат превзошёл ожидания!', rating: 5 }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Акция!</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Зафиксируйте скидку 15%</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку сейчас — перезвоним через 15 минут</p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Расскажите о вашем проекте"
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg">
                  Получить скидку 15%
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (3452) 500-100</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@profkomfort.ru</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Тюмень, ул. Производственная, 25</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-accent rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">П</span>
                </div>
                <h3 className="font-bold text-xl">Профкомфорт</h3>
              </div>
              <p className="text-white/70">Производство натяжных потолков и встраиваемой мебели в Тюмени с 2009 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Натяжные потолки</li>
                <li>Встраиваемая мебель</li>
                <li>Дизайн-проект</li>
                <li>Монтаж</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О производстве</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (3452) 500-100</li>
                <li>info@profkomfort.ru</li>
                <li>Пн-Пт: 9:00-19:00</li>
                <li>Сб-Вс: 10:00-17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Профкомфорт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;