import React, { useRef } from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const contactRef = useRef()

  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Liên hệ với tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6">
            Sẵn sàng hợp tác trong dự án tiếp theo của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <EnvelopeIcon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div>
                <h4 className="font-semibold mb-1 group-hover:text-white transition-colors duration-300">Email</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">your.email@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <PhoneIcon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <div>
                <h4 className="font-semibold mb-1 group-hover:text-white transition-colors duration-300">Điện thoại</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+84 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <MapPinIcon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              <div>
                <h4 className="font-semibold mb-1 group-hover:text-white transition-colors duration-300">Địa chỉ</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Thành phố Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Tên của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300" 
            />
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300" 
            />
            <textarea 
              rows="5" 
              placeholder="Tin nhắn của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300 resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
