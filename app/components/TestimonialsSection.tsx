"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  //  {
  //   id: 1,
  //   quote: "Logits agents and automation integration is seamless. It is one of the most effective support tools",
  //   name: "Uche Edwin",
  //   role: "Product Lead - EqualyzAI",
  //   avatar: "/testimonials/uche.png",
  // },
  {
    id: 2,
    quote: "Thier agents enabled our user to plan thier meal and generate ingredient for easy shopping reducing shoppint time by 65%",
    name: "Nelson",
    role: "Founder/CEO - Quick Market",
    avatar: "/testimonials/nelson.jpeg",
  },
  {
    id: 3,
    quote: "Our customers can make transactions with 45% less time due the smarts AI agents",
    name: "Oluwatosin",
    role: "Founder/CEO - Seldome Technologies",
    avatar: "/testimonials/tosin.jpeg",
  },
 
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonial"
      className="bg-green-50 py-24 px-4 md:py-16 md:px-4 flex flex-col gap-10"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-4">
        <span className="bg-green-100 px-4 py-1 rounded-full text-green-800 font-semibold text-sm">
          Client Success
        </span>
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900 text-center">
          Trusted by Leading Global Organizations
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:gap-8 sm:gap-6 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center gap-4 max-w-sm p-6 bg-white rounded-xl shadow-md"
          >
            {/* <Image
              src={t.avatar}
              width={80}
              height={80}
              alt={t.name}
              className="rounded-full object-cover"
            /> */}

            <p className="text-gray-700 text-base md:text-sm text-center leading-relaxed">
              {t.quote}
            </p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                >
                  <path d="m30.336 12.547-10.172-1.074L16 2.133l-4.164 9.34-10.172 1.074 7.598 6.848L7.14 29.398 16 24.29l8.86 5.11-2.122-10.004z" />
                </svg>
              ))}
            </div>

            {/* <h3 className="text-gray-900 font-bold text-lg">{t.name}</h3> */}
            <p className="text-gray-500 text-sm italic">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
