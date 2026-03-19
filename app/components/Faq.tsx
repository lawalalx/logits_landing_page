"use client"

import React, { useState, useRef, useEffect } from "react";
import faqData from "@/app/data/faq";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col p-6 mb-4 shadow-md border border-gray-300 transition-shadow hover:shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-medium text-lg text-gray-800">{question}</p>
        <i
          className={`fas fa-chevron-down text-xl text-gray-800 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p className="font-normal text-gray-700 mt-4 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16">
      <h2 className="font-bold text-4xl text-gray-900 text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl">
        Frequently Asked Questions About Our AI Services
      </p>
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {faqData.map((item, idx) => (
          <FaqItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
