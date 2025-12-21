import React from 'react'

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full z-50 
                    bg-white/10 backdrop-blur-md 
                    border-b border-white/20">
        <div className="  max-w-7xl mx-auto  px-6 py-4 flex  justify-center items-center">
            <ul className =" flex gap-10  text-white font-medium  text-xl">
                <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
                <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
                <li><a href="#resume" className="hover:text-blue-300 transition">Resume</a></li>
                <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
            </ul>
        </div>
    </nav> 
  )
}

export default Navbar