import Abpage from "./Abpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "About Our Delhi Spa | 5 star outlets in Delhi",
  description: "Explore our Delhi spa for relaxing body, couple, and ayurvedic therapies — delivering unmatched wellness experiences across Delhi NCR.",
  keywords: ["about spa delhi", "delhi spa outlets", "5 star spa in delhi", "wellness centre delhi", "ayurvedic massage delhi"],
  openGraph: {
    title: "About Our Delhi Spa | 5 star outlets in Delhi",
    description: "Explore our Delhi spa for relaxing body, couple, and ayurvedic therapies — delivering unmatched wellness experiences across Delhi NCR.",
    images: ["https://www.spadelhi.com/images/aboutusbanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/about-us",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/aboutusbanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Abpage />;
}
