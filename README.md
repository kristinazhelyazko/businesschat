# MsgEco — Next.js Landing Page

## Стек
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Node.js API Route** (`/api/contact`) — интеграция с Telegram Bot

## Структура
```
src/
  app/
    page.tsx              # Главная страница
    layout.tsx            # Root layout + шрифты
    globals.css           # CSS-переменные, анимации, утилиты
    api/contact/route.ts  # POST /api/contact → Telegram
  components/
    layout/
      Navbar.tsx          # Фиксированная навигация
      Footer.tsx          # Подвал
      RevealInit.tsx      # IntersectionObserver для reveal-анимаций
    sections/
      HeroSection.tsx     # Hero + Dashboard preview
      ProblemsSection.tsx # 4 проблемы + Bridge-блок
      FeaturesSection.tsx # 3 компонента системы
      PlatformsSection.tsx# TG / VK / TG+VK + матрица
      RoiSection.tsx      # Метрики + экономия
      PricingSection.tsx  # Тарифы с переключателем платформ
      ProcessSection.tsx  # 5 шагов
      FaqSection.tsx      # Аккордеон
      CtaSection.tsx      # Финальный call-to-action
    ui/
      SvgIcons.tsx        # Все SVG-иконки
  data/
    content.ts            # Весь контент сайта в одном файле
  lib/
    useReveal.ts          # Хук для scroll-reveal анимаций
```

## Запуск локально
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production build
```bash
npm run build
npm start
```

## Деплой
### Vercel (рекомендуется)
```bash
npx vercel --prod
```

### Docker (standalone)
```bash
docker build -t msgeco .
docker run -p 3000:3000 msgeco
```

## Переменные окружения
Скопируйте `.env.local` и заполните:
```
TELEGRAM_BOT_TOKEN=  # токен бота для уведомлений о заявках
TELEGRAM_CHAT_ID=    # ID чата куда слать заявки
NEXT_PUBLIC_SITE_URL= # URL сайта
```

## Изменение контента
Весь текст, цены и данные — в одном файле: `src/data/content.ts`  
Ссылка на Telegram: `SITE_CONFIG.telegramUrl` в том же файле.
