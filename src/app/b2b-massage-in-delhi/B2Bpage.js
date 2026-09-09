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
import WhatsappFloat from "../components/WhatsappFloat";

const luxuryHotels = [
  {
    name: "Andaz Delhi",
    location: "Aerocity, New Delhi",
    image: "/images/Andazhat.jpg",
    desc: "Staying at Andaz Delhi? We send a therapist straight to your room for a private body to body massage, no need to travel to our outlet.",
  },
  {
    name: "The Park, Connaught Place",
    location: "Connaught Place, New Delhi",
    image: "/images/TheParkConnaughtPlace.webp",
    desc: "A short walk from The Park — hotel spa bookings available if you'd rather have your B2B massage right in your room.",
  },
  {
    name: "The Suryaa New Delhi",
    location: "NFC, New Delhi",
    image: "/images/TheSuryaaNewDelhi(NFC).webp",
    desc: "Guests at The Suryaa can book our outlet nearby or request a therapist directly to their room for a genuine B2B session.",
  },
  {
    name: "JW Marriott, Aerocity",
    location: "Aerocity, New Delhi",
    image: "/images/JW Marriott Hotel Aerocity.jpg",
    desc: "Close to JW Marriott Aerocity, with discreet, private hotel spa sessions available for guests on request.",
  },
];

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Stress Relief & Relaxation",
    desc: "Our body to body massage in Delhi reduces stress and anxiety the natural way — gentle, controlled strokes that calm the nervous system and leave you feeling light.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Improved Blood Circulation",
    desc: "The warmth and pressure of a genuine B2B massage boosts circulation, pumping oxygen through your body and leaving you feeling noticeably more energetic afterward.",
  },
  {
    icon: <FaHotTub className="text-2xl text-rose-500" />,
    title: "Muscle Recovery & Pain Relief",
    desc: "Tight muscles from long work hours, travel, or gym soreness get real relief — helping muscles recover faster and easing everyday body pain.",
  },
  {
    icon: <FaLeaf className="text-2xl text-teal-600" />,
    title: "Detox & Skin Glow",
    desc: "Better lymph movement helps toxins leave the body faster, which is part of why regular clients notice their skin looking fresher after a session.",
  },
];

const benefits = [
  { title: "Premium Locations", desc: "Available at our outlets and at select five-star hotels across Delhi NCR, so you get full privacy, comfort, and style wherever you book." },
  { title: "Professional Therapists", desc: "Trained, experienced therapists using proven body to body massage technique — every session is genuine relief, not a rushed rubdown." },
  { title: "Wide Range of Therapies", desc: "Swedish, Thai, deep tissue, and aromatherapy add-ons are all available alongside your B2B session, customised to your body." },
  { title: "Luxury & Comfort", desc: "Calming scents, low lighting, and premium-grade oils set the mood — the kind of environment that makes an hour feel like a proper reset." },
  { title: "Hygienic, Private Rooms", desc: "Every session happens behind a closed door in a fully private, hygienically maintained room — no shared spaces, no interruptions." },
  { title: "Better Sleep & Mental Wellness", desc: "Clients dealing with continuous work stress often notice better sleep and a clearer head after a few regular sessions." },
];

