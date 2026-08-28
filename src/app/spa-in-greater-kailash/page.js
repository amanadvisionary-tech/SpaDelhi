import SpaInGreaterkailash from "./SpaInGreaterkailash";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Greater Kailash Delhi | Luxury Body Massage Centre",
  description: "Looking for a spa in Greater Kailash, South Delhi? Enjoy premium full body massage, deep tissue & couple spa sessions with certified therapists in a private setting.",
  keywords: ["spa in greater kailash", "massage in greater kailash", "gk spa delhi", "body massage greater kailash"],
  openGraph: {
    title: "Best Spa in Greater Kailash Delhi | Luxury Body Massage Centre",
    description: "Looking for a spa in Greater Kailash, South Delhi? Enjoy premium full body massage, deep tissue & couple spa sessions with certified therapists in a private setting.",
    images: ["https://www.spadelhi.com/images/SkincareTreatments.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-in-greater-kailash",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/SkincareTreatments.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <SpaInGreaterkailash />;
}
