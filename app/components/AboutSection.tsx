"use client"

import { motion } from "framer-motion"
import { FaLaptopCode, FaPencilRuler } from "react-icons/fa"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-16 font-[Space_Grotesk]">
      <div className="max-w-7xl flex flex-col lg:flex-row-reverse gap-16 items-center">

        {/* LEFT IMAGE CONTENT */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center flex-1">

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[30px] p-4 shadow-lg flex-1"
          >
            <img
              src="/convert-2.webp"
              alt="AI WhatsApp Agent Conversion"
              className="rounded-[25px] object-cover w-full max-w-sm"
            />
          </motion.div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="flex flex-col items-start max-w-xl">

          <span className="text-sm font-semibold bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4">
            About Logits Lab
          </span>

          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            Your End-to-End AI & Technology Delivery Partner
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Logits Technologies, we go beyond single-use tools to help organizations design, build, and scale AI-powered systems tailored to their operations. <br/>

            From WhatsApp automation to enterprise-grade agentic AI systems, we partner with businesses to transform manual workflows into intelligent, automated processes that drive efficiency and growth.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col md:flex-row gap-10 mb-8">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                <FaLaptopCode className="text-purple-600 text-xl" />
              </div>

              <h4 className="font-bold text-lg mt-5 mb-2">Our Mission</h4>

              <p className="text-gray-600 leading-relaxed">
                To help organizations unlock the full potential of AI by building practical, scalable, and high-impact intelligent systems.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                <FaPencilRuler className="text-purple-600 text-xl" />
              </div>

              <h4 className="font-bold text-lg mt-5 mb-2">Our Vision</h4>

              <p className="text-gray-600 leading-relaxed">
                To become a leading AI delivery partner powering the next generation of intelligent, automated enterprises across Africa and beyond.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <Link
            href="/form"
            className="px-8 py-3 rounded-full bg-[#dac247] text-white font-bold"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </section>
  )
}
