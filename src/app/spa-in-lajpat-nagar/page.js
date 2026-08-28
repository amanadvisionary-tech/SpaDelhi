import Lajpatpage from "./Lajpatpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Visit Spa Centre in Lajpat Nagar | Get Body Massage in Lajpat nagar",
  description: "Looking to get a body massage in lajpat nagar? Visit our spa centre in lajpat nagar. We are the best spa in lajpat nagar for top massage services like B2B, Full Body Massage, Sandwich Massage Etc.",
  keywords: ["spa in lajpat nagar", "massage in lajpat nagar", "body massage lajpat nagar"],
  openGraph: {
    title: "Visit Spa Centre in Lajpat Nagar | Get Body Massage in Lajpat nagar",
    description: "Looking to get a body massage in lajpat nagar? Visit our spa centre in lajpat nagar. We are the best spa in lajpat nagar for top massage services like B2B, Full Body Massage, Sandwich Massage Etc.",
    images: ["https://www.spadelhi.com/images/ErosHotel_lajpatnagar.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-lajpat-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/ErosHotel_lajpatnagar.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Lajpatpage />;
}
