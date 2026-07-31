import Couplepage from "./Couplepage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Couple Massage in Delhi | Female to male Couple Massage",
  description: "Looking for a couple massage in Delhi? Visit our spa in Karol bagh for the best couples massage. We have certified therapists to provide you perfect relaxation.",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/couples-massage-in-delhi",
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
  return <Couplepage />;
}
