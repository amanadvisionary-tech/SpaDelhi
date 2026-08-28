import HomeClient from "./HomeClient";

export const metadata = {
  title: "Best Spa in Delhi For Complete Relaxation | Spa Delhi Offer @1999",
  description:
    "Looking for a relaxing Spa in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi. Book Your Session Now.",

  keywords: [
    "spa in delhi",
    "best spa in delhi",
    "massage in delhi",
    "massage centre in delhi",
    "massage parlour in delhi",
    "hotel spa in delhi",
    "home spa in delhi",
    "body massage in delhi",
    "thai massage in delhi",
    "luxury spa in delhi",
  ],

  alternates: {
    canonical: "https://www.spadelhi.com/",
  },

  openGraph: {
    title: "Get Best Body Massage in Delhi | First Visit Offer 1999",
    description:
      "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
    url: "https://www.spadelhi.com/",
    siteName: "Spa Delhi",
    images: [
      {
        url: "/images/luxurySpaRoom.jpg",
        width: 1200,
        height: 630,
        alt: "Spa Delhi",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Delhi For Complete Relaxation | Spa Delhi",
    description:
      "Looking for a relaxing Spa in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
    images: ["/images/luxurySpaRoom.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
