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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Riphah International College, Bhalwal",
                address: "Bhalwal, Punjab, Pakistan",
                image: "/campus-building-with-students.jpg",
                programs: ["Intermediate", "ADP Programs"],
              },
              {
                name: "Riphah International College, Shahkot",
                address: "Shahkot, Punjab, Pakistan",
                image: "/classic-college-building.png",
                programs: ["Intermediate", "ADP Programs"],
              },
              {
                name: "Riphah International College, Khanewal",
                address: "Khanewal, Punjab, Pakistan",
                image: "/modern-campus.jpg",
                programs: ["Intermediate", "ADP Programs"],
              },
              {
                name: "Riphah International College, Lahore",
                address: "Lahore, Punjab, Pakistan",
                image: "/educational-institution.jpg",
                programs: ["Intermediate", "ADP Programs"],
              },
            ].map((campus, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={campus.image || "/placeholder.svg"} alt={campus.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2E5090] mb-2">{campus.name}</h3>
                  <p className="text-gray-600 mb-4">{campus.address}</p>
                  <div>
                    <h4 className="font-bold text-[#2E5090] mb-2">Programs Offered:</h4>
                    <ul className="space-y-1">
                      {campus.programs.map((program, i) => (
                        <li key={i} className="text-gray-700 flex items-center gap-2">
                          <span className="text-[#F39C12]">•</span> {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
