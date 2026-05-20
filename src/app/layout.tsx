import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="ru" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
