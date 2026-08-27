import Spainkalkaji from "./Spainkalkaji";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Kalkaji Delhi | Full Body Massage & Wellness Centre",
  description: "Looking for a spa in Kalkaji, South Delhi? Experience relaxing full body massage, deep tissue & couple spa with certified therapists in a private, hygienic setting.",
  openGraph: {
    title: "Best Spa in Kalkaji Delhi | Full Body Massage & Wellness Centre",
    description: "Looking for a spa in Kalkaji, South Delhi? Experience relaxing full body massage, deep tissue & couple spa with certified therapists in a private, hygienic setting.",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-in-kalkaji",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Spainkalkaji />;
}
