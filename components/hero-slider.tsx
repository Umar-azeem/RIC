"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/modern-classroom-study.png",
    title: "Welcome to RIC",
    subtitle: "Preparing students with transformative experience",
  },
  {
    image: "/engineering-students-project.png",
    title: "Excellence in Education",
    subtitle: "Building future leaders",
  },
  {
    image: "/campus-building-with-students.jpg",
    title: "Our Community",
    subtitle: "Join thousands of successful graduates",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{slide.title}</h2>
            <p className="text-xl md:text-2xl text-white text-center mb-8">{slide.subtitle}</p>
            <Link href="/apply">
              <button className="bg-[#F39C12] hover:bg-[#E67E22] text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2E5090] p-2 rounded-full transition z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2E5090] p-2 rounded-full transition z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${index === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
