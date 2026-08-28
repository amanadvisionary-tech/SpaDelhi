import B2Bpage from "./B2Bpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get Body To Body Massage in Delhi | B2B Massage in Karol Bagh",
  description: "We offer genuine body to body massage in Delhi. If you are looking for B2B massage or body massage just visit our spa in Karol Bagh. Book Your Session",
  keywords: ["b2b massage in delhi", "body to body massage delhi", "b2b massage karol bagh", "body to body spa delhi", "b2b spa delhi"],
  openGraph: {
    title: "Get Body To Body Massage in Delhi | B2B Massage in Karol Bagh",
    description: "We offer genuine body to body massage in Delhi. If you are looking for B2B massage or body massage just visit our spa in Karol Bagh. Book Your Session",
    images: ["https://www.spadelhi.com/images/b2b-massage.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/b2b-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/b2b-massage.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <B2Bpage />;
}
