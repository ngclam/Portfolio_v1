import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const contactRef = useRef()
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  // Cập nhật dữ liệu form
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'from_name') {
      setFormData({ ...formData, name: value })
    } else if (name === 'from_email') {
      setFormData({ ...formData, email: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // Gửi email
  const sendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Vui lòng điền đầy đủ thông tin!')
      setIsLoading(false)
      return
    }

    try {
      // Gửi email qua EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setStatus('Tin nhắn đã được gửi thành công! 🎉')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại!')
    }

    setIsLoading(false)
  }

  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 bg-black/20 animated-bg contact-bg">
      <div className="max-w-4xl mx-auto relative z-10">
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

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {status && (
              <div className={`p-4 rounded-lg text-center font-semibold ${
                status.includes('thành công') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status}
              </div>
            )}
            
            <input 
              type="text"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tên của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300" 
              required
            />
            <input 
              type="email"
              name="from_email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300" 
              required
            />
            <textarea 
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tin nhắn của bạn" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all duration-300 resize-none"
              required
            ></textarea>
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                isLoading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105'
              }`}
            >
              {isLoading ? 'Đang gửi...' : 'Gửi tin nhắn'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
