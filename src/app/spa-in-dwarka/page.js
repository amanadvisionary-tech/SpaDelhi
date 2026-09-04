import DwarkaPage from "./DwarkaPage";
// src/app/spa-in-dwarka/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Dwarka offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Dwarka at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Dwarka Sector 21 Metro Station and IGI Airport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka spa outlet is conveniently located close to Dwarka Sector 21 Metro Station and IGI Airport, making it an easy stop before or after a flight, or for guests travelling from Dwarka Mor and Uttam Nagar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Dwarka and South West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Dwarka spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka outlet has private rooms designed for couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have foreign therapists available in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, select packages at our Dwarka spa include experienced foreign therapists alongside our highly trained Indian staff, offering guests more variety in massage styles.",
      },
    },
    {
      "@type": "Question",
      name: "Is Spa Delhi in Dwarka convenient for business travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka outlet and hotel spa service are popular with business travellers and guests near IGI Airport who want a quick, professional massage before or after their trip.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Dwarka outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Dwarka - Full Body Massage Near IGI Airport | Spa Delhi",
  description:
    "Spa in Dwarka for full body, deep tissue & couple massage near Dwarka Sector 21 & IGI Airport. Certified therapists, hygienic private rooms, trusted service. Book your session now!",
  keywords: [
    "spa in dwarka",
    "massage in dwarka",
    "full body massage in dwarka",
    "massage centre in dwarka",
    "body massage near me dwarka",
    "spa near dwarka sector 21",
    "spa near igi airport",
    "home spa in dwarka",
    "hotel spa in dwarka",
    "couple massage in dwarka",
    "best spa in dwarka delhi",
  ],
  openGraph: {
    title: "Spa in Dwarka - Full Body Massage Near IGI Airport | Spa Delhi",
    description:
      "Spa in Dwarka for full body, deep tissue & couple massage near Dwarka Sector 21 & IGI Airport. Certified therapists, hygienic private rooms, trusted service. Book your session now!",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-dwarka",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-dwarka",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-dwarka"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DwarkaPage />
    </>
  );
}
