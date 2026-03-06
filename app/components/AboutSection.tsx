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
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[30px] p-4 shadow-lg flex-1"
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
            About Logits Technologies
          </span>

          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            Revolutionizing Business Communication Through Intelligent
            WhatsApp Automation
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We empower organizations to deliver instant, human-like support and
            data access through the WhatsApp platform.
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
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <FaLaptopCode className="text-blue-600 text-xl" />
              </div>

              <h4 className="font-bold text-lg mt-5 mb-2">Our Mission</h4>

              <p className="text-gray-600 leading-relaxed">
                To simplify complex business workflows through intuitive
                AI-driven conversational interfaces.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <FaPencilRuler className="text-blue-600 text-xl" />
              </div>

              <h4 className="font-bold text-lg mt-5 mb-2">Our Vision</h4>

              <p className="text-gray-600 leading-relaxed">
                Leading the global transition toward automated, accessible,
                and intelligent enterprise communication.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <Link
            href="/form"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
