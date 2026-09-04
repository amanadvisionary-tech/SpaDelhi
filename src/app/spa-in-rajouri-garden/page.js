import SpaInRajourigGrden from "./SpaInRajourigGrden";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Rajouri Garden - Full Body Massage Centre | Spa Delhi",
  description: "Spa in Rajouri Garden, West Delhi for relaxing full body, deep tissue & couple massage. Certified therapists in a private setting. Book your session now!",
  keywords: ["spa in rajouri garden", "massage in rajouri garden", "body massage rajouri garden"],
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
