"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

const words = `and many more...`

// List of all images from public/assets/placed-new folder
const placedNewImages = [
  "Abhishek Sanap.png",
  "Aditya Joshi.png",
  "Akansh.png",
  "Akshansh.png",
  "Aman copy 2.png",
  "Aman copy 3.png",
  "Aman copy.png",
  "Aman.png",
  "Archishman.png",
  "Arpit Jindal.png",
  "Balaji.png",
  "Daksh.png",
  "Divya.png",
  "Dolly.png",
  "Kishan Ray copy 2.png",
  "Kishan Ray copy 3.png",
  "Kishan Ray copy 4.png",
  "Kishan Ray copy.png",
  "Kishan Ray.png",
  "Kuldeep Kumawat copy.png",
  "Kuldeep Kumawat.png",
  "Manali.png",
  "manan.png",
  "Mohak Gund.png",
  "Mohit Vyas.png",
  "Mona Chawala.png",
  "Nischay.png",
  "Prasoon.png",
  "Rahul.png",
  "Sushil-1.png",
  "Sushil.png",
  "Vaibhav.png",
  "Vijay.png"
];

// Generate testimonials array from all images
const testimonials = placedNewImages.map((imageName) => ({
  image: `/assets/placed-new/${imageName}`
}));

export function RegisteredStudentCarousel() {
  return (
    <div className="max-w-7xl px-4 md:py-8 lg:py-8 py-2 mx-auto relative">
      <div className="text-center mb-6">
        <div className="font-bold text-3xl">Successfully <span className="text-[#ff0000]">Placed</span> Students</div>
      </div>

      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          cardWidth={300}
          cardHeight={400}
        />
      </div>
      <div className="flex justify-end md:mt-4">
    <TextGenerateEffect words={words} />;
    </div>
    </div>
  );
}