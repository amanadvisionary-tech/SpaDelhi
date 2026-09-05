import MahipalpurPage from "./MahipalpurPage";
// src/app/spa-in-mahipalpur/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Mahipalpur offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Mahipalpur at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near IGI Airport and the Mahipalpur hotel belt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Mahipalpur spa outlet is conveniently located right in the hotel belt along NH8, just minutes from IGI Airport Terminal 3, making it an easy stop before or after a flight.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide hotel spa service in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, hotel spa is one of our most popular services in Mahipalpur given the dense concentration of hotels here. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your hotel room.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Mahipalpur spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Mahipalpur outlet has private rooms designed for couple massage, including our popular female to male couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Mahipalpur packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Mahipalpur? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Mahipalpur outlet and hotel spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk, ideal for guests with late-night flights.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Mahipalpur outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Mahipalpur - Hotel Spa Near IGI Airport | Spa Delhi",
  description:
    "Spa in Mahipalpur for hotel spa, full body & couple massage near IGI Airport. Certified therapists, hygienic private rooms, trusted service. Book your session today!",
  keywords: [
    "spa in mahipalpur",
    "massage in mahipalpur",
    "full body massage in mahipalpur",
    "massage centre in mahipalpur",
    "body massage near me mahipalpur",
    "spa near igi airport mahipalpur",
    "home spa in mahipalpur",
    "hotel spa in mahipalpur",
    "couple massage in mahipalpur",
    "best spa in mahipalpur",
    "russian spa in mahipalpur",
    "female to male spa in mahipalpur",
    "night spa in mahipalpur",
    "spa near delhi airport",
  ],
  openGraph: {
    title: "Spa in Mahipalpur - Hotel Spa Near IGI Airport | Spa Delhi",
    description:
      "Spa in Mahipalpur for hotel spa, full body & couple massage near IGI Airport. Certified therapists, hygienic private rooms, trusted service. Book your session today!",
    images: ["https://www.spadelhi.com/images/pexels-shlok-rana-2150773572-32834140.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-mahipalpur",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-mahipalpur",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/pexels-shlok-rana-2150773572-32834140.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-mahipalpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MahipalpurPage />
    </>
  );
}
