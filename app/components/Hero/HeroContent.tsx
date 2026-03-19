import Link from "next/link"

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 max-w-[550px]">

      <h1 className="text-[56px] font-bold leading-[68px] md:text-[36px] md:leading-[46px] text-center md:text-left">
        Build, Deploy & Scale AI Solutions for Your Business
      </h1>

      <p className="text-[20px] leading-[36px] text-gray-600 md:text-[18px] md:leading-[28px] text-center md:text-left">
        From intelligent WhatsApp agents to full-scale AI systems, we design, build, and deploy custom AI solutions that automate workflows, enhance decision-making, and transform how your organization operates.
      </p>

      <div className="flex gap-4 flex-wrap justify-center md:justify-start">

        <Link
          href="/form"
          className="px-8 py-3 rounded-full bg-[#dac247] text-white font-bold"
        >
          Let's talk
        </Link>

        {/* <Link
          href="/form"
          className="px-8 py-3 rounded-full border-2 border-purple-600 font-bold text-purple-600 hover:bg-purple-600 hover:text-white"
        >
          See How It Works
        </Link> */}

      </div>
    </div>
  )
}
