import Couplepage from "./Couplepage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Couples Massage in Delhi", item: "https://www.spadelhi.com/couples-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Couple Massage",
  name: "Couples Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Spa Delhi",
    telephone: "+91-9217255113",
    url: "https://www.spadelhi.com/",
  },
  areaServed: "Delhi",
  description:
    "Couple massage in Delhi at our Karol Bagh spa for partners to relax together, with certified therapists in private hygienic rooms.",
};

export const metadata = {
  title: "Couple Massage in Delhi - Relax Together From ₹1999 | Spa Delhi",
  description: "Couple massage in Delhi at our Karol Bagh spa for partners to relax together. Certified therapists, private hygienic rooms, trusted service. Book your slot now!",
  keywords: ["couples massage in delhi", "couple massage delhi", "female to male massage delhi", "couple spa delhi"],
  openGraph: {
    title: "Couple Massage in Delhi | Female to male Couple Massage",
    description: "Looking for a couple massage in Delhi? Visit our spa in Karol bagh for the best couples massage. We have certified therapists to provide you perfect relaxation.",
    images: ["https://www.spadelhi.com/images/Couple%20Massage.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.spadelhi.com/couples-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/Couple%20Massage.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-couples-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-couples-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Couplepage />
    </>
  );
}
