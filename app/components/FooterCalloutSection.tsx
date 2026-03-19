// app/components/FooterCalloutSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterCalloutSection = () => {
  return (
    <motion.section
      className="w-full bg-[var(--vId-color-token-c)] flex py-[100px] px-4 md:px-10 lg:px-16 bg-purple-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center bg-[var(--vId-color-token-a)] rounded-[10px] py-[100px] px-0">
        {/* Heading Block */}
        <motion.div
          className="flex flex-col justify-center items-center px-0 md:pt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className="text-white font-bold text-[36px] leading-[48px] md:text-[36px] md:leading-[46px] sm:text-[30px] sm:leading-[40px] text-center py-[10px] pb-[20px]"
            style={{ fontFamily: "var(--vId-font-token-a)" }}
          >
            Start Building AI That Actually Works for Your Business
          </h2>
          <p
            className="max-w-[700px] text-white/80 font-normal text-[18px] leading-[30px] md:text-[18px] md:leading-[28px] sm:text-[16px] sm:leading-[26px] text-center pb-[30px]"
          >
            Whether you're exploring AI or scaling existing systems, we help you move from idea to production with confidence.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-row justify-center gap-[10px] flex-wrap  sm:items-center sm:gap-[10px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Button 1: Watch Demo */}
          <Link href="/form" className="flex items-center justify-between px-[30px] py-[10px] gap-[5px] rounded-[30px] border border-white border-solid bg-transparent shadow-[0px_10px_25px_0px_rgba(21,37,72,0.1)] transition-all hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.33)] hover:bg-black/15">
            <span
              className="text-white font-semibold text-[18px] leading-[24px]"
              style={{ fontFamily: "var(--vId-font-token-b)" }}
            >
              Book a Consultation
            </span>
            <span className="w-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="auto"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ffffff"
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
