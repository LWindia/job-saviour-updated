import {
  Code2,
  CrossIcon,
  FileCode,
  Layout,
  Columns,
  GitBranch,
  Cloud,
  Ship,
  Database,
  FlaskConical,
  CloudCog,
  ServerCog,
  Terminal,
  Code,
  Cpu,
  ShieldCheck,
  DraftingCompass,
  MonitorCog,
  Container,
  Gitlab,
  Sparkles,
  FileJson
} from 'lucide-react';

export default function SkillsAndTools() {
  const skills = [
    {
      icon: <Code2 className="h-10 w-10 rounded-2xl p-0 bg-gray-100 text-[#292929]" />,
      name: 'HTML5'
    },
    {
      icon: <CrossIcon className="h-10 w-10 rounded-2xl p-0 bg-gray-100 text-[#292929]" />,
      name: 'CSS3'
    },
    {
      icon: <FileCode className="h-10 w-10 text-[#292929] rounded-2xl p-0 bg-gray-100" />,
      name: 'JavaScript (ES6+)'
    },
    {
      icon: <Layout className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'Tailwind CSS'
    },
    {
      icon: <Columns className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'Bootstrap'
    },
    {
      icon: <GitBranch className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'Git & GitHub'
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'Fetch API'
    },
    {
      icon: <Ship className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'React.js (Hooks, Router, Redux Toolkit)'
    },
    {
      icon: <CloudCog className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'JWT'
    },
    {
      icon: <Database className="h-10 w-10 text-[#292929] rounded-2xl bg-gray-100" />,
      name: 'MongoDB Atlas'
    },
     {
      icon: <Container  className='h-10 w-10 text-[#292929] rounded-2xl bg-gray-100' />,
      name: 'Mongoose'
    },
    {
      icon: <FlaskConical className='h-10 w-10 text-[#292929] rounded-2xl bg-gray-100' />,
      name: 'Postman'
    }
  ];

  return (
    <div className='bg-gradient-to-br from-gray-50 via-black-50 to-gray-100'>
    <div className="w-full pt-4 pb-4 max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-8 text-center"> <span className='text-[#ff0000]'>Skills </span>and <span className='text-[#ff0000]'>tools </span> you will learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-8 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0">
              {skill.icon}
            </div>
            <span className="text-gray-900 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

