import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "БизнесЧат — магазин и управление заказами в Telegram и ВКонтакте",
  description: "Готовая система продаж в мессенджерах: интернет-магазин, управление заказами и боты в Telegram и ВКонтакте. Запуск за 4–6 недель под ключ.",
  keywords: ["telegram магазин", "vk магазин", "бот для бизнеса", "интернет-магазин в telegram"],
  openGraph: {
    title: "БизнесЧат — магазин и управление заказами в Telegram и ВКонтакте",
    description: "Интернет-магазин, чат-бот и управление заказами в Telegram и ВКонтакте",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