const processSteps = [
  { number: "01", title: "Reach out", text: "Message us on WhatsApp or Telegram with your preferred outlet, hotel, or home address — we're used to same-day requests.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Confirm your slot", text: "We confirm timing and pricing upfront over chat — no surprises when your therapist arrives or when you walk in.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Relax, privately", text: "Your session takes place in a private, closed room with a trained therapist, from consultation to checkout.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private body to body massage session at any of our 24+ Delhi NCR outlets.", features: ["Full Body-to-Body Technique", "Premium Oils", "Private Room", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home B2B Spa", price: "₹15000", desc: "Genuine body to body massage at home in Delhi, delivered anywhere across Delhi NCR.", features: ["Full Body-to-Body Technique", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel B2B Spa", price: "₹20000", desc: "A longer, more indulgent session at your hotel — popular with guests staying at Delhi's five-star properties.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "Is there a B2B massage spa in Delhi?", answer: "Yes, Spa Delhi operates 24+ B2B massage spa locations across Delhi and Delhi NCR, including Karol Bagh, Connaught Place, Dwarka, and Saket, alongside home and five-star hotel spa options." },
  { question: "What happens in a body-to-body massage?", answer: "After a short consultation about your preferences, your therapist applies premium oils and uses a full-contact, body-to-body technique with smooth, controlled movements — performed in a private, closed room from start to finish." },
  { question: "Are body-to-body massages legal in India?", answer: "Yes, body-to-body massage is a legal wellness treatment in India when offered by a professional, licensed spa following proper hygiene and conduct standards. Read our detailed guide on whether B2B massage is legal in India for the full picture." },
  { question: "What does a body-to-body massage include?", answer: "A standard session includes a consultation, full-contact massage using premium aromatherapy-grade oils, and a private room for the full duration — with optional add-ons like aromatherapy or a facial depending on your package." },
  { question: "How much does a body to body massage cost in Delhi?", answer: "A body to body massage at our Delhi outlets starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration and location." },
  { question: "Do you provide body to body massage at hotels in Delhi?", answer: "Yes, we regularly serve guests at five-star hotels across Delhi, including Andaz, The Park, The Suryaa, and JW Marriott — just share your hotel and room details when booking." },
  { question: "Do you have Russian or other foreign therapists for body to body massage?", answer: "Yes, our Russian, Thai, and Uzbek therapists are available for B2B sessions alongside our experienced Indian staff, depending on the package you choose." },
  { question: "Do you offer female to male body to body massage in Delhi?", answer: "Yes, female to male body to body massage in Delhi is available at all our outlets, along with male and female therapist options — just mention your preference when booking." },
];

export default function B2Bpage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f241d]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute inset-0 bg-[url('/images/446979.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> SIGNATURE TREATMENT
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3a2e2a] md:text-5xl lg:text-5xl">
              Body to Body Massage in <span className="text-amber-700">Delhi</span> — Genuine B2B Therapy
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
Looking for the best body to body massage in Delhi? Also known as B2B massage in Delhi, our full-contact technique is available at 24+ outlets across Delhi NCR — from Connaught Place to Dwarka, Saket, South Delhi, and near IGI Airport — plus body to body massage at home in Delhi and five-star hotel spa options anywhere in New Delhi. Certified therapists, premium oils, fully private rooms. First visit from ₹1999.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              {[
                ["Luxury Hotel Spa", "🏨"],
                ["Warm Herbal Oils", "🌿"],
                ["Deep Muscle Relief", "💆"],
                ["Private, Judgement-Free", "🔒"],
              ].map(([label, emoji]) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-amber-100 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700">
                  <span>{emoji}</span> {label}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
                <FaWhatsapp /> Book on WhatsApp
              </a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
                <FaTelegram /> Meet Our Team
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["24+", "Outlets in Delhi NCR"], ["4.9/5", "Guest comfort rating"], ["24/7", "Booking support"]].map(([value, label], index) => (
                <div key={index} className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-xl font-bold text-amber-700">{value}</p>
                  <p className="mt-1 text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Wondering about the legality of B2B massage?{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-semibold text-amber-700 underline">Read our guide on Is B2B Massage Legal in India</Link>.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative flex items-center">
            <div className="w-full rounded-[32px] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative h-[410px] overflow-hidden rounded-[24px]">
                <Image src="/images/446979.jpg" alt="Body to body massage in Delhi" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="font-semibold text-amber-700">₹1999 first visit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">What a proper body to body massage does for you.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#3a2e2a]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-form SEO content — scannable card layout */}
      <section className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">The Full Picture</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Body to Body Massage in Delhi — What It Is & How to Book</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/b2b_therapy.jpg" alt="Body to body massage therapy session" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">What Body to Body Massage Actually Is</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  A full body to body massage in Delhi uses full-contact technique with premium oils and controlled, smooth movements — built for genuine deep relaxation, not a rushed rubdown.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Available Across Delhi NCR</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Book at any of our{" "}
                  <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>{" "}
                  — Karol Bagh, Connaught Place, Dwarka, Saket, South Delhi, Lajpat Nagar, Gurugram, and near IGI Airport.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotel /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Hotel & Home Body to Body Massage</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Staying at a hotel or would rather not travel? We send a therapist straight to your room, anywhere in Delhi NCR.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Safe, Legal & Professionally Conducted</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  A legitimate wellness treatment when done right.{" "}
                  <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">Read our legal guide</Link>{" "}
                  if you have questions before booking.
                </p>
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Evening and night appointments available through our 24/7 desk —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Spa Delhi</p>
          <h2 className="mt-3 text-2xl font-bold text-[#3a2e2a] md:text-3xl">Widely rated the best body to body massage in Delhi.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We've run this service for more than a decade across{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets in Delhi NCR</Link>, which means our therapists have handled every kind of first-time nervousness there is and know how to put guests at ease without making it awkward. Hygiene and professionalism aren't optional extras here — they're the baseline for every single session, whether you book at our Karol Bagh outlet, at home, or at a five-star hotel.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            A genuine body to body massage in Delhi is more than a marketing phrase for us — it's a specific, trained technique performed with premium oils and controlled movement, and every therapist on our team goes through structured training before they're ever paired with a guest. That consistency is why corporate professionals, couples, and solo travellers alike keep coming back instead of trying a new place each time.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            If you're looking for something closer to a specific part of the city, our{" "}
            <Link href="/b2b-massage-in-connaught-place" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage in Connaught Place</Link>{" "}
            page covers our Rajiv Chowk-area outlet in detail — otherwise, our{" "}
            <Link href="/massage-service-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full services page</Link>{" "}
            covers everything else we offer beyond B2B.
          </p>
        </div>
      </section>

      {/* How It Compares */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How It Compares</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">B2B massage vs. our other popular treatments.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Not sure which session is right for you? Here's a quick, honest comparison.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotTub /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">vs. Full Body Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              A <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>{" "}
              is a broader, hands-only head-to-toe session — a good fit if you want general relaxation without the full-contact B2B format.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">vs. Deep Tissue Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Deep tissue massage</Link>{" "}
              targets stiff muscles and knots with firm pressure — better suited to physical recovery than B2B's full-contact relaxation.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHeart /></div>
            <h3 className="text-lg font-semibold text-[#3a2e2a]">vs. Couples Massage</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              <Link href="/couples-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">Couples massage</Link>{" "}
              is a shared, side-by-side session for two — a better pick for a date or anniversary than a solo B2B session.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why This Combination Works</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Benefits of our B2B massage service in Delhi.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3a2e2a]">{b.title}</h3>
                <p className="mt-2 text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real hotel showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">5-Star Hotels in Delhi</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">In-Room B2B Massage at Delhi's Top Hotels</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Staying at one of these hotels? We send a therapist straight to your room for a private body to body massage.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {luxuryHotels.map((hotel) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={hotel.image} alt={`B2B massage near ${hotel.name}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#3a2e2a]">{hotel.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-600">{hotel.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{hotel.desc}</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=919217255113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 font-medium text-white shadow-lg transition-all hover:from-amber-700 hover:to-amber-800"
                  >
                    <FaTelegram className="text-lg" />
                    See available staff
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">First Time Here?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">What to expect during your session.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Check-in & Consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A quick chat about pressure, oil preference, and anything you'd rather your therapist avoid — nothing is assumed.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Private, Closed Room</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Your room stays closed for the full session — no shared spaces, no one walking in, no interruptions from booking to checkout.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Premium Oils, Controlled Technique</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">Aromatherapy-grade oils and smooth, controlled movements — a wellness treatment, handled the same way as any other service on our menu.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3a2e2a]">Aftercare & Checkout</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">A few minutes to ease back before you head out — plus water and a quiet space if you'd like to sit for a bit after your session.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Simple, discreet, professional.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-[24px] border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-semibold text-amber-700">{step.number}</div>
                <div className="mb-3 text-amber-700">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#3a2e2a]">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Transparent pricing, no surprises.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${plan.highlight ? "border-amber-400 bg-gradient-to-br from-[#fff7ed] to-[#fffaf3]" : "border-amber-100 bg-white"}`}>
                <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.highlight ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-700"}`}>{plan.badge}</div>
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
                <a href="https://api.whatsapp.com/send?phone=919217255113" className="mt-6 block rounded-full bg-amber-600 py-3 text-center font-semibold text-white transition hover:bg-amber-700">
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Everything before you book.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl border border-amber-100 bg-[#fffaf5] p-5">
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

      {/* Explore More — 10 internal links */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Related Services</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full Body Massage in Delhi", href: "/full-body-massage-in-delhi" },
            { title: "Deep Tissue Massage in Delhi", href: "/deep-tissue-massage-in-delhi" },
            { title: "Couples Massage in Delhi", href: "/couples-massage-in-delhi" },
            { title: "Thai Massage in Delhi", href: "/thai-massage-in-delhi" },
            { title: "Swedish Massage in Delhi", href: "/swedish-massage-in-delhi" },
            { title: "Sandwich Massage in Delhi", href: "/sandwich-massage-in-delhi" },
            { title: "Aromatherapy Massage in Delhi", href: "/aromatherapy-massage-in-delhi" },
          ].map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-amber-100 bg-white p-5 font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {/* <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-sm text-amber-700 group-hover:bg-amber-600 group-hover:text-white">
                {index + 1}
              </span> */}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#3a2e2a] to-[#5b3f31] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your session</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve your body to body massage in Delhi today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk into any of our 24+ outlets, or have us come to your hotel or home anywhere in Delhi NCR.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full bg-white px-6 py-3 font-semibold text-[#3a2e2a] transition hover:bg-amber-50">WhatsApp Booking</a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Join Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
