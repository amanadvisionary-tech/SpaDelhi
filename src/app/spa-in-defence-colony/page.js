import DefenceColonyPage from "./DefenceColonyPage";
// src/app/spa-in-defence-colony/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Defence Colony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Spa Delhi runs a genuine spa in Defence Colony, close to Defence Colony Market and Moolchand Metro Station, offering full body, deep tissue, and B2B massage in a private, hygienic setting for guests across South Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Spa Delhi the best spa in Defence Colony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Defence Colony for residents and visitors alike.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage Defence Colony for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage Defence Colony service welcomes both men and women, with male and female therapist options available — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a spa in Defence Colony Market I can walk into?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our spa in Defence Colony Market location is easy to find, with a private, hygienic setting just a short walk from the main market and the Defence Colony flyover.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a massage Defence Colony service for a same-day session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search massage Defence Colony and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day appointment depending on therapist availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body spa in Defence Colony at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer body spa in Defence Colony as a home service across South Delhi. Our therapist arrives fully equipped for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a Russian spa in Defence Colony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage spa in Defence Colony packages include experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff, giving guests more variety in massage technique and style.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Defence Colony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Defence Colony outlet has private rooms designed for couple massage, including our popular female to male couple massage, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Defence Colony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Defence Colony at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Defence Colony", item: "https://www.spadelhi.com/spa-in-defence-colony" },
  ],
};

export const metadata = {
  title: "Best Spa in Defence Colony - Body Massage & Spa | Spa Delhi",
  description:
    "Best spa in Defence Colony for full body & body massage near the market. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in defence colony",
    "best spa in defence colony",
    "body massage defence colony",
    "body spa in defence colony",
    "massage defence colony",
    "massage spa in defence colony",
    "spa in defence colony market",
    "full body massage in defence colony",
    "spa near defence colony",
    "spa near moolchand",
    "russian spa in defence colony",
    "couple massage in defence colony",
    "deep tissue massage in defence colony",
  ],
  openGraph: {
    title: "Best Spa in Defence Colony - Body Massage & Spa | Spa Delhi",
    description:
      "Best spa in Defence Colony for full body & body massage near the market. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-defence-colony",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-defence-colony",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-spa-in-defence-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-defence-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DefenceColonyPage />
    </>
  );
}
