"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

const HomeBannerCarousel = dynamic(() => import("./HomeBannerCarousel"), {
  ssr: false,
  loading: () => null,
});

const slides = [
  {
    title: "Welcome to The Spa Delhi — 5 Star Hotel Spa In Delhi",
    image: "/images/hb1.webp",
  },
  {
    title: "Explore Spa Delhi With 12+ Spa Outlets in Delhi NCR",
    image: "/images/hb2.webp",
  },
  {
    title: "Book Massage at the Best Massage Centre in Delhi",
    image: "/images/hb3.webp",
  },
];

export default function HomeBanner() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    setEnhanced(true);
  }, []);

  return (
    <section className="relative w-full h-[45vh] md:h-[70vh]">
      {enhanced ? (
        <HomeBannerCarousel slides={slides} />
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={slides[0].image}
            alt={slides[0].title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
            <p className="text-white text-2xl md:text-5xl font-bold max-w-3xl mb-6">
              {slides[0].title}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/+a5Bu6FBPN9FlOWM9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full flex items-center"
              >
                <FaTelegram className="mr-2" />
                Join Updates
              </a>

              <a
                href="/massage-service-in-delhi"
                className="bg-white text-black py-3 px-6 rounded-full"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
