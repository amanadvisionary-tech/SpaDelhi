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
  FaPlaneDeparture,
  FaSpa,
  FaStar,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaSpa className="text-2xl text-amber-600" />,
    title: "Private wellness rooms in Mahipalpur",
    desc: "Relax in clean, private treatment rooms designed for total comfort, right in the heart of Mahipalpur's hotel district.",
  },
  {
    icon: <FaPlaneDeparture className="text-2xl text-sky-600" />,
    title: "Convenient for airport travellers",
    desc: "Just minutes from IGI Airport Terminal 3 and the NH8 hotel belt, ideal for a relaxing session before or after your flight.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Outlet, home & hotel spa options",
    desc: "Visit our Mahipalpur spa outlet, or book a home spa or hotel spa session at any nearby hotel or residence.",
  },
];

const services = [
  {
    title: "Full Body Massage in Mahipalpur",
    desc: "A complete relaxation session that eases muscle tension, improves blood circulation, and refreshes you from head to toe.",
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
    title: "Couple Massage in Mahipalpur",
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
    title: "Aromatherapy Massage",
    desc: "Calming essential oils combined with gentle massage strokes to relax the mind, perfect after a long flight or work week.",
    icon: <FaHandSparkles className="text-teal-600" />,
    href: "/aromatherapy-massage-in-delhi",
  },
];

const nearbyAreas = [
  {
    title: "Vasant Kunj",
    href: "/spa-in-vasant-kunj",
    image: "/images/hotel1.jpeg",
    description:
      "Guests from Vasant Kunj regularly visit our Mahipalpur outlet for a relaxing full body or deep tissue massage session.",
  },
  {
    title: "Aerocity",
    href: "/spa-in-aerocity",
    image: "/images/hotel2.jpg",
    description:
      "A short drive from Aerocity's 5-star hotels brings you to our hygienic, professionally staffed Mahipalpur outlet.",
  },
  {
    title: "Rangpuri",
    image: "/images/hotel3.webp",
    description:
      "Residents near Rangpuri and the NH8 service road appreciate the short travel time and calm, private setting at our Mahipalpur spa.",
  },
  {
    title: "Samalka",
    image: "/images/hotel4.jpg",
    description:
      "A quick drive from Samalka and the surrounding areas brings you to our hygienic, professionally staffed Mahipalpur outlet.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Connect with us",
    text: "Share your preferred treatment, timing, and hotel or location in Mahipalpur. Our team helps you choose the right session with ease.",
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
    text: "Arrive at our Mahipalpur outlet, or welcome our therapist at your hotel or home, and enjoy a smooth, professional session.",
    icon: <FaCheckCircle className="text-amber-700" />,
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999",
    desc: "Perfect for a quick, relaxing reset at our Mahipalpur outlet with premium oils and complete privacy.",
    features: ["Oil Massage", "Cream Massage", "Private Room", "30 min Consultation"],
    icon: <FaSpa className="text-amber-500" />,
    highlight: false,
    badge: "Starter",
  },
  {
    title: "Hotel Spa",
    price: "₹20000",
    desc: "A comprehensive luxury spa experience delivered straight to your hotel room in the Mahipalpur belt, ideal for layovers and business trips.",
    features: ["5 Star Property", "Private Suite", "Foreign Therapist", "120 min Session"],
    icon: <FaHotel className="text-amber-500" />,
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Home Spa",
    price: "₹15000",
    desc: "A premium at-home wellness session anywhere in Mahipalpur, Vasant Kunj or nearby South West Delhi.",
    features: ["Full Body Massage", "Aromatherapy", "Private Setting", "90 min Session"],
    icon: <FaCrown className="text-amber-500" />,
    highlight: false,
    badge: "Flexible",
  },
];

