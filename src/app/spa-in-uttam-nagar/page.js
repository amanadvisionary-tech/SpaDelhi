import UttamNagarPage from "./UttamNagarPage";
// src/app/spa-in-uttam-nagar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Uttam Nagar offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Uttam Nagar at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Uttam Nagar East or West Metro Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Uttam Nagar spa outlet is conveniently located close to both Uttam Nagar East and Uttam Nagar West Metro Stations on the Blue Line, making it easy to reach from across West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Uttam Nagar and West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Uttam Nagar spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Uttam Nagar outlet has private rooms designed for couple massage, including our popular female to male couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Uttam Nagar packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Uttam Nagar? Do you offer night spa appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Uttam Nagar outlet and home spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Uttam Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Uttam Nagar outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
  ],
};

export const metadata = {
  title: "Spa in Uttam Nagar - Full Body Massage From ₹1999 | Spa Delhi",
  description:
    "Spa in Uttam Nagar for full body, deep tissue & couple massage near Uttam Nagar Metro. Certified therapists, private hygienic rooms, trusted service. Book your session today!",
  keywords: [
    "spa in uttam nagar",
    "massage in uttam nagar",
    "full body massage in uttam nagar",
    "massage centre in uttam nagar",
    "body massage near me uttam nagar",
    "spa near uttam nagar metro station",
    "home spa in uttam nagar",
    "hotel spa in uttam nagar",
    "couple massage in uttam nagar",
    "best spa in uttam nagar",
    "russian spa in uttam nagar",
    "female to male spa in uttam nagar",
    "night spa in uttam nagar",
  ],
  openGraph: {
    title: "Spa in Uttam Nagar - Full Body Massage From ₹1999 | Spa Delhi",
    description:
      "Spa in Uttam Nagar for full body, deep tissue & couple massage near Uttam Nagar Metro. Certified therapists, private hygienic rooms, trusted service. Book your session today!",
    images: ["https://www.spadelhi.com/images/pexels-reza-khavarani-115341161-12310632.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-uttam-nagar",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-uttam-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/pexels-reza-khavarani-115341161-12310632.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-uttam-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UttamNagarPage />
    </>
  );
}
