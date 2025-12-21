import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen 
                    bg-gradient-to-b 
                    from-[#0f2027] 
                    via-[#203a43] 
                    to-[#2c5364] 
                    text-white'>
                       <Navbar/>
                       <Hero/>
                       <About/>
                       <Contact/>
                       
     
      <Section id="home" className="h-screen flex items-center justify-center"></Section>
      <Section id="about" className="h-screen flex items-center justify-center"></Section>
      <Section id="projects" className="h-screen flex items-center justify-center"></Section>
      <Section id="resume" className="h-screen flex items-center justify-center"></Section>
      <Section id="contact" className="h-screen flex items-center justify-center"></Section>
      
       <Section/>
       

    </div>
  )
}

export default App