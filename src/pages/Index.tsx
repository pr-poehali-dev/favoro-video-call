import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

type Page = 'landing' | 'auth' | 'dashboard' | 'call' | 'profile' | 'settings';

const contacts = [
  { id: 1, name: 'Александра Петрова', status: 'online', avatar: '' },
  { id: 2, name: 'Дмитрий Иванов', status: 'offline', avatar: '' },
  { id: 3, name: 'Мария Смирнова', status: 'online', avatar: '' },
  { id: 4, name: 'Сергей Козлов', status: 'away', avatar: '' },
];

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLogin, setIsLogin] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const LandingPage = () => (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-purple-pink flex items-center justify-center">
              <Icon name="Video" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">Favoro</span>
          </div>
          <Button onClick={() => setCurrentPage('auth')} variant="outline" className="border-white/20 hover:bg-white/10">
            Войти
          </Button>
        </div>
      </nav>

      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-purple-pink text-white border-0 px-4 py-2 text-sm">
              Видеосвязь нового поколения
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Видеозвонки без границ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Общайтесь с близкими в кристально чистом качестве. Безопасно, просто, красиво.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-purple-pink text-white hover:opacity-90 px-8 py-6 text-lg"
                onClick={() => setCurrentPage('auth')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Двухфакторная аутентификация и end-to-end шифрование</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-purple-pink flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Мгновенное подключение без задержек</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">HD видео и crystal-clear аудио</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2026 Favoro. Видеозвонки, которые впечатляют.</p>
        </div>
      </footer>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Button 
        variant="ghost" 
        className="absolute top-6 left-6"
        onClick={() => setCurrentPage('landing')}
      >
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <Card className="w-full max-w-md glass-effect border-white/10">
        <CardHeader className="text-center">
          <div className="w-16 h-16 rounded-2xl gradient-purple-pink flex items-center justify-center mx-auto mb-4">
            <Icon name="Video" size={32} className="text-white" />
          </div>
          <CardTitle className="text-3xl font-bold">Favoro</CardTitle>
          <CardDescription>
            {isLogin ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={isLogin ? 'login' : 'register'} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" onClick={() => setIsLogin(true)}>Вход</TabsTrigger>
              <TabsTrigger value="register" onClick={() => setIsLogin(false)}>Регистрация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full gradient-purple-pink text-white hover:opacity-90"
                onClick={() => setCurrentPage('dashboard')}
              >
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
              <Button variant="link" className="w-full text-muted-foreground">
                Забыли пароль?
              </Button>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <Input id="reg-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password">Пароль</Label>
                <Input id="reg-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full gradient-purple-pink text-white hover:opacity-90"
                onClick={() => setCurrentPage('dashboard')}
              >
                <Icon name="UserPlus" size={18} className="mr-2" />
                Зарегистрироваться
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen">
      <nav className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-purple-pink flex items-center justify-center">
                <Icon name="Video" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Favoro</span>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-white hover:text-white/80">
                <Icon name="Home" size={20} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-white">
                <Icon name="Users" size={20} className="mr-2" />
                Контакты
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-white">
                <Icon name="Clock" size={20} className="mr-2" />
                История
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="cursor-pointer" onClick={() => setCurrentPage('profile')}>
              <AvatarFallback className="gradient-purple-pink text-white font-semibold">ВП</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Добро пожаловать!</h1>
          <p className="text-muted-foreground">Выберите контакт для видеозвонка</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glass-effect border-white/10 hover-scale cursor-pointer" onClick={() => setCurrentPage('call')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Video" size={24} className="text-primary" />
                Новый видеозвонок
              </CardTitle>
              <CardDescription>Начните видеозвонок с контактом</CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect border-white/10 hover-scale cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="UserPlus" size={24} className="text-accent" />
                Добавить контакт
              </CardTitle>
              <CardDescription>Пригласите друзей в Favoro</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Контакты</h2>
            <div className="relative w-64">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Поиск контактов..." className="pl-10 glass-effect border-white/10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((contact) => (
              <Card key={contact.id} className="glass-effect border-white/10 hover-scale cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="gradient-blue-purple text-white text-lg font-semibold">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${
                        contact.status === 'online' ? 'bg-green-500' : 
                        contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{contact.status}</p>
                    </div>
                    <Button size="icon" className="gradient-purple-pink hover:opacity-90">
                      <Icon name="Video" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );

  const CallPage = () => (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarFallback className="gradient-purple-pink text-white text-4xl font-bold">АП</AvatarFallback>
            </Avatar>
            <h2 className="text-3xl font-bold mb-2">Александра Петрова</h2>
            <p className="text-muted-foreground">Звоним...</p>
          </div>
        </div>

        <div className="absolute top-6 right-6">
          <Card className="w-48 h-36 glass-effect border-white/10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600" />
          </Card>
        </div>
      </div>

      <div className="p-6 glass-effect border-t border-white/10">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Button size="icon" className="h-14 w-14 rounded-full glass-effect hover:bg-white/20">
            <Icon name="Mic" size={24} />
          </Button>
          <Button size="icon" className="h-14 w-14 rounded-full glass-effect hover:bg-white/20">
            <Icon name="Video" size={24} />
          </Button>
          <Button 
            size="icon" 
            className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600"
            onClick={() => setCurrentPage('dashboard')}
          >
            <Icon name="PhoneOff" size={28} />
          </Button>
          <Button size="icon" className="h-14 w-14 rounded-full glass-effect hover:bg-white/20">
            <Icon name="Volume2" size={24} />
          </Button>
          <Button size="icon" className="h-14 w-14 rounded-full glass-effect hover:bg-white/20">
            <Icon name="MoreVertical" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="min-h-screen">
      <nav className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setCurrentPage('dashboard')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <span className="text-xl font-bold">Профиль</span>
          <Button variant="ghost" onClick={() => setCurrentPage('settings')}>
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 max-w-2xl">
        <Card className="glass-effect border-white/10">
          <CardHeader className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarFallback className="gradient-purple-pink text-white text-4xl font-bold">ВП</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">Владимир Петров</CardTitle>
            <CardDescription>vladimir.petrov@example.com</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Имя</Label>
                <Input defaultValue="Владимир" className="mt-2 glass-effect border-white/10" />
              </div>
              <div>
                <Label>Фамилия</Label>
                <Input defaultValue="Петров" className="mt-2 glass-effect border-white/10" />
              </div>
              <div>
                <Label>Email</Label>
                <Input defaultValue="vladimir.petrov@example.com" type="email" className="mt-2 glass-effect border-white/10" />
              </div>
              <div>
                <Label>Телефон</Label>
                <Input defaultValue="+7 (999) 123-45-67" className="mt-2 glass-effect border-white/10" />
              </div>
            </div>

            <Separator className="bg-white/10" />

            <div className="space-y-4">
              <h3 className="font-semibold">Статистика</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">42</p>
                  <p className="text-sm text-muted-foreground">Звонков</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">18</p>
                  <p className="text-sm text-muted-foreground">Контактов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">3.2ч</p>
                  <p className="text-sm text-muted-foreground">В эфире</p>
                </div>
              </div>
            </div>

            <Button className="w-full gradient-purple-pink hover:opacity-90">
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );

  const SettingsPage = () => (
    <div className="min-h-screen">
      <nav className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setCurrentPage('dashboard')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <span className="text-xl font-bold">Настройки</span>
          <div className="w-20" />
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 max-w-2xl">
        <div className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                Безопасность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Двухфакторная аутентификация</Label>
                  <p className="text-sm text-muted-foreground">Дополнительная защита вашего аккаунта</p>
                </div>
                <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
              </div>
              
              {twoFactorEnabled && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">2FA активирована</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ваш аккаунт защищён двухфакторной аутентификацией
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Separator className="bg-white/10" />

              <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                <Icon name="Key" size={18} className="mr-2" />
                Изменить пароль
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Video" size={24} className="text-accent" />
                Видео и аудио
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">HD качество видео</Label>
                  <p className="text-sm text-muted-foreground">Требует больше трафика</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Шумоподавление</Label>
                  <p className="text-sm text-muted-foreground">Улучшает качество звука</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Автоматическое включение камеры</Label>
                  <p className="text-sm text-muted-foreground">При входящих звонках</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Bell" size={24} className="text-secondary" />
                Уведомления
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Входящие звонки</Label>
                  <p className="text-sm text-muted-foreground">Звук и push-уведомления</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Сообщения</Label>
                  <p className="text-sm text-muted-foreground">Уведомления о новых сообщениях</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-500">
                <Icon name="AlertTriangle" size={24} />
                Опасная зона
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10">
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти из аккаунта
              </Button>
              <Button variant="outline" className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10">
                <Icon name="Trash2" size={18} className="mr-2" />
                Удалить аккаунт
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );

  return (
    <>
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'auth' && <AuthPage />}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'call' && <CallPage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'settings' && <SettingsPage />}
    </>
  );
}
