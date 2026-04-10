
"use client"

// Navigation menu items
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Service", href: "#service" },
  { name: "Testimonial", href: "#testimonial" },
];

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo2.png"
            alt="Syncliq Technologies"
            width={200}
            height={48}
            className="rounded-xl p-1 shadow-lg"
            priority
          />
        </div>


        {/* <div className="flex items-center gap-2">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M20.5 6.5L11 16C9.5 17.5 9.5 19.5 11 21L13.5 23.5C15 25 17.5 25 19 23.5L22.5 20H14" fill="#3B5BDB"/>
              <path d="M17.5 31.5L27 22C28.5 20.5 28.5 18.5 27 17L24.5 14.5C23 13 20.5 13 19 14.5L15.5 18H24" fill="#228BE6"/>
            </g>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 24, letterSpacing: 2, color: '#222', fontFamily: 'monospace' }}>
            SYNCLIQ
          </span>
        </div> */}

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold text-indigo-600 hover:text-electric-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/form"
            className="px-7 py-2 rounded-full bg-electric-500 text-indigo-600 font-bold shadow-lg border-2 border-electric-500 hover:bg-white hover:text-electric-600 transition-colors duration-200"
          >
            Contact us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl text-indigo-600 hover:text-electric-400 transition-colors"
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-[#183B56] flex flex-col gap-5 p-5 md:hidden">

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl"
            >
              ✕
            </button>
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white font-semibold text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
