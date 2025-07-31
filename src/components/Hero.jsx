import React, { useRef, useState, useEffect } from 'react'

const Hero = () => {
  const heroRef = useRef()
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const texts = [
      'Full Stack Developer',
      'UI/UX Designer', 
      'React Developer',
      'Frontend Engineer',
      'Backend Developer'
    ]
    
    const currentText = texts[currentIndex]
    let timeout

    if (!isDeleting) {
      // Typing phase
      if (typedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1))
        }, 100)
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deleting phase
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
      } else {
        // Move to next text
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentIndex, isDeleting])

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
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Xin chào, tôi là Vassco
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 min-h-[2rem]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="hero-description text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Tôi tạo ra những trải nghiệm web đẹp mắt và chức năng với công nghệ hiện đại. 
          Chuyên về React, Node.js và thiết kế responsive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Xem dự án
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-500 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Liên hệ ngay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
