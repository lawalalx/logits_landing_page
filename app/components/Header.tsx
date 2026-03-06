"use client"

import { useState } from "react"
import Link from "next/link"

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Service", href: "#service" },
  { name: "Testimonial", href: "#testimonial" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[10px] px-4">

        {/* Logo */}
        <Link
          href="#home"
          className="text-[30px] font-semibold leading-[40px]"
        >
          Logits Technologies
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/form"
            className="px-[30px] py-[10px] rounded-full border-2 border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Contact us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl"
        >
          ☰
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
