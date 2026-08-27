import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book 5 star Hotel Spa Outlets in Delhi | Spa in Rohini For complete relaxation ",
  description: "Our luxury spa outlets in Delhi, including the best Spa in Rohini and Hotel Spa in Pitampura, offering relaxing body massages & complete service. Book Now ",
  openGraph: {
    title: "Book 5 star Hotel Spa Outlets in Delhi | Spa in Rohini For complete relaxation",
    description: "Our luxury spa outlets in Delhi, including the best Spa in Rohini and Hotel Spa in Pitampura, offering relaxing body massages & complete service. Book Now",
    images: ["https://www.spadelhi.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/outlets",
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
  return <Outpage />;
}
