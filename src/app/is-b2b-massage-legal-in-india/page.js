
import Isb2bmassagelegal from "./Isb2bmassagelegal";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Is B2B Massage Legal in India? Know the Facts",
  description: "Is b2b massage legal in India? Learn the law, risks, and how to choose a professional spa in Delhi for safe, discreet wellness.",
  keywords: ["is b2b massage legal in india", "b2b massage law india", "b2b massage legality"],
  openGraph: {
    title: "Is B2B Massage Legal in India? Know the Facts",
    description: "Is b2b massage legal in India? Learn the law, risks, and how to choose a professional spa in Delhi for safe, discreet wellness.",
    images: ["https://www.spadelhi.com/images/b2b-massage.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/is-b2b-massage-legal-in-india",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/b2b-massage.jpg"]
  }
};

export default function page() {
  return <Isb2bmassagelegal />;
}
