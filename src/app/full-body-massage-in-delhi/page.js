import Fullbodypage from "./Fullbodypage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Full body massage in Delhi | Starting From Just 1999",
  description: "Looking for Full Body Massage in Delhi? Get Body massage in Karol Bagh by Well trained therapist. We always maintain proper hygiene and cleanliness between your spa session",
  keywords: ["full body massage in delhi", "full body massage price delhi", "full body spa delhi karol bagh"],
  openGraph: {
    title: "Best Full body massage in Delhi | Starting From Just 1999",
    description: "Looking for Full Body Massage in Delhi? Get Body massage in Karol Bagh by Well trained therapist. We always maintain proper hygiene and cleanliness between your spa session",
    images: ["https://www.spadelhi.com/images/MassageSession.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/full-body-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/MassageSession.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function About() {
  return <Fullbodypage />;
}
