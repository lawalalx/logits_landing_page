import Link from "next/link"

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 max-w-[550px]">

      <h1 className="text-[56px] font-bold leading-[68px] md:text-[36px] md:leading-[46px] text-center md:text-left">
        Deploy AI Agents on WhatsApp for Business
      </h1>

      <p className="text-[20px] leading-[36px] text-gray-600 md:text-[18px] md:leading-[28px] text-center md:text-left">
        Automate customer support, retrieve business data, and run complex
        workflows through natural WhatsApp conversations to scale your
        organization efficiently.
      </p>

      <div className="flex gap-4 flex-wrap justify-center md:justify-start">

        <Link
          href="/form"
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold"
        >
          Contact us
        </Link>

        {/* <Link
          href="/form"
          className="px-8 py-3 rounded-full border-2 border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          See How It Works
        </Link> */}

      </div>
    </div>
  )
}
