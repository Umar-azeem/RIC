export default function IntermediatePrograms() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Intermediate Programs</h1>
          <p className="text-lg">Prepare for your future with our comprehensive intermediate education</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Our Intermediate Programs</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FSc Pre-Engineering",
                description: "Prepare for engineering studies with advanced physics, chemistry, and mathematics.",
                subjects: ["Physics", "Chemistry", "Mathematics", "English", "Islamic Studies"],
              },
              {
                title: "FSc Pre-Medical",
                description: "Build a strong foundation for medical and health sciences education.",
                subjects: ["Biology", "Chemistry", "Physics", "English", "Islamic Studies"],
              },
              {
                title: "FA (Arts)",
                description: "Explore humanities with focus on literature, history, and social sciences.",
                subjects: ["English", "Urdu", "History", "Islamic Studies", "Civics"],
              },
              {
                title: "Commerce",
                description: "Develop business and commerce skills for future entrepreneurs.",
                subjects: ["Accounting", "Economics", "Business Studies", "Mathematics", "English"],
              },
            ].map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#F39C12]">
                <h3 className="text-2xl font-bold text-[#2E5090] mb-4">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div>
                  <h4 className="font-bold text-[#2E5090] mb-2">Key Subjects:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {program.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">Why Choose Our Programs?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Faculty", description: "Learn from experienced and qualified educators" },
              { title: "Modern Facilities", description: "State-of-the-art laboratories and learning resources" },
              { title: "Career Guidance", description: "Comprehensive counseling for future planning" },
              { title: "Small Class Sizes", description: "Personalized attention for each student" },
              { title: "Extracurricular Activities", description: "Develop skills beyond academics" },
              { title: "Scholarship Programs", description: "Financial assistance for deserving students" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
