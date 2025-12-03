import React from 'react'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhatDrivesMe from './components/WhatDrivesMe'
import Skills from './components/Skills' // Add this import
import CoreCompetencies from './components/CoreCompetencies' // Add this import

function App() {
  // Smooth scroll for navigation links
  React.useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Make sure we're clicking on an anchor tag
      const anchor = e.target.closest('a')
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault()
        const id = anchor.hash.substring(1)
        
        // Wait a tiny bit to ensure React has rendered everything
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen text-white">
      {/* Header - Fixed at top */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Portfolio
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Skills
              </a>
              <a href="#core-competencies" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Core Competencies
              </a>
              <a href="#what-drives-me" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                What Drives Me
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Contact
              </a>
            </div>
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
      <section 
        id="home" 
        className="min-h-screen relative flex items-center justify-center pt-28 md:pt-32"
        style={{
          backgroundImage: 'url("./background.jpg")', // Your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Creates parallax effect
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated tech grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating animated elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-white font-medium">✨ Welcome to My Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Tesfaye
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer specializing in React, Node.js, and modern web technologies.
              I build beautiful, performant applications that solve real problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                View Projects
              </a>
              <a 
                href="#skills"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                View Skills
              </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-20 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-300 mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END HERO SECTION ========== */}

      {/* Rest of the sections WITHOUT background image */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <Profile />
        <Projects />
        <Skills />
        <CoreCompetencies />
        <WhatDrivesMe />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 bg-gray-900/90">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Build Together
              </h2>
              <p className="text-gray-400 mt-2">Ready for new challenges and collaborations</p>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#core-competencies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Core Competencies
              </a>
              <a href="#what-drives-me" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                What Drives Me
              </a>
              <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-800/30">
            <p className="text-gray-500">
              © {new Date().getFullYear()} My Portfolio. Built with React, Vite & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App