import Fullbodypage from "./Fullbodypage";
// src/app/full-body-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is full body massage in Delhi affordable?", acceptedAnswer: { "@type": "Answer", text: "Yes, our full body massage in Delhi starts from ₹1999 for the first visit at any outlet — genuinely affordable without cutting corners on hygiene or technique." } },
    { "@type": "Question", name: "What is a full body massage spa in Delhi?", acceptedAnswer: { "@type": "Answer", text: "A full body massage spa in Delhi is an outlet offering a complete head-to-toe massage — back, shoulders, arms, legs, and feet — performed by trained therapists in a private room." } },
    { "@type": "Question", name: "Do you offer luxury full body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, our luxury full body massage in Delhi is available at select five-star hotels across the city, with a longer session, private suite, and optional facial add-on." } },
    { "@type": "Question", name: "What is the difference between body massage and full body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Body massage is often used loosely to mean any massage service, while a full body massage in Delhi specifically covers every major muscle group — not just one targeted area." } },
    { "@type": "Question", name: "How much does a full body massage cost in Delhi?", acceptedAnswer: { "@type": "Answer", text: "A full body massage at our Delhi outlets starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and luxury hotel spa from ₹20,000, depending on duration." } },
    { "@type": "Question", name: "Do you provide full body massage at home in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlets and hotel spa, we send a therapist to your home anywhere in Delhi NCR for the same private, professional experience." } },
    { "@type": "Question", name: "Which oils are used for a full body massage?", acceptedAnswer: { "@type": "Answer", text: "We use premium, aromatherapy-grade massage oils selected for skin comfort and smooth movement — your therapist can adjust based on any preference or sensitivity." } },
    { "@type": "Question", name: "Can I book a full body massage at a hotel in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly serve guests staying at hotels across Delhi — just share your hotel and room details when booking." } },
  ],
};

export const metadata = {
  title: "Full Body Massage in Delhi - Affordable Luxury | Spa Delhi",
  description:
    "Affordable full body massage in Delhi at 24+ outlets. Luxury full body massage spa options at hotels & home too. Certified therapists. Book from ₹1999 today!",
  keywords: [
    "full body massage in delhi",
    "affordable full body massage in delhi",
    "full body massage spa in delhi",
    "luxury full body massage in delhi",
    "body massage in delhi",
    "full body massage near me delhi",
    "full body spa delhi karol bagh",
    "full body massage price in delhi",
  ],
  openGraph: {
    title: "Full Body Massage in Delhi - Affordable Luxury | Spa Delhi",
    description:
      "Affordable full body massage in Delhi at 24+ outlets. Luxury full body massage spa options at hotels & home too. Certified therapists. Book from ₹1999 today!",
    images: ["https://www.spadelhi.com/images/MassageSession.webp"],
    type: "website",
    url: "https://www.spadelhi.com/full-body-massage-in-delhi",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/full-body-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/MassageSession.webp"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-full-body-massage-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Fullbodypage />
    </>
  );
}
