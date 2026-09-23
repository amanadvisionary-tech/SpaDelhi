import Aeropage from "./Aeropage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Aerocity", item: "https://www.spadelhi.com/spa-in-aerocity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a luxury spa in Aerocity unique?",
      acceptedAnswer: { "@type": "Answer", text: "Spa in Aerocity is the premium and luxury spa outlet in Delhi. At the aerocity outlet we offer foreign international therapists to provide spa in top 5 star hotels of Delhi." },
    },
    {
      "@type": "Question",
      name: "Can I book a spa in Lemon Tree Aerocity?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Lemon Tree Premier Aerocity is one of our regular hotel outlets. Our therapist arrives directly at your room with all the equipment, so you can book a spa in Lemon Tree Aerocity along with JW Marriott, Novotel and Ibis Hotel." },
    },
    {
      "@type": "Question",
      name: "Do you offer a Russian spa in Aerocity?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, our Aerocity russian spa sessions are handled by international therapists, including Russian, Afghani, and Uzbeki specialists, alongside our regular Indian-trained team. Message us on WhatsApp to request a russian spa aerocity session at your preferred hotel." },
    },
    {
      "@type": "Question",
      name: "Is there a spa near Aerocity that also covers nearby areas?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, besides our aerocity spa outlets inside hotels like JW Marriott and Lemon Tree, we also cover nearby Mahipalpur and areas close to IGI Airport, so you will always find a massage spa in Aerocity within easy reach if you are searching for a spa near Aerocity." },
    },
    {
      "@type": "Question",
      name: "What makes Spa Delhi the best spa in Aerocity?",
      acceptedAnswer: { "@type": "Answer", text: "We are considered the best spa in Aerocity because of our certified therapists, transparent pricing, and presence across multiple spa in Aerocity hotels — including JW Marriott, Novotel, Lemon Tree, and Pullman — so you always get a consistent, premium experience." },
    },
  ],
};

export const metadata = {
  title: "Spa in Aerocity - Best Russian Spa & Hotel Massage | Spa Delhi",
  description: "Best spa in Aerocity with russian spa therapists across JW Marriott, Lemon Tree & more. Looking for a spa near Aerocity or massage spa in Aerocity? Book now!",
  keywords: [
    "spa in aerocity",
    "russian spa aerocity",
    "russian spa in aerocity",
    "aerocity spa",
    "aerocity russian spa",
    "best spa in aerocity",
    "spa near aerocity",
    "massage spa in aerocity",
    "spa in aerocity hotels",
    "spa in lemon tree aerocity",
    "hotel spa aerocity",
    "body massage aerocity",
  ],
  openGraph: {
    title: "Top-Notch Massage spa in Aerocity | 5 Star Hotel Spa in aerocity",
    description: "Looking for a massage spa in Aerocity? We offer spa service in Aerocity and hotel spa in aerocity. Our service always gives relaxation to customers. So visit our spa in Aerocity now.",
    images: ["https://www.spadelhi.com/images/NovotelNewDelhiAerocity.webp"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-aerocity",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/NovotelNewDelhiAerocity.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Aeropage />
    </>
  );
}
