import Gurpage from "./Gurpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Gurgaon - Genuine Full Body Massage Service | Spa Delhi",
  description: "Spa in Gurgaon offering genuine full body massage by top-rated certified therapists. Claim our first-visit offer for a relaxing session. Book your slot today!",
  keywords: ["spa in gurgaon", "massage in gurgaon", "full body massage gurgaon", "body spa gurgaon"],
  openGraph: {
    title: "Get Full Body Massage At Our Spa In Gurgaon",
    description: "We offer genuine full body massage at our best spa in gurgaon. Experience our top -notch spa service by our top rated spa massage therapists. Claim our First visit offer and enjoy your spa Session.",
    images: ["https://www.spadelhi.com/images/Hyatt_Regency_Gurgaon.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-gurgaon",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Hyatt_Regency_Gurgaon.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Gurpage />;
}
