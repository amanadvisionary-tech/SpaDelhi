import Hotstonemassagework from "./Hotstonemassagework";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "How Hot Stone Massage Works | Best Spa in Delhi",
  description: "Learn how hot stone massage works and what it is. Relax muscles, reduce stress & pain at the best hot stone massage spa in Delhi NCR. Book now!",
  openGraph: {
    title: "How Hot Stone Massage Works | Best Spa in Delhi",
    description: "Learn how hot stone massage works and what it is. Relax muscles, reduce stress & pain at the best hot stone massage spa in Delhi NCR. Book now!",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

export default function page() {
  return <Hotstonemassagework />;
}
