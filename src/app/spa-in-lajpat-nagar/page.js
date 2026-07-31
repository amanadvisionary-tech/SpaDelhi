import Lajpatpage from "./Lajpatpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Visit Spa Centre in Lajpat Nagar | Get Body Massage in Lajpat nagar",
  description: "Looking to get a body massage in lajpat nagar? Visit our spa centre in lajpat nagar. We are the best spa in lajpat nagar for top massage services like B2B, Full Body Massage, Sandwich Massage Etc.",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-lajpat-nagar",
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
  return <Lajpatpage />;
}
