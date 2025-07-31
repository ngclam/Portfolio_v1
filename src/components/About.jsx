import React, { useRef } from 'react'
import {
  CodeBracketIcon,
  BriefcaseIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const aboutRef = useRef()

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Giới thiệu về tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Tôi là một Full Stack Developer với hơn 3 năm kinh nghiệm trong việc phát triển 
              ứng dụng web hiện đại. Đam mê tạo ra những sản phẩm có ý nghĩa và trải nghiệm 
              người dùng tuyệt vời.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Chuyên môn của tôi bao gồm React, Node.js, và các công nghệ web tiên tiến. 
              Tôi luôn tìm hiểu những xu hướng mới và áp dụng best practices trong công việc.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <CodeBracketIcon className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-sm text-gray-400">Dự án hoàn thành</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <BriefcaseIcon className="w-8 h-8 text-purple-400" />
                <div>
                  <h4 className="font-semibold">3+</h4>
                  <p className="text-sm text-gray-400">Năm kinh nghiệm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <AcademicCapIcon className="w-32 h-32 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
