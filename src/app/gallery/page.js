import Gallerypage from "./Gallerypage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get Body To Body Massage in Delhi | B2B Massage in Karol Bagh",
  description: "We offer genuine body to body massage in Delhi. If you are looking for B2B massage or body massage just visit our spa in Karol Bagh. Book Your Session",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/gallery",
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
  return <Gallerypage />;
}

