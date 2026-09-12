import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa Price in Delhi", item: "https://www.spadelhi.com/spa-price-in-delhi" },
  ],
};

export const metadata = {
  title: "Spa Price in Delhi - Full Body Massage From ₹1999 | Spa Delhi",
  description: "Spa price in Delhi starting from just ₹1999 at our top 5-star outlets across Delhi NCR. Transparent pricing, certified therapists. Check rates and book now!",
  keywords: ["spa price in delhi", "massage price in delhi", "full body massage price delhi", "spa cost delhi"],
  openGraph: {
    title: "Get the best spa price in Delhi | Check Full Body massage price",
    description: "Get Best spa price in delhi our spa service starting from just 1999. We have top 5 star outlets to provide you spa sessions in delhi or ncr regions. Check out full body massage price in noida",
    images: ["https://www.spadelhi.com/images/PricingBanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/spa-price-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/PricingBanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Pricpage />
    </>
  );
}
