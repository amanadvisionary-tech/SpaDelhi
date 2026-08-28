"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCrown,
  FaCreditCard,
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
    title: "Private wellness rooms",
    desc: "Relax in calm, beautifully designed spaces with discreet service and premium comfort.",
  },
  {
    icon: <FaLeaf className="text-2xl text-emerald-600" />,
    title: "Aromatherapy & herbal care",
    desc: "Enjoy therapies infused with calming oils, soothing steam, and natural wellness rituals.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Personalized care",
    desc: "Every session is shaped around your body, mood, and recovery goals.",
  },
];

const services = [
  {
    title: "Deep Tissue Recovery",
    desc: "Ideal for relieving muscle tension and restoring energy after long workdays.",
    icon: <FaHotTub className="text-amber-600" />,
  },
  {
    title: "Couple Wellness Escape",
    desc: "A shared spa experience in a private setting with relaxed ambiance and premium care.",
    icon: <FaHeart className="text-rose-500" />,
  },
  {
    title: "Aromatherapy Ritual",
    desc: "A gentle treatment using soothing scents and oils to calm the mind and body.",
    icon: <FaLeaf className="text-emerald-600" />,
  },
  {
    title: "Full Body Relaxation",
    desc: "A complete reset with smooth techniques that leave you refreshed and recharged.",
    icon: <FaHandSparkles className="text-teal-600" />,
  },
];

const hotelOutlets = [
  {
    title: "Luxury Suites in Pitampura",
    image: "/images/steptodown.com800611.jpg",
    description:
      "Enjoy premium in-room wellness sessions designed for busy professionals, guests, and residents who want privacy and calm without leaving their space.",
  },
  {
    title: "Residential Wellness Visits",
    image: "/images/spa-in-pitampura.png",
    description:
      "Our therapists bring the spa experience directly to your residence with professional setup, clean surroundings, and a peaceful atmosphere.",
  },
  {
    title: "Premium Hotel Partnerships",
    image: "/images/ourPricingBanner.jpeg",
    description:
      "We collaborate with upscale hotels and hospitality spaces to bring trusted body spa services to guests seeking comfort, recovery, and ease.",
  },
  {
    title: "Private Couple Sessions",
    image: "/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg",
    description:
      "Share a quiet, intimate wellness treatment with a partner in a private setting that feels elevated, relaxing, and personal.",
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999",
    desc: "Perfect for a quick reset with comfort, calm, and a premium spa touch.",
    features: ["Oil Massage", "Cream Massage", "Private Setup", "30 min Consultation"],
    icon: <FaSpa className="text-amber-500" />,
    highlight: false,
    badge: "Starter",
  },
  {
    title: "Hotel Outlet",
    price: "₹15000",
    desc: "A luxury wellness experience designed for hotel guests and premium comfort seekers.",
    features: ["Full Body Massage", "Aromatherapy", "In-Room Service", "Premium Amenities"],
    icon: <FaHotel className="text-amber-500" />,
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹20000",
    desc: "An elegant, high-end spa journey with luxury treatment and a five-star atmosphere.",
    features: ["5 Star Property", "Private Suite", "Foreign Therapist", "Extended Wellness Session"],
    icon: <FaCrown className="text-amber-500" />,
    highlight: false,
    badge: "Luxury",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Connect with us",
    text: "Share your preference, preferred timing, and location. We help you choose the right wellness session with ease.",
    icon: <FaPhoneAlt className="text-amber-700" />,
  },
  {
    number: "02",
    title: "Choose your therapy",
    text: "Pick from aromatherapy, full body, couple, deep tissue, or personalized treatments curated for your comfort.",
    icon: <FaClock className="text-amber-700" />,
  },
  {
    number: "03",
    title: "Relax and unwind",
    text: "Arrive, settle in, and enjoy a smooth, professional experience designed to help you feel restored.",
    icon: <FaCheckCircle className="text-amber-700" />,
  },
];

const faqs = [
  {
    question: "What services are available in Pitampura?",
    answer:
      "We offer full body massage, aromatic therapies, couple sessions, deep tissue treatment, and private in-room wellness care tailored to your need.",
  },
  {
    question: "Do you offer home or hotel-based sessions?",
    answer:
      "Yes. We provide professional sessions at premium homes, suites, and selected hotel partner spaces to make your spa experience more convenient.",
  },
  {
    question: "Are the therapists trained and professional?",
    answer:
      "Absolutely. Our therapists are experienced, courteous, and trained to maintain hygiene, comfort, and personalized care throughout the session.",
  },
];

