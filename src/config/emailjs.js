// EmailJS Configuration - Sử dụng Environment Variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

// Kiểm tra xem các biến môi trường có được load không
if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
  console.error('❌ EmailJS environment variables not found! Please check your .env file.')
  console.log('Required variables:')
  console.log('- VITE_EMAILJS_SERVICE_ID')
  console.log('- VITE_EMAILJS_TEMPLATE_ID') 
  console.log('- VITE_EMAILJS_PUBLIC_KEY')
}
