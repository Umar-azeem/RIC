"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Search, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="bg-[#2E5090] text-white sticky top-0 z-50 shadow-lg " >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl ">
            <div className="w-20 h-20 md:w-28 md:h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center ">
           <Image
              src="/img/logo.png"  
              alt="Example image"        
              width={500}                
              height={300}         
    />
            </div>
       
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition flex items-center gap-1">
                About <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  Our Values
                </Link>
                <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-100">
                  Leadership
                </Link>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition flex items-center gap-1">
                Programs <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="/programs/intermediate" className="block px-4 py-2 hover:bg-gray-100">
                  Intermediate
                </Link>
                <Link href="/programs/adp" className="block px-4 py-2 hover:bg-gray-100">
                  ADP Programs
                </Link>
              </div>
            </div>

            {/* Admissions Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition flex items-center gap-1">
                Admissions <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="/admissions" className="block px-4 py-2 hover:bg-gray-100">
                  Admission Process
                </Link>
                <Link href="/apply" className="block px-4 py-2 hover:bg-gray-100">
                  Apply Online
                </Link>
              </div>
            </div>

            <Link href="/e-learning" className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              E-Learning
            </Link>

            <Link href="/campuses" className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Our Campuses
            </Link>

            <Link href="/apply" className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Apply Online
            </Link>

            <Link href="/contact" className="px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Contact Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded bg-white text-gray-800 text-sm w-32 focus:outline-none"
            />
            <button className="bg-white text-[#2E5090] p-2 rounded hover:bg-gray-100 transition">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Home
            </Link>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left px-3 py-2 rounded hover:bg-[#1e3a5f] transition flex items-center justify-between"
            >
              About <ChevronDown size={16} className={openDropdown === "about" ? "rotate-180" : ""} />
            </button>
            {openDropdown === "about" && (
              <div className="pl-4 space-y-2">
                <Link href="/about" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
                  Our Values
                </Link>
                <Link href="/leadership" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
                  Leadership
                </Link>
              </div>
            )}
            <button
              onClick={() => toggleDropdown("programs")}
              className="w-full text-left px-3 py-2 rounded hover:bg-[#1e3a5f] transition flex items-center justify-between"
            >
              Programs <ChevronDown size={16} className={openDropdown === "programs" ? "rotate-180" : ""} />
            </button>
            {openDropdown === "programs" && (
              <div className="pl-4 space-y-2">
                <Link href="/programs/intermediate" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
                  Intermediate
                </Link>
                <Link href="/programs/adp" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
                  ADP Programs
                </Link>
              </div>
            )}
            <Link href="/e-learning" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              E-Learning
            </Link>
            <Link href="/campuses" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Our Campuses
            </Link>
            <Link href="/apply" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Apply Online
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded hover:bg-[#1e3a5f] transition">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
