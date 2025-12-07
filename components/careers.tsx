'use client'

// READY CAREERS PAGE WITH SUBJECT REQUIREMENTS + FORM + WHATSAPP + EMAIL
// Path: app/careers/page.tsx

import { useState } from "react";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SEND FORM DATA TO WHATSAPP + EMAIL BACKEND
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const whatsappNumber = "03202626913";
    const whatsappMsg = `New Teacher Application%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AQualification: ${form.qualification}%0ASubject: ${form.subject}%0A%0A${form.message}`;

    // OPEN WHATSAPP
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`);

    // SEND EMAIL THROUGH API ROUTE
    await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Application Submitted Successfully!");
  };

  const subjects = [
    {
      title: "ADP IT Management",
      duration: "2 Years",
      requirement: "BS / MPhil in IT, Management, Business",
    },
    {
      title: "ADP Accounting & Finance",
      duration: "2 Years",
      requirement: "B.Com / M.Com / BS Accounting / MPhil",
    },
    {
      title: "ADP Computing (Computer Science)",
      duration: "2 Years",
      requirement: "BSCS / BS Software Eng / MCS / MSCS",
    },
    {
      title: "ADP English",
      duration: "2 Years",
      requirement: "BS English / MA English / MPhil English",
    },
    {
      title: "ADP ZBC (Zoology Botany Chemistry)",
      duration: "2 Years",
      requirement: "BS / MSc Zoology / Botany / Chemistry / MPhil",
    },
    {
      title: "ADP MP (Math & Physics)",
      duration: "2 Years",
      requirement: "BS Maths / BS Physics / MSc / MPhil",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Careers</h1>
        <p className="text-gray-700 mb-6">
          Join Riphah International Bhalwal — Apply for Teaching Positions Based on Your Subject.
        </p>

        <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-6 mb-3">Teaching Positions Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((s, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <h3 className="font-semibold text-sm md:text-lg text-blue-800">{s.title}</h3>
              <p className="text-orange-600 text-xs md:text-md font-semibold">Duration: {s.duration}</p>
              <p className="text-gray-700 mt-2 text-sm">Teacher Requirement:</p>
              <p className="text-gray-900 mt-2 text-sm font-medium">{s.requirement}</p>
            </div>
          ))}
        </div>

        <h2 className="text-md  md:text-xl  font-semibold mt-8 mb-3">Apply as a Teacher</h2>
        <p className="text-gray-700 mb-4">Your application will be sent to WhatsApp + Email.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" onChange={handleChange} required placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input name="email" onChange={handleChange} required type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input name="phone" onChange={handleChange} required placeholder="Phone Number" className="w-full p-3 border rounded-lg" />

          <input name="qualification" onChange={handleChange} required placeholder="Highest Qualification (BS / MPhil / MSc)" className="w-full p-3 border rounded-lg" />

          <select name="subject" onChange={handleChange} required className="w-full p-3 border rounded-lg">
            <option value="">Select Subject</option>
            {subjects.map((s, i) => (
              <option key={i} value={s.title}>{s.title}</option>
            ))}
          </select>

          <textarea name="message" onChange={handleChange} placeholder="Message (Optional)" className="w-full p-3 border rounded-lg" />

          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg w-full">Submit Application</button>
        </form>

        <div className="mt-8 text-gray-700">
          <p><strong>WhatsApp:</strong> 0320-2626913 / 0325-0123008</p>
          <p><strong>Email:</strong> director.bhalwal@ric.edu.pk</p>
        </div>
      </div>
    </div>
  );
}
