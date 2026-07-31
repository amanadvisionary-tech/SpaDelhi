"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      title: "Foreigner Therapist",
      icon: "🌏",
      desc: "Experts in global massage therapy",
    },
    {
      title: "Female To Male Massage",
      icon: "💆‍♂️",
      desc: "Professional, private, and refreshing massage in Delhi",
    },
    {
      title: "5 Star Outlet",
      icon: "✨",
      desc: "Premium luxury spa experience",
    },
    {
      title: "Couple Massage",
      icon: "👩‍❤️‍👨",
      desc: "Relax together in a private setting",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-amber-100/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {" "}
        {/* Right Text Section with Enhanced Styling */}
        <motion.div
          className="flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="mr-2">✦</span> About Our Spa Delhi{" "}
          </motion.div>
          <motion.h1
            className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {" "}
            Experience Our Luxury Spa in Delhi
            <span className="relative">
              <span className="text-amber-600 z-10 relative">
                – Professional Massage Services
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
            </span>
          </motion.h1>
          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {" "}
              Want a relaxing massage in Delhi? Visit our best B2B
              <strong className="text-amber-600 font-medium">
                {" "}
                spa in Delhi
              </strong>
              for exceptional experiences and deep relaxation. We offer many
              types of popular massage therapies, like B2B massage, sandwich
              massage, couples massage and thai spa in Delhi with trained
              therapists. We help you to remove your daily stress and body pain.
              Our team of experts is ready to provide a luxurious and healing
              experience. Transform your spa experience at 24+ spa outlets in
              Delhi. We also offer our massage service at 5-star hotels with
              foreign therapists.{" "}
            </p>
          </motion.div>
          {/* Feature Grid with Hover Effects */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {" "}
            {[
              {
                title: "Foreigner Therapist",
                icon: "🌏",
                desc: "Experts in global massage therapy",
              },
              {
                title: "Female To Male Massage",
                icon: "💆‍♂️",
                desc: "Professional, private, and refreshing massage in Delhi",
              },
              {
                title: "5 Star Outlet",
                icon: "✨",
                desc: "Relax together in a private setting",
              },
              {
                title: "Couple Massage",
                icon: "👩‍❤️‍👨",
                desc: "Sensual and healing touch",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-50 hover:border-amber-100 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {" "}
                  {feature.icon}{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-amber-600 transition-colors">
                    {" "}
                    {feature.title}{" "}
                  </h4>
                  <p className="text-gray-600 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Action Buttons with Animation */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/about-us"
              className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 transition-all"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-all"></div>
              <span className="relative z-10 flex items-center gap-2">
                {" "}
                Learn More About Us{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 animate-pulse"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />{" "}
                </svg>{" "}
              </span>{" "}
            </motion.a>{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              {" "}
              <FaTelegram className="text-xl mr-3" /> Available Therapists{" "}
            </a>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
        {/* Left Image with Modern Frame & Parallax Effect */}{" "}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {" "}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
            {" "}
            {/* Glass frame effect */}{" "}
            {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] z-20 pointer-events-none"></div> */}{" "}
            {/* Image container */}{" "}
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
              {" "}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-amber-800/10 to-black/25 z-10"></div> */}{" "}
              {/* <div className="bg-gradient-to-tr from-amber-200 to-rose-100 w-full h-full animate-pulse"></div> */}{" "}
              <Image
                loading="lazy"
                src="/images/3777.webp"
                alt="Spa Interior"
                layout="fill"
                objectFit="cover"
                className="rounded-[2.5rem] z-0"
              />{" "}
            </div>{" "}
            <motion.div
              className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-rose-300/20 blur-xl z-0"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>
    </section>
  );
}
