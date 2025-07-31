import React, { useRef } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaFigma 
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiTailwindcss 
} from 'react-icons/si'

const Skills = () => {
  const skillsRef = useRef()

  const skills = [
    { name: 'React', level: '90%', color: 'bg-blue-500', icon: FaReact },
    { name: 'Node.js', level: '85%', color: 'bg-green-500', icon: FaNodeJs },
    { name: 'MongoDB', level: '80%', color: 'bg-yellow-500', icon: SiMongodb },
    { name: 'Tailwind CSS', level: '95%', color: 'bg-indigo-500', icon: SiTailwindcss },
    { name: 'JavaScript', level: '92%', color: 'bg-purple-500', icon: FaJs },
    { name: 'Figma', level: '75%', color: 'bg-pink-500', icon: FaFigma }
  ]

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4 bg-black/20 animated-bg skills-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Kỹ năng chuyên môn
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div key={index} className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <IconComponent className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: skill.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3B82F6' :
                             skill.color.replace('bg-', '').replace('-500', '') === 'green' ? '#10B981' :
                             skill.color.replace('bg-', '').replace('-500', '') === 'yellow' ? '#F59E0B' :
                             skill.color.replace('bg-', '').replace('-500', '') === 'indigo' ? '#6366F1' :
                             skill.color.replace('bg-', '').replace('-500', '') === 'purple' ? '#8B5CF6' :
                             '#EC4899' }} 
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">{skill.name}</h3>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{skill.level}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out transform group-hover:scale-x-105`} style={{ width: skill.level }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
