import Healthbenefits from "./Healthbenefits";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book 5 star Hotel Spa Outlets in Delhi | Spa in Rohini For complete relaxation ",
  description: "Our luxury spa outlets in Delhi, including the best Spa in Rohini and Hotel Spa in Pitampura, offering relaxing body massages & complete service. Book Now ",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

export default function page() {
  return <Healthbenefits />;
}
