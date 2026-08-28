import Aeropage from "./Aeropage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Top-Notch Massage spa in Aerocity | 5 Star Hotel Spa in aerocity",
  description: " Looking for a massage spa in Aerocity? We offer spa service in Aerocity and hotel spa in aerocity. Our service always gives relaxation to customers. So visit our spa in Aerocity now.",
  keywords: ["spa in aerocity", "massage in aerocity", "hotel spa aerocity", "body massage aerocity"],
  openGraph: {
    title: "Top-Notch Massage spa in Aerocity | 5 Star Hotel Spa in aerocity",
    description: "Looking for a massage spa in Aerocity? We offer spa service in Aerocity and hotel spa in aerocity. Our service always gives relaxation to customers. So visit our spa in Aerocity now.",
    images: ["https://www.spadelhi.com/images/NovotelNewDelhiAerocity.webp"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-aerocity",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/NovotelNewDelhiAerocity.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Aeropage />;
}
