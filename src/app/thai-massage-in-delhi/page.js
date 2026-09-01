import ThaiMassagePage from "./ThaiMassagePage";
// src/app/thai-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Thai massage and how is it different from other massages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thai massage is a traditional therapy that combines acupressure, assisted stretching, and rhythmic compression along the body's energy lines. Unlike Swedish or deep tissue massage, which focus purely on muscle kneading, Thai massage also improves flexibility and joint mobility.",
      },
    },
    {
      "@type": "Question",
      name: "Is Thai massage painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thai massage involves firm pressure and stretching, so you may feel intensity in tight areas, but it should never be sharply painful. Our therapists always adjust pressure to your comfort level throughout the session.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Thai massage cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Thai massage in Delhi starts at just ₹1999 for a first-visit outlet session, with premium home spa and hotel spa packages available from ₹15,000 depending on duration and setting.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a Thai massage spa near me in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Spa Delhi operates 24+ outlets across Delhi NCR, including a centrally located outlet in Karol Bagh, so you can easily find a Thai massage spa near you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Thai massage session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body Thai massage in Delhi typically lasts 60 to 90 minutes, giving our therapists enough time to work through every muscle group using traditional stretching and pressure techniques.",
      },
    },
  ],
};

export const metadata = {
  title: "Thai Massage in Delhi | Best Thai Massage Spa Near Me",
  description: "Authentic Thai massage in Delhi at Spa Delhi — traditional techniques, certified therapists, relaxing hygienic setting. First visit from ₹1999.",
  keywords: ["thai massage in delhi", "thai massage in delhi near me", "best thai massage in delhi", "thai massage spa delhi", "full body thai massage in delhi", "thai massage price in delhi"],
  openGraph: {
    title: "Thai Massage in Delhi | Best Thai Massage Spa Near Me",
    description: "Authentic Thai massage in Delhi at Spa Delhi — traditional techniques, certified therapists, relaxing hygienic setting. First visit from ₹1999.",
    images: ["https://www.spadelhi.com/images/thaimassage.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/thai-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/thaimassage.jpg"]
  }
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ThaiMassagePage />
    </>
  );
}
