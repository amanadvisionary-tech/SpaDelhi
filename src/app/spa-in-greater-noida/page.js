import GreaterNoidaPage from "./GreaterNoidaPage";
// src/app/spa-in-greater-noida/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Spa Delhi runs a genuine spa in Greater Noida, close to Pari Chowk and Knowledge Park, offering full body, deep tissue, and B2B massage in a private, hygienic setting for guests across the city.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa service at Jaypee Greens Resort Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, guests staying at Jaypee Greens Resort Greater Noida (also known as JP Resort Greater Noida or Jaypee Greens Golf & Spa Resort) can request an in-room therapist through our hotel spa service, available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a Crowne Plaza Greater Noida spa session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Crowne Plaza Greater Noida spa service lets guests staying at the hotel request a private, in-room massage session with a certified therapist, booked in advance on WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Spa Delhi the best spa in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and resort spa options make us the best spa in Greater Noida for residents and hotel guests alike.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide spa service at other resorts in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside Jaypee Greens and Crowne Plaza, we cover most major resort and hotel properties across Greater Noida on request — just share your hotel name and room details while booking.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a full night spa near Greater Noida, Uttar Pradesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evening and late-night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, subject to therapist availability at the time you need, so a full night spa near Greater Noida, Uttar Pradesh can usually be arranged with prior notice.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Greater Noida do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Alpha, Beta, Gamma, Delta, and Pari Chowk sectors, along with Knowledge Park and Gaur City, through our outlet, home spa, and resort spa network.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Greater Noida at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and resort or hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer home spa in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer home spa across Greater Noida. Our therapist arrives fully equipped for a relaxing, hygienic session at your residence.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Greater Noida", item: "https://www.spadelhi.com/spa-in-greater-noida" },
  ],
};

export const metadata = {
  title: "Best Spa in Greater Noida - Near Jaypee Greens & Crowne Plaza | Spa Delhi",
  description:
    "Best spa in Greater Noida with resort spa on request at Jaypee Greens & Crowne Plaza. Certified therapists, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in greater noida",
    "jaypee resort greater noida",
    "jp resort greater noida",
    "resort in greater noida",
    "jp greens resort greater noida",
    "jaypee greens resort greater noida",
    "best spa in greater noida",
    "crowne plaza greater noida spa",
    "full night spa near greater noida uttar pradesh",
    "massage spa in greater noida",
    "spa near pari chowk",
    "spa near knowledge park",
    "body massage in greater noida",
    "home spa in greater noida",
    "hotel spa in greater noida",
  ],
  openGraph: {
    title: "Best Spa in Greater Noida - Near Jaypee Greens & Crowne Plaza | Spa Delhi",
    description:
      "Best spa in Greater Noida with resort spa on request at Jaypee Greens & Crowne Plaza. Certified therapists, home & hotel spa. Book from ₹1999!",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-greater-noida",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-greater-noida",
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
        id="faq-schema-spa-in-greater-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-greater-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GreaterNoidaPage />
    </>
  );
}
