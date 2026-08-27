import Healthbenefits from "./Healthbenefits";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Health Benefits of Sandwich Massage | Spa Delhi",
  description: "Discover the health benefits of sandwich massage — deep relaxation, better circulation, and pain relief from two therapists working in sync. Learn more at Spa Delhi.",
  openGraph: {
    title: "Health Benefits of Sandwich Massage | Spa Delhi",
    description: "Discover the health benefits of sandwich massage — deep relaxation, better circulation, and pain relief from two therapists working in sync. Learn more at Spa Delhi.",
    images: ["https://www.spadelhi.com/images/HelpstoDe-Stress.webp"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/health-benefits-of-sandwich-massage",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/HelpstoDe-Stress.webp"]
  }
};

export default function page() {
  return <Healthbenefits />;
}
