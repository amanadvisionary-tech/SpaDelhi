import DeepTissueMassagePage from "./DeepTissueMassagePage";
// src/app/deep-tissue-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is deep tissue massage and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep tissue massage uses slow, firm strokes and focused pressure to reach the deeper layers of muscle and connective tissue. It targets stubborn knots and chronic tension that a lighter, relaxation-style massage usually can't reach.",
      },
    },
    {
      "@type": "Question",
      name: "Is deep tissue massage painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may feel some soreness during and shortly after the session, especially over tight areas, but it should stay within a 'good hurt' range. Our therapists check in throughout and adjust pressure so it never crosses into sharp pain.",
      },
    },
    {
      "@type": "Question",
      name: "How is deep tissue massage different from a regular full body massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular full body massage uses lighter, flowing strokes mainly for relaxation. Deep tissue massage works more slowly and with more pressure, specifically targeting chronic muscle tension, knots, and pain in areas like the back, neck, and shoulders.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I get a deep tissue massage for chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For ongoing pain or stiffness, once every one to two weeks is a common starting point, tapering to monthly sessions as your muscles loosen up. Your therapist can suggest a schedule based on how your body responds.",
      },
    },
    {
      "@type": "Question",
      name: "What does a deep tissue massage cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our deep tissue massage in Delhi starts at ₹1999 for a first-visit outlet session, with home spa and hotel spa packages available from ₹15,000 depending on duration and setting.",
      },
    },
  ],
};

export const metadata = {
  title: "Deep Tissue Massage in Delhi - Relief From Chronic Pain | Spa Delhi",
  description: "Deep tissue massage in Delhi for chronic pain & muscle knots. Certified therapists, private hygienic rooms, first visit from ₹1999. Book your session today!",
  keywords: ["deep tissue massage in delhi", "deep tissue massage near me delhi", "deep tissue massage for back pain", "best deep tissue massage in delhi", "deep tissue massage price in delhi", "deep tissue massage benefits delhi"],
  openGraph: {
    title: "Deep Tissue Massage in Delhi | Relief From Chronic Pain",
    description: "Deep tissue massage in Delhi for chronic pain, muscle knots & stiffness. Certified therapists, private rooms, hygienic setting. First visit from ₹1999.",
    images: ["https://www.spadelhi.com/images/446979.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/deep-tissue-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/446979.jpg"]
  }
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DeepTissueMassagePage />
    </>
  );
}
