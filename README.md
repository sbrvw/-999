# TRI999 — taksopark sayti

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui uslubidagi komponentlar + Lucide icons.

## Xususiyatlari

- **Ko'p sahifali sayt**: bosh sahifa, mashinalar, xizmatlar, haydovchilar uchun, sharhlar, kontaktlar — har biri alohida route
- **3 tilda**: O'zbekcha (`/uz`), Кыргызча (`/kg`), Русский (`/ru`) — navbardagi til tanlagich orqali almashadi
- **Statik ma'lumotlar**: mashina/xizmat/sharh ma'lumotlari `src/lib/data.ts` faylida — siz o'zingiz tahrirlaysiz (backend/DB yo'q)
- **Telegram integratsiyasi**: "Ijaraga olish" va "Sharh yozish" formalari to'ldirilganda sizga Telegram bot orqali xabar keladi

## 1. O'rnatish

```bash
npm install
```

`.env.example` faylini nusxalab `.env.local` nomida saqlang va Telegram sozlamalarini kiriting (pastda tushuntirilgan):

```bash
cp .env.example .env.local
```

Ishga tushirish:

```bash
npm run dev
```

Brauzerda `http://localhost:3000` oching (avtomatik `/uz`ga yo'naltiradi).

## 2. Telegram botni sozlash

1. Telegram'da **@BotFather**ni toping, `/newbot` buyrug'ini yuboring va ko'rsatmalarga amal qiling.
2. BotFather sizga bot **tokenini** beradi (masalan `123456:ABC-DEF...`) — buni `.env.local` faylidagi `TELEGRAM_BOT_TOKEN` ga qo'ying.
3. Yangi yaratilgan botingizga Telegram'da bironta xabar yozing (masalan "salom").
4. Brauzerda quyidagi manzilni oching (TOKEN o'rniga o'z tokeningizni qo'ying):
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
5. Javobda `"chat":{"id": 123456789, ...}` qatorini topasiz — shu raqam sizning **chat ID**ingiz. Buni `.env.local` faylidagi `TELEGRAM_CHAT_ID` ga qo'ying.
6. Serverni qayta ishga tushiring (`npm run dev`). Endi saytdagi formalar shu botga xabar yuboradi.

> Guruhga xabar kelishini xohlasangiz: botni guruhga qo'shing, guruhga bir xabar yozing, so'ng xuddi shu `getUpdates` usuli bilan guruh chat ID'sini toping (odatda `-` bilan boshlanadi).

## 3. Mashina/xizmat ma'lumotlarini tahrirlash

`src/lib/data.ts` faylini oching:

- **`CARS`** — har bir mashina uchun `images: []` ichiga rasm URL manzilini yozing (yoki `/public/cars/...` ga rasm qo'yib, `"/cars/rasm.jpg"` deb yozing), `brand`, `model`, `pricePerDay`, `description` va h.k.ni o'zgartiring.
- **`SERVICES`** — xizmatlar ro'yxati, `icon` maydoniga Lucide icon nomini yozasiz (`Car`, `FileText`, `ShieldCheck`, `Smartphone`, `FileCheck2`, `Headset` — kerak bo'lsa `src/components/sections/ServicesSection.tsx`dagi `ICONS` obyektiga yangisini qo'shasiz).
- **`REVIEWS`** — Telegram'ga kelgan va siz tasdiqlagan haqiqiy sharhlarni shu yerga qo'lda qo'shib borasiz.

## 4. Tarjimalarni tahrirlash

`messages/uz.json`, `messages/kg.json`, `messages/ru.json` — interfeys matnlari (menyu, tugmalar, sarlavhalar) shu fayllarda. Struktura barcha uch faylda bir xil, faqat qiymatlar tarjima qilingan.

## 5. Deploy qilish (Vercel)

1. Loyihani GitHub'ga yuklang
2. [vercel.com](https://vercel.com) orqali repo'ni import qiling
3. Environment Variables bo'limiga `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID`ni qo'shing
4. Deploy tugmasini bosing

## Papka strukturasi

```
src/
├── app/
│   ├── [locale]/           ← uz / kg / ru sahifalari
│   │   ├── layout.tsx        Header + Footer + til provider
│   │   ├── page.tsx           Bosh sahifa
│   │   ├── mashinalar/
│   │   ├── xizmatlar/
│   │   ├── haydovchilar-uchun/
│   │   ├── otzivlar/
│   │   └── kontaktlar/
│   ├── api/telegram/         API route — formalarni Telegram'ga yuboradi
│   └── globals.css            Dizayn tokenlar (gold/dark tema)
├── components/
│   ├── ui/                   Bazaviy UI (Button, Card, Dialog, Input...)
│   ├── layout/                Header, Footer, LanguageSwitcher
│   ├── sections/               Hero, CarsSection, ServicesSection...
│   ├── cars/                    CarCard, CarModal, ApplyForm
│   └── reviews/                  ReviewCard, ReviewForm, StarRating
├── i18n/                     next-intl sozlamalari
└── lib/                       data.ts, types.ts, telegram.ts, utils.ts
messages/                    uz.json, kg.json, ru.json
```

## Eslatma

Bu loyiha shu muhitda (network o'chirilgan konteyner) `npm install` bilan sinovdan o'tkazilmadi — kodni o'zingizning kompyuteringizda internet mavjud joyda o'rnatib ishga tushiring. Agar `npm run dev`da xatolik chiqsa, xatolik matnini menga yuboring — birga tuzatamiz.
