import Couplepage from "./Couplepage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Couple Massage in Delhi | Female to male Couple Massage",
  description: "Looking for a couple massage in Delhi? Visit our spa in Karol bagh for the best couples massage. We have certified therapists to provide you perfect relaxation.",
  keywords: ["couples massage in delhi", "couple massage delhi", "female to male massage delhi", "couple spa delhi"],
  openGraph: {
    title: "Couple Massage in Delhi | Female to male Couple Massage",
    description: "Looking for a couple massage in Delhi? Visit our spa in Karol bagh for the best couples massage. We have certified therapists to provide you perfect relaxation.",
    images: ["https://www.spadelhi.com/images/Couple%20Massage.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/couples-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Couple%20Massage.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Couplepage />;
}
