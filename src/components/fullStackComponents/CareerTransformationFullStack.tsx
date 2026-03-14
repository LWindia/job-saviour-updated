


"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui2/infinite-moving-cards";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { profileData } from "@/data/profileData";

const words = `and many more...`

export function CareerTransformationFullStack() {
  return (
    <div className="max-w-7xl px-4 md:py-8 lg:py-8 py-2 mx-auto relative">
      <div className="text-center">
        <div className="font-bold text-3xl inline-block">
          <span className="text-[#ff0000]">Career Transformations </span>
          Success Stories from our Learners
          <span>
            <img
              src="/assets/flag.png" 
              alt="Indian Flag" 
              width={20} 
              height={14} 
              style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} 
            />
            &nbsp;
          </span>
        </div>
        <div className="text-gray-500">
          With our FullStack Development  Expert Program, IT professionals have transformed their careers and achieved their goals!
        </div>
      </div>
      
      <div className="rounded-md mt-6 flex flex-col antialiased bg-[#e2e2e2] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={profileData}
          direction="left"
          speed="slow"
          cardWidth={350}
          cardHeight={350}
        />
      </div>
      
      <div className="flex text-md justify-end md:mt-4">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}