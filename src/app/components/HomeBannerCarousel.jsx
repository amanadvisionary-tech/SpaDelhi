"use client";

import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HomeBannerCarousel({ slides }) {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
              <p className="text-white text-2xl md:text-5xl font-bold max-w-3xl mb-6">
                {slide.title}
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
