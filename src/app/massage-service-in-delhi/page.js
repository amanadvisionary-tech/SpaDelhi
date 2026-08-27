import Serpage from "./Serpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa & Massage Service in Delhi By Top Therapists",
  description: "Experience top-notch massage service in Delhi at the best spa centre in Delhi. Our top therapists are ready to give you relaxation in Delhi or NCR Areas. Check Out",
  openGraph: {
    title: "Best Spa & Massage Service in Delhi By Top Therapists",
    description: "Experience top-notch massage service in Delhi at the best spa centre in Delhi. Our top therapists are ready to give you relaxation in Delhi or NCR Areas. Check Out",
    images: ["https://www.spadelhi.com/images/banner1.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/massage-service-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/banner1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Serpage />;
}
