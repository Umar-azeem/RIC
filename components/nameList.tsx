import React from 'react';

function NameList() {
  const values = [
    {
      arabic: "مُحاسَبَة",
      english: "MUHASABAH",
      meaning: "(Accountability)",
      color: "border-orange-500 hover:bg-orange-500 hover:text-white",
    },
    {
      arabic: "اِجْتِمَاعِيَّة",
      english: "IJTIMAIYYAH",
      meaning: "(Team Work)",
      color: "border-green-600 hover:bg-green-600 hover:text-white",
    },
    {
      arabic: "مُشَاوَرَة",
      english: "MUSHAWARAH",
      meaning: "(Consultation & Harmony)",
      color: "border-red-600 hover:bg-red-600 hover:text-white",
    },
    {
      arabic: "رَحْمَة",
      english: "RAHMAH",
      meaning: "(Compassion)",
      color: "border-cyan-700 hover:bg-cyan-700 hover:text-white",
    },
    {
      arabic: "إِتْقَان",
      english: "ITQAN",
      meaning: "(Pursuit of Excellence)",
      color: "border-purple-700 hover:bg-purple-700 hover:text-white",
    },
    {
      arabic: "الآخِرَة",
      english: "AL-AKHIRAH",
      meaning: "(Akhirah Oriented Decisions)",
      color: "border-yellow-600 hover:bg-yellow-600 hover:text-white",
    },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Values</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {values.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center border-4 rounded-[20%] transition-all duration-300 
              ${item.color}
              w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44
            `}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">{item.arabic}</p>
            <p className="font-bold text-sm sm:text-base">{item.english}</p>
            <p className="text-xs sm:text-sm">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NameList;
