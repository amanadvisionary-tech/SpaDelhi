import Hotstone from "./Hotstone";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Looking for Spa Therapist jobs in Delhi? Part Time & Full Time",
  description: "Get the best Spa Therapist jobs in Delhi. We have part time and full time spa jobs available. Just contact us and get your spa therapist jobs in Delhi, Noida and Gurgaon. Contact Now",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-therapist-jobs-in-delhi",
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
  return <Hotstone />;
}