const faqs = [
  {
    question: "What is the first visit offer for spa in Mahipalpur?",
    answer:
      "Our spa in Mahipalpur offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Mahipalpur at an affordable price.",
  },
  {
    question: "Is your spa near IGI Airport and the Mahipalpur hotel belt?",
    answer:
      "Yes, our Mahipalpur spa outlet is conveniently located right in the hotel belt along NH8, just minutes from IGI Airport Terminal 3, making it an easy stop before or after a flight.",
  },
  {
    question: "Do you provide hotel spa service in Mahipalpur?",
    answer:
      "Yes, hotel spa is one of our most popular services in Mahipalpur given the dense concentration of hotels here. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your hotel room.",
  },
  {
    question: "Are your therapists trained and certified?",
    answer:
      "Absolutely. Every therapist at our Mahipalpur spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
  },
  {
    question: "Can I book a couple massage in Mahipalpur?",
    answer:
      "Yes, our Mahipalpur outlet has private rooms designed for couple massage, including our popular female to male couple massage, allowing two people to relax together in a comfortable, peaceful setting.",
  },
  {
    question: "Do you have Russian or other foreign therapists available in Mahipalpur?",
    answer:
      "Yes, our Russian spa in Mahipalpur packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
  },
  {
    question: "What are your spa timings in Mahipalpur? Do you offer night spa appointments?",
    answer:
      "Our Mahipalpur outlet and hotel spa booking support are available with flexible daily timings, including evening and night spa appointments booked in advance through our 24/7 help desk, ideal for guests with late-night flights.",
  },
  {
    question: "How much does a full body massage cost in Mahipalpur?",
    answer:
      "A full body massage at our Mahipalpur outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
  },
];

