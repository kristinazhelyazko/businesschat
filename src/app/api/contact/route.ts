import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json({ error: "Укажите имя" }, { status: 400 });
    }
    // Production: uncomment to send via Telegram Bot API:
    // const token = process.env.TELEGRAM_BOT_TOKEN;
    // const chatId = process.env.TELEGRAM_CHAT_ID;
    // await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    //   method: "POST", headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ chat_id: chatId, text: `🆕 Заявка\n👤 ${body.name}\n📱 ${body.phone||"—"}\n💬 ${body.message||"—"}` }),
    // });
    console.log("[contact]", { ...body, ts: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
