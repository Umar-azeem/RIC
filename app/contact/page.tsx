export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">Get in touch with RIC</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Address",
                content: "Bhalwal, Punjab, Pakistan",
              },
              {
                title: "Phone",
                content: "+92-XXX-XXXXXXX",
              },
              {
                title: "Email",
                content: "info@ric.edu.pk",
              },
            ].map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#F39C12]">
                <h3 className="text-2xl font-bold text-[#2E5090] mb-4">{info.title}</h3>
                <p className="text-gray-700 text-lg">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090] h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2E5090] text-white py-2 rounded font-bold hover:bg-[#1e3a5f] transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6">Location</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8567521625266!2d72.73916!3d32.77889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0b8b8b8b8b9%3A0x0!2sBhalwal!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
