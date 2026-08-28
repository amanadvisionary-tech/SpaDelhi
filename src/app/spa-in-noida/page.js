import Noipage from "./Noipage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "visit our spa centre in noida for best Full body massage in noida",
  description: "We are specialists in giving full body massage, B2B massage, hot stone massage and many more. Just visit our spa centre in Noida and get your all therapy solution at home, hotel or in Noida. ",
  keywords: ["spa in noida", "massage in noida", "full body massage noida", "body spa noida"],
  openGraph: {
    title: "visit our spa centre in noida for best Full body massage in noida",
    description: "We are specialists in giving full body massage, B2B massage, hot stone massage and many more. Just visit our spa centre in Noida and get your all therapy solution at home, hotel or in Noida.",
    images: ["https://www.spadelhi.com/images/SandalSuitesbyLemonTreeHotels_Noida.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-noida",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/SandalSuitesbyLemonTreeHotels_Noida.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Noipage />;
}
