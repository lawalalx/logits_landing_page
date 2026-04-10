// app/components/FooterCalloutSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterCalloutSection = () => {
  return (
    <motion.section
      className="w-full flex py-[100px] px-4 md:px-10 lg:px-16 bg-linear-to-r from-electric-500 to-indigo-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center bg-white/5 rounded-[18px] py-20 px-0 shadow-2xl border border-white/10">
        {/* Heading Block */}
        <motion.div
          className="flex flex-col justify-center items-center px-0 md:pt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className="text-white font-extrabold text-[2.5rem] md:text-[2.2rem] leading-[1.1] text-center py-2.5 pb-5 drop-shadow-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Start Building AI That Actually Works for Your Business
          </h2>
          <p
            className="max-w-[700px] text-white/90 font-medium text-lg md:text-xl text-center pb-[30px]"
          >
            Whether you're exploring AI or scaling existing systems, we help you move from idea to production with confidence.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-row justify-center gap-4 flex-wrap sm:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/form" className="flex items-center justify-between px-8 py-3 gap-2 rounded-full bg-electric-500 text-white font-bold shadow-lg border-2 border-electric-500 hover:bg-white hover:text-electric-600 transition-colors duration-200 text-lg">
            Book a Consultation
            <span className="w-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="auto"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z"
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FooterCalloutSection;
