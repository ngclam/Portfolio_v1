import React from 'react'

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Trang chủ
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Giới thiệu
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Kỹ năng
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Dự án
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
