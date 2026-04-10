"use client"

import FeatureItem from "./FeatureItem"
import HighlightImage from "./HighlightImage"
import {leftFeatures, rightFeatures} from "@/app/data/leftFeatures"

export default function HighlightedFeatureSection() {
  return (
    <section
      id="service"
      className="py-20 px-6 lg:px-16  relative bg-indigo-600 to-electric-600 text-white overflow-hidden"
      style={{ fontFamily: "Space Grotesk, sans-serif" }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
          AI Services Designed for Real Business Impact
        </h2>
        <p className="text-base md:text-lg text-electric-100 max-w-2xl mx-auto leading-relaxed">
          From strategy to deployment, we help you move from experimentation to production-ready AI systems.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-12 md:gap-16">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                {/* Decorative Dot */}
                <div className="mb-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                </div>
                {/* Feature Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-electric-100 leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first lg:order-none">
            <HighlightImage />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 md:gap-16">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                {/* Decorative Dot */}
                <div className="mb-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                </div>
                {/* Feature Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-purple-100 leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
