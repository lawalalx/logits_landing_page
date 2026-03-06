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
    title: "AI Understanding",
    description:
      "Our agents use advanced natural language processing to understand and respond to complex customer inquiries.",
  },
  {
    icon: FaBahai,
    title: "Data Retrieval",
    description:
      "Instantly fetch information from your existing databases and provide real-time answers to your users' questions.",
  },
  {
    icon: FaCertificate,
    title: "Workflow Automation",
    description:
      "Streamline operations by automating repetitive tasks and approvals directly through a familiar chat interface.",
  },
];

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm">
      
      {/* Icon Block */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 border border-blue-200">
        <Icon className="text-2xl text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="mt-6 mb-3 text-xl font-bold text-gray-900 font-space">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
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
          
          <span className="text-sm font-semibold text-blue-600 px-4 py-1 rounded-full">
            Core Capabilities
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Powerful AI Agent Features
          </h2>

          <p className="text-lg text-gray-600">
            Logits Technologies provides the tools needed to transform your
            WhatsApp into a high-performance automated business hub.
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
