"use client";
import { Download } from "lucide-react";

export default function AdpDetails() {
  const handleDownload = () => {
    // Example: download PDF form
    const link = document.createElement("a");
    link.href = "/files/ADP_Admission_Form.pdf"; // put your PDF file path in public/files/
    link.download = "ADP_Admission_Form.pdf";
    link.click();
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#2E5090] mb-6 text-center">
          ADP Admission Details
        </h1>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🎓 Programs Offered</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>ADP (ADP IT MANAGEMENT) – ZBC</li>
          <li>ADP (Accounting & Finance)</li>
          <li>ADP Computing (Computer Science)</li>
          <li>ADP English</li>
          <li>ADP ZBC (Zoology, Botany, Chemistry)</li>
          <li>ADP MP (Maths & Physics)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📋 Eligibility Criteria</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Must have passed Intermediate (FA/FSc/ICS/I.Com) or equivalent from a recognized board.</li>
          <li>Minimum 45% marks in Intermediate (some programs may require 50%).</li>
          <li>No age limit for admission.</li>
          <li>Both male and female students are encouraged to apply.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📂 Required Documents</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Matric / O-Level Result Card</li>
          <li>Intermediate / A-Level Result Card</li>
          <li>CNIC / B-Form</li>
          <li>Father / Guardian CNIC</li>
          <li>4 Passport-size Photographs</li>
          <li>Character Certificate (from previous institution)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🧾 Admission Process</h2>
        <ol className="list-decimal ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Visit Riphah International College campus or apply online.</li>
          <li>Fill out the admission form carefully.</li>
          <li>Submit the required documents.</li>
          <li>Appear for the interview / counseling session.</li>
          <li>Submit the admission fee and confirm your seat.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🏅 Why Choose Riphah?</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Experienced & Qualified Faculty</li>
          <li>Modern Laboratories & Learning Environment</li>
          <li>Scholarships & Financial Aid</li>
          <li>Islamic & Ethical Environment</li>
          <li>Career Counseling & Job Placement Support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📞 Contact Information</h2>
        <p className="text-gray-700 mb-6">
          <strong>Riphah International College (RIC) – Bhalwal Campus</strong><br />
          📱 Phone: 0320-2626913 / 0325-0123008 / 0321-6021006<br />
          📍 Address: Near Government Degree College, Bhalwal, Sargodha<br />
          ✉️ Email: director.bhalwal@ric.edu.pk
        </p>

        {/* Download Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-[#2E5090] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1f3970] transition"
          >
            <Download size={20} />
            Download Admission Form
          </button>
        </div>
      </div>
    </section>
  );
}
