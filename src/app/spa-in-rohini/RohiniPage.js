"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCrown,
  FaHandSparkles,
  FaHeart,
  FaHotel,
  FaHotTub,
  FaLeaf,
  FaPhoneAlt,
  FaSpa,
  FaStar,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Private wellness rooms in Rohini",
    desc: "Relax in clean, private treatment rooms designed for total comfort, just minutes from Rohini West and Rohini East.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Certified & experienced therapists",
    desc: "Our therapists are trained in Swedish, deep tissue, Thai and aromatherapy techniques, so every massage in Rohini feels safe and professional.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, home & hotel spa options",
    desc: "Visit our Rohini spa outlet, or book a home spa or hotel spa session anywhere across North West Delhi at your convenience.",
  },
];

const services = [
  {
    title: "Full Body Massage in Rohini",
    desc: "A complete relaxation session that eases muscle tension, improves blood circulation, and leaves you feeling refreshed from head to toe.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Firm, focused pressure that targets chronic knots and stiffness, ideal for guests dealing with back, neck, or shoulder pain.",
    icon: <FaHotTub className="text-amber-600" />,
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Couple Massage in Rohini",
    desc: "A shared wellness experience in a private, comfortable room where two people can relax together in complete peace.",
    icon: <FaHeart className="text-rose-500" />,
    href: "/couples-massage-in-delhi",
  },
  {
    title: "Sandwich Massage",
    desc: "A unique two-therapist session that delivers deeper relaxation and faster stress relief for guests wanting something extra.",
    icon: <FaSpa className="text-amber-600" />,
    href: "/sandwich-massage-in-delhi",
  },
  {
    title: "B2B Massage",
    desc: "A specialised body to body therapy performed with premium oils and smooth, controlled movements for complete relaxation.",
    icon: <FaLeaf className="text-emerald-600" />,
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Aromatherapy Ritual",
    desc: "Calming essential oils combined with gentle massage strokes to relax the mind and refresh the senses after a long week.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/massage-service-in-delhi",
  },
];

const nearbyAreas = [
  {
    title: "Pitampura",
    href: "/spa-in-pitampura",
    image: "/images/fpkdl.com_750_1758779588_beautiful-young-girl-spa-salon_392895-8485.jpg",
    description:
      "Guests from Pitampura and Netaji Subhash Place regularly choose our nearby Rohini spa for a relaxing full body or deep tissue massage.",
  },
  {
    title: "Rithala",
    image: "/images/fpkdl.com_750_1758780005_man-lying-spa-table-with-therapist-applying-hydrating-body-scrub-surrounded-by-calming-d_1314467-217658.jpg",
    description:
      "Living near Rithala, the last stop on the Red Line? Our Rohini outlet is a short ride away for a peaceful spa session.",
  },
  {
    title: "Prashant Vihar",
    image: "/images/fpkdl.com_960_1758982921_two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
    description:
      "Residents of Prashant Vihar and Sector 14 appreciate the short travel time and calm, private setting at our Rohini spa.",
  },
  {
    title: "Shalimar Bagh",
    image: "/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg",
    description:
      "A quick drive from Shalimar Bagh and Madhuban Chowk brings you to our hygienic, professionally staffed Rohini outlet.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Connect with us",
    text: "Share your preferred treatment, timing, and location in Rohini. Our team helps you choose the right session with ease.",
    icon: <FaPhoneAlt className="text-amber-700" />,
  },
  {
    number: "02",
    title: "Choose your therapy",
    text: "Pick from full body, deep tissue, couple, sandwich, or aromatherapy massage curated for your comfort and needs.",
    icon: <FaClock className="text-amber-700" />,
  },
  {
    number: "03",
    title: "Relax and unwind",
    text: "Arrive at our Rohini outlet, or welcome our therapist at your home or hotel, and enjoy a smooth, professional session.",
    icon: <FaCheckCircle className="text-amber-700" />,
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999",
    desc: "Perfect for a quick, relaxing reset at our Rohini outlet with premium oils and complete privacy.",
    features: ["Oil Massage", "Cream Massage", "Private Room", "30 min Consultation"],
    icon: <FaSpa className="text-amber-500" />,
    highlight: false,
    badge: "Starter",
  },
  {
    title: "Home Spa",
    price: "₹15000",
    desc: "A premium at-home wellness session anywhere in Rohini, Pitampura or nearby North West Delhi.",
    features: ["Full Body Massage", "Aromatherapy", "Private Setting", "90 min Session"],
    icon: <FaHotel className="text-amber-500" />,
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20000",
    desc: "A comprehensive luxury spa experience delivered to your hotel room with added treatments.",
    features: ["5 Star Property", "Private Suite", "Foreign Therapist", "120 min Session"],
    icon: <FaCrown className="text-amber-500" />,
    highlight: false,
    badge: "Luxury",
  },
];

