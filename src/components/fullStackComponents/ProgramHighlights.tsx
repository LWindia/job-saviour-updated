import React from 'react';
import { Card } from "@/components/ui/card";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: "/assets/ExtraLogo/modules.png",
      number: "15+",
      description: "Hands on Modules",
    },
    {
      icon: "/assets/ExtraLogo/hours.png",
      number: "250+",
      description: "Hours of learning",
    },
    {
      icon: "/assets/ExtraLogo/tools.png",
      number: "18+",
      description: "Programming Tools",
    },
    {
      icon: "/assets/ExtraLogo/project-management.png",
      number: "10+",
      description: "Capstone Projects",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="py-6 lg:px-8 max-w-6xl mx-auto px-2">
        {/* Title */}
        <h2 className="text-gray-700 text-sm font-semibold mb-2 text-center">
          Your Pathway To Full Stack Development Career
        </h2>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Key <span className="text-[#ff0000]">Program</span> Highlights
        </h1>

        {/* Stats Card */}
        <Card className="p-8 bg-white rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index !== 0 ? 'md:border-l md:border-gray-300 md:pl-8' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <img 
                    src={item.icon}
                    alt={item.description}
                    className="h-12 w-12 p-1 rounded-lg bg-gray-100"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col">
                  <div className="text-[#ff0000] text-3xl font-bold">
                    {item.number}
                  </div>
                  <div className="text-gray-600 text-md">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramHighlights;

