import SpaInRajourigGrden from "./SpaInRajourigGrden";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Rajouri Garden Delhi | Full Body Massage Centre",
  description: "Looking for a spa in Rajouri Garden, West Delhi? Experience relaxing full body massage, deep tissue & couple spa with certified therapists in a private setting.",
  openGraph: {
    title: "Best Spa in Rajouri Garden Delhi | Full Body Massage Centre",
    description: "Looking for a spa in Rajouri Garden, West Delhi? Experience relaxing full body massage, deep tissue & couple spa with certified therapists in a private setting.",
    images: ["https://www.spadelhi.com/images/aromatherapy-featured-jpg.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-in-rajouri-garden",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/aromatherapy-featured-jpg.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <SpaInRajourigGrden />;
}
