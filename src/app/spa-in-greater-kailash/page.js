import SpaInGreaterkailash from "./SpaInGreaterkailash";
// src/app/spa-in-greater-kailash/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Greater Kailash offers a first visit package starting at just ₹1999 — a good way to try us out before committing to a longer package.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near M Block Market GK-1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Greater Kailash outlet is a short drive from M Block Market and N Block Market, so it's easy to combine an afternoon of shopping with a relaxing massage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover both GK-1 and GK-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our outlet and home spa service cover both Greater Kailash Part 1 and Greater Kailash Part 2, along with nearby East of Kailash and Alaknanda.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa across GK-1 and GK-2. Our therapist brings everything needed for a relaxing, hygienic session straight to your door.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Greater Kailash spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Greater Kailash outlet has private rooms for couple massage, including our popular female to male couple massage, so two people can relax together comfortably.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Greater Kailash packages include experienced Russian, Thai, and Uzbek therapists alongside our trained Indian staff, from ₹2,800 depending on the package.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Greater Kailash? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Greater Kailash outlet and home spa booking are open with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Greater Kailash outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages start from ₹15,000 depending on duration.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Greater Kailash - Luxury Body Massage Centre | Spa Delhi",
  description:
    "Spa in Greater Kailash near M Block Market for full body, deep tissue & couple massage. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "spa in greater kailash",
    "massage in greater kailash",
    "full body massage in greater kailash",
    "massage centre in greater kailash",
    "body massage near me greater kailash",
    "spa in gk 1",
    "spa in gk 2",
    "spa near m block market gk",
    "home spa in greater kailash",
    "hotel spa in greater kailash",
    "couple massage in greater kailash",
    "best spa in greater kailash",
    "russian spa in greater kailash",
    "female to male spa in greater kailash",
    "night spa in greater kailash",
    "spa near kailash colony metro",
  ],
  openGraph: {
    title: "Spa in Greater Kailash - Luxury Body Massage Centre | Spa Delhi",
    description:
      "Spa in Greater Kailash near M Block Market for full body, deep tissue & couple massage. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.spadelhi.com/images/SkincareTreatments.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-greater-kailash",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-greater-kailash",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/SkincareTreatments.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SpaInGreaterkailash />
    </>
  );
}
