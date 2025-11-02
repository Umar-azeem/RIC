"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CAMPUS_IMAGES = [
  {
    id: 1,
    src: "/image/r8.jpeg",
    alt: "Campus - Students in Laboratory",
  },
  {
    id: 2,
    src: "/image/r9.jpeg",
    alt: "Campus Building",
  },
  {
    id: 3,
    src: "/image/r4.jpeg",
    alt: "Library",
  },
  {
    id: 4,
    src: "/image/r6.jpeg",
    alt: "Sports Facility",
  },
  {
    id: 5,
    src: "/image/r5.jpeg",
    alt: "Classroom",
  },
  {
    id: 6,
    src: "/image/r2.jpeg",
    alt: "Campus Courtyard",
  },
  {
    id: 7,
    src: "/image/r17.jpeg",
    alt: "Campus Courtyard",
  },{
    id: 8,
    src: "/image/r1.jpeg",
    alt: "Campus Courtyard",
  },{
    id: 9,
    src: "/image/r9.jpeg",
    alt: "Campus Courtyard",
  },{
    id: 10,
    src: "/image/r10.jpeg",
    alt: "Campus Courtyard",
  },{
    id: 11,
    src: "/image/ri15.jpg",
    alt: "Campus Courtyard",
  },{
    id: 12,
    src: "/image/ri13.jpg",
    alt: "Campus Courtyard",
  },{
    id:13 ,
    src: "/image/ri12.jpg",
    alt: "Campus Courtyard",
  },
  {
    id: 14,
    src: "/image/ri1.jpg",
    alt: "Campus Courtyard",
  },{
    id: 15,
    src: "/image/ri2.jpg",
    alt: "Campus Courtyard",
  },{
    id:16 ,
    src: "/image/ri3.jpg",
    alt: "Campus Courtyard",
  },{
    id: 17,
    src: "/image/ri4.jpg",
    alt: "Campus Courtyard",
  },{
    id: 18,
    src: "/image/ri5.jpg",
    alt: "Campus Courtyard",
  },{
    id:19 ,
    src: "/image/ri6.jpg",
    alt: "Campus Courtyard",
  },{
    id: 20,
    src: "/image/ri7.jpg",
    alt: "Campus Courtyard",
  },{
    id: 21,
    src: "/image/ri8.jpg",
    alt: "Campus Courtyard",
  },{
    id:22 ,
    src: "/image/ri9.jpg",
    alt: "Campus Courtyard",
  },
  {
    id:23,
    src: "/image/ri14'.jpg",
    alt: "Campus Courtyard",
  },
]

 function OurValus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);

  // ✅ Responsive visible count update
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // ✅ Auto-slide
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + visibleCount) % CAMPUS_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, visibleCount]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - visibleCount + CAMPUS_IMAGES.length) % CAMPUS_IMAGES.length
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % CAMPUS_IMAGES.length);
    setIsAutoPlay(false);
  };

  const itemWidth = 100 / visibleCount;


  return (
    <section className="py-10 md:py-16 bg-[#2E5090] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center mb-8 sm:mb-10 md:mb-12">
  {/* Campuses */}
  <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F39C12] mb-1 sm:mb-2">45+</div>
    <p className="text-base sm:text-lg md:text-xl">Campuses</p>
  </div>

  {/* Teachers */}
  <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F39C12] mb-1 sm:mb-2">1,000+</div>
    <p className="text-base sm:text-lg md:text-xl">Teachers</p>
  </div>

  {/* Students */}
  <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F39C12] mb-1 sm:mb-2">20,000+</div>
    <p className="text-base sm:text-lg md:text-xl">Students</p>
  </div>
</div>


        {/* Image Carousel */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {CAMPUS_IMAGES.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0"
                  style={{ width: `${itemWidth}%` }}
                >
                  <div className="relative h-56 sm:h-64 md:h-72 w-full rounded-lg overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#F39C12] text-white p-2 sm:p-3 rounded-full transition duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#F39C12] text-white p-2 sm:p-3 rounded-full transition duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {CAMPUS_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#F39C12] w-6 sm:w-8"
                    : "bg-white/40 w-2 sm:w-3 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>


  )
}
export default OurValus