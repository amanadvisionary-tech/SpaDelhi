import SpaInSaket from "./spainsaket";

// src/app/spa-in-saket/page.js
export const metadata = {
  title: "Best Spa in Saket Delhi | Luxury Body Massage & Spa Near Me",
  description:
    "Looking for the best spa in Saket, South Delhi? Experience luxury full body massage, deep tissue, Swedish & couple spa at 5-star hotels near Select Citywalk starting @ ₹1999.",

  keywords: [
    "spa in saket",
    "best spa in saket",
    "body massage in saket",
    "massage centre in saket",
    "couple massage in saket",
    "deep tissue massage saket",
    "swedish massage saket",
    "spa near select citywalk",
    "luxury spa in south delhi",
    "b2b massage in saket",
    "hotel spa saket"
  ],

  openGraph: {
    title: "Best Spa in Saket Delhi | Luxury Body Massage & Wellness Centre",
    description:
      "Visit Spa Delhi in Saket for authentic full body massage, deep tissue therapy & premium spa packages in top 5-star hotels. Certified therapists & private suites.",
    images: ["https://www.spadelhi.com/images/steptodown.com800611.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-saket",
  },

  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-saket",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Saket Delhi | Body Massage & Spa Services",
    description: "Rejuvenate with top massage therapies and luxury spa sessions in Saket, South Delhi. Book your slot today.",
    images: ["https://www.spadelhi.com/images/steptodown.com800611.jpg"],
  },
};

export default function Page() {
  return <SpaInSaket />;
}