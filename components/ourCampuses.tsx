"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
 function OurCampuses() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)

  const campuses = [
    { name: "Bhalwal Campus", image: "/modern-campus-building-architecture.jpg" },
    { name: "BHERA Campus", image: "/educational-institution-architecture.jpg" },
    { name: "KOTMOMIN Campus", image: "/university-building-facade.jpg" },
    { name: "MANDIBHAUDDIN Campus", image: "/college-campus.png" },
    { name: "ATTOCK Campus", image: "/academic-building-modern.jpg" },
    { name: "WAH CANT Campus", image: "/educational-campus-exterior.jpg" },
    { name: "READER COLLEGE SIALMOR Campus", image: "/institutional-building.jpg" },
    { name: "READER COLLEGE 46 ADDA Campus", image: "/campus-architecture.jpg" },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1)
      else if (window.innerWidth < 1024) setSlidesToShow(2)
      else if (window.innerWidth < 1280) setSlidesToShow(3)
      else setSlidesToShow(4)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campuses.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [campuses.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campuses.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campuses.length) % campuses.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <div className="w-full px-4 md:px-8 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Our Campuses</h2>
                    <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
              >
                {campuses.map((campus, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: `${100 / slidesToShow}%` }}>
                    <Link href="/campuses" className="group block px-3 h-full">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-80">
                        <img
                          src={campus.image || "/placeholder.svg?height=320&width=400&query=campus"}
                          alt={campus.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-colors duration-300 flex items-end">
                          <div className="w-full p-6">
                            <h3 className="text-white font-bold text-xl leading-tight">{campus.name}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-8 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {campuses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default OurCampuses