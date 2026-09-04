import Bolgpage from "./Bolgpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa & Massage Blog Delhi - Expert Wellness Guides | Spa Delhi",
  description: "Spa & massage blog for Delhi NCR readers covering massage types, wellness tips & spa guides. Trusted expert advice from Spa Delhi. Read our latest guides now!",
  keywords: ["spa blog delhi", "massage tips delhi", "wellness blog delhi", "spa guides delhi"],
  openGraph: {
    title: "Spa & Massage Blog Delhi | Tips, Guides & Wellness Insights",
    description: "Read the Spa Delhi blog for expert guides on massage types, wellness tips, and spa treatments in Delhi NCR to help you choose the right therapy.",
    images: ["https://www.spadelhi.com/images/banner1.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/blog",
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
  return <Bolgpage />;
}