export default function MahipalpurPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f241d]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,_#fef7ed_0%,_#fffaf5_45%,_#fef3f2_100%)]">
        <div className="absolute inset-0 bg-[url('/images/pexels-shlok-rana-2150773572-32834140.jpg')] bg-cover bg-center opacity-10" />
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
              <FaStar className="text-amber-500" /> MAHIPALPUR WELLNESS OUTLET
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3a2e2a] md:text-5xl lg:text-5xl">
              Best Spa in <span className="text-amber-700">Mahipalpur</span> Near IGI Airport
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for a trusted spa in Mahipalpur? Spa Delhi brings professional full body massage, deep tissue therapy, aromatherapy, and hotel spa services to Mahipalpur's hotel belt, just minutes from IGI Airport Terminal 3. Every session is performed by certified therapists in a clean, private, and relaxing setting.
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
                <Image src="/images/pexels-shlok-rana-2150773572-32834140.jpg" alt="Relaxing spa treatment in Mahipalpur" fill className="object-cover" />
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Mahipalpur Chooses Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">A trusted massage centre in Mahipalpur, built on comfort and hygiene.</h2>
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

      {/* Long-form SEO content */}
      <section className="bg-[#fdf2e8] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About Our Mahipalpur Outlet</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Spa in Mahipalpur — A Trusted Full Body & Hotel Spa Wellness Centre</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              If you have been searching for a genuine spa in Mahipalpur, Spa Delhi is here to help you relax, recharge, and relieve everyday stress. We offer a complete range of massage services in Mahipalpur, including{" "}
              <Link href="/full-body-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">full body massage</Link>,{" "}
              <Link href="/deep-tissue-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">deep tissue massage</Link>,{" "}
              <Link href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">sandwich massage</Link>,{" "}
              <Link href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">B2B massage</Link>,{" "}
              <Link href="/couples-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">couple massage</Link>, and{" "}
              <Link href="/aromatherapy-massage-in-delhi" className="font-medium text-amber-700 underline hover:text-amber-800">aromatherapy massage</Link>. Whether you are staying at one of Mahipalpur's many hotels, flying out of IGI Airport, or simply visiting South West Delhi, our spa is designed to give you a calm escape at prices that start from just ₹1999 for your first visit.
            </p>
            <p>
              Our Mahipalpur spa outlet is conveniently located right in the NH8 hotel belt, just minutes from IGI Airport Terminal 3, making it an easy stop for guests travelling from Vasant Kunj, Aerocity, Rangpuri, and Samalka. Because Mahipalpur is home to dozens of budget and mid-range hotels catering to airport travellers, hotel spa in Mahipalpur is one of our most requested services here — our therapist can reach your room directly with everything needed for a relaxing session. If you prefer to visit us instead, our outlet is easy to find and just as convenient.
            </p>
            <p>
              Every therapist at our massage centre in Mahipalpur is trained and experienced. Our Russian spa in Mahipalpur packages pair you with experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff, so you can choose the style and pace that suits you best. We follow strict hygiene protocols at every outlet, using fresh towels, sanitised rooms, and premium massage oils for each guest. Whether you are looking for a body massage near me in Mahipalpur for quick stress relief before a flight or a longer wellness package for deeper relaxation, our team adjusts pressure, duration, and technique to match your comfort level.
            </p>
            <p>
              Booking a spa in Mahipalpur with us is simple and transparent — there are no hidden charges, and you can confirm your appointment directly over WhatsApp or Telegram. We offer flexible timings throughout the week, including evening and night spa appointments booked in advance through our 24/7 help desk — especially useful for guests with early morning or late-night flights — plus same-day bookings when slots are available and clear pricing across our outlet, home spa, and hotel spa packages. From a relaxing solo session to a female to male couple massage in Mahipalpur, Spa Delhi makes it easy to prioritise your wellness before or after your trip.
            </p>
            <p>
              Many of our regular guests first search for a spa near me in Mahipalpur before discovering that Spa Delhi offers far more variety than a typical neighbourhood parlour. Alongside classic full body massage and deep tissue therapy, we also offer specialised treatments such as sandwich massage, where two therapists work in sync for faster relief, and B2B massage for guests who want a deeply relaxing, full-contact session — you can read our guide on{" "}
              <Link href="/is-b2b-massage-legal-in-india" className="font-medium text-amber-700 underline hover:text-amber-800">whether body to body massage is legal in India</Link> if you have questions before booking. If you are a business traveller, a frequent flyer, or simply want a regular self-care routine, our Mahipalpur team can recommend the right combination of treatments and packages to suit your goals, budget, and available time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Massage services available at our Mahipalpur spa.</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Areas We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3a2e2a] md:text-4xl">Conveniently located near these Mahipalpur neighbourhoods.</h2>
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

      {/* Why choose us — additional SEO block */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-lg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why Choose Spa Delhi</p>
          <h2 className="mt-3 text-2xl font-bold text-[#3a2e2a] md:text-3xl">The best spa in Mahipalpur for trusted, professional care.</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            With more than a decade of experience and{" "}
            <Link href="/outlets" className="font-medium text-amber-700 underline hover:text-amber-800">24+ outlets across Delhi NCR</Link>, Spa Delhi has become a name that guests in Mahipalpur and South West Delhi trust for genuine, professional massage services. When you search for a massage centre in Mahipalpur or a body massage near me, you want assurance of safety, hygiene, and skilled hands — and that is exactly what we deliver at every session. Our therapists undergo regular training, our treatment rooms are cleaned and sanitised between every guest, and our pricing stays transparent from the moment you enquire to the moment you book.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Beyond our Mahipalpur outlet, we also serve nearby areas including Rangpuri and Samalka with the same quality of home spa and hotel spa service. Whether you need a spa near IGI Airport for a quick visit before your flight, or a longer, more indulgent wellness package on the weekend near our{" "}
            <Link href="/spa-in-vasant-kunj" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Vasant Kunj</Link> or{" "}
            <Link href="/spa-in-aerocity" className="font-medium text-amber-700 underline hover:text-amber-800">spa in Aerocity</Link>, Spa Delhi is ready to help you feel your best.
          </p>
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
            { title: "Spa in Vasant Kunj", href: "/spa-in-vasant-kunj" },
            { title: "Spa in Aerocity", href: "/spa-in-aerocity" },
            { title: "Spa Price in Delhi", href: "/spa-price-in-delhi" },
            { title: "Spa Therapist Jobs", href: "/spa-therapist-jobs-in-delhi" },
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#3a2e2a] to-[#5b3f31] p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book your visit</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Reserve a peaceful escape in Mahipalpur today.</h3>
              <p className="mt-3 leading-relaxed text-white/80">Walk in with your comfort in mind, or connect with us for a personalised hotel spa or home spa booking anywhere in Mahipalpur before or after your flight.</p>
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
