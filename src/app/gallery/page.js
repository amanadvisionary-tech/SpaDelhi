import Gallerypage from "./Gallerypage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa Gallery Delhi | Photos of Our Luxury Spa Outlets & Ambience",
  description: "Take a look inside Spa Delhi's luxury outlets — private suites, massage rooms, and premium spa ambience across our 5-star hotel locations in Delhi NCR.",
  keywords: ["spa gallery delhi", "spa photos delhi", "luxury spa ambience delhi"],
  openGraph: {
    title: "Spa Gallery Delhi | Photos of Our Luxury Spa Outlets & Ambience",
    description: "Take a look inside Spa Delhi's luxury outlets — private suites, massage rooms, and premium spa ambience across our 5-star hotel locations in Delhi NCR.",
    images: ["https://www.spadelhi.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/5StarHotelSpa.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Gallerypage />;
}

