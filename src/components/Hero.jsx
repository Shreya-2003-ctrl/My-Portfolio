import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";



const Hero = () => {
  const [displayText , setDisplayText] = useState("");
  const roles = ["MERN Stack developer",
                "Front-end Specialist" ,
                  "UI/UX Enthusiast"];
  const [currentRole , setCurrentRole] = useState(0);

  useEffect(()=>{
    const typeText = async() =>{
      const text = roles[currentRole];
      for (let i =0; i<=text.length; i++){
        setDisplayText(text.slice(0, i));
        await new Promise (resolve => setTimeout(resolve , 100));
      }
      await new Promise (resolve => setTimeout(resolve, 2000));
      for (let i= text.length; i>=0; i--){
        setDisplayText(text.slice(0,i));
        await new Promise (resolve => setTimeout(resolve, 50));
      }
      setCurrentRole(prev => (prev + 1) % roles.length);
    };
    typeText();
  } , [currentRole]);

 
  return (
    <section id='home'  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b">

     
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}>Hi , 
          I'm <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Shreya Roy</span> </motion.h1>

          <motion.div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}>
               <span className="text-gray-300">I'm a</span>
            <span className="ml-2 text-blue-400 font-semibold border-r-2 border-blue-400 animate-pulse">
              {displayText}
            </span>
          </motion.div>

        <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}>
          A passionate MERN Stack Developer who builds responsive, scalable web applications using MongoDB, 
          Express, React, and Node.js. I love turning ideas 
          into real-world products with clean code and intuitive user experiences.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero