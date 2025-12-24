"use client";

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Code, ShieldCheck } from 'lucide-react'
import { payment } from "@/data/paymentLink"

export default function ProgramCohorts() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-gray-100 py-4" id="programcohorts">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Headers */}
        <div className="space-y-2">
          <h1 className=" text-3xl font-semibold text-black text-center">
          Career Switch / Salary Hike Oriented
            <span className="text-[#ff0000]">  DevOps Globally Recognised Program</span>
          </h1>
          <h2 className="text-md sm:text-lg text-black text-center">
            Learn from the DevOps Guru, <span className="text-[#ff0000]"> Mr Vimal Daga</span> <br/> and secure a guaranteed career switch or salary hike with 
             {/* 100% refund if not hired */}
          </h2>
        </div>

        {/* Cohort Card */}
        <Card className="p-6 bg-white">
          <div className="space-y-6">
            {/* Card Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-md pt-2 sm:text-lg text-black font-semibold">
                LW Career Switch / Salary Hike Oriented DevOps Globally Recognized Initiative 2025
              </h3>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                Limited Seats available
              </span>
            </div>

            {/* Schedule Table */}
            <div className="space-y-4">
              {/* Header row */}
              <div className="hidden sm:grid sm:grid-cols-4 text-sm text-black pb-2">
                <div className="flex items-center text-sm text-black gap-2 font-bold">Starting on</div>
                <div className="flex text-black items-center gap-2 font-bold">Time</div>
                <div className="text-black text-sm font-bold">Mode</div>
                <div className="text-black font-bold text-sm pl-6">Action</div>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-4 text-sm border-b pb-4 gap-y-2 sm:gap-y-0">
                {/* Mobile View */}
                <div className="flex flex-col sm:hidden">
                  <div className="font-medium text-sm text-black font-semibold">Starting on:</div>
                  <div className="text-black text-sm mb-2">22nd Jan, 2025</div>

                  <div className="font-medium text-sm text-black font-semibold">Time:</div>
                  <div className="text-black text-sm mb-2">07:00 pm onwards (Tue - Fri)</div>
                  <div className="text-black text-sm mb-2">01:00 pm onwards (Sat - Sun)</div>

                  <div className="font-medium font-semibold text-sm text-black">Mode:</div>
                  <div className="text-black text-sm mb-2">Online</div>
                </div>

                {/* Desktop View */}
                <div className="hidden sm:block">
                  <div className="font-medium text-sm text-black">22nd Jan, 2025</div>
                </div>
                <div className="hidden sm:block text-black text-sm">
                  <div>07:00 pm onwards (Tue - Fri)</div>
                  <div>01:00 pm onwards (Sat - Sun)</div>
                </div>
                <div className="hidden sm:block text-black text-sm text-blue-400">Online</div>

                {/* Action Button */}
                <div>
                  <a href={payment.paymentLink} target="blank">
                    <Button className="w-full sm:w-auto bg-[#ff0000] hover:shadow-black hover:shadow-md hover:bg-[#ff0000]">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Criteria */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg text-black font-medium mb-4 font-semibold">
              Eligibility Criteria:
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                 Exclusively crafted for working IT professionals.
                 </p>
              </div>
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Ideal for those aiming for a career switch or a significant salary hike in the DevOps domain.
                </p>
              </div>
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Perfect for professionals seeking to master DevOps skills and excel in this rapidly growing field.
                </p>
              </div>
              {/* <div className="flex gap-3">
                <Code className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Minimum 90% attendance is mandatory to qualify for the placement.
                </p>
              </div> */}
            </div>
          </Card>

          {/* What You'll Receive */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg text-black font-medium mb-4 font-semibold">
              What You&apos;ll Receive:
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                 Guaranteed Career Switch / Salary Hike.
                 </p>
              </div>
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-black">
                An exclusive opportunity to learn from World Record Holder, Mr. Vimal Daga, and elevate your DevOps skills to excel and stand out in the competitive tech industry!
                </p>
              </div>
            </div>
        
          </Card>
        </div>
      </div>
    </div>
  );
}