const faqs = [
  {
    question: "What is the first visit offer for spa in Rohini?",
    answer:
      "Our spa in Rohini offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Rohini at an affordable price.",
  },
  {
    question: "Is your spa near Rohini Metro Station?",
    answer:
      "Yes, our Rohini spa outlet is conveniently located close to Rohini Metro Station on the Red Line, making it easy to reach from Rohini West, Rohini East, and nearby sectors.",
  },
  {
    question: "Do you provide home spa service in Rohini?",
    answer:
      "Yes, along with our outlet, we offer home spa service across Rohini and North West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
  },
  {
    question: "Can I book a couple massage in Rohini?",
    answer:
      "Yes, our Rohini outlet has private rooms designed for couple massage, including our popular female to male couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
  },
  {
    question: "Do you have Russian or other foreign therapists available in Rohini?",
    answer:
      "Yes, our Russian spa in Rohini packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff, offering guests more variety in massage styles. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
  },
  {
    question: "How much does a full body massage cost in Rohini?",
    answer:
      "A full body massage at our Rohini outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
  },
  {
    question: "Do you offer spa Rohini Sector 16 or near City Centre Mall Rohini?",
    answer:
      "Yes, our Rohini outlet serves guests across all major sectors, including Sector 3, 7, 9, 11, 16, 17, and 24, and is a short distance from City Centre Mall Rohini, along with home spa visits to your exact address within these areas.",
  },
  {
    question: "I searched for spa near me Rohini — will you actually come to my area?",
    answer:
      "Yes, if you searched spa near me Rohini or spa near Rohini, our outlet, home spa, and hotel spa options are built to cover the whole of Rohini and North West Delhi, not just the area right around our door.",
  },
];

