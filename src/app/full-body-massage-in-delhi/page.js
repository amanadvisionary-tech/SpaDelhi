import Fullbodypage from "./Fullbodypage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Full body massage in Delhi | Starting From Just 1999",
  description: "Looking for Full Body Massage in Delhi? Get Body massage in Karol Bagh by Well trained therapist. We always maintain proper hygiene and cleanliness between your spa session",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/full-body-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function About() {
  return <Fullbodypage />;
}
