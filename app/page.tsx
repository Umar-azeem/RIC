import HeroSlider from "@/components/hero-slider"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Slider */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <HeroSlider />
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Our Values</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#2E5090]">
              <h3 className="text-2xl font-bold text-[#2E5090] mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that prepares students with transformative experience and to be
                well-rounded leaders who make a positive impact on the world.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#F39C12]">
              <h3 className="text-2xl font-bold text-[#F39C12] mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that develops critical thinking, creativity, and leadership skills while
                fostering a commitment to social responsibility and ethical values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#2E5090] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#F39C12] mb-2">45+</div>
              <p className="text-xl">Campuses</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#F39C12] mb-2">1,000+</div>
              <p className="text-xl">Teachers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#F39C12] mb-2">20,000+</div>
              <p className="text-xl">Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Campuses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Our Campuses</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Bhalwal Campus", image: "/classic-college-building.png" },
              { name: "Lahore Campus", image: "/modern-campus.jpg" },
              { name: "Islamabad Campus", image: "/educational-institution.jpg" },
              { name: "Karachi Campus", image: "/grand-university-facade.png" },
            ].map((campus, index) => (
              <Link key={index} href="/campuses" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
                  <img
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end">
                    <h3 className="text-white font-bold text-lg p-4">{campus.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs & Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Blogs & Articles</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12">What's happening in RIC</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Why Pursue FA at Riphah International...", image: "/books-and-globe.jpg" },
              { title: "FSc Pre-Engineering at Riphah: Your...", image: "/engineering-lab.jpg" },
              { title: "Empowering Future Professionals with...", image: "/business-meeting-collaboration.png" },
              { title: "ADP in Business Management: Launc...", image: "/business-professionals.jpg" },
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-[#2E5090] hover:text-[#F39C12] transition cursor-pointer">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#2E5090] text-white px-8 py-3 rounded font-bold hover:bg-[#1e3a5f] transition">
              View all
            </button>
          </div>
        </div>
      </section>

      {/* Latest News & Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Latest News & Events</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12">What's happening in RIC</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Riphah International College is now in...", image: "/location-announcement.jpg" },
              { title: "Leadership and Management'...", image: "/training-session.jpg" },
              { title: "A Safe and Healthy Working...", image: "/workplace-safety-awareness.png" },
              { title: "21st Century Colleges' Training...", image: "/modern-education.jpg" },
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-[#2E5090] hover:text-[#F39C12] transition cursor-pointer">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#2E5090] text-white px-8 py-3 rounded font-bold hover:bg-[#1e3a5f] transition">
              View all
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
