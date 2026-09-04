import RohiniPage from "./RohiniPage";
// src/app/spa-in-rohini/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Rohini offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Rohini at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Rohini Metro Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rohini spa outlet is conveniently located close to Rohini Metro Station on the Red Line, making it easy to reach from Rohini West, Rohini East, and nearby sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Rohini and North West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Rohini spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rohini outlet has private rooms designed for couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have foreign therapists available in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, select packages at our Rohini spa include experienced foreign therapists alongside our highly trained Indian staff, offering guests more variety in massage styles.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Rohini outlet and home spa booking support are available with flexible daily timings. Message us on WhatsApp or Telegram to check same-day availability and confirm your slot.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Rohini outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Rohini - Full Body Massage From ₹1999 | Spa Delhi",
  description:
    "Spa in Rohini for full body, deep tissue & couple massage near Rohini Metro Station. Certified therapists, private hygienic rooms, trusted service. Book your session today!",
  keywords: [
    "spa in rohini",
    "massage in rohini",
    "full body massage in rohini",
    "massage centre in rohini",
    "body massage near me rohini",
    "spa near rohini metro station",
    "home spa in rohini",
    "hotel spa in rohini",
    "couple massage in rohini",
    "best spa in rohini delhi",
  ],
  openGraph: {
    title: "Spa in Rohini - Full Body Massage From ₹1999 | Spa Delhi",
    description:
      "Spa in Rohini for full body, deep tissue & couple massage near Rohini Metro Station. Certified therapists, private hygienic rooms, trusted service. Book your session today!",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-rohini",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-rohini",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-rohini"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RohiniPage />
    </>
  );
}
