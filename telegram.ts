/**
 * Telegram Bot API orqali xabar yuborish.
 *
 * Kerakli qadamlar:
 * 1. Telegram'da @BotFather'ga yozib, /newbot buyrug'i bilan bot yarating.
 * 2. Sizga beriladigan tokenni .env.local faylidagi TELEGRAM_BOT_TOKEN ga qo'ying.
 * 3. Botga bironta xabar yozing (masalan "salom"), so'ng brauzerda quyidagi
 *    manzilni oching: https://api.telegram.org/bot<TOKEN>/getUpdates
 *    Javobdagi "chat":{"id": ...} — shu son sizning TELEGRAM_CHAT_ID'ingiz.
 */
export async function sendTelegramMessage(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn(
      '[telegram] TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan — xabar yuborilmadi.'
    );
    return;
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API xatosi: ${res.status} ${body}`);
  }
}
