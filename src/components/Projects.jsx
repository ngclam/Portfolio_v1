import React, { useRef } from 'react'

const Projects = () => {
  const projectsRef = useRef()

  const projects = [
    {
      title: 'Website bán hàng',
      description: 'Nền tảng thương mại điện tử với giỏ hàng và thanh toán.',
      image: 'https://via.placeholder.com/300x180',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Blog cá nhân',
      description: 'Trang blog responsive với markdown editor.',
      image: 'https://via.placeholder.com/300x180',
      tech: ['React', 'Tailwind', 'Firebase']
    },
    {
      title: 'Ứng dụng quản lý công việc',
      description: 'App giúp theo dõi tiến độ công việc, deadline.',
      image: 'https://via.placeholder.com/300x180',
      tech: ['React', 'Redux', 'Express']
    }
  ]

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 animated-bg projects-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Dự án nổi bật
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Xem demo
                  </button>
                  <button className="flex-1 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition-all duration-300">
                    Source code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
