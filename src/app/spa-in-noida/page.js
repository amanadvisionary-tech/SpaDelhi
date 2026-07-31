import Noipage from "./Noipage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "visit our spa centre in noida for best Full body massage in noida",
  description: "We are specialists in giving full body massage, B2B massage, hot stone massage and many more. Just visit our spa centre in Noida and get your all therapy solution at home, hotel or in Noida. ",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-noida",
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
  return <Noipage />;
}