export default function Pitampurapage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f241d]">
      {/* <section className="relative isolate overflow-hidden rounded-b-[40px] bg-[#241913]">
        <div className="absolute inset-0 scale-105 bg-[url('/images/spa-in-Rajouri-Garden.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,_rgba(20,12,8,0.72)_0%,_rgba(56,32,18,0.6)_44%,_rgba(138,74,26,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.16),_transparent_28%)]" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              <FaStar className="text-amber-300" /> Pitampura Spa Experience
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Elevate your comfort in <span className="text-amber-300">Pitampura</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Discover a refined spa experience with private care, elegant ambiance, and treatment options built for relaxation, recovery, and effortless luxury.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send?phone=919217255113" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700">
                <FaWhatsapp /> Book Now
              </a>
              <a href="https://t.me/+a5Bu6FBPN9FlOWM9" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                <FaTelegram /> Meet Our Team
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Private", "Wellness rooms"],
                ["Premium", "Therapists"],
                ["Flexible", "Bookings"],
              ].map(([title, text], index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:justify-self-end"
          >
            <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-white/10 p-3 shadow-[0_25px_90px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="rounded-[24px] border border-amber-200/20 bg-[#fffaf4]/95 p-6 text-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                  <FaCrown className="text-amber-600" /> Signature Wellness
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  A calm, luxury-first escape in the heart of Pitampura.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  From private in-room comfort to premium outlet sessions, every visit is shaped around tranquility, precision, and a polished experience.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    [<FaCheckCircle key="check" className="text-amber-600" />, "Professional care & hygiene"],
                    [<FaClock key="clock" className="text-amber-600" />, "Flexible appointments"],
                    [<FaHeart key="heart" className="text-amber-600" />, "Comfort-focused care"],
                    [<FaSpa key="spa" className="text-amber-600" />, "Tailored wellness rituals"],
                  ].map(([icon, text], index) => (
                    <div key={index} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white p-3">
                      <div className="mt-0.5 text-lg">{icon}</div>
                      <p className="text-sm font-medium text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute inset-0 bg-[url('/images/steptodown.com800611.jpg')] bg-cover bg-center opacity-10" />
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
              <FaStar className="text-amber-500" /> NEW PITAMPURA WELLNESS OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3a2e2a] md:text-5xl lg:text-5xl">
              Premium spa comfort in <span className="text-amber-700">Pitampura</span>, crafted for calm, modern living.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Discover a refined wellness experience with Spa Delhi in Pitampura. Enjoy private sessions, luxury care, and professional treatments designed to help you relax, recharge, and feel restored.
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
                <Image src="/images/luxurySpaRoom.jpg" alt="Elegant spa treatment in Pitampura" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-sm text-gray-600">Best for</p>
              <p className="font-semibold text-amber-700">Relaxation, recovery & privacy</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Pitampura Chooses Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A balanced blend of luxury, comfort, and focused wellness.</h2>
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

      <section className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-amber-200 bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Signature experience</p>
            <h3 className="mt-3 text-3xl font-bold text-[#3a2e2a]">A spa visit designed around calm, not rush.</h3>
            <p className="mt-4 leading-relaxed text-gray-700">
              Whether you want a quick reset after work or a long evening of unwinding, our Pitampura spa experience creates privacy, comfort, and treatment quality that feels personal from the very first moment.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-xl">{service.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#3a2e2a]">{service.title}</h4>
                    <p className="mt-2 text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Premium wellness spaces</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Flexible services for homes, suites, and guest-ready spaces.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {hotelOutlets.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#3a2e2a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7efe8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Pricing options</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A premium range of spa experiences for every kind of relaxation.</h2>
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Explore More</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Our Other Services & Nearby Locations</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full Body Massage", href: "/full-body-massage-in-delhi" },
            { title: "Sandwich Massage", href: "/sandwich-massage-in-delhi" },
            { title: "B2B Massage", href: "/b2b-massage-in-delhi" },
            { title: "Couples Massage", href: "/couples-massage-in-delhi" },
            { title: "Spa in Rajouri Garden", href: "/spa-in-rajouri-garden" },
            { title: "Spa in Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
            { title: "Spa in Connaught Place", href: "/spa-in-connaught-place" },
            { title: "Spa Price in Delhi", href: "/spa-price-in-delhi" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-amber-100 bg-white p-5 text-center font-semibold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#3a2e2a] to-[#5b3f31] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve a peaceful escape in Pitampura today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in with your comfort in mind or connect with us for a personalized booking and location guidance.</p>
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
