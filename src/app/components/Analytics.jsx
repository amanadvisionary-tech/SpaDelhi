"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJ9S9XMNXP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJ9S9XMNXP');
          `}
        </Script>

      {/* ✅ Google Site Verification */}
      <meta
        name="google-site-verification"
        content="urWTsZ4VUiaWDY0gtPaGZ2YFOFrW4fQxFwqYn8lovLs"
      />

      {/* LocalBusiness + DaySpa Schema (server-rendered so search engines see it without running JS) */}
      <script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "DaySpa"],
            name: "Spa Delhi",
            url: "https://www.spadelhi.com/",
            logo: "https://www.spadelhi.com/images/spadelhilogo22.webp",
            image: "https://www.spadelhi.com/images/luxurySpaRoom.jpg",
            telephone: "+91-9650684501",
            priceRange: "₹₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Indira Gandhi International Airport Assets 6, IGI Road, Near Lemon Tree Aerocity",
              addressLocality: "New Delhi",
              addressRegion: "DL",
              postalCode: "110037",
              addressCountry: "IN",
            },
            areaServed: [
              "Delhi",
              "Gurgaon",
              "Noida",
              "Aerocity",
              "Connaught Place",
              "Lajpat Nagar",
              "Saket",
              "Rajouri Garden",
              "Pitampura",
              "Greater Kailash",
              "Kalkaji",
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "22:00",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Spa Delhi",
            url: "https://www.spadelhi.com/",
            logo: "https://www.spadelhi.com/images/spadelhilogo22.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9650684501",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          }),
        }}
      />

      {/* FAQPage Schema — mirrors the FAQ section shown on the homepage */}
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Spa Delhi provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At Spa Delhi, we offer full-body massage, Thai massage, aromatherapy, B2B massage, sandwich massage, couple massage and more. Our certified Indian and international therapists deliver private, hygienic sessions tailored for relaxation, therapeutic relief, and special-event packages at all major outlets.",
                },
              },
              {
                "@type": "Question",
                name: "Do you have hotel and home spa options in Delhi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our hotel spa services include in-hotel treatments, room setups, full-service packages and trained international therapists at 5-star hotels. We also offer spa services at home across Delhi NCR.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a first-visit discount at Spa Delhi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we run first-visit offers periodically, such as introductory full body massage packages starting at ₹1999. Check the homepage deals or contact your preferred outlet for current promotions.",
                },
              },
              {
                "@type": "Question",
                name: "Can I book a safe home spa service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer spa at home across Delhi and the NCR region. You don't need to step out — just contact us and we'll arrange a certified therapist for your home spa session.",
                },
              },
              {
                "@type": "Question",
                name: "Are Spa Delhi therapists certified and experienced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All our therapists are trained and certified in their techniques. We have both Indian and foreign therapists from Thailand, Uzbekistan, Russia and Afghanistan to give you the best massage experience at our 5-star hotel outlets.",
                },
              },
              {
                "@type": "Question",
                name: "Can I request a male or female therapist?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. You can share your therapist preference at the time of booking and we'll do our best to accommodate it.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
