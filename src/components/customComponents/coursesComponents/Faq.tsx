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
      question: "What is the Placement Guaranteed DevOps Initiative?",
      answer:
        "The One & Only Placement Guaranteed DevOps Initiative which has companies before hand who are ready to hire Freshers from LinuxWorld as DevOps Engineer. To fulfill those companies requirements, LinuxWorld has come up with this exclusive Placement Guaranteed DevOps Initiative exclusively for 2024/2025 passouts.",
    },
    {
      question: "What skills will I gain during the Initiative?",
      answer: "The Job Guaranteed Initiative is a process consisting of 14+ Technical DevOps Tools & Technologies along with the same we have a complete Career Track focusing on developing non-technical (soft skills) as well. Don’t miss checking out the section for Let's walk you through the journey of Placement Guaranteed DevOps Initiative by LinuxWorld",

    },
    {
      question: "What kind of projects are included in the program?",
      answer:"Check out the 20+ Industry Level Capstone Project sections to know the details. We have specified the integration level; project details along with the skills which would be developed during the same.",
    },
    {
      question: " How is this initiative structured?",
      answer: "The Job Guaranteed Initiative is a process consisting of 14+ Technical DevOps Tools & Technologies along with the same we have a complete Career Track focusing on developing non-technical (soft skills) as well. Don’t miss checking out the section for Let's walk you through the journey of Placement Guaranteed DevOps Initiative by LinuxWorld",

    },
  

    {
      question: "Who should enroll in this program?",
      answer:
      ( <ul className="list-disc list-inside mt-2 space-y-1">
        The Placement Guarantee Initiative is designed for:
        <li>Final-year undergraduate or graduate students ( 2024 or 2025 batch Only).</li>
        <li> Fresh graduates who have recently completed their degree.</li>
        <li>Individuals with a keen interest in building a career in the relevant field and are ready to commit to the program requirements.</li>
       <li>If you're looking to enhance your skills and secure a job, this initiative is perfect for you!</li>
  
       </ul>
      )
    },
    {
      question: "What is the job guarantee??",
       answer: "We guarantee that every eligible Placement Guarantee initiative student will secure a placement (full-time employment or an internship with a pre-placement offer) within 6 months after graduating from the Placement Guarantee initiative program."
    },
    {
      question: "What is the salary I will get an offer for?",
      answer: "Every eligible Placement Guarantee initiative student will be assured a CTC ranging from ₹  4 LPA to ₹ 8 LPA."
    },
    {
      question: "What opportunities will be considered towards this guarantee?",
      answer:"Any full-time employment or internship with a pre-placement offer that a student gets, in a profile directly related to the Placement Guarantee initiative program or otherwise, through their own efforts, or any other medium, will be considered the job guarantee."

    },

  ],
  timeCommitment: [
    {
      question: "What kind of job roles can I apply for after completing this program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>You can target roles such as:


          </li>
          <li>DevOps Engineer.
</li>

<li>Site Reliability Engineer (SRE).
</li>

<li>Cloud Infrastructure Engineer.
</li>

<li>Build and Release Engineer.
</li>

<li>Automation Engineer.
</li>

  
        </ul>
        )
    },

    {
      question: "Will I receive a certificate after completing the program?",
      answer:
       "If you maintain 90% attendance during the program, you will receive a Certificate of Completion and an Internship Certificate, both of which can be added to your LinkedIn profile and resume to highlight your DevOps expertise and practical experience."
    },

    
    {
      question: " How does the program prepare me for interviews?",
      answer:
(
  <ul className="list-disc list-inside mt-2 space-y-1">
  <li>Mock technical interviews.  

  </li>
  <li>Guidance on answering DevOps-specific questions.
  </li>
  <li>Training in building your projects & presenting effectively to recruiters.


  </li>

 

</ul>
)
    },

    {
      question: "What salary range can I expect after completing this program?",
      answer:
"Entry-level DevOps roles typically offer salaries ranging from 4 LPA to 8 LPA per year, depending on location, industry, and expertise level."
    },
  ],
  selectionCriteria: [
    {
      question: "What DevOps tools will I work with during the program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Version Control: Git and GitHub.

          </li>
          <li>CI/CD: Jenkins, GitHub Actions, and ArgoCD.
          </li>

          <li>Containerization: Docker.
          </li>

          <li>Orchestration: Kubernetes.
          </li>
<li>IaC: Terraform and Ansible.
</li>

<li>Monitoring: Prometheus, Grafana, and ELK Stack.
</li>
  
        </ul>
        )
    },
    {
      question: "Are the projects aligned with industry standards?",
      answer:
         "Absolutely! All our projects are meticulously designed to align with current industry standards and practices."
    },

    {
      question: " Do I need my own system to practice?",
      answer:
       "Yes, you all need a laptop/PC with you."
    },

    {
      question: "Can I showcase the projects on my resume?",
      answer:
       "Absolutely! All projects are designed to be portfolio-worthy, demonstrating your practical DevOps skills to potential employers."
    },

    {
      question: "Will I receive guidance during the hands-on projects?",
      answer:
       "Yes, our technical team will guide you throughout the projects, providing feedback and resolving doubts to ensure successful completion."
    },
    
  ],

  Eligibility:[
    {
      question:"Who is eligible to apply for the Placement Guarantee initiative?",
      answer:
      ( <ul className="list-disc list-inside mt-2 space-y-1">
        The Placement Guarantee initiative is designed for:
        <li>Final-year undergraduate or graduate students (2024 or 2025 batch Only).</li>
        <li> Fresh graduates who have recently completed their degree.</li>
        <li>Individuals with a keen interest in building a career in the relevant field and are ready to commit to the program requirements.</li>
       <li>If you're looking to enhance your skills and secure a job, this initiative is perfect for you!</li>
  
       </ul>
      )
    },
   
    {
      question: "I have more than 3 years of work experience in a different field and now I want to switch to Devops, can I apply?",
      answer:  "This program is not the best fit for you. This initiative is available for the 2024 and 2025 batches. However, we offer a professional initiative designed for people with work experience who want to switch to DevOps. Please check out our professional initiative for more details!"
    },
   
  ],


  

  
  

  
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
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
              ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-white text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "Program Overview"
                  : key === "timeCommitment"
                  ? "Career Support"
                  : key === "Eligibility"
                  ? "Eligibility & Application"
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
