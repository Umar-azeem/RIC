"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook } from "lucide-react";

export default function OurCampuses() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const campuses = [
    {
      name: "Bhalwal Campus",
      image: "/image/bhalwal.jpg",
      fb: "https://web.facebook.com/riphahbhalwal/?_rdc=1&_rdr#",
    },
    {
      name: "BHERA Campus",
      image: "/image/bhera.jpg",
      fb: "https://www.facebook.com/p/Riphah-International-College-Bhera-100082647904099/",
    },
    {
      name: "KOTMOMIN Campus",
      image: "/image/kot.jpg",
      fb: "https://www.facebook.com/p/Riphah-International-College-And-University-Programs-Kotmomin-100065163294264/",
    },
    {
      name: "MANDIBHAUDDIN Campus",
      image: "/image/din.jpg",
      fb: " https://www.facebook.com/profile.php?id=61574027771857#",
    },
    {
      name: "ATTOCK Campus",
      image: "/image/attock.jpeg",
      fb: "https://www.facebook.com/ricattockcampus",
    },
    {
      name: "WAH CANT Campus",
      image: "/image/wha.jpg",
      fb: "https://www.facebook.com/riphahwah/",
    },
    // {
    //   name: "READER COLLEGE SIALMOR Campus",
    //   image: "/institutional-building.jpg",
    //   fb: "#",
    // },
    // {
    //   name: "READER COLLEGE 46 ADDA Campus",
    //   image: "/campus-architecture.jpg",
    //   fb: "#",
    // },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campuses.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [campuses.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campuses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campuses.length) % campuses.length);
  };

  return (
    <section className="max-h-screen bg-gradient-to-b from-white to-blue-50 py-4 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#2E5090] mb-2">Our Campuses</h2>
        <div className="w-20 h-1 bg-[#F39C12] mx-auto"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {campuses.map((campus, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={campus.image}
                      alt={campus.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex items-end">
                      <div className="w-full p-5 flex justify-between items-center text-white">
                        <h3 className="text-lg font-bold leading-tight">{campus.name}</h3>
                        <Link
                          href={campus.fb}
                          target="_blank"
                          className="hover:bg-[#2E5090]/80  bg-[#F39C12] p-2 rounded-full transition"
                        >
                          <Facebook size={20}  className="hover:text-[#F39C12] text-[#2E5090]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2E5090] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition z-10 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2E5090] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition z-10 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {campuses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#2E5090] w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
