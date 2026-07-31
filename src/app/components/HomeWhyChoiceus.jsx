"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Clock,
  CheckCircle2,
  Globe,
} from "lucide-react";

const features3 = [ { icon: <Hotel className="w-8 h-8 text-amber-600" />, title: "24+ Spa Outlets", desc: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience.", }, { icon: <Clock className="w-8 h-8 text-amber-600" />, title: "24/7 Support Available", desc: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi", }, { icon: <CheckCircle2 className="w-8 h-8 text-amber-600" />, title: "Luxury Massage Available", desc: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace.", }, { icon: <Globe className="w-8 h-8 text-amber-600" />, title: "Massage With Foreigner Therapists", desc: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity.", }, ];

export default function HomeWhyChoiceus() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16"> <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6 shadow-sm"> <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div> <span className="text-amber-700 font-medium tracking-wider text-sm">PREMIUM SPA SERVICES</span> </div> <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 font-serif"> Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">The Best Massage </span> Centre in Delhi? </h2> <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8"> <p className="text-amber-800/80 text-lg md:text-xl leading-relaxed"> Spa Delhi is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. At Spa Delhi, we combine professionalism and indulgence to present the most reliable <a href="/full-body-massage-in-delhi"><strong className="text-amber-900 font-medium">full-body massage in Delhi</strong></a>. Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations. </p> </div> <div className="flex justify-center mt-6"> <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"> {features3.map((feature, index) => ( <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300" > <div className="flex justify-center mb-6">{feature.icon}</div> <h3 className="text-xl font-semibold text-amber-800 mb-3"> {feature.title} </h3> <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p> </motion.div> ))} </div>
    </section>
  );
}