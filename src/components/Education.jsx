import React, { useState } from "react";
import { ChevronRight, GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const education = [
    {
      id: 0,
      degree: "Master of Computer Applications (MCA)",
      shortTitle: "Masters (MCA)",
      school: "Sinhgad Institute of Management (SIOM)",
      year: "2025 - 2027",
      status: "Pursuing",
      details: [
        "Focusing on Advanced Software Development and System Architecture.",
        "Deepening expertise in Full Stack Technologies (MERN).",
        "Participating in technical hackathons and coding sprints.",
      ],
    },
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      shortTitle: "Bachelors (B.Sc)",
      school: "PDEA's Annasaheb Magar Mahavidyalaya",
      year: "2022 - 2025",
      status: "Completed (CGPA: 7.91)",
      details: [
        "Built a strong foundation in Data Structures, Algorithms, and OOP.",
        "Completed capstone project: Hotel Management System.",
        "Active member of the college coding club and sports committee.",
      ],
    },
  ];

  return (
    <section className="py-20 text-white flex justify-center">
      <div className="w-full max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="border-b-4 border-purple-500 pb-2">Education</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: The Tabs */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:w-1/3">
            {education.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left min-w-[200px] ${
                  activeTab === index
                    ? "bg-purple-900/40 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-gray-900/40 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${activeTab === index ? "bg-purple-400 animate-pulse" : "bg-gray-600"}`}
                  ></div>
                  <span className="font-semibold">{item.shortTitle}</span>
                </div>
                {activeTab === index && (
                  <ChevronRight size={18} className="text-purple-400" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: The Content Display (Glass Panel) */}
          <div className="flex-1 min-h-[300px]  relative">
            {education.map(
              (item, index) =>
                // We map all but only show the active one to allow for transition effects if added later
                activeTab === index && (
                  <div
                    key={item.id}
                    className="bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-purple-400 font-medium text-lg">
                          {item.school}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center justify-center gap-2 text-gray-300 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                          <Calendar size={14} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 bg-green-900/20 px-3 py-1 rounded-lg border border-green-500/30 mt-2">
                          <Award size={14} />
                          <span className="text-sm font-semibold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-700 mb-6" />

                    {/* Bullet Points */}
                    <ul className="space-y-4">
                      {item.details.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-purple-500"></div>
                          <p className="leading-relaxed">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
