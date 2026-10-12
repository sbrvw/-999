import type { Car, Service, Review } from "./types";

// Mashina ma'lumotlari — rasm va matnlarni shu yerda o'zgartirasiz.
// images[] ga o'z rasmingiz URL'ini yoki /public papkasiga qo'ygan
// lokal rasm yo'lini (masalan "/cars/sonata-1.jpg") qo'yishingiz mumkin.
export const CARS: Car[] = [
  {
    id: "1",
    brand: "Hyundai",
    model: "Sonata",
    year: 2022,
    transmission: "Avtomat",
    fuel: "Benzin",
    engine: "2.0L 150 o.k.",
    trim: "Comfort",
    category: "comfort",
    pricePerDay: 2500,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1688624381743-8cb5bfb4cc47?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1774550010075-af560fe7f732?w=1200&h=750&fit=crop&auto=format",
    ],
    description:
      "Taksida kundalik ishlash uchun ishonchli va qulay sedan. Keng salon, tejamkor yoqilg'i sarfi.",
  },
  {
    id: "2",
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    transmission: "Avtomat",
    fuel: "Benzin",
    engine: "2.5L 200 o.k.",
    trim: "Business",
    category: "business",
    pricePerDay: 3500,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1764774518725-3ea2fc2460af?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1570019112093-f46196e5e474?w=1200&h=750&fit=crop&auto=format",
    ],
    description:
      "Biznes-klassdagi vakolatli sedan. Premium salon, VIP-mijozlar uchun juda mos.",
  },
  {
    id: "3",
    brand: "Kia",
    model: "K5",
    year: 2023,
    transmission: "Avtomat",
    fuel: "Benzin",
    engine: "2.0L 160 o.k.",
    trim: "Prestige",
    category: "comfort",
    pricePerDay: 2800,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1570019112093-f46196e5e474?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1764774518725-3ea2fc2460af?w=1200&h=750&fit=crop&auto=format",
    ],
    description:
      "Zamonaviy interyerli va ajoyib dinamikali, chiroyli hamda ishonchli komfort-klass.",
  },
  {
    id: "4",
    brand: "Hyundai",
    model: "Accent",
    year: 2022,
    transmission: "Avtomat",
    fuel: "Benzin",
    engine: "1.6L 123 o.k.",
    trim: "Standard",
    category: "econom",
    pricePerDay: 1800,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1590807156254-a3e681cc6aeb?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1688624381743-8cb5bfb4cc47?w=1200&h=750&fit=crop&auto=format",
    ],
    description:
      "Shahar ichida yurish uchun ixcham va tejamkor avtomobil. Minimal yoqilg'i sarfi.",
  },
  {
    id: "5",
    brand: "Kia",
    model: "Rio",
    year: 2023,
    transmission: "Avtomat",
    fuel: "Benzin",
    engine: "1.4L 100 o.k.",
    trim: "Standard",
    category: "econom",
    pricePerDay: 1700,
    available: false,
    images: [
      "https://images.unsplash.com/photo-1589149536608-5a3b601f42a4?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1590807156254-a3e681cc6aeb?w=1200&h=750&fit=crop&auto=format",
    ],
    description:
      "Yangi boshlagan haydovchilar uchun mashhur ekonom-klass. Xizmat ko'rsatishda sodda va ishonchli.",
  },
  {
    id: "6",
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2020,
    transmission: "Avtomat",
    fuel: "Dizel",
    engine: "2.0L 194 o.k.",
    trim: "Executive Line",
    category: "business",
    pricePerDay: 5500,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1760662690939-73971aaad92b?w=1200&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1589149536608-5a3b601f42a4?w=1200&h=750&fit=crop&auto=format",
    ],
    description: "Eng yuqori klassdagi vakolatli avtomobil. Maksimal qulaylik va status.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Avtomobil ijarasi",
    description: "Taksida ishlash uchun kunlik ijaraga avtomobillar. Keng avtopark ichidan tanlang.",
    price: "1 700 somdan/kuniga",
    icon: "Car",
  },
  {
    id: "2",
    title: "Mehnat shartnomasi",
    description: "Har bir haydovchi uchun rasmiy mehnat shartnomasi. To'liq huquqiy himoya.",
    price: "Bepul",
    icon: "FileText",
  },
  {
    id: "3",
    title: "OSAGO",
    description: "Majburiy sug'urtani rasmiylashtirishda yordam. Barcha hujjatlar tartibda.",
    price: "Ijaraga kiradi",
    icon: "ShieldCheck",
  },
  {
    id: "4",
    title: "KISART",
    description: "KISART'ga ulanish va rasmiylashtirishda yordam. Tez va muammosiz.",
    price: "Ijaraga kiradi",
    icon: "Smartphone",
  },
  {
    id: "5",
    title: "Litsenziya",
    description: "Faoliyat uchun zarur hujjatlarni rasmiylashtirish va litsenziyalashda to'liq yordam.",
    price: "500 somdan",
    icon: "FileCheck2",
  },
  {
    id: "6",
    title: "Haydovchilarga qo'llab-quvvatlash",
    description: "Ish jarayonidagi barcha savollar bo'yicha kechayu-kunduz maslahat va yordam.",
    price: "Bepul",
    icon: "Headset",
  },
];

// Bu yerga siz tasdiqlagan haqiqiy sharhlarni qo'lda qo'shib borasiz
// (Telegram'ga kelgan yangi sharhlardan tanlab).
export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Azamat Bekenov",
    initials: "AB",
    rating: 5,
    text: "TRI999 bilan yarim yildan beri ishlayman. Avtomobil ajoyib holatda, qo'llab-quvvatlash doim aloqada. Tavsiya qilaman.",
    date: "2026-09-15",
  },
  {
    id: "2",
    name: "Marat Jumaliev",
    initials: "MJ",
    rating: 5,
    text: "Ijara shartlaridan juda mamnunman. Barcha hujjatlarni, KISART va litsenziyani rasmiylashtirishda yordam berishdi.",
    date: "2026-09-10",
  },
];
