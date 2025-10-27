export default function ELearning() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">E-Learning Portal</h1>
          <p className="text-lg">Access your courses and learning materials online</p>
        </div>
      </section>

      {/* Portal Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-4">Online Learning Resources</h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Class 11",
                description: "Access all class 11 course materials and lectures",
              },
              {
                title: "Class 12",
                description: "Complete class 12 curriculum and study resources",
              },
              {
                title: "ADP Manuals",
                description: "ADP program study guides and reference materials",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#F39C12] hover:shadow-xl transition cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[#2E5090] mb-4">{resource.title}</h3>
                <p className="text-gray-700 mb-6">{resource.description}</p>
                <button className="bg-[#2E5090] text-white px-6 py-2 rounded hover:bg-[#1e3a5f] transition">
                  Access Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2E5090] mb-12">E-Learning Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Video Lectures", description: "High-quality recorded lectures for all subjects" },
              { title: "Study Materials", description: "Comprehensive notes and reference materials" },
              { title: "Assignments", description: "Regular assignments and practice problems" },
              { title: "Quizzes", description: "Self-assessment quizzes to test your knowledge" },
              { title: "Discussion Forums", description: "Interact with instructors and peers" },
              { title: "Progress Tracking", description: "Monitor your learning progress" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#2E5090] mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2E5090] mb-6 text-center">Login to E-Learning Portal</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Student ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  placeholder="Enter your student ID"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E5090] text-white py-2 rounded font-bold hover:bg-[#1e3a5f] transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
