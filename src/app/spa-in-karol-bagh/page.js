import KarolBaghPage from "./KarolBaghPage";
// src/app/spa-in-karol-bagh/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Karol Bagh | Best Full Body Massage & Wellness Centre",
  description: "Best spa in Karol Bagh, Central Delhi for full body, deep tissue & couple massage by certified therapists in a private, hygienic setting. Book from ₹1999.",
  keywords: ["spa in karol bagh", "massage in karol bagh", "full body massage karol bagh", "massage centre karol bagh", "body massage karol bagh", "couple massage in karol bagh", "home spa in karol bagh", "hotel spa in karol bagh", "spa near karol bagh metro station"],
  openGraph: {
    title: "Spa in Karol Bagh | Best Full Body Massage & Wellness Centre",
    description: "Best spa in Karol Bagh, Central Delhi for full body, deep tissue & couple massage by certified therapists in a private, hygienic setting. Book from ₹1999.",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-karol-bagh",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"]
  }
};

export default function page() {
  return <KarolBaghPage />;
}
