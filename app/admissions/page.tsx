export default function Admissions() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admissions</h1>
          <p className="text-lg">Join our community of learners and leaders</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Admission Process</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Application", description: "Submit your online application form" },
              { step: "2", title: "Documents", description: "Provide required academic documents" },
              { step: "3", title: "Interview", description: "Attend admission interview" },
              { step: "4", title: "Enrollment", description: "Complete enrollment and registration" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-[#F39C12]">
                <div className="text-4xl font-bold text-[#2E5090] mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">Admission Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2E5090] mb-4">For Intermediate Programs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Completion of 10th grade (Matric)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Minimum 50% marks in previous examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Valid CNIC or B-Form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Character certificate from previous school</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2E5090] mb-4">For ADP Programs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Completion of Intermediate (12th grade)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Minimum 45% marks in previous examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Valid CNIC or B-Form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F39C12] font-bold">✓</span>
                  <span>Character certificate from previous institution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2E5090] mb-4">Ready to Apply?</h2>
          <p className="text-gray-700 mb-8 text-lg">Start your journey with RIC today</p>
          <a
            href="/apply"
            className="inline-block bg-[#F39C12] text-white px-8 py-3 rounded font-bold hover:bg-[#e68a0a] transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  )
}
