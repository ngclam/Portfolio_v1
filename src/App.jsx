import React from 'react'
import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer
} from './components'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
