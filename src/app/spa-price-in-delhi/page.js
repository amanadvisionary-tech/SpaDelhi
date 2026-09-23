import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa Price in Delhi", item: "https://www.spadelhi.com/spa-price-in-delhi" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the spa price in Delhi for a first visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa price in Delhi starts from ₹1999 for a first-visit session. Pricing is transparent with no hidden charges, and we regularly run first-visit offers and seasonal discounts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the full body massage price in Karol Bagh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Karol Bagh outlet starts from ₹1999. Reach out to our support team on WhatsApp for the exact price based on the treatment and duration you want.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer package discounts and combos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, booking a combo session or more than one treatment together unlocks an extra discount. Check the pricing packages, or ask our team while booking for the best current deal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run seasonal promotions on pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we run seasonal and festival promotions with discounts on both combo packs and regular sessions. Message us on WhatsApp for whatever offer is currently running.",
      },
    },
    {
      "@type": "Question",
      name: "What are the spa prices in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Noida outlet offers the same transparent pricing as Delhi, starting from ₹1999, with both male and female therapist options for corporate employees and residents nearby.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay online for my services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer secure online payment options through our website for your convenience.",
      },
    },
    {
      "@type": "Question",
      name: "What is the full body massage at home in Delhi price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full body massage at home in Delhi starts from ₹15,000 for a 90-minute session. This home service pricing is higher than an outlet visit because it includes therapist travel and equipment, but uses the same certified therapists and premium oils.",
      },
    },
    {
      "@type": "Question",
      name: "What affects body massage charges in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Body massage charges in Delhi depend on the outlet type (solo, hotel, or home), session duration, and the treatment you choose. Our spa charges in Delhi are always confirmed upfront on WhatsApp, so there are no hidden massage charges in Delhi once you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa services near The Leela Ambience Convention Hotel Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While we are not affiliated with The Leela Ambience Convention Hotel Delhi specifically, we do offer home and hotel spa services across Delhi NCR, including areas near well-known hotels like this one. Our hotel outlet pricing starts from ₹13,999 — message us on WhatsApp with your exact location for the nearest available outlet.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a couple spa in Delhi price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A couple spa in Delhi price at Spa Delhi is ₹3,998 for two people sharing the same private room, which works out to the same ₹1,999 per-person rate as a solo full body massage.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa Price in Delhi - Best Spa in Delhi With Price From ₹1999",
  description: "Spa price in Delhi starting from ₹1999. See full body massage, body massage charges & couple spa in Delhi price at our transparent massage center in Delhi with price. Book now!",
  keywords: [
    "spa price in delhi",
    "the leela ambience convention hotel delhi price",
    "full body massage in delhi price",
    "full body massage at home in delhi price",
    "full body massage price in delhi",
    "spa charges in delhi",
    "best spa in delhi with price",
    "body massage charges in delhi",
    "body massage cost in delhi",
    "body massage in delhi price",
    "body massage price delhi",
    "couple spa in delhi price",
    "massage charges in delhi",
    "massage center in delhi with price",
    "spa price in karol bagh",
    "spa price in noida",
  ],
  openGraph: {
    title: "Spa Price in Delhi - Best Spa in Delhi With Price From ₹1999",
    description: "Clear, honest spa pricing in Delhi starting from ₹1999. Certified therapists, 5-star outlets across Delhi, Noida & Gurgaon. Check rates and book now!",
    images: ["https://www.spadelhi.com/images/PricingBanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-price-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/PricingBanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Pricpage />
    </>
  );
}
