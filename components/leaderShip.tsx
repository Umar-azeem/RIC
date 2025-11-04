"use client";
import Image from "next/image";

 function LeaderShip() {
  const directors = [
    {
      name: "SIR CHAUDHARY MUHAMMAD SHEHRYAR WARRIACH SAB",
      title: "Director",
      image: "/image/sha.jpeg",
    },
    {
      name: "SIR CHAUDHARY MUHAMMAD SHAHNAWAZ AHMED WARRIACH SAB",
      title: " Director ",
      image: "/image/14.jpeg",
    },
  ];

  const seniorTeachers = [
    { name: "Naveed Abbas Khan", title: "Principal", image: "/image/r12.jpeg" },
 ];

  const staffMembers = [
    { name: "Sir Hamid", title: "Intermediate coordinator", image: "/image/him.png" },
    { name: "Sir Aqib ", title: "ADP COORDINATOR", image: "/image/aqi.png" },
    { name: "Rr Mam Maria Mumtaz", title: "Admin", image: "/image/mari.jpeg" },
    { name: "Rr Mam maryam", title: "IT & Programing", image: "/image/fe2.jpg" },
    { name: "Rr Mam Samiya", title: "HR MANAGER", image: "/image/fe3.jpg" },
  ];
 
 

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4">
      {/* ===== Page Title ===== */}
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Leadership & Management
      </h1>

      {/* ===== Directors Section ===== */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">
          Directors & Principals
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {directors.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-blue-600 font-medium">{person.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Senior Teachers Section ===== */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-blue-700">
          Senior Faculty
        </h2>
        <div className="flex justify-center items-center  gap-6 max-w-6xl mx-auto">
          {seniorTeachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold">{teacher.name}</h3>
              <p className="text-sm text-blue-600">{teacher.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== All Staff Section ===== */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8 text-blue-700">
          Our Dedicated Staff
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {staffMembers.map((staff, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-3 text-center hover:shadow-md transition"
            >
              <Image
                src={staff.image}
                alt={staff.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-2 object-cover"
              />
              <h4 className="font-medium text-gray-900 text-sm">{staff.name}</h4>
              <p className="text-xs text-blue-600">{staff.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default LeaderShip

