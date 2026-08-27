import Hotstonemassagework from "./Hotstonemassagework";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "How Hot Stone Massage Works | Best Spa in Delhi",
  description: "Learn how hot stone massage works and what it is. Relax muscles, reduce stress & pain at the best hot stone massage spa in Delhi NCR. Book now!",
  openGraph: {
    title: "How Hot Stone Massage Works | Best Spa in Delhi",
    description: "Learn how hot stone massage works and what it is. Relax muscles, reduce stress & pain at the best hot stone massage spa in Delhi NCR. Book now!",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/how-hot-stone-massage-works-in-delhi-spa",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Reflexology.jpg"]
  }
};

export default function page() {
  return <Hotstonemassagework />;
}
