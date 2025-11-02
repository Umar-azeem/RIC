import HeroSlider from "@/components/hero-slider"
import NameList from "@/components/nameList";
import OurCampuses from "@/components/ourCampuses";
import OurValus from "@/components/ourValus";
import Link from "next/link"

export default function Home() {
 
  return (
    <main className="min-h-screen">
      {/* Hero Slider */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <HeroSlider />
      </section>

<NameList/>
      

      
     
      <OurValus/>

     
      
          <OurCampuses/>


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
              { title: "Riphah International College “ORIENTATION CEREMONY”", image: "/image/r17.jpeg" },
              { title: "🌟“Sports Day & Gala Celebration”", image: "/image/r18.jpeg" },
              { title: "“Celebrating Freedom with Pride”", image: "/image/r19.jpeg" },
              { title: "“Parent Teacher Interaction”", image: "/image/r9.jpeg" },
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-64 object-cover" />
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
