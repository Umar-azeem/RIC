export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">About RIC</h1>
          <p className="text-lg">Learn more about our institution and values</p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Our Values</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in all aspects of education and student development.",
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and ethical conduct.",
              },
              {
                title: "Innovation",
                description: "We embrace innovation and modern teaching methodologies.",
              },
              {
                title: "Inclusivity",
                description: "We provide equal opportunities for all students regardless of background.",
              },
              {
                title: "Community",
                description: "We foster a strong sense of community and social responsibility.",
              },
              {
                title: "Leadership",
                description: "We develop leaders who make positive impact on society.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#F39C12]">
                <h3 className="text-2xl font-bold text-[#2E5090] mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   

      {/* Academic Regulations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Academic Regulations</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">Attendance Policy</h3>
                <p className="text-gray-700">
                  Students are required to maintain 75% attendance in all courses. Exceptions may be granted for medical
                  or emergency reasons.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">Grading System</h3>
                <p className="text-gray-700">
                  We follow a comprehensive grading system with continuous assessment, quizzes, assignments, and final
                  examinations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">Academic Integrity</h3>
                <p className="text-gray-700">
                  All students must adhere to the highest standards of academic integrity. Plagiarism and cheating are
                  strictly prohibited.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">Disciplinary Code</h3>
                <p className="text-gray-700">
                  Students are expected to maintain professional conduct. Violations may result in disciplinary action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
