import Conaughtpage from "./Conaughtpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Massage centre in connaught place | Get body massage in C.P",
  description: "Visit our Massage centre in connaught place to Experience full body massage, sandwich massage and B2B therapy etc. We have the best therapists to provide you comfort in C.P",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-connaught-place",
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
  return <Conaughtpage />;
}
