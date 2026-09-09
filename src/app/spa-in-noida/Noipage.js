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

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Genuine Massage Spa in Noida",
    desc: "A real massage spa in Noida, not a guessing game — trained therapists, premium oils, and a private room for every session.",
  },
  {
    icon: <FaHandSparkles className="text-2xl text-emerald-600" />,
    title: "Covers Sector 18 & Greater Noida",
    desc: "Whether you're near Noida Sector 18 or further out toward Greater Noida, our outlets and home spa keep you covered.",
  },
  {
    icon: <FaHotTub className="text-2xl text-rose-500" />,
    title: "Hotel Spa at Top Noida Properties",
    desc: "In-room body spa in Noida at Radisson Blu, Crowne Plaza, and other leading hotels — no need to leave your room.",
  },
  {
    icon: <FaLeaf className="text-2xl text-teal-600" />,
    title: "Certified, Considerate Therapists",
    desc: "Every therapist follows proper technique and hygiene protocol, so your session stays professional from start to finish.",
  },
];

const services = [
  { title: "Full Body Massage", desc: "A classic head-to-toe session using smooth, flowing strokes — the most-booked treatment at our Noida spa centre.", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", desc: "A specialised, full-contact therapy performed with premium oils for genuinely deep relaxation.", href: "/b2b-massage-in-delhi" },
  { title: "Aromatherapy Massage", desc: "Scented essential oils paired with massage technique for a calmer, more sensory session.", href: "/aromatherapy-massage-in-noida" },
  { title: "Couples Massage", desc: "One private room, two therapists — a genuinely shared spa experience for two.", href: "/couples-massage-in-delhi" },
];

const benefits = [
  { title: "Premium Locations", desc: "Available at our Noida outlets and at select hotels in Noida and Greater Noida, so you get privacy and comfort wherever you book." },
  { title: "Professional Therapists", desc: "Trained, experienced therapists at every Spa Delhi massage centre in Noida — every session is genuine relief, not a rushed rubdown." },
  { title: "Wide Range of Therapies", desc: "Full body, B2B, Thai, deep tissue, and aromatherapy are all available at our spa centre in Noida, customised to your body." },
  { title: "Hygienic, Private Rooms", desc: "Every session happens behind a closed door in a fully private, hygienically maintained room — no shared spaces, no interruptions." },
  { title: "Home Spa in Noida", desc: "Can't make it to an outlet? We send a therapist to your home anywhere in Noida, Sector 18, and Greater Noida." },
  { title: "Secure Online Payment", desc: "Pay online, by UPI, card, or cash — booking a massage spa in Noida shouldn't be complicated." },
];

const luxuryHotels = [
  {
    name: "Radisson Blu MBD Hotel, Noida",
    location: "Noida",
    image: "/images/Radisson_Blu_MBD_Hotel,_Noida.jpg",
    desc: "Staying at Radisson Blu? We send a therapist straight to your room for a private body spa in Noida.",
  },
  {
    name: "Sandal Suites by Lemon Tree Hotels, Noida",
    location: "Noida",
    image: "/images/SandalSuitesbyLemonTreeHotels_Noida.jpg",
    desc: "A short drive from Sandal Suites — hotel spa bookings available if you'd rather not travel to our outlet.",
  },
  {
    name: "Crowne Plaza, Greater Noida",
    location: "Greater Noida",
    image: "/images/Crowne_Plaza_Greater_Noida.jpg",
    desc: "Guests at Crowne Plaza can book our spa in Greater Noida or request a therapist directly to their room.",
  },
  {
    name: "Jaypee Greens Golf & Spa Resort, Greater Noida",
    location: "Greater Noida",
    image: "/images/Jaypee_Greens_Golf_Spa_Resort_Greater_Noida.jpg",
    desc: "Close to Jaypee Greens, with discreet, private hotel spa sessions available on request.",
  },
];

const processSteps = [
  { number: "01", title: "Reach out", text: "Message us on WhatsApp or Telegram with your preferred outlet, hotel, or home address in Noida.", icon: <FaPhoneAlt className="text-amber-700" /> },
  { number: "02", title: "Confirm your slot", text: "We confirm timing and pricing upfront over chat — no surprises when your therapist arrives.", icon: <FaClock className="text-amber-700" /> },
  { number: "03", title: "Relax, privately", text: "Your session takes place in a private, closed room with a trained therapist, from consultation to checkout.", icon: <FaCheckCircle className="text-amber-700" /> },
];

const pricingPlans = [
  { title: "Spa Outlet", price: "₹1999", desc: "A private massage session at our Noida spa centre.", features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Session"], icon: <FaSpa className="text-amber-500" />, highlight: false, badge: "Starter" },
  { title: "Home Spa in Noida", price: "₹15000", desc: "The same genuine massage delivered to your home anywhere in Noida.", features: ["Therapist of Choice", "Private Setting", "Aromatherapy Add-on", "90 min Session"], icon: <FaHotel className="text-amber-500" />, highlight: true, badge: "Most Popular" },
  { title: "5 Star Hotel Spa", price: "₹20000", desc: "A longer, more indulgent session at your hotel in Noida or Greater Noida.", features: ["Foreign Therapist Option", "Private Suite", "Facial Add-on", "120 min Session"], icon: <FaCrown className="text-amber-500" />, highlight: false, badge: "Luxury" },
];

const faqs = [
  { question: "Do you have a massage spa in Noida?", answer: "Yes, we operate a genuine massage spa in Noida with certified therapists, private rooms, and multiple treatment options including full body, B2B, and aromatherapy massage." },
  { question: "Is there a spa in Greater Noida?", answer: "Yes, our spa in Greater Noida serves hotels like Crowne Plaza and Jaypee Greens, along with home spa bookings across the area." },
  { question: "Do you offer spa services in Noida Sector 18?", answer: "Yes, our spa in Noida Sector 18 is available by female and male therapists, offering top-notch massage service in a private, hygienic room." },
  { question: "What is included in a body spa in Noida?", answer: "A body spa in Noida session includes a consultation, full body massage using premium oils, and a private room for the full duration — with optional add-ons like aromatherapy." },
  { question: "How much does a massage spa in Noida cost?", answer: "Sessions at our spa centre in Noida start from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration." },
  { question: "Do you provide home spa service in Noida?", answer: "Yes, we offer home spa in Noida at affordable prices with certified, well-trained therapists visiting your address." },
  { question: "Which hotels in Noida offer your spa service?", answer: "We're available at Radisson Blu, Sandal Suites by Lemon Tree, Crowne Plaza Greater Noida, and Jaypee Greens Golf & Spa Resort, among others." },
  { question: "Can I pay online for spa services in Noida?", answer: "Yes, we offer secure online payment options — UPI, card, or cash — for your convenience." },
  { question: "How long does a session at your spa centre in Noida last?", answer: "Our standard session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options for a longer, more thorough experience." },
  { question: "Can I book a night appointment at your massage spa in Noida?", answer: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." },
];

export default function Noipage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f241d]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute inset-0 bg-[url('/images/noidahotel.jpeg')] bg-cover bg-center opacity-10" />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <FaStar className="text-amber-500" /> LUXURY MASSAGE SPA
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3a2e2a] md:text-5xl lg:text-5xl">
              Spa in <span className="text-amber-700">Noida</span> — Luxury Massage Spa Near You
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a genuine massage spa in Noida? Spa Delhi runs a trusted spa centre in Noida covering Sector 18, Greater Noida, and every major hotel in between — plus home spa options anywhere in the city. Certified therapists, private rooms. First visit from ₹1999.
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
              {[["12+", "Years of spa expertise"], ["4.9/5", "Guest comfort rating"], ["24/7", "Booking support"]].map(([value, label], index) => (
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
                <Image src="/images/new7.jpeg" alt="Massage spa in Noida" fill className="object-cover" />
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A Genuine Massage Centre in Noida, Done Right</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa in Noida — What We Offer & Where to Find Us</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-72 overflow-hidden rounded-[28px] shadow-lg lg:h-full lg:min-h-[420px]"
            >
              <Image src="/images/spaexpert3.webp" alt="Spa in Noida session" fill className="object-cover" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaSpa /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">A Genuine Massage Spa in Noida</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Trained therapists, premium oils, and a private room — every session at our spa centre in Noida follows the same standard.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHandSparkles /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Sector 18 & Greater Noida Covered</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Our spa in Noida Sector 18 and spa in Greater Noida both run on the same booking desk — one number for the whole city.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaHotel /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Hotel Spa at Top Properties</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  In-room body spa in Noida at Radisson Blu, Crowne Plaza, and more — no need to leave your room.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600"><FaCheckCircle /></div>
                <h3 className="text-lg font-semibold text-[#3a2e2a]">Home Spa, No Extra Hassle</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Can't travel? A therapist comes to your home anywhere in Noida — same standard, same hygiene.
                </p>
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Evening appointments available through our 24/7 desk —{" "}
            <a href="#Pricing" className="font-medium text-amber-700 underline hover:text-amber-800">see full pricing below</a>.
          </p>
        </div>
      </section>

      {/* Why choose us — trust banner, deliberately different layout from the section above */}
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
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Trusted as Noida's Best Massage Spa Centre</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              A decade-plus reputation, built one private session at a time across{" "}
              <Link href="/outlets" className="font-medium text-amber-300 underline hover:text-amber-200">24+ Delhi NCR outlets</Link> — including our massage spa in Noida.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["12+", "Years of experience"], ["24+", "Outlets in Delhi NCR"], ["2", "Zones: Sector 18 & Greater Noida"], ["24/7", "Booking support"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-300">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { icon: <FaHandSparkles />, text: "Tailored to your preferences — pressure level, oil scent, and technique, every session." },
              { icon: <FaHotel />, text: "Same certified therapists and hygiene standard whether you're in Sector 18 or Greater Noida." },
              { icon: <FaCheckCircle />, text: "International and skilled Indian therapists, trained in full body, B2B, and aromatherapy technique." },
              { icon: <FaSpa />, text: "See our full range beyond Noida on the Delhi NCR services page." },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">{item.icon}</span>
                <p className="text-sm leading-relaxed text-white/85">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/massage-service-in-delhi" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
              See All Delhi NCR Services <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Explore Our Massage Services in Noida</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#3a2e2a]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-700 group-hover:underline">
                Learn more <FaArrowRight className="text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why This Works</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">What Makes Our Body Spa in Noida Different</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Hotels We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">In-Room Body Spa at Noida &amp; Greater Noida Hotels</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Staying at one of these hotels? We send a therapist straight to your room.</p>
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
                <div className="relative h-48 overflow-hidden">
                  <Image src={hotel.image} alt={`Spa near ${hotel.name}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#3a2e2a]">{hotel.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-600">{hotel.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{hotel.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Book Your Noida Spa Session in 3 Easy Steps</h2>
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
      </section>

      {/* Pricing */}
      <section id="Pricing" className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa in Noida Pricing — Transparent, No Surprises</h2>
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
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Your Spa in Noida Questions, Answered</h2>
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

      {/* Related Services */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Related Services</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full Body Massage in Delhi", href: "/full-body-massage-in-delhi" },
            { title: "B2B Massage in Delhi", href: "/b2b-massage-in-delhi" },
            { title: "Aromatherapy Massage in Noida", href: "/aromatherapy-massage-in-noida" },
            { title: "Couples Massage in Delhi", href: "/couples-massage-in-delhi" },
            { title: "Deep Tissue Massage in Delhi", href: "/deep-tissue-massage-in-delhi" },
            { title: "Thai Massage in Delhi", href: "/thai-massage-in-delhi" },
            { title: "Swedish Massage in Delhi", href: "/swedish-massage-in-delhi" },
            { title: "Sandwich Massage in Delhi", href: "/sandwich-massage-in-delhi" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              {item.title}
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
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Book the Best Spa in Noida — Today</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk into our outlet, or have us come to your hotel or home anywhere in Noida.</p>
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
