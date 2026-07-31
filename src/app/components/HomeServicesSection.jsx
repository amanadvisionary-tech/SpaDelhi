"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "B2B Massage in Delhi",
    description: "Get deep relaxation with trained female therapists.",
    icon: "🌸",
    link: "/b2b-massage-in-delhi",
  },
  {
    title: "Sandwich Massage in Delhi",
    description:
      "Experience sandwich massage with two professional therapists.",
    icon: "💆‍♂️",
    link: "/sandwich-massage-in-delhi",
  },
  {
    title: "Full Body Massage in Delhi",
    description:
      "Full body massage at just ₹1999 with expert therapists.",
    icon: "🪨",
    link: "/full-body-massage-in-delhi",
  },
  {
    title: "Couples Massage",
    description:
      "A relaxing and rejuvenating experience for couples.",
    icon: "👫",
    link: "/couples-massage-in-delhi",
  },
];

export default function HomeServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="max-w-7xl mx-auto"> <div className="text-center mb-20"> <motion.p className="text-amber-500 uppercase font-semibold tracking-wider mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} > Our Luxury Massage Services </motion.p> <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} > Explore Every Kind of <span className="text-amber-500">Massage At Our Massage Parlour in Delhi</span> </motion.h2> </div> <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {services.map((service, index) => ( <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-50 relative overflow-hidden group" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -15 }} > <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div> <div className="text-5xl mb-6 text-amber-500">{service.icon}</div> <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3> <p className="text-gray-600 mb-6">{service.description}</p> <a href={service.link} className="text-amber-600 font-medium flex items-center gap-2 group-hover:underline" > Learn More <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /> </svg> </a> </motion.div> ))} </div> </div>
    </section>
  );
}