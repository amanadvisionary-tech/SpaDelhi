import Swedishvsdeeptissue from "./Swedishvsdeeptissue";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Swedish vs Deep Tissue Massage - Which Is Right for You | Spa Delhi",
  description: "Swedish massage vs deep tissue massage compared - key differences & benefits explained for Delhi readers. Trusted guidance from Spa Delhi's therapists. Read now!",
  keywords: ["swedish massage vs deep tissue massage", "swedish massage delhi", "difference between swedish and deep tissue massage"],
  openGraph: {
    title: "Swedish Massage vs Deep Tissue Massage | Which One is Right for You",
    description: "Confused between Swedish massage and deep tissue massage? Learn the key differences, benefits, and which therapy suits your needs best at Spa Delhi.",
    images: ["https://www.spadelhi.com/images/SpecializedTreatments.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/swedish-massage-vs-deep-tissue-massage",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/SpecializedTreatments.jpg"]
  }
};

export default function page() {
  return <Swedishvsdeeptissue />;
}
