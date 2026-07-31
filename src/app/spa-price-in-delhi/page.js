import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get the best spa price in Delhi | Check Full Body massage price",
  description: "Get Best spa price in delhi our spa service starting from just 1999. We have top 5 star outlets to provide you spa sessions in delhi or ncr regions. Check out full body massage price in noida",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-price-in-delhi",
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
  return <Pricpage />;
}
