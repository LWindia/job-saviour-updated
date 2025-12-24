import { Search } from 'lucide-react'
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function RequiredSkills() {



  const skilsLogo = [ 
    {
      name: "Docker",
      logo: "/assets/professionals/docker.png"
    },
    {
      name: "Kubernetes",
      logo: "/assets/professionals/k8s.png"
    },
    {
      name: "Jenkins",
      logo: "/assets/professionals/jenkins.png"
    },
    {
      name: "Terraform",
      logo: "/assets/professionals/terraform.png"
    },
    {
      name: "Ansible",
      logo: "/assets/professionals/ansible.png"
    },
    {
      name: "GitHub",
      logo: "/assets/professionals/github.png"
    },
    
    

  ]
  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 bg-white rounded-lg shadow-sm">
      <div className="text-center mb-4 ">
        <h1 
       
          className="text-3xl md:text-3xl lg:text-3xl font-bold text-black mb-2"
        >
          <span className='text-[#ff0000]'>Master 15+ </span>essential industry tools
        </h1>
      </div>
      {/* Search Header - Added responsive padding and flex-wrap */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            className="pl-10 w-full"
            placeholder="Search skills..."
            type="search"
          />
        </div>
      </div>

      {/* Responsive Grid Layout - Changed to stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-4 md:gap-6">
        {/* Sidebar - Added horizontal scrolling for mobile */}
        <div className="overflow-x-auto md:overflow-x-visible">
          <div className="flex md:block gap-4 md:gap-0 md:space-y-4 min-w-max md:min-w-0">
            <CompanyItem
              logo="/assets/professionals/meta.png"
              name="DevOps Engineer"
              company="Meta"
              bgColor="bg-blue-50"
            />
            <CompanyItem
              logo="/assets/professionals/amazon.png"
              name="Site Reliability Engineer (SRE)"
              company="Amazon"
              bgColor="bg-orange-50"
            />
            <CompanyItem
              logo="/assets/professionals/netflix.png"
              name="DevOps Architect"
              company="Netflix"
              bgColor="bg-red-50"
            />
            <CompanyItem
              logo="/assets/professionals/google.png"
              name="Cloud Engineer"
              company="Google"
              bgColor="bg-green-50"
            />
            <CompanyItem
              logo="/assets/professionals/microsoft.png"
              name="Platform Engineer"
              company="Microsoft"
              bgColor="bg-blue-50"
            />
          </div>
        </div>

        {/* Main Content - Improved spacing and image grid */}
        <div className="w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Required skills</h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Image Skills Row - Made scrollable on mobile */}
            <div className="overflow-x-auto">
              <div className="flex gap-3 mb-4 sm:mb-6 min-w-max sm:min-w-0">
                {skilsLogo.map((tool) => (
                  <div key={tool.name} className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text Badge Skills - Improved spacing and wrapping */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[ "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Github"].map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Splunk", "ELK Stack", "GitOps", "Prometheus", "Grafana", "ArgoCD"].map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[ "Podman",  "CI/CD", "Redshift", "Linux", "SQL"].map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompanyItem({ logo, name, company, bgColor = "bg-gray-50" }: {
  logo: string
  name: string
  company: string
  bgColor?: string
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer w-72 md:w-auto">
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <Image
          src={logo || "/placeholder.svg"}
          alt={company}
          width={24}
          height={24}
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-medium text-sm truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{company}</p>
      </div>
    </div>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gray-50 hover:bg-gray-100">
      <span className="text-xs sm:text-sm whitespace-nowrap">{name}</span>
    </div>
  )
}