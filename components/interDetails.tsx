"use client";
import { Download } from "lucide-react";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function IntermediateDetails() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = () => {
    const element = contentRef.current;
    if (!element) return;

    // ✅ just use "any" type for options (no Html2PdfOptions type exists)
    const options: any = {
      margin: 0.5,
      filename: "Intermediate_Admission_Details.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <section className="py-16 bg-white">
      <div ref={contentRef} className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#2E5090] mb-6 text-center">
          Intermediate Admission Details
        </h1>

        {/* Programs Offered */}
        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🎓 Programs Offered</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>FSc (Pre-Medical)</li>
          <li>FSc (Pre-Engineering)</li>
          <li>ICS (Computer Science)</li>
          <li>I.Com (Commerce)</li>
          <li>FA (Arts / Humanities)</li>
          <li>FA (General Science)</li>
        </ul>

        {/* Eligibility Criteria */}
        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📋 Eligibility Criteria</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Must have passed Matriculation / O-Level or equivalent from a recognized board.</li>
          <li>Minimum 45% marks in Matriculation.</li>
          <li>No age limit for admission.</li>
          <li>Both male and female students can apply.</li>
        </ul>

        {/* Required Documents */}
        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📂 Required Documents</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Matric / O-Level Result Card (original + copies)</li>
          <li>School Leaving Certificate / Character Certificate</li>
          <li>CNIC / B-Form of student</li>
          <li>CNIC of Father / Guardian</li>
          <li>4 Passport-size Photographs</li>
          <li>Domicile (if required)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🧾 Admission Process</h2>
        <ol className="list-decimal ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Visit Riphah International College campus or apply online.</li>
          <li>Collect and fill out the admission form carefully.</li>
          <li>Submit all required documents along with the form.</li>
          <li>Appear for the interview / counseling session.</li>
          <li>Deposit the admission fee to confirm your enrollment.</li>
        </ol>

        {/* Why Choose Riphah */}
        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">🏅 Why Choose Riphah?</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Qualified and Experienced Teachers</li>
          <li>Modern Classrooms and Labs</li>
          <li>Scholarship Opportunities for High Achievers</li>
          <li>Ethical & Islamic Learning Environment</li>
          <li>Personality Development & Career Guidance</li>
        </ul>

        {/* Contact Info */}
        <h2 className="text-2xl font-semibold text-[#2E5090] mb-3">📞 Contact Information</h2>
        <p className="text-gray-700 mb-6">
          <strong>Riphah International College (RIC) – Bhalwal Campus</strong><br />
          📱 Phone: 0320-2626913 / 0325-0123008 / 0321-6021006<br />
          📍 Address: Near Government Degree College, Bhalwal, Sargodha<br />
          ✉️ Email: director.bhalwal@ric.edu.pk
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 bg-[#2E5090] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1f3970] transition"
        >
          <Download size={20} />
          Download Page as PDF
        </button>
      </div>
    </section>
  );
}
