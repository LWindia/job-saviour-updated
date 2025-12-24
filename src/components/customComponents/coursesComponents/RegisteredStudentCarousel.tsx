"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import first from "../../../../public/assets/registeredStudents/Artboard 1.png";
import second from "../../../../public/assets/registeredStudents/Artboard 1 copy.png";
import third from "../../../../public/assets/registeredStudents/Artboard 1 copy 9.png";
import fourth from "../../../../public/assets/registeredStudents/Artboard 1 copy 8.png";
import fifth from "../../../../public/assets/registeredStudents/Artboard 1 copy 7.png";
import sixth  from "../../../../public/assets/registeredStudents/Artboard 1 copy 6.png";
import seventh  from "../../../../public/assets/registeredStudents/Artboard 1 copy 5.png";
import eighth from "../../../../public/assets/registeredStudents/Artboard 1 copy 4.png";
import nineth  from "../../../../public/assets/registeredStudents/Artboard 1 copy 3.png";
import tenth from "../../../../public/assets/registeredStudents/Artboard 1 copy 2.png";
// import eleventh from "../../../../public/assets/registeredStudents/Artboard 1 copy 10.png";
import { TextGenerateEffect } from "../../ui/text-generate-effect";



const words = `and many more...`
export function RegisteredStudentCarousel() {
  return (
    <div className="max-w-7xl px-4 md:py-8 lg:py-8 py-2 mx-auto relative">
      <div className="text-center "> {/* Added text-center and margin bottom */}
        <div className="font-bold text-3xl inline-block">Technical students from <span className="text-[#ff0000]" >across India  </span><span>
            <img
              src="/assets/flag.png" 
              alt="Indian Flag" 
              width={20} 
              height={14} 
              style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} 
            />
           &nbsp; </span>  </div>
        <div className="text-gray-500">Becoming a part of Placement Guaranteed Initiative 2025</div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          cardWidth={250}
          cardHeight={250}
        />
      </div>
      <div className="flex justify-end md:mt-4">
    <TextGenerateEffect words={words} />;
    </div>
    </div>
  );
}

const testimonials = [
  { image: first.src },
  { image: second.src },
  { image: third.src },
  { image: fourth.src },
  { image: fifth.src },
  { image: sixth.src },
  { image: seventh.src },
  { image: eighth.src },
  { image: nineth.src },
  { image: tenth.src },
  // { image: eleventh.src },
  
];