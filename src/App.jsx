import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="min-h-screen 
  bg-gradient-to-b 
  from-[#0b1020] 
  via-[#0f1c3f] 
  to-[#09162e] 
  text-white">
                       <Navbar/>
                       <Hero/>
                       <About/>
                       <Skill/>
                       <Projects/>
                       <Contact/>
                       <Footer/>
                       
     
      <Section id="home" className="h-screen flex items-center justify-center"></Section>
      <Section id="about" className="h-screen flex items-center justify-center"></Section>
      <Section id="projects" className="h-screen flex items-center justify-center"></Section>
      <Section id="skill" className="h-screen flex items-center justify-center"></Section>
      <Section id="contact" className="h-screen flex items-center justify-center"></Section>
      
       <Section/>
       

    </div>
  )
}

export default App