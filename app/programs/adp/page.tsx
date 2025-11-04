import Link from "next/link";

export default function ADPPrograms() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="flex justify-between  bg-[#2E5090] text-white py-12">
      
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">ADP Programs</h1>
          <p className="text-lg">Associate Degree Programs for career advancement</p>
        </div>
         <button
              // onClick={downloadProgramDetails}
              className="bg-[#F39C12] hover:bg-[#E67E22] text-white px-6 py-3 rounded-lg cursor-pointer font-semibold transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Details
            </button>
      </section>
       
      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Available ADP Programs</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ADP IT MANAGEMENT ",
                duration: "2 Years",
                description: "Develop management and business skills for corporate leadership.",
              },
              {
                title: "ADP Accounting & Finance",
                duration: "2 Years",
                description: "Master accounting principles and financial management.",
              },
              
              {
                title: "ADP Computing (Computer Science)",
                duration: "2 Years",
                description: "Build strong programming and software development skills.",
              },
              {
                title: "ADP English",
                duration: "2 Years",
                description: "Enhance language skills and literary knowledge.",
              },
              {
                title: "ADP ZBC(ZOOLOGY BOTANY CHEMISTRY)",
                duration: "2 Years",
                description: "Study plant and animal biology in depth.",
              },
              {
                title: "ADP MP(MATHS & PHYSICS)",
                duration: "2 Years",
                description: "Master advanced mathematical and physical concepts.",
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
       <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">
          Apply for the ADP Program
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-[#2E5090] mb-2">
              Associate Degree Programs
            </h3>
            <p className="text-gray-700 mb-4">
              Learn more about our ADP programs, eligibility, and admission process.
            </p>
            <Link
              href="/adpDetails"
              className="inline-block bg-[#F39C12] text-white px-5 py-2 rounded-lg hover:bg-[#1f3970] transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
     
  
    </main>
  )
}
