import Hotstone from "./Hotstone";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa Therapist Jobs in Delhi - Part & Full Time | Spa Delhi",
  description: "Spa therapist jobs in Delhi, Noida & Gurgaon with part-time and full-time openings. Join a trusted, growing wellness brand. Contact us to apply today!",
  keywords: ["spa therapist jobs in delhi", "massage therapist jobs delhi", "spa jobs delhi", "part time spa jobs delhi"],
  openGraph: {
    title: "Looking for Spa Therapist jobs in Delhi? Part Time & Full Time",
    description: "Get the best Spa Therapist jobs in Delhi. We have part time and full time spa jobs available. Just contact us and get your spa therapist jobs in Delhi, Noida and Gurgaon. Contact Now",
    images: ["https://www.spadelhi.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-therapist-jobs-in-delhi",
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
  return <Hotstone />;
}
