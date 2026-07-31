'use client';

import React, { useState, useEffect } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar,FaHotTub } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import WhatsappFloat from '../components/WhatsappFloat';
  import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { AnimatePresence } from "framer-motion";
  import { FaTelegram } from 'react-icons/fa';
  import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
  import { Sparkles } from 'lucide-react';
  import { Camera } from "lucide-react";
  import { MapPin } from 'lucide-react';
  import { Flower2, Bath, HeartHandshake } from "lucide-react";
  
 


// ✅ Load Google Fonts
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
export default function Pricpage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
            setIsVisible(true);
          }, []);
        
        const [activeIndex, setActiveIndex] = useState(null);
          const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const faqs = [
      
      {
        question: "Where can I view Spa Price in Delhi?",
        answer: "You can See spa prices on our pricing page. Our spa prices in Delhi are very affordable and competitive for our clients. We launch first-visit offers and seasonal discounts for spa sessions.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
        question: "What is the full Body massage price in karol bagh?",
        answer: "Full body massage price in karol bagh is very affordable. You can contact our support team to provide the best prices for full body massage. Our full body massage started in just 1999.",
        icon: <FaHandSparkles className="text-teal-600" />
      },
      
      {
        question: "Do you offer package discounts and combos?",
        answer: "Yes, If you book a combo session then we will provide you extra discount on combo pack or more than one session. Check current deals on the Pricing page or during booking for the best value.",
        icon: <FaLeaf className="text-teal-600" />
      },
      {
        question: "Do you run seasonal promotions on pricing?",
        answer: "Yes we run seasonal and festival promotions. Where you can get huge discounts on combo packs and normal spa sessions. For more price related details show on the above.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
            question: "What are female to male spa prices in Noida?",
            answer: "Noida is the best location to remove your work stress. Our female to male spa prices in noida are very affordable for all our clients and corporate employees. Call us on our number and book your relaxation time.",
            icon: <FaHotTub className="text-teal-600" />
          },
          {
                question: "Can I pay online for my services?",
                answer: "Yes, we offer secure online payment options through our website for your convenience.",
                icon: <FaSpa className="text-teal-600" />
              },
    ];

  const pricingPlans = [
      {
        title: "Spa Outlet",
        price: "₹1999/-",
        description: "Perfect for individual relaxation sessions",
        features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
        highlight: false,
        ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
        icon: <FaSpa className="text-amber-500" />
      },
      {
        title: "Hotel Outlet",
        price: "₹13999/-",
        description: "Premium experience with luxury amenities",
        features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
        highlight: true,
        ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
        icon: <FaHotel className="text-amber-500" />
      },
      {
        title: "Premium Package",
        price: "₹4999/-",
        description: "Comprehensive spa experience with added treatments",
        features: ["Massage + Steam", "Aromatherapy", "Facial Session", "60 min Session"],
        highlight: false,
        ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
        icon: <FaCrown className="text-amber-500" />
      }
    ];
    const outlets = [
  {
    title: 'Aerocity',
    description: 'Experience the ultimate spa in Aerocity Delhi without straining your wallet—our transparent spa price in Aerocity lists every Thai massage, couple spa and full-body ritual up-front, making us the best spa in Aerocity with price honesty. Open inside luxury hotels near IGI, we deliver 24×7 body-spa in Aerocity with price menus that start at just ₹1,999 and include free steam & shower.',
    image: '/images/RoseateHouse.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'New Friends Colony (NFC)',
    description: 'Looking for a spa in New Friends Colony with price clarity? Our NFC centre lists every body-spa, Swedish and couple spa in New Friends Colony price board online, so “spa near me with price” searches end here. Rated best spa in NFC with price fairness, we offer hotel-style rooms, organic oils and late-night slots, keeping full-body massage in New Friends Colony price-friendly from ₹1,799.',
    image: '/images/fpkdl.com_960_1758981740_exterior-view-bellagio-caesars-palace-hotel-las-vegas-nevada-march-6-2024_943860-2321.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Connaught Place',
    description: 'Right on Janpath, our spa in Connaught Place with price transparency welcomes shoppers and office-goers alike. Check live Thai massage price in Connaught Place or book a couple spa in CP price plan starting ₹2,099; both include shower, steam & complimentary foot ritual. The centrally located retreat is voted best spa in Connaught Place with price honesty and 60-120 min body-spa in CP with price deals running daily.',
    image: '/images/pexels-pavel-danilyuk-9119782.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Grand Vasant Kunj',
    description: 'Unwind at the luxury spa in Vasant Kunj with price tags you can trust. Hidden inside premium malls, we publish every full-body massage in Vasant Kunj price online—no hidden costs. Choose solo or couple spa in Vasant Kunj price packages from ₹1,899, enjoy Himalayan salt rooms, Thai therapists and free pickup within 5 km. It’s why locals call us the best spa in Vasant Kunj with price integrity and five-star hygiene.',
    image: '/images/lajpatnagar.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];
const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
];
{/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Select Hotel And Spa Outlet',
    description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Appointment',
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Visit',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */}

  return (
    
    <main>
    {/* Banner */}
   <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/steptodown.com870307.webp')"
      }}
    >
      {/* Gradient Overlay with soft blur */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1
          className={`text-1xl md:text-3xl font-bold text-white leading-tight ${playfair.variable} font-serif`}
        >
         Discover Affordable Luxury. Explore Our Spa Service Prices Today!
        </h1>
        <p
          className={`mt-6 text-lg md:text-1xl text-white/90 font-light ${montserrat.variable}`}
        >
          Choose from flexible packages crafted for every need. No hidden fees. Just luxury and comfort, always within reach.
        </p>

        <a
          href="/massage-service-in-delhi"
          className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View Our Services
        </a>
      </div>
    </section>
    <div className="w-full overflow-x-hidden bg-white relative">
      {/* End Banner */}

    <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white" >
      
      {/* Decorative Background (applies to full page) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-amber-300 mix-blend-multiply opacity-40"></div>
      </div>
      {/* Floating ✿ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✿
          </motion.div>
        ))}
      </div>

      {/* Amber Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-700/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-800/5 to-transparent"></div>
      </div>
{/* Section Title */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center text-amber-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
         Our Spa & Massages Prices in Delhi
        </motion.h2>
        <motion.div
          className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: 'center' }}
        ></motion.div>
        <motion.p
          className="mt-10 text-center text-xl md:text-2xl text-amber-800 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.
        </motion.p>
        {/* Price List Section */}
        <section className="relative z-10 mt-16 max-w-3xl mx-auto px-4">
          <motion.ul
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: "B2B Therapy", price: "₹1999", duration: "60 Minutes" },
              { title: "Ayurvedic Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Traditional Thai Massage", price: "₹1499", duration: "60 Minutes" },
              { title: "Sandwich Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Hotel Spa", price: "₹15999", duration: "60 Minutes" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-amber-200 pb-4"
              >
                <div>
                  <h4 className="text-xl font-semibold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-amber-700 font-light mt-1">{item.duration}</p>
                </div>
                <span className="text-amber-600 text-lg font-medium mt-2 md:mt-0">{item.price}</span>
              </li>
            ))}
          </motion.ul>
        </section>
        {/* End Price List Section */}
        {/* CTA Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href='/Spa-in-rohini'>
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30">
            Outlets
          </button>
          </a>
          <p className="mt-6 text-amber-700 max-w-xl mx-auto">
            Experience the difference of our premium spa treatments. Book a consultation today and discover your path to wellness.
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-amber-400/50"></div>
      <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-amber-400/50"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-amber-400/50"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-amber-400/50"></div>
    </section>  
    </div>
    {/* Pricing Section */}
                <section id= "Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-15 blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                  {/* Heading */}
                  <div className="text-center mb-16">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <FaStar className="text-amber-500" />
                      Affordable Luxury
                    </motion.div>
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      Our Massage with <span className="text-amber-600">Full Service Price in Delhi, Noida and Gurgaon</span>
                    </motion.h2>
                    <motion.p
                      className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
                    </motion.p>
                    <motion.div
                       className="flex justify-center mt-10"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                     >
                       <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                     </motion.div>
                  </div>
          
                  {/* Pricing Cards */}
                  <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {pricingPlans.map((plan, index) => (
                      <motion.div
                        key={index}
                        className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                      >
                        {/* Featured badge */}
                        {plan.highlight && (
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                            MOST POPULAR
                          </div>
                        )}
                        
                        <div className={`h-full flex flex-col border ${plan.highlight ? "border-amber-500 shadow-xl" : "border-amber-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                          <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-amber-600 to-amber-700" : "bg-amber-800"}`}>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-3xl">
                                {plan.icon}
                              </div>
                              <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-amber-100"}`}>
                                {plan.title}
                              </h3>
                            </div>
                            <p className={`text-lg ${plan.highlight ? "text-amber-100" : "text-amber-200"}`}>
                              {plan.description}
                            </p>
                          </div>
                          
                          <div className="p-8 pt-12 pb-10 -mt-6 relative">
                            {/* Price circle */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                              <span className="text-white text-xl font-bold">
                                {plan.price}
                              </span>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                  <span className="text-amber-800">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <a
                              href={plan.ctaLink}
                              className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                                plan.highlight 
                                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:from-amber-600 hover:to-amber-700"
                                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                              }`}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
          
                  {/* Additional information */}
                  {/* <motion.div 
                    className="mt-16 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 md:p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Flexible Booking Options</h3>
                        <p className="text-amber-800 max-w-2xl">
                          All packages include free rescheduling up to 24 hours before your appointment. 
                          <span className="font-semibold"> Group discounts available for 3+ bookings!</span>
                        </p>
                      </div>
                    </div>
                  </motion.div> */}
                </div>
              </section>
              {/* End Pricing Section */}
      {/* content */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path d="M50,15 C65,15 80,25 85,40 C90,55 85,70 70,85 C55,90 40,85 25,70 C15,55 15,40 25,25 C30,20 40,15 50,15 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M40,10 C50,10 60,15 65,25 C70,35 65,45 55,55 C45,60 35,65 25,55 C15,45 15,35 25,25 C30,20 35,15 40,10 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="max-w-[95%] mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-amber-700 font-medium tracking-wider">PREMIUM EXPERIENCE</span>
                          </motion.div>
                          
                          <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            Spa Price in Delhi – First Visit Only ₹1999 | <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Top Spa in Delhi with Price & Offers.</span>
                          </motion.h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>
              
      
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Image & Content */}
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl z-10">
                    <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-1 rounded-2xl">
                      <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                          <img
                              src="/images/spapic.jpg" // Change path accordingly
                              alt="Premium Body Spa"
                              className="w-full h-full object-cover rounded-xl"
                            />
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                          <div className="absolute top-4 right-4 bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                            Most Popular
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-serif font-bold text-stone-800">Premium Body Spa</h3>
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                              <span className="font-bold">₹1999</span> First Visit
                            </div>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Couple Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Jacuzzi Bath</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Private Room</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Oil & Cream Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Aromatherapy</span>
                            </li>
                          </ul>
                          <a href='https://api.whatsapp.com/send?phone=919217255113'>
                            <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Book Now
                          </button>
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
                </motion.div>
      
                {/* Right Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="max-w-lg">
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                      If you are searching best spa price in Delhi, your hunt ends here. We are famous spa in Delhi with price that makes every pocket happy. First-time guest pays only 1999 rupees for any 60-minute therapy—Swedish, aroma, deep-tissue or Thai—you choose, same rate. This spa price in Delhi already includes steam shower, clean towel, herbal tea and five-minute head massage, so zero hidden cost. Friendly female and male therapists are CIDESCO trained, rooms sanitized after every client, fresh linen promised. Couples can also enjoy together; two people, still 1999 each. We sit in safe South Delhi spot, metro only five-minute walk, parking free. Open 11 am to 10 pm, last booking 9 pm. Reserve seat by call or WhatsApp, we confirm in two minutes. After first visit, join membership and keep spa price in Delhi low for whole year. Offer till 31 March, slots filling fast, book now and feel light.
                     {/* <span className="font-medium text-stone-800">hot stone massage</span>, 
                      <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                      and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                      designed private sanctuaries. */}
                    </p>
                    
                    
                    
                    {/* <p className="text-stone-600 mb-6 leading-relaxed">
                      We specialize in world-class therapies including <span className="font-medium text-stone-800">hot stone massage</span>, 
                      <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                      and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                      designed private sanctuaries.Escape the city's hustle and indulge in a tranquil haven where serenity meets sophistication. 
                      Our premium spa is nestled within Aerocity's most luxurious 5-star hotels, offering an oasis 
                      of calm in the heart of Delhi.
                    </p> */}
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">★</div>
                        <h4 className="font-medium text-stone-800">starting At 1999</h4>
                        <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">🙎🏼‍♀️</div>
                        <h4 className="font-medium text-stone-800">Foreigner Therapist</h4>
                        <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">👩🏻‍❤️‍💋‍👨🏼</div>
                        <h4 className="font-medium text-stone-800">Couples Welcome</h4>
                        <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">🌿</div>
                        <h4 className="font-medium text-stone-800">Organic Products</h4>
                        <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href='/massage-service-in-delhi'>
                        <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View Treatments
                      </button>
                      </a>
                      <a href='https://api.whatsapp.com/send?phone=919217255113'>
                        <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Book Appointment
                      </button>
                      </a>
                      
                    </div>
                  
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
            {/* end content */}
            
            {/* //// */}
     <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <div className="text-center mb-16">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <FaStar className="text-amber-500" />
                      Affordable Luxury
                    </motion.div>
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      Best Spa in Delhi with Price <span className="text-amber-600">– Spa Price in Delhi that Fits Your Pocket</span>
                    </motion.h2>
                    <motion.p
                      className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Thai, Couple & Full Body Massage in Delhi Price List with Free Steam
                    </motion.p>
                    <motion.div
                       className="flex justify-center mt-10"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                     >
                       <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                     </motion.div>
                  </div>
        {/* Heading */}
       

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <Flower2 className="w-12 h-12 text-amber-600 mb-3" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Aroma Therapy</h3>
            <p className="text-gray-900">
            Sweet smell oils like lavender and lemongrass go into skin, head feels light and mood turns happy. 60-minute aroma therapy is only ₹1,999 first visit, plus free steam. Search “spa price in Delhi” and you will see we are top.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <Bath className="w-12 h-12 text-amber-600 mb-3" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Luxury Spa Bath</h3>
            <p className="text-gray-900">
              Big tub, warm water, rose petals and jet spray on back; feels like Goa holiday. We add free head massage. First-time guest pays only ₹1,999, so when you type “best spa in Delhi with price” you find this deal again.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <HeartHandshake className="w-12 h-12 text-amber-600 mb-3" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Healing Massage</h3>
            <p className="text-gray-900">
              Strong but sweet hands press knots, blood runs fast and pain runs away. 60-minute healing massage costs ₹1,999 today, upgrade to 90 min only ₹499 extra. Google “full body massage in Delhi price” and our name pops first.
            </p>
          </div>

        </div>
      </div>
    </section>
            {/* //// */}
      
            {/* /////? */}
    <section className="relative bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 leading-tight">
            Best Spa in Delhi with Price <span className="text-amber-600">– Clear Spa Price in Delhi for Thai, Couple & Full Body Massage</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            If you keep typing “spa price in Delhi” and still get confuse, come to the best spa in Delhi with price card written big on white board. We swear no hidden bill. Thai massage price in Delhi is flat ₹1,999 for 60-minute real stretch; therapist uses knees, elbows and gentle pull so your back feels open like window. Google spa in Delhi with price and you will see our name again because we give free steam shower and clean towel. Couple spa in Delhi price is only ₹3,998 for two people, same room, soft music and rose smell, perfect for anniversary surprise. Search body spa in Delhi with price and every option—Swedish, aroma, deep-tissue—shows same ₹1,999 first visit, so you pick mood not pocket. Need more time? Full body massage in Delhi price for 90-minute upgrade is just ₹499 extra, still cheapest in town. We open 11 am to 10 pm, metro 5-minute walk, parking free. Book on WhatsApp, pay after service, feel light for full week.
          </p>
          {/* <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p> */}
          {/* <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p> */}

          {/* Highlights */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Flower2 className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Relaxing Aroma</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Bath className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Luxury Spa</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <HeartHandshake className="w-10 h-10 text-amber-600 mb-2" />
    <p className="font-semibold text-gray-800">Healing Touch</p>
  </div>
</div> */}
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/185.jpg" // apni image ka path daalna
              alt="Delhi Girl Lifestyle"
              width={600}
              height={600}
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            #DelhiVibes
          </div>
        </motion.div>
      </div>
    </section>
    
            {/* Our Process */}
               <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-amber-700 font-medium tracking-wider">Process</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We Offer Luxurious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Treatments at Great Rates</span>
          </motion.h2>
          
          {/* <motion.p
            className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
          </motion.p> */}
          
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </motion.div>
        </motion.div>
              
                  {/* Process Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {/* Step Number */}
                        <div className="absolute top-4 left-4 text-3xl font-bold text-amber-300 opacity-30 z-0">
                          {step.number}
                        </div>
              
                        {/* Image */}
                        <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-amber-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>

              
                        {/* Title */}
                        <h4 className="text-2xl font-semibold text-amber-800 mb-4 font-serif">
                          {step.title}
                        </h4>
              
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
               </section>
             {/* End Our Process */}
             {/* About Us Section */}
            <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
                   Massage with Full Service Price in Delhi – Only ₹1,999, Best Spa in Delhi with Price

                  </h2>
                  <p className="text-gray-700 text-lg">
                    If you keep googling “massage with full service price in Delhi” and still feel confuse, just walk into our spa in Delhi with price written big on white board at gate. We promise no hidden cost, no tip force. For only ₹1,999 you get full 60-minute therapy—pick Swedish, aroma, deep-tissue or Thai—plus free steam shower, fresh towel and lemon-honey water. That is why Google shows us when you type best spa in Delhi with price again and again. Search full body massage in Delhi price and you will see our name on top because we give real muscle work, not just oil rub. Couples hunting couple spa in Delhi price pay only ₹3,998 for two people, same clean room, rose petals on table, soft music playing. Need longer time? 90-minute upgrade is just ₹499 extra, still cheapest body spa in Delhi with price you can find. We open 11 am to 10 pm, metro station only 5-minute walk, parking free. Friendly boys and girls at reception speak Hindi, English and Punjabi. Book on WhatsApp, get confirm in two minutes, pay after massage finish. Come once, feel light for full week—that is our simple promise.
                  </p>
                  
                  {/* <p className="text-gray-700 text-lg">
                    Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                     From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                     Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                  </p> */}
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/new5.jpeg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/spa-treatments.jpg" alt="Massage Session" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </section>
            {/* outlate */}
            <section className="py-10 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Best Spa in <span className="text-amber-600">Delhi Price</span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Spa in Delhi with price—Thai, couple, full-body massage deals Aerocity NFC CP Vasant Kunj.
                  </motion.p>
                </div>
            
                {/* Grid Layout - 2 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {outlets.map((outlet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                    >
                      <div className="relative">
                        <Image
                          src={outlet.image}
                          alt={outlet.title}
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10"></div> */}
                      </div>
            
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                          {outlet.title}
                        </h3>
                        <p className="text-gray-700 text-base mb-4">
                          {outlet.description}
                        </p>
                        <a 
                        href="https://t.me/+a5Bu6FBPN9FlOWM9" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Chat On Telegram
                      </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            {/* End outlate */}
            {/* Our Therapy Experts */}
                  <section className="py-16 px-4 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
                    <div className="max-w-7xl mx-auto">
                      
                      <div className="text-center mb-16">
                      <motion.p
                        className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        Experts Therapy
                      </motion.p>
                      
                      <motion.h2
                        className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        International<span className="text-amber-600"> Therapists at affordable Price</span>
                      </motion.h2>
                      
                      <motion.p
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                         Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
                      </motion.p>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
                          >
                            <div className="relative h-96 overflow-hidden">
                              <Image
                              loading="lazy"
                                src={member.image}
                                alt={member.name}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                                <h3 className="text-white text-xl font-semibold">
                                  {member.name}
                                </h3>
                                <p className="text-yellow-300">{member.designation}</p>
                              </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaWhatsapp /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  {/* <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a> */}
                </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                   {/* End Our Therapy Experts */}
     {/* F&Q Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
                            <div className="max-w-5xl mx-auto px-4">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-14"
                              >
                                <motion.div
                                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                >
                                  <FaStar className="text-amber-500" />
                                  Questions? We’re here to help
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                                  Frequently Asked <span className="text-amber-600">Questions</span>
                                </h2>
                                <p className="text-amber-800 max-w-2xl mx-auto text-lg">
                                  Everything you need to know about our luxurious spa services and how to book them.
                                </p>
                                <div className="flex justify-center mt-6">
                                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                </div>
                              </motion.div>
                    
                              {/* FAQ Accordion */}
                              <div className="space-y-5">
                                {faqs.map((faq, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
                                  >
                                    <button
                                      onClick={() => toggleFAQ(index)}
                                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                      <div className="flex items-start space-x-4">
                                        <div className="mt-1 p-2 bg-amber-50 rounded-lg">
                                          {faq.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">
                                          {faq.question}
                                        </h3>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        <svg
                                          className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </div>
                                    </button>
                    
                                    <AnimatePresence>
                                      {activeIndex === index && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                                            <p className="text-amber-700">
                                              {faq.answer}
                                            </p>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                ))}
                              </div>
                    
                              {/* CTA Box */}
                              {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mt-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
                              >
                                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                                <p className="mb-5 max-w-2xl mx-auto">
                                  Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                    Contact Us
                                  </button>
                                  <button className="px-6 py-3 bg-amber-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                                    Book Appointment
                                  </button>
                                </div>
                              </motion.div> */}
                            </div>
      </section>
    <WhatsappFloat />
    </main>
  );
}