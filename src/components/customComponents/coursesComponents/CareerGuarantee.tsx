"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import careerguaranteeimage from "../../../../public/assets/placement-guaranteed-banner.jpg"
import careerguranteemobileimage from "../../../../public/assets/placement-guaranteed-mobile.png"
import { payment } from '@/data/paymentLink';

const CareerGuarantee = () => {
  return (
    <div className="px-4 md:py-12 bg-gradient-to-br from-gray-50 via-black-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-xl">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col">
            <div className="relative w-full h-[220px] order-0">
              <Image
                src={careerguranteemobileimage}
                alt="Career Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 text-lg font-normal">
                  Our mission revolves around our learners
                </p>
                <h2 className="text-3xl font-bold text-gray-900 my-4">
                  Promising 100%
                  <span className="text-[#ff0000]"> #RightJobKiGuarantee</span>
                </h2>
                <a 
                  href={payment.paymentLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-[#ff0000] hover:bg-red-600 text-white w-fit px-6 py-6 text-base font-medium rounded-md flex items-center gap-2"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block relative h-[220px]">
            <Image
              src={careerguaranteeimage}
              alt="Career Background"
              fill
              className="object-cover"
              priority
            />
            <div className="relative h-full z-10 p-8 md:p-12">
              <div className="flex flex-col justify-center h-full max-w-[600px]">
                <p className="text-gray-700 text-lg font-normal">
                  Our mission revolves around our learners
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Promising 100%
                  <span className="text-[#ff0000]"> #RightJobKiGuarantee!</span>
                </h2>
                <a 
                  href={payment.paymentLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-[#ff0000] hover:bg-red-600 text-white w-fit px-6 py-6 text-base font-medium rounded-md flex items-center gap-2"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuarantee;