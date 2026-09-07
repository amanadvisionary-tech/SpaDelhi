'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaSpa,
  FaHotel,
  FaCrown,
  FaStar,
  FaCheckCircle,
  FaHandSparkles,
  FaLeaf,
  FaHotTub,
  FaTelegram,
  FaClock,
  FaPhoneAlt,
  FaCreditCard,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaChevronDown
} from 'react-icons/fa';

export default function SpaInSaket() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured Schema for LocalBusiness, FAQ, and Breadcrumb
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://www.spadelhi.com/spa-in-saket/#business",
        "name": "Spa Delhi - Luxury Spa in Saket",
        "alternateName": "Body Massage Centre in Saket South Delhi",
        "image": "https://www.spadelhi.com/images/steptodown.com800611.jpg",
        "description": "Clean, relaxing, and affordable spa in Saket, South Delhi. Offering full body massage, deep tissue, Swedish, B2B, and couple massage therapies in 5-star hotel setups near Select Citywalk.",
        "url": "https://www.spadelhi.com/spa-in-saket",
        "telephone": "+919217255113",
        "priceRange": "₹1999 - ₹4999",
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
        "currenciesAccepted": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "District Centre, Sector 6, Pushp Vihar",
          "addressLocality": "Saket",
          "addressRegion": "Delhi",
          "postalCode": "110017",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.5244,
          "longitude": 77.2177
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "closes": "23:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.spadelhi.com/spa-in-saket/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.spadelhi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Spa in Delhi",
            "item": "https://www.spadelhi.com/massage-service-in-delhi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Spa in Saket",
            "item": "https://www.spadelhi.com/spa-in-saket"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.spadelhi.com/spa-in-saket/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What kinds of massages can I get at your Saket spa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer all popular relaxation therapies including Swedish Full Body Massage, Deep Tissue Muscle Relief, Authentic Thai Stretching, Aromatherapy, B2B Therapy, Sandwich (4-Hand) Massage, and Private Couple Spa packages."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a massage session in Saket?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Booking is quick and easy. Simply send us a message on WhatsApp at +91 9217255113 or reach out on Telegram. Our team will share available slots, answer any questions, and confirm your private room within a few minutes."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a massage in Saket cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our first-visit full body massage sessions start at just ₹1999 for 60 minutes. We have clear, transparent pricing with no hidden charges, and you can pay via UPI, cash, or card."
            }
          },
          {
            "@type": "Question",
            "name": "Are the therapists trained and certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our therapists are certified professionals with years of experience. We have both skilled Indian and international masseuses who focus on your personal comfort and preferred pressure."
            }
          },
          {
            "@type": "Question",
            "name": "Where in Saket are you located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our spa rooms are located in the Saket District Centre area, right next to Select Citywalk Mall and close to Saket Metro Station, with easy parking and total privacy."
            }
          },
          {
            "@type": "Question",
            "name": "Can couples book a private room together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We have dedicated couple suites featuring two massage tables, soothing lighting, fresh towels, and an optional warm Jacuzzi bath for a peaceful shared experience."
            }
          }
        ]
      }
    ]
  };

  const hotelOutlets = [
    {
      title: "Sheraton New Delhi Hotel Saket",
      description:
        "Enjoy a quiet, 5-star atmosphere inside the Saket District Centre. Perfect for unwinding with skilled therapists in spacious private suites.",
      image: "/images/hotel1.jpeg",
      landmark: "Saket District Centre",
    },
    {
      title: "Hilton Garden Inn (Select Citywalk)",
      description:
        "Located right next to Select Citywalk Mall. An ideal spot to drop in after shopping or work for relaxing aroma oil massages.",
      image: "/images/hotel2.jpg",
      landmark: "Next to Select Citywalk",
    },
    {
      title: "Svelte Hotel & Personal Suites Saket",
      description:
        "Experience peaceful in-room massage therapies with certified masseuses offering traditional Thai stretching and gentle reflexology.",
      image: "/images/hotel3.webp",
      landmark: "A-3 District Centre Saket",
    },
    {
      title: "Country Inn & Suites Saket",
      description:
        "Close to Saket Metro Station. Spotlessly clean rooms with attached hot showers, herbal oils, and couple massage setups.",
      image: "/images/hotel4.jpg",
      landmark: "Near Saket Metro Station",
    },
  ];

  const services = [
    {
      title: "Full Body Massage",
      description:
        "A soothing 60 to 90-minute massage using warm natural oils to release everyday stress, ease tight muscles, and help you sleep better.",
      icon: <FaHandSparkles className="text-2xl" />,
      url: "/full-body-massage-in-delhi",
      badge: "Most Popular",
    },
    {
      title: "B2B Massage Therapy",
      description:
        "A close, relaxing body-to-body massage with warm essential oils designed to melt away physical fatigue and calm your mind.",
      icon: <FaSpa className="text-2xl" />,
      url: "/b2b-massage-in-delhi",
      badge: "Signature",
    },
    {
      title: "Sandwich Massage",
      description:
        "Experience two therapists working in smooth harmony to double your relaxation and relieve stubborn body stiffness.",
      icon: <FaLeaf className="text-2xl" />,
      url: "/sandwich-massage-in-delhi",
      badge: "Exclusive",
    },
    {
      title: "Couple Massage",
      description:
        "A private room for you and your partner with twin massage tables, gentle aroma oils, and an optional warm Jacuzzi bath.",
      icon: <FaHotTub className="text-2xl" />,
      url: "/couple-massage-in-saket",
      badge: "Private Suite",
    },
  ];

  const nearbyLocations = [
    { name: "Greater Kailash", url: "/spa-in-greater-kailash", tag: "South Delhi" },
    { name: "Kalkaji", url: "/spa-in-kalkaji", tag: "South Delhi" },
    { name: "Lajpat Nagar", url: "/spa-in-lajpat-nagar", tag: "South Delhi" },
    { name: "Aerocity", url: "/spa-in-aerocity", tag: "Near Airport" },
    { name: "Connaught Place", url: "/spa-in-connaught-place", tag: "Central Delhi" },
    { name: "Gurgaon", url: "/spa-in-gurgaon", tag: "Cyber Hub / Golf Course" },
    { name: "Noida", url: "/spa-in-noida", tag: "Sector 18 / Express" },
    { name: "Pitampura", url: "/spa-in-pitampura", tag: "North West Delhi" },
  ];

  const SERVICES_LEFT = [
    {
      id: 1,
      title: "Swedish Full Body Massage",
      subtitle: "Gentle Relaxation & Better Sleep",
      desc:
        "Long, smooth strokes with warm almond or olive oil that improve blood flow, calm your nervous system, and leave you feeling light and relaxed.",
      chips: ["Relaxing", "Stress Relief", "Aroma Oils"],
      time: "60 / 90 Mins",
      price: "From ₹1999",
      image: "/images/staff10.jpg",
    },
    {
      id: 2,
      title: "Deep Tissue Massage",
      subtitle: "Relief for Stiff Neck & Back",
      desc:
        "Focused firm pressure that targets tight knots and sore muscles caused by long hours of sitting, gym workouts, or daily driving.",
      chips: ["Firm Pressure", "Knot Release", "Pain Relief"],
      time: "60 / 90 Mins",
      price: "From ₹2999",
      image: "/images/spaexpert3.webp",
    },
  ];

  const SERVICES_RIGHT = [
    {
      id: 3,
      title: "Thai Stretching & Herbal Potli",
      subtitle: "Flexibility & Joint Relief",
      desc:
        "Traditional assisted stretches combined with warm herbal compress balls to loosen stiff joints, improve posture, and boost natural energy.",
      chips: ["Thai Therapy", "Warm Potli", "Joint Care"],
      time: "60 / 90 Mins",
      price: "From ₹2499",
      image: "/images/staff11.jpg",
    },
    {
      id: 4,
      title: "Private Couple Spa Session",
      subtitle: "Quality Time with Your Partner",
      desc:
        "Enjoy a calm, candlelit room with two therapists working at the same time. Includes a soothing foot wash and optional Jacuzzi soak.",
      chips: ["Couple Suite", "Twin Beds", "Jacuzzi"],
      time: "90 / 120 Mins",
      price: "From ₹4999",
      image: "/images/Couple Massage.webp",
    },
  ];

  const topSteps = [
    {
      title: "1. Pick Your Massage",
      text:
        "Choose what your body needs today — from relaxing Swedish strokes to deep muscle relief or couple sessions.",
      icon: <FaSpa className="text-2xl text-amber-600" />,
    },
    {
      title: "2. Message Us on WhatsApp",
      text:
        "Send us a quick WhatsApp text. Tell us your preferred time slot and any specific therapist requests.",
      icon: <FaPhoneAlt className="text-2xl text-amber-600" />,
    },
    {
      title: "3. Quick Confirmation",
      text:
        "We confirm your room instantly and send you the exact location details near Saket District Centre.",
      icon: <FaClock className="text-2xl text-amber-600" />,
    },
  ];

  const bottomSteps = [
    {
      title: "4. Walk In & Unwind",
      text:
        "Arrive at our clean, air-conditioned suite. We welcome you with warm green tea and adjust oil preferences.",
      icon: <FaCreditCard className="text-xl text-amber-600" />,
    },
    {
      title: "5. Leave Feeling Refreshed",
      text:
        "Enjoy your private hot shower, change into fresh clothes, and step out feeling completely rejuvenated.",
      icon: <FaCrown className="text-xl text-amber-600" />,
    },
  ];

  const pricingPlans = [
    {
      title: "Classic Relaxation",
      description: "Great for quick stress relief after a busy workday.",
      price: "₹1999",
      icon: <FaSpa />,
      highlight: false,
      features: [
        "Full 60-Minute Body Massage",
        "Warm Olive or Almond Oil",
        "Certified Friendly Masseuse",
        "Private Air-Conditioned Room",
        "Attached Hot Shower & Fresh Towels",
      ],
    },
    {
      title: "Premium 5-Star Experience",
      description: "Our most popular choice for complete muscle recovery.",
      price: "₹2999",
      icon: <FaCrown />,
      highlight: true,
      features: [
        "75-Minute Swedish or Deep Tissue",
        "Pure Essential Aromatherapy Oils",
        "Senior International/Indian Therapist",
        "Luxury Hotel Suite Ambience",
        "Warm Green Tea & Steam Access",
        "Custom Pressure Adjustments",
      ],
    },
    {
      title: "VIP Couple / 4-Hand Luxury",
      description: "The ultimate pampering package for special days.",
      price: "₹4999",
      icon: <FaHotel />,
      highlight: false,
      features: [
        "90-Minute Couple or 4-Hand Massage",
        "Private VIP Suite with Jacuzzi Tub",
        "Two Senior Therapists",
        "Herbal Potli Compress & Foot Scrub",
        "Rose Petal Ambiance & Soothing Music",
        "Priority 24/7 Booking Slot",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Choose How You Want to Relax",
      description:
        "Tell us what you are feeling — whether it is general tiredness, back stiffness, or just needing quiet downtime.",
      image: "/images/staff10.jpg",
    },
    {
      number: "02",
      title: "Confirm in Under 2 Minutes",
      description:
        "Our team replies immediately on WhatsApp to hold your preferred therapist and private room.",
      image: "/images/spaexpert3.webp",
    },
    {
      number: "03",
      title: "Enjoy Your Private Session",
      description:
        "Step into a sanitized room with calming aromas, soothing music, and skilled hands that relieve all your stress.",
      image: "/images/luxurySpaRoom.jpg",
    },
  ];

  const faqs = [
    {
      question: "What kinds of massages can I get at your Saket spa?",
      answer:
        "We offer all popular relaxation therapies including Swedish Full Body Massage, Deep Tissue Muscle Relief, Authentic Thai Stretching, Aromatherapy, B2B Therapy, Sandwich (4-Hand) Massage, and Private Couple Spa packages.",
      icon: <FaSpa className="text-amber-600" />,
    },
    {
      question: "How do I book a massage session in Saket?",
      answer:
        "Booking is quick and easy. Simply send us a message on WhatsApp at +91 9217255113 or reach out on Telegram. Our team will share available slots, answer any questions, and confirm your private room within a few minutes.",
      icon: <FaPhoneAlt className="text-amber-600" />,
    },
    {
      question: "How much does a massage in Saket cost?",
      answer:
        "Our first-visit full body massage sessions start at just ₹1999 for 60 minutes. We have clear, transparent pricing with no hidden charges, and you can pay via UPI, cash, or card.",
      icon: <FaCreditCard className="text-amber-600" />,
    },
    {
      question: "Are the therapists trained and certified?",
      answer:
        "Yes, all our therapists are certified professionals with years of experience. We have both skilled Indian and international masseuses who focus on your personal comfort and preferred pressure.",
      icon: <FaUserCheck className="text-amber-600" />,
    },
    {
      question: "Where in Saket are you located?",
      answer:
        "Our spa rooms are located in the Saket District Centre area, right next to Select Citywalk Mall and close to Saket Metro Station, with easy parking and total privacy.",
      icon: <FaMapMarkerAlt className="text-amber-600" />,
    },
    {
      question: "Can couples book a private room together?",
      answer:
        "Yes! We have dedicated couple suites featuring two massage tables, soothing lighting, fresh towels, and an optional warm Jacuzzi bath for a peaceful shared experience.",
      icon: <FaHotTub className="text-amber-600" />,
    },
  ];

  return (
    <main className="overflow-hidden bg-stone-50">
      {/* JSON-LD Schema Markup for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 border border-amber-300 rounded-full text-amber-900 font-semibold text-sm mb-6 shadow-sm">
              <FaStar className="text-amber-500" />
              <span>Clean, Private & Trusted Spa in Saket</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
              Best{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Spa in Saket
              </span>{' '}
              Delhi
            </h1>

            <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mb-6 font-medium">
              Feeling tired, stressed, or dealing with stiff back and shoulder muscles? At Spa Delhi,
              we make it easy to relax. Enjoy genuine{' '}
              <Link
                href="/full-body-massage-in-delhi"
                title="Full Body Massage Services in Delhi"
                className="text-amber-700 underline font-semibold hover:text-amber-900"
              >
                full body massages
              </Link>
              , soothing Swedish therapy, deep muscle recovery, and private couple spa sessions
              at top 5-star hotel locations right next to Select Citywalk in Saket.
            </p>

            <p className="text-stone-600 leading-relaxed max-w-2xl mb-8 text-sm md:text-base">
              Every session is customized to your liking. You get a completely private, clean room
              with an attached hot shower, fresh towels, peaceful music, and certified therapists
              who know how to relieve your fatigue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://api.whatsapp.com/send?phone=919217255113"
                title="Book Spa Services in Saket on WhatsApp"
                aria-label="Book Spa Services in Saket on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base"
              >
                <FaPhoneAlt />
                <span>Book Instant Slot on WhatsApp</span>
              </a>

              <a
                href="https://t.me/+a5Bu6FBPN9FlOWM9"
                title="Connect with Spa Delhi on Telegram for Saket Outlets"
                aria-label="Connect with Spa Delhi on Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-amber-800 border-2 border-amber-300 font-semibold shadow-md hover:bg-amber-50 hover:scale-105 transition-all text-base"
              >
                <FaTelegram className="text-xl text-sky-500" />
                <span>Chat on Telegram</span>
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-amber-200/80 max-w-xl">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-800">4.9★</h3>
                <p className="text-xs md:text-sm text-stone-600 font-medium">180+ Happy Guests</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-800">100%</h3>
                <p className="text-xs md:text-sm text-stone-600 font-medium">Private & Clean</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-800">₹1999</h3>
                <p className="text-xs md:text-sm text-stone-600 font-medium">First Visit Offer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/steptodown.com800611.jpg"
                alt="Clean and Peaceful Spa Room in Saket Delhi"
                title="Best Spa and Massage Centre in Saket Delhi"
                width={700}
                height={700}
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-amber-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FaSpa className="text-amber-700 text-2xl" />
                    </div>
                    <div>
                      <h2 className="font-bold text-stone-900 text-lg">
                        Relaxation You Can Trust
                      </h2>
                      <p className="text-xs md:text-sm text-stone-600">
                        Private Rooms • Hot Showers • Fresh Towels • Zero Hidden Fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-300 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-200 rounded-full opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Hotel Outlets Section */}
      <section className="py-20 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-700 font-semibold tracking-widest text-sm uppercase">
              PREMIUM LOCATIONS IN SAKET
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-3 mb-5">
              Our 5-Star Hotel Spa Outlets{' '}
              <span className="text-amber-700">in Saket</span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              We partner with trusted 5-star hotel properties across Saket to give you a peaceful,
              clean, and safe space to relax.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelOutlets.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-amber-50/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-amber-100 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={`${hotel.title} - Spa in Saket Delhi`}
                      title={hotel.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <FaMapMarkerAlt className="text-amber-400" />
                      <span>{hotel.landmark}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
                      {hotel.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {hotel.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <a
                    href="https://api.whatsapp.com/send?phone=919217255113"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Book spa appointment at ${hotel.title}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Check Availability</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Working Internal Links */}
      <section className="py-20 bg-gradient-to-b from-amber-50/60 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-700 font-semibold tracking-widest text-sm uppercase">
              CHOOSE YOUR THERAPY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-3 mb-5">
              Popular Massage Therapies{' '}
              <span className="text-amber-700">in Saket</span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Whether you want soft relaxing strokes or firm muscle pressure, our certified
              therapists customize every session for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-amber-100 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shadow-inner">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.url}
                  title={`View details for ${service.title} in Delhi`}
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center justify-between text-amber-700 font-semibold hover:text-amber-900 pt-4 border-t border-stone-100 transition-colors"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Showcase Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-amber-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-amber-100 to-amber-50 p-2 rounded-3xl shadow-xl">
                <div className="bg-white p-6 md:p-8 rounded-2xl">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src="/images/spa-treatments.jpg"
                      alt="Luxury Body Massage & Spa Treatment in Saket, South Delhi"
                      title="Body Massage Treatment in Saket"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      Special First-Visit Offer
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-stone-900">
                          Complete Body Refresh
                        </h3>
                        <p className="text-sm text-stone-500">
                          Saket District Centre, South Delhi
                        </p>
                      </div>
                      <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-right">
                        <span className="font-bold text-lg">₹1999</span>
                        <span className="text-xs block text-stone-600">60-Min Session</span>
                      </div>
                    </div>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Private & Air-Conditioned Rooms</span>
                      </li>
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Couple Rooms with Jacuzzi</span>
                      </li>
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Natural Essential Oils</span>
                      </li>
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Trained & Polite Therapists</span>
                      </li>
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Attached Hot Water Shower</span>
                      </li>
                      <li className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-2 flex-shrink-0" />
                        <span>Fresh Towels & Disposable Sheets</span>
                      </li>
                    </ul>

                    <a
                      href="https://api.whatsapp.com/send?phone=919217255113"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Book Spa Services in Saket on WhatsApp"
                      className="mt-6 w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-3 transition-all shadow-md"
                    >
                      <FaPhoneAlt />
                      <span>Book on WhatsApp @ ₹1999</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="max-w-xl">
                <span className="text-amber-700 font-semibold tracking-widest text-sm uppercase">
                  WHY VISIT US
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">
                  Looking for a Clean, Trusted{' '}
                  <span className="text-amber-700">Massage Spa in Saket?</span>
                </h2>

                <p className="text-base md:text-lg text-stone-600 mb-5 leading-relaxed">
                  We know that finding a genuinely clean, professional, and comfortable spa
                  in South Delhi can sometimes feel difficult. At Spa Delhi, we keep things
                  straightforward: certified therapists, honest pricing, and complete privacy.
                </p>

                <p className="text-stone-600 mb-6 leading-relaxed">
                  Whether you want to ease tight neck muscles from long desk work, soothe your
                  legs after a shopping trip at Select Citywalk, or enjoy a quiet couple session,
                  our therapists adjust their pressure and technique to make sure you walk out
                  feeling lighter and relaxed.
                </p>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 flex items-start gap-3">
                    <FaStar className="text-amber-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm">
                        5-Star Ambience
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Clean, quiet, and peaceful
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 flex items-start gap-3">
                    <FaShieldAlt className="text-amber-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm">
                        Trained Masseuses
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Polite & verified therapists
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 flex items-start gap-3">
                    <FaHotTub className="text-amber-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm">
                        Couple Friendly
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Dedicated private suites
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 flex items-start gap-3">
                    <FaLeaf className="text-amber-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm">
                        Natural Oils
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Skin-friendly herbal blends
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/spa-price-in-delhi"
                    title="View Spa Packages and Prices in Delhi"
                    className="text-center px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl shadow-md transition-all"
                  >
                    View Pricing Menu
                  </Link>

                  <a
                    href="https://api.whatsapp.com/send?phone=919217255113"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Book Body Massage in Saket on WhatsApp"
                    className="text-center px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl shadow-md transition-all"
                  >
                    Book Your Slot
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Offerings Grid */}
      <section className="bg-gradient-to-b from-[#fcf7f4] to-[#f8f0eb] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-amber-700 tracking-widest uppercase">
              TREATMENTS TAILORED FOR YOU
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4 font-serif">
              Our Signature Massages in Saket
            </h2>
            <div className="mx-auto w-24 h-1 bg-amber-600 rounded-full mb-4"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">
              Pick the right treatment for your mood — whether you want light pressure to fall asleep
              or deep pressure to get rid of muscle knots.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {SERVICES_LEFT.map((s, idx) => (
                <motion.div
                  key={s.id}
                  className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-xl transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="md:flex gap-6 items-center">
                    <div className="relative w-full md:w-48 h-44 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={s.image}
                        alt={`${s.title} - Massage in Saket`}
                        title={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-4 md:mt-0 flex-1">
                      <h3 className="text-xl font-bold text-stone-900">{s.title}</h3>
                      <p className="text-xs text-amber-700 font-semibold uppercase mt-0.5">
                        {s.subtitle}
                      </p>
                      <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {s.chips.map((c, i) => (
                          <span
                            key={i}
                            className="bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded-md font-medium border border-amber-100"
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-stone-100">
                        <span className="text-sm font-bold text-amber-800">
                          {s.time} • {s.price}
                        </span>
                        <a
                          href="https://api.whatsapp.com/send?phone=919217255113"
                          target="_blank"
                          rel="noreferrer"
                          title={`Book ${s.title} in Saket`}
                          className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-xs font-semibold shadow transition-all"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {SERVICES_RIGHT.map((s, idx) => (
                <motion.div
                  key={s.id}
                  className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-xl transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="md:flex gap-6 items-center">
                    <div className="relative w-full md:w-48 h-44 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={s.image}
                        alt={`${s.title} - Massage in Saket`}
                        title={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-4 md:mt-0 flex-1">
                      <h3 className="text-xl font-bold text-stone-900">{s.title}</h3>
                      <p className="text-xs text-amber-700 font-semibold uppercase mt-0.5">
                        {s.subtitle}
                      </p>
                      <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {s.chips.map((c, i) => (
                          <span
                            key={i}
                            className="bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded-md font-medium border border-amber-100"
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-stone-100">
                        <span className="text-sm font-bold text-amber-800">
                          {s.time} • {s.price}
                        </span>
                        <a
                          href="https://api.whatsapp.com/send?phone=919217255113"
                          target="_blank"
                          rel="noreferrer"
                          title={`Book ${s.title} in Saket`}
                          className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-xs font-semibold shadow transition-all"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="Pricing"
        className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/70 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 bg-amber-100 rounded-full text-amber-800 font-semibold text-xs uppercase tracking-wider">
              <FaStar className="text-amber-500" />
              <span>Affordable & Clear Rates</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif mb-4">
              Spa & Massage{' '}
              <span className="text-amber-700">Packages in Saket</span>
            </h2>

            <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              No extra or hidden charges. Pay for your time and enjoy 5-star cleanliness and complete comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between ${
                  plan.highlight
                    ? 'border-2 border-amber-600 shadow-2xl lg:-translate-y-3 bg-white'
                    : 'border border-amber-100 shadow-lg bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
                    ★ Most Popular Package in Saket ★
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl text-amber-700">{plan.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold font-serif text-stone-900">
                        {plan.title}
                      </h3>
                      <p className="text-xs text-stone-500">{plan.description}</p>
                    </div>
                  </div>

                  <div className="my-6 pb-6 border-b border-stone-100">
                    <span className="text-4xl font-extrabold text-stone-900">
                      {plan.price}
                    </span>
                    <span className="text-stone-500 text-sm ml-2 font-medium">/ session</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-stone-700">
                        <FaCheckCircle className="text-amber-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href="https://api.whatsapp.com/send?phone=919217255113"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Book ${plan.title} in Saket`}
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <FaPhoneAlt />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="w-full py-20 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-amber-700 font-semibold tracking-widest text-sm uppercase">
              SIMPLE 3 STEPS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
              How to Book Your Massage at{' '}
              <span className="text-amber-700">Spa in Saket</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base">
              Booking your private session is quick and takes less than 2 minutes.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topSteps.map((s, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-amber-50/50 rounded-2xl p-7 border border-amber-100 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-amber-100 mb-5 shadow-inner">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottomSteps.map((s, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-amber-100 flex items-start gap-4 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-100 flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-1">{s.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send?phone=919217255113"
              target="_blank"
              rel="noopener noreferrer"
              title="Book your spa session in Saket via WhatsApp"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaPhoneAlt />
              <span>Connect on WhatsApp (+91 9217255113)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Explore Nearby Outlets - Internal Linking Matrix */}
      <section className="py-16 px-6 bg-gradient-to-b from-amber-50/80 to-stone-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
              MORE LOCATIONS
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mt-2 mb-3">
              Explore Our Spas in Other Delhi NCR Locations
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto">
              Spa Delhi has clean, premium outlets and hotel partners across South Delhi, Central Delhi, and NCR.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nearbyLocations.map((loc, i) => (
              <Link
                key={i}
                href={loc.url}
                title={`Visit Best Spa in ${loc.name}`}
                className="bg-white p-4 rounded-xl border border-amber-100 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-600 block mb-1">
                    {loc.tag}
                  </span>
                  <h3 className="font-bold text-stone-800 text-sm group-hover:text-amber-800 transition-colors">
                    Spa in {loc.name}
                  </h3>
                </div>
                <span className="text-xs text-amber-700 font-semibold mt-3 flex items-center gap-1">
                  <span>View Outlets</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Guide Section - Humanized, Readable & Keyword-Smart */}
      <section className="py-20 px-6 bg-white border-t border-amber-100">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-stone max-w-none text-stone-700">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-6">
              A Quick Guide to Getting a Massage in Saket, South Delhi
            </h2>

            <p className="mb-6 leading-relaxed text-base">
              Saket is one of South Delhi&apos;s favorite places for shopping, dining, and business.
              With busy spots like <em>Select Citywalk</em> and the <em>Saket District Centre</em>,
              it is also a place where you can easily find yourself exhausted after walking, traffic,
              and meetings. Visiting <strong>Spa Delhi in Saket</strong> gives you a quiet space to
              slow down and take care of your body.
            </p>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-10 mb-4">
              How a Good Massage Actually Helps You
            </h3>
            <p className="mb-4 leading-relaxed text-base">
              Getting a massage isn&apos;t just a luxury — it gives your body real physical and mental relief:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
              <li>
                <strong>Relieves Stiff Back & Neck:</strong> If you sit at a desk or in traffic for hours,
                deep tissue therapy loosens tight shoulder and lower back muscles.
              </li>
              <li>
                <strong>Helps You Sleep Deeper:</strong> Swedish and gentle aromatherapy massages calm your
                mind, lower stress, and help you get restful, uninterrupted sleep.
              </li>
              <li>
                <strong>Boosts Blood Flow:</strong> Warm natural oils and gentle strokes improve circulation
                and reduce swelling or tiredness in your legs and feet.
              </li>
              <li>
                <strong>Loosens Tight Joints:</strong> Traditional Thai stretches open up your hips, hamstrings,
                and back so your body feels flexible and light again.
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-10 mb-4">
              What to Expect on Your First Visit
            </h3>
            <p className="mb-6 leading-relaxed text-base">
              If it&apos;s your first time visiting us, you don&apos;t need to worry about anything. Our team
              greets you warmly, provides fresh disposable sheets and towels, and lets you choose the
              massage oil you like best. You can always tell your therapist if you prefer softer or firmer
              pressure during the session. After your massage, enjoy a hot shower and take your time getting
              ready — your comfort is our top priority.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 px-6 bg-stone-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-2 mb-4">
              Frequently Asked Questions{' '}
              <span className="text-amber-700">About Spa in Saket</span>
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-base">
              Straightforward answers to help you plan your visit with peace of mind.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none group transition-colors hover:bg-amber-50/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-amber-100/70 rounded-xl text-amber-800">
                      {faq.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <FaChevronDown
                    className={`text-amber-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 pl-[4.5rem] border-t border-amber-50">
                        <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6 text-amber-200 text-xs font-bold tracking-widest uppercase">
            <FaSpa />
            <span>WE ARE OPEN DAILY 10 AM - 11 PM</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to Relax at the{' '}
            <span className="text-amber-300">Best Spa in Saket?</span>
          </h2>

          <p className="text-base md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed mb-10">
            Book your session today and experience a clean, comfortable, and truly relaxing massage experience in South Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://api.whatsapp.com/send?phone=919217255113"
              target="_blank"
              rel="noopener noreferrer"
              title="Book Body Massage in Saket on WhatsApp"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-amber-900 font-bold shadow-2xl hover:bg-amber-50 hover:scale-105 transition-all text-base"
            >
              <FaPhoneAlt />
              <span>Book on WhatsApp (+91 9217255113)</span>
            </a>

            <a
              href="https://t.me/+a5Bu6FBPN9FlOWM9"
              target="_blank"
              rel="noopener noreferrer"
              title="Join Telegram Channel for Spa Delhi Saket"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 font-bold transition-all text-base text-white"
            >
              <FaTelegram className="text-xl text-sky-400" />
              <span>Message on Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}