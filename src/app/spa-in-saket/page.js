import SpaInSaket from "./spainsaket";

// src/app/spa-in-saket/page.js

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Saket", item: "https://www.spadelhi.com/spa-in-saket" },
  ],
};

export const metadata = {
  title: "Spa in Saket - Luxury Body Massage Near Select Citywalk | Spa Delhi",
  description:
    "Spa in Saket, South Delhi for luxury full body, deep tissue, Swedish & couple massage. 5-star hotels near Select Citywalk from ₹1999. Book your session now!",

  keywords: [
    "spa in saket",
    "best spa in saket",
    "body massage in saket",
    "massage centre in saket",
    "couple massage in saket",
    "deep tissue massage saket",
    "swedish massage saket",
    "spa near select citywalk",
    "luxury spa in south delhi",
    "b2b massage in saket",
    "hotel spa saket"
  ],

  openGraph: {
    title: "Best Spa in Saket Delhi | Luxury Body Massage & Wellness Centre",
    description:
      "Visit Spa Delhi in Saket for authentic full body massage, deep tissue therapy & premium spa packages in top 5-star hotels. Certified therapists & private suites.",
    images: ["https://www.spadelhi.com/images/steptodown.com800611.jpg"],
    type: "website",
    url: "https://www.spadelhi.com/spa-in-saket",
  },

  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-saket",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Saket Delhi | Body Massage & Spa Services",
    description: "Rejuvenate with top massage therapies and luxury spa sessions in Saket, South Delhi. Book your slot today.",
    images: ["https://www.spadelhi.com/images/steptodown.com800611.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpaInSaket />
    </>
  );
}