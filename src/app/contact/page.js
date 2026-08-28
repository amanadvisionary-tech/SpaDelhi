import Conpage from "./Conpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Contact Us | Best Luxury Spa in Delhi for Body & Thai Massage",
  description: "Get in touch with Spa Delhi for soothing body massages, Thai therapy, and relaxation treatments. Call or visit us today for your spa session..",
  keywords: ["contact spa delhi", "book spa delhi", "spa delhi phone number", "spa delhi booking"],
  openGraph: {
    title: "Contact Us | Best Luxury Spa in Delhi for Body & Thai Massage",
    description: "Get in touch with Spa Delhi for soothing body massages, Thai therapy, and relaxation treatments. Call or visit us today for your spa session.",
    images: ["https://www.spadelhi.com/images/contectusbanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/contectusbanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function contact() {
  return <Conpage />;
}
