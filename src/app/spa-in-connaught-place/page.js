import Conaughtpage from "./Conaughtpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Massage centre in connaught place | Get body massage in C.P",
  description: "Visit our Massage centre in connaught place to Experience full body massage, sandwich massage and B2B therapy etc. We have the best therapists to provide you comfort in C.P",
  keywords: ["spa in connaught place", "massage in connaught place", "body massage cp delhi", "spa in cp"],
  openGraph: {
    title: "Best Massage centre in connaught place | Get body massage in C.P",
    description: "Visit our Massage centre in connaught place to Experience full body massage, sandwich massage and B2B therapy etc. We have the best therapists to provide you comfort in C.P",
    images: ["https://www.spadelhi.com/images/JwMarriott_CP.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-connaught-place",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/JwMarriott_CP.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Conaughtpage />;
}
