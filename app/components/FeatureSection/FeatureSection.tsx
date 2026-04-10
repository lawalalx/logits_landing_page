"use client"

import { FaAsterisk, FaCertificate, FaBahai } from "react-icons/fa";
import { ComponentType } from "react";

interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FaAsterisk,
    title: "Agentic AI Systems",
    description:
      "Build autonomous AI agents that can reason, act, and execute multi-step workflows across your business tools.",
  },
  {
    icon: FaBahai,
    title: "Data & System Integration",
    description:
      "Connect AI to your existing systems (CRMs, databases, APIs) to enable real-time insights and intelligent decision-making.",
  },
  {
    icon: FaCertificate,
    title: "Workflow Automation",
    description:
      "Automate repetitive operations across customer support, internal processes, and business workflows using AI.",
  },
  {
    icon: FaBahai,
    title: "Conversational AI (WhatsApp & Beyond)",
    description:
      "Deploy intelligent assistants on WhatsApp and other channels to handle customer interactions and internal queries.",
  },
  {
    icon: FaCertificate,
    title: "Rapid AI Prototyping (PoC)",
    description:
      "Quickly validate ideas with working AI prototypes in weeks, not months.",
  },
  {
    icon: FaCertificate,
    title: "AI Training & Enablement",
    description:
      "Equip your team with the knowledge and tools to adopt and scale AI across your organization.",
  },
];

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm bg-white rounded-xl shadow-md p-6 border border-indigo-50 hover:shadow-lg transition-shadow duration-200">
      
      {/* Icon Block */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-50 border border-purple-200">
        <Icon className="text-electric-500 text-3xl" />
      </div>

      {/* Title */}
      <h3 className="mt-6 mb-3 text-xl font-bold text-indigo-800 font-space">
        {title}
      </h3>

      {/* Description */}
      <p className="text-indigo-900/80 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-20 px-6 lg:px-16 "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">
          
          <span className="text-sm font-semibold text-purple-600 px-4 py-1 rounded-full">
            AI Capabilities That Power Your Business
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Powerful AI Agent Features
          </h2>

          <p className="text-lg text-gray-600">
            We combine AI engineering, data systems, and intelligent automation to deliver solutions that move from idea to production fast.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}
