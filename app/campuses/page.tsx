import OurCampuses from "@/components/ourCampuses";

export default function Campuses() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Campuses</h1>
          <p className="text-lg">Visit our campuses across Pakistan</p>
        </div>
      </section>

      {/* Campuses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">RIC Campuses</h2>

         <OurCampuses/>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">Campus Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modern Classrooms", description: "Well-equipped with latest technology" },
              { title: "Science Labs", description: "State-of-the-art laboratory facilities" },
              { title: "Computer Labs", description: "Advanced computing and IT infrastructure" },
              { title: "Library", description: "Comprehensive collection of books and resources" },
              { title: "Sports Facilities", description: "Grounds and facilities for sports activities" },
              { title: "Cafeteria", description: "Hygienic food and beverage services" },
            ].map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
