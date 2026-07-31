
import Isb2bmassagelegal from "./Isb2bmassagelegal";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Is B2B Massage Legal in India? Know the Facts",
  description: "Is b2b massage legal in India? Learn the law, risks, and how to choose a professional spa in Delhi for safe, discreet wellness.",
  openGraph: {
    title: "Is B2B Massage Legal in India? Know the Facts",
    description: "Is b2b massage legal in India? Learn the law, risks, and how to choose a professional spa in Delhi for safe, discreet wellness.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

export default function page() {
  return <Isb2bmassagelegal />;
}
