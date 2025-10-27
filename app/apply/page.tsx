"use client"

import type React from "react"

import { useState } from "react"

export default function ApplyOnline() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cnic: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    province: "",
    previousSchool: "",
    previousMarks: "",
    program: "",
    campus: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cnic: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        city: "",
        province: "",
        previousSchool: "",
        previousMarks: "",
        program: "",
        campus: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#2E5090] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Apply Online</h1>
          <p className="text-lg">Start your journey with RIC</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {submitted && (
            <div className="mb-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Application Submitted Successfully!</h3>
              <p>Thank you for applying to RIC. We will review your application and contact you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6 pb-4 border-b-2 border-[#F39C12]">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">CNIC *</label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter CNIC number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6 pb-4 border-b-2 border-[#F39C12]">
                Address Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Province *</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter province"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6 pb-4 border-b-2 border-[#F39C12]">
                Academic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Previous School/College *</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter school/college name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Previous Marks/GPA *</label>
                  <input
                    type="text"
                    name="previousMarks"
                    value={formData.previousMarks}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter marks or GPA"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Program *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  >
                    <option value="">Select Program</option>
                    <option value="fsc-engineering">FSc Pre-Engineering</option>
                    <option value="fsc-medical">FSc Pre-Medical</option>
                    <option value="fa-arts">FA (Arts)</option>
                    <option value="commerce">Commerce</option>
                    <option value="adp-business">ADP Business Management</option>
                    <option value="adp-accounting">ADP Accounting & Finance</option>
                    <option value="adp-computing">ADP Computing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Preferred Campus *</label>
                  <select
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                  >
                    <option value="">Select Campus</option>
                    <option value="bhalwal">Bhalwal</option>
                    <option value="shahkot">Shahkot</option>
                    <option value="khanewal">Khanewal</option>
                    <option value="lahore">Lahore</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2E5090] mb-6 pb-4 border-b-2 border-[#F39C12]">
                Parent/Guardian Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Parent Phone Number *</label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter parent phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2">Parent Email *</label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E5090]"
                    placeholder="Enter parent email"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#2E5090] text-white py-3 rounded font-bold hover:bg-[#1e3a5f] transition"
              >
                Submit Application
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-400 text-white py-3 rounded font-bold hover:bg-gray-500 transition"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
