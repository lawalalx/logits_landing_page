import Link from "next/link"

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8 max-w-[550px]">
      <h1 className="text-[2.8rem] md:text-[2.2rem] font-extrabold leading-[1.1] text-indigo-700 text-center md:text-left drop-shadow-lg" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
        Build, Deploy & Scale <span className="text-electric-500">AI Solutions</span> for Your Business
      </h1>

      <p className="text-xl md:text-lg leading-8 text-indigo-900/80 text-center md:text-left">
        From intelligent WhatsApp agents to full-scale AI systems, we design, build, and deploy custom AI solutions that automate workflows, enhance decision-making, and transform how your organization operates.
      </p>

      <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-2">
        <Link
          href="/form"
          className="px-8 py-3 rounded-full bg-electric-500 text-indigo-600 font-bold shadow-lg border-2 border-electric-500 hover:bg-white hover:text-electric-600 transition-colors duration-200"
        >
          Let's talk
        </Link>
        {/*
        <Link
          href="/form"
          className="px-8 py-3 rounded-full border-2 border-indigo-600 font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white"
        >
          See How It Works
        </Link>
        */}
      </div>
    </div>
  )
}
