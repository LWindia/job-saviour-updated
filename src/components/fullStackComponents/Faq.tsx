
"use client" 
import { useState } from "react";
import type { JSX } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the Hike Program by Vimal Daga?",
      answer:
        " The Hike Program is a 3-month, job-oriented FullStack training program designed to help participants gain the skills required to switch to FullStack Development roles.",
    },
    {
      question: "Who can enroll in the program?",
      answer:" This program is ideal for professionals looking to transition into FullStack Development roles or those aiming to enhance their career opportunities in the FullStack Development domain."
    },
    {
      question: "What is the duration of the program ?",
      answer: "The program spans over 6 Months Training + 6 Months Placement Support, providing comprehensive hands-on training and industry-relevant knowledge.",
    },
    {
      question: " Is the program live or pre-recorded ?",
      answer:
      " The Hike Program offers live sessions conducted by Vimal Daga, supplemented with resources for continuous learning.",
    },
    
  ],
//   timeCommitment: [
//     {
//       question: " How does the 100% refund policy work?",
//       answer:" If a participant doesn’t achieve a job switch within the program duration and 6 Months Training + 6 Months Placement Support post-program, we guarantee a full refund of the course fee, provided all conditions for eligibility are met.",
//     },
//     {
//       question: "What are the conditions for the refund ?",
//       answer:
//         (
//           <ul className="list-disc list-inside mt-2 space-y-1">
//           <li>To qualify for the refund, participants must:


//           </li>
//           <li>Attend all live sessions with at least 90% attendance.
// </li>

// <li>Site Reliability Engineer (SRE).
// </li>

// <li>Complete all assignments, projects, and tasks on time.

// </li>

// <li>Actively apply for roles as guided during the program.
// </li>


  
//         </ul>
//         )
//     },

//     {
//       question: "How long does it take to process the refund?",
//       answer:
//        " Once eligibility is confirmed, refunds are processed within 30 days of the request submission."
//     },

    
//   ],
  selectionCriteria: [
   {
    question: "What tools and technologies will be covered?",
    answer: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB with Mongoose</li>
        <li>Version Control: Git and GitHub</li>
        <li>Testing: Jest, Supertest, React Testing Library</li>
        <li>API Testing: Postman, Swagger UI</li>
        <li>Deployment: Netlify, Vercel, Render, Railway, MongoDB Atlas</li>
        <li>Tools: Axios, Redux Toolkit, Formik, Yup, Toastify</li>
      </ul>
    )
  },
  {
    question: "Will I learn frontend and backend both?",
    answer:
      "Yes, this program covers complete frontend development using React and backend development using Node.js, Express, and MongoDB.",
  },
  {
    question: "Does the program include real-world projects?",
    answer:
      "Absolutely! You'll build full-stack applications, RESTful APIs, authentication systems, dashboards, and more—using real-world development practices.",
  },
  {
    question: "Is deployment covered in the course?",
    answer:
      "Yes, you'll learn to deploy your frontend to Netlify or Vercel and your backend to Render or Railway, with cloud database management via MongoDB Atlas.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, a certificate of completion will be awarded once you successfully finish the course and its projects.",
  }
],
  Eligibility:[
    {
      question:"Does the program offer job placement assistance?",
      answer:
      ( <ul className="list-disc list-inside mt-2 space-y-1">
         Yes, participants receive personalized job placement support, including:
        <li>Resume building</li>
        <li>Mock interviews</li>
        <li>Job referrals in the FullStack Development domain</li>
       </ul>
      )
    },
    {
      question: "What is the success rate of job switches through this program ?",
      answer:  "The Hike Program boasts a high success rate, with many participants achieving successful transitions into FullStack Development  roles."
    },
   
  ],
  Enrollment:[
    {
      question:"How do I enroll in the program?",
      answer:"You can enroll through the official website by filling out the application form and making the payment. Limited seats are available, so early registration is recommended.",

    },

    {
      question:" What is the cost of the program?",
      answer:" The course fee details are available on the website. Contact the support team for the most updated pricing.",
    },
  ],
  Support:[
    {
      question:"What support will I receive during the program?",
      answer:( <ul className="list-disc list-inside mt-2 space-y-1">
         Participants will have access to:
       <li>1:1 mentoring with the Tech Team</li>
       <li>Dedicated support for queries and doubts</li>
       <li>Peer group discussions and collaboration</li>
      </ul>
     )
    },
    { question:"How do I contact the support team?",
      answer:" You can reach the support team via email or through the contact number provided on the website.",


    },
  ],
  Post:[
    // { question:"What if I don’t achieve a job switch within the program timeline?",
    //   answer:" If all eligibility conditions are met and a job switch is not achieved, you can request a full refund as per the program’s policy.",

    // },
    {question:" Can I continue accessing the resources after the program ends?",
      answer:"Yes, participants receive access to program resources and materials for a limited time.",

    },
  ],
  

  
  

  
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-gray-100">
    <div className="container mx-auto max-w-6xl px-4 py-4 md:py-8 ">
      {/* Header */}
      <h1 className="text-3xl lg:text-3xl font-bold mb-4 md:mb-8 sm:mb-12 text-center  ">
        Frequently Asked <span className="text-[#ff0000]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${selectedItem === key ? "bg-gray-200 border-gray-500 text-gray-600" : "bg-white text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "General Questions"
                  : key === "timeCommitment"
                  ? "Refund Policy"
                  : key === "Eligibility"
                  ? "Technical Details"
                  :key === "Enrollment"
                  ? "Enrollment & Fees"
                  :key === "Support"
                  ?"Support & Resources"
                  :key === "Post"
                  ?"Post - Program"


                  :key=="GuranteedJob "
                  ?"Guranteed Job Program"
                  
                  : "Tools and Hands-On Projects"
                  }
              </h2>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-base sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </div>
    </div>
  );
}
