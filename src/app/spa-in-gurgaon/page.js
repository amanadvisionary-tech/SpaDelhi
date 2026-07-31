import Gurpage from "./Gurpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get Full Body Massage At Our Spa In Gurgaon",
  description: "We offer genuine full body massage at our best spa in gurgaon. Experience our top -notch spa service by our top rated spa massage therapists. Claim our First visit offer and enjoy your spa Session.",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-gurgaon",
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
  return <Gurpage />;
}
