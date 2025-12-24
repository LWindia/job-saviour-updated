"use client";
 
import { PlacementCard, CardData } from './card';
import { Rays } from './rays';
import { Beams } from './beams';
import { useState } from "react";
import { Lens } from "../ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image2024 from "../../../public/assets/2024.jpg";
import Image2025 from "../../../public/assets/2025.jpg";
import singzy from "../../../public/assets/singzy.jpg";
import deloitte from "../../../public/assets/deloitte.jpg";

export function RecentPlacedStudents() {
  // Create separate hovering state for each card
  const [hoveringStates, setHoveringStates] = useState([false, false, false, false]);

  // Function to update hovering state for a specific card
  const handleHover = (index: number, isHovering: boolean) => {
    const newHoveringStates = [...hoveringStates];
    newHoveringStates[index] = isHovering;
    setHoveringStates(newHoveringStates);
  };

  // Card data
  const cardData: CardData[] = [
    {
      title: "42+ students shortlisted for Deloitte",
      description: "  as Fresher DevOps Engineer : 2024/2025 passouts from our previous DevOps batch",
      imageUrl: deloitte.src
    },
    {
        title: "1052 learners placed in 2024  last year ",
        description: "  401 Freshers & 651 professionals with 2x hike got placed in companies hiring exclusively from LinuxWorld",
        imageUrl: Image2024.src
      },
    {
      
      title: "46+ students shortlisted for Signzy  ",
      description: "as DevOps Engineer - Freshers 2024-2025 passouts from our previous DevOps batch",
      imageUrl: singzy.src
    },
  
    {
      title: "5000+ jobs in 2026 – Big Year ",
      description: "  2026 is expected to see significantly higher job openings for core technical roles compared to 2025. ",
      imageUrl: Image2025.src
    }
  ];

  return (
    <div className=''>
    <div className="container max-w-6xl mx-auto px-4 py-8 md:py-4 lg:py-4">
      {/* Heading Section */}
      <div className="text-center mb-4 ">
        <h1 
       
          className="text-3xl md:text-3xl lg:text-3xl font-bold text-black mb-2"
        >
          <span className='text-[#ff0000]'>Latest </span>Updates
        </h1>
        < p className="text-gray-700 text-lg">
          
          Discover the incredible journey of our students, from learning to landing dream jobs at top-tier companies
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 
            }}
            className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Rays />
            <Beams />
            <div className="relative z-10">
              <Lens 
                hovering={hoveringStates[index]}
                setHovering={(isHovering) => handleHover(index, isHovering)}
              >
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover aspect-square"
                />
              </Lens>
              <div className="py-4 relative z-20">
                <h2 className="text-white text-xl text-left font-bold">
                  {card.title}
                </h2>
                <p className="text-neutral-200 text-left mt-2 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}