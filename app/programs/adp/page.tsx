export default function ADPPrograms() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">ADP Programs</h1>
          <p className="text-lg">Associate Degree Programs for career advancement</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Available ADP Programs</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ADP Business Management",
                duration: "2 Years",
                description: "Develop management and business skills for corporate leadership.",
              },
              {
                title: "ADP Accounting & Finance",
                duration: "2 Years",
                description: "Master accounting principles and financial management.",
              },
              {
                title: "ADP Sales & Marketing",
                duration: "2 Years",
                description: "Learn modern marketing strategies and sales techniques.",
              },
              {
                title: "ADP Psychology",
                duration: "2 Years",
                description: "Explore human behavior and psychological principles.",
              },
              {
                title: "ADP Computing (Computer Science)",
                duration: "2 Years",
                description: "Build strong programming and software development skills.",
              },
              {
                title: "ADP Computing (Artificial Intelligence)",
                duration: "2 Years",
                description: "Learn AI, machine learning, and data science fundamentals.",
              },
              {
                title: "ADP Computing (Data Science)",
                duration: "2 Years",
                description: "Master data analysis and big data technologies.",
              },
              {
                title: "ADP Computer Graphics",
                duration: "2 Years",
                description: "Develop skills in digital design and animation.",
              },
              {
                title: "ADP Computer System",
                duration: "2 Years",
                description: "Learn system administration and network management.",
              },
              {
                title: "ADP English",
                duration: "2 Years",
                description: "Enhance language skills and literary knowledge.",
              },
              {
                title: "ADP Botany & Zoology",
                duration: "2 Years",
                description: "Study plant and animal biology in depth.",
              },
              {
                title: "ADP Mathematics & Physics",
                duration: "2 Years",
                description: "Master advanced mathematical and physical concepts.",
              },
              {
                title: "ADP Zoology & Chemistry",
                duration: "2 Years",
                description: "Explore zoology and chemical sciences.",
              },
              {
                title: "ADP Commerce",
                duration: "2 Years",
                description: "Comprehensive commerce and business studies.",
              },
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#F39C12]">
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{program.title}</h3>
                <p className="text-[#F39C12] font-semibold mb-2">Duration: {program.duration}</p>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">ADP Program Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Career Ready", description: "Gain practical skills directly applicable to job market" },
              { title: "Flexible Schedule", description: "Study options that fit your lifestyle" },
              { title: "Industry Partnerships", description: "Internship and placement opportunities" },
              { title: "Affordable Education", description: "Cost-effective quality education" },
              { title: "Pathway to Bachelor's", description: "Opportunity to pursue higher education" },
              { title: "Hands-on Learning", description: "Project-based and practical training" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