export default function RohiniPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f241d]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute inset-0 bg-[url('/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> ROHINI WELLNESS OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3a2e2a] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Rohini</span> for Full Body & Couple Massage
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for the best spa in Rohini? Spa Delhi brings professional full body massage, deep tissue therapy, aromatherapy, and couple spa services to Rohini Sector 3, 7, 9, 11, 16, 17 and 24, just minutes from Rohini Metro Station and City Centre Mall Rohini. Every session is performed by certified therapists in a clean, private, and relaxing setting.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
                <FaWhatsapp /> Book on WhatsApp
              </a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
                <FaTelegram /> Meet Our Team
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["12+", "Years of spa expertise"],
                ["4.9/5", "Guest comfort rating"],
                ["24/7", "Booking support"],
              ].map(([value, label], index) => (
                <div key={index} className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-xl font-bold text-amber-700">{value}</p>
                  <p className="mt-1 text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg" alt="Relaxing spa room in Rohini" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹1999 first visit</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Rohini Chooses Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A trusted massage centre in Rohini, built on comfort and hygiene.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#3a2e2a]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sector-by-sector coverage — targets each long-tail sector search individually */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Sector-Wise Coverage</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa in Rohini, Sector by Sector</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Outlet, home spa, and hotel spa — the same standard, wherever you are in Rohini.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { sector: "Spa in Rohini Sector 3", desc: "Close to Rohini West, with home spa visits to your exact address." },
            { sector: "Spa in Rohini Sector 7", desc: "A short ride from our outlet, popular with residents and offices nearby." },
            { sector: "Spa Rohini Sector 16", desc: "Minutes from City Centre Mall Rohini and the metro station." },
            { sector: "Spa in Rohini Sector 17", desc: "Covered by the same certified therapists and hygiene standard." },
            { sector: "Spa in Rohini Sector 24", desc: "Near Rohini East, with outlet, home, and hotel spa options." },
          ].map((item) => (
            <motion.div key={item.sector} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-[#3a2e2a]">{item.sector}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-form SEO content — scannable card layout */}
      <section className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About Our Rohini Outlet</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa in Rohini — A Trusted Full Body Massage &amp; Wellness Centre</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg" alt="Spa in Rohini treatment room" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">A Genuine Massage Centre in Rohini</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Full body</Link>,{" "}
                  <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">deep tissue</Link>,{" "}
                  <Link href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich</Link>, and{" "}
                  <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link> — all from ₹1999 for your first visit.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Near Rohini Metro &amp; City Centre Mall</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our spa in City Centre Mall Rohini area is a short walk from the metro, Japanese Park, and Madhuban Chowk — easy to fit around a day out.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotel /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Covers Every Rohini Sector</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Spa Rohini Sector 16, Sector 3, 7, 9, 11, 17, and 24 — home spa and hotel spa reach your exact address in each.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Searching "Spa Near Me" in Rohini?</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  If you typed spa near me Rohini or spa near Rohini, you've found it — certified therapists, hygienic rooms, transparent pricing.
                </p>
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Wondering about the legal side of B2B massage?{" "}
            <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">Read our guide</Link>{" "}
            — worth checking before your first visit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Massage services available at our Rohini spa.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-3 text-xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#3a2e2a]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
              <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
                Learn more <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Landmarks Nearby</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Minutes From These Rohini Landmarks</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Prefer another part of the city? Browse <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">all Spa Delhi outlets in Delhi NCR</Link>.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {nearbyAreas.map((area, index) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={area.image} alt={`Spa near ${area.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#3a2e2a]">
                    {area.href ? (
                      <Link href={area.href} className="hover:text-amber-700 hover:underline">{area.title}</Link>
                    ) : (
                      area.title
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A simple pathway from booking to relaxation.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
              <div className="mb-3 text-amber-700">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#3a2e2a]">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">First Time Here?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">What to expect at our Rohini spa.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Check-in & Consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A quick chat about pressure, oil preference, and anything you'd rather your therapist avoid.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Private, Closed Room</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Your room stays closed for the full session — no shared spaces, no interruptions from booking to checkout.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Premium Oils, Controlled Technique</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Aromatherapy-grade oils and smooth, controlled movements — a wellness treatment, handled properly every time.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Aftercare & Checkout</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A few minutes to ease back before you head out — plus water and a quiet space if you'd like to sit for a bit.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Transparent spa pricing for every kind of relaxation.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff7ed] to-[#fffaf3]" : "border-amber-100 bg-white"}`}
              >
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>
                  {plan.badge}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">{plan.icon}</div>
                <h3 className="text-2xl font-semibold text-[#3a2e2a]">{plan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{plan.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold text-amber-700">{plan.price}</span>
                  <span className="pb-1 text-sm font-medium text-gray-500">/ session</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-amber-600" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — trust banner */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#3a2e2a] to-[#5b3f31] p-8 text-white shadow-2xl md:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Why Choose Spa Delhi</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">The Best Spa in Rohini for Trusted, Professional Care</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              More than a decade of experience across{" "}
              <Link href="/outlets" className="font-medium text-amber-300 underline hover:text-amber-200">24+ outlets in Delhi NCR</Link> — Rohini included. When you search for a massage centre in Rohini or a spa near me Rohini, safety and skilled hands are exactly what you get.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["12+", "Years of experience"], ["24+", "Outlets in Delhi NCR"], ["7", "Rohini sectors covered"], ["24/7", "Booking support"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-300">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { icon: <FaCheckCircle />, text: "Treatment rooms are cleaned and sanitised between every guest, with fresh towels and premium oils each session." },
              { icon: <FaHotel />, text: "We also serve Pitampura, Rithala, Prashant Vihar, and Shalimar Bagh with the same home and hotel spa quality." },
              { icon: <FaLeaf />, text: "Spa near Rohini Metro Station for a quick after-work visit, or a longer weekend wellness package." },
              { icon: <FaSpa />, text: "See our full range beyond Rohini, including spa in Dwarka and other Delhi NCR outlets." },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">{item.icon}</span>
                <p className="text-sm leading-relaxed text-white/85">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Compares */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How It Compares</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Which Rohini massage is right for you?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not sure what to book? Here's a quick, honest comparison of our most popular treatments.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Full Body vs. Deep Tissue</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Full body massage</Link>{" "}
              is broad, head-to-toe relaxation; <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">deep tissue</Link>{" "}
              uses firmer pressure for stiff, knotted muscles.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">B2B vs. Sandwich Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link>{" "}
              is a full-contact solo session, while{" "}
              <Link href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich massage</Link>{" "}
              uses two therapists working in sync for faster relief.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHeart /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Couple Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/couples-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Couple massage</Link>{" "}
              is a shared, side-by-side session in a private room — ideal for a date night or weekend reset.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Everything you need to know before booking your visit.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-2xl border border-amber-100 bg-[#fffaf5] p-5">
                <button onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} className="flex w-full items-center justify-between text-left">
                  <span className="text-lg font-semibold text-[#3a2e2a]">{faq.question}</span>
                  <FaArrowRight className={`text-amber-700 transition ${activeIndex === index ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="mt-3 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Spa Locations across Delhi NCR — dedicated location internal linking */}
      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Other Locations</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa Locations Across Delhi NCR</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not based in Rohini? We run 24+ outlets across Delhi NCR — find the one closest to you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Spa in Pitampura", href: "/spa-in-pitampura" },
              { title: "Spa in Rajouri Garden", href: "/spa-in-rajouri-garden" },
              { title: "Spa in Janakpuri", href: "/spa-in-janakpuri" },
              { title: "Spa in Uttam Nagar", href: "/spa-in-uttam-nagar" },
              { title: "Spa in Dwarka", href: "/spa-in-dwarka" },
              { title: "Spa in Vasant Kunj", href: "/spa-in-vasant-kunj" },
              { title: "Spa in Karol Bagh", href: "/spa-in-karol-bagh" },
              { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
              { title: "Spa in Noida", href: "/spa-in-noida" },
              { title: "Spa in Gurgaon", href: "/spa-in-gurgaon" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#3a2e2a] to-[#5b3f31] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve a peaceful escape in Rohini today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in with your comfort in mind, or connect with us for a personalised home spa or hotel spa booking anywhere in Rohini and North West Delhi.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#3a2e2a] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
