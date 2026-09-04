import Sandpage from "./Sandpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Sandwich Massage in Delhi - Starting Just From ₹1999 | Spa Delhi",
  description: "Sandwich massage in Delhi at our Karol Bagh spa for the perfect two-therapist session. Certified professionals, hygienic setting. Book your session today!",
  keywords: ["sandwich massage in delhi", "sandwich massage price delhi", "sandwich massage karol bagh", "sandwich massage spa delhi"],
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://www.spadelhi.com/images/Sandwich%20Massage.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/sandwich-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Sandwich%20Massage.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Sandpage />;
}
