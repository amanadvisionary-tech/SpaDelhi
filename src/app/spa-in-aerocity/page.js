import Aeropage from "./Aeropage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Top-Notch Massage spa in Aerocity | 5 Star Hotel Spa in aerocity",
  description: " Looking for a massage spa in Aerocity? We offer spa service in Aerocity and hotel spa in aerocity. Our service always gives relaxation to customers. So visit our spa in Aerocity now.",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-aerocity",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Aeropage />;
}
