'use client'  // Add this at the top

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopCareerOptions() {
  const careers = [
    {
      title: "Frontend Developer",
      description: [  // Convert to array of strings
        "Build dynamic, responsive web interfaces using React.js.",
        "Work with modern JavaScript (ES6+), HTML5, CSS3, and UI frameworks like Tailwind CSS and Bootstrap."
      ],
      icon: "/assets/TopCarrer/Devops Engineer.jpeg",
    },
    {
      title: "Backend Developer",
      description: [
        "Create RESTful APIs and backend logic using Node.js and Express.js.",
        "Integrate secure authentication, database management, and middleware services.",
       
      ],
      icon: "/assets/TopCarrer/CloudArchitec.png",
    },
    {
      title: "Full Stack Developer (MERN)",
      description: [
        "Develop and manage complete web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Handle both frontend and backend responsibilities with end-to-end project ownership."
      ],
      icon: "/assets/TopCarrer/Architech.png",
    },
    {
      title: "Deployment & DevOps Associate (MERN)",
      description: [
        "Deploy fullstack applications using Docker, GitHub Actions, Netlify, Vercel, or Render.",
"Understand containerization, basic CI/CD, and application hosting."
      ],
      icon: "/assets/TopCarrer/monitoringimage.jpeg",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 md:p-6">
      <div className="container max-w-6xl mx-auto px-4 py-8 md:py-0">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 text-center">
          Top career options in <span className="text-[#ff0000]">FullStack Development using MERN Program </span>
          with <span className="text-[#ff0000]">Placement Guarantee Initiative</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="h-48 mb-4 relative bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={career.icon}
                    alt={career.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {career.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}