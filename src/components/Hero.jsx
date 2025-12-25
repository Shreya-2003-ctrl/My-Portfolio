// import React, { useEffect, useState } from 'react'
// import { motion } from "framer-motion";



// const Hero = () => {
//   const [displayText , setDisplayText] = useState("");
//   const roles = ["MERN Stack developer",
//                 "Front-end Specialist" ,
//                   "UI/UX Enthusiast"];
//   const [currentRole , setCurrentRole] = useState(0);

//   useEffect(()=>{
//     const typeText = async() =>{
//       const text = roles[currentRole];
//       for (let i =0; i<=text.length; i++){
//         setDisplayText(text.slice(0, i));
//         await new Promise (resolve => setTimeout(resolve , 100));
//       }
//       await new Promise (resolve => setTimeout(resolve, 2000));
//       for (let i= text.length; i>=0; i--){
//         setDisplayText(text.slice(0,i));
//         await new Promise (resolve => setTimeout(resolve, 50));
//       }
//       setCurrentRole(prev => (prev + 1) % roles.length);
//     };
//     typeText();
//   } , [currentRole]);

 
//   return (
//     <section id='home'  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b">

     
//       <div className="relative z-10 max-w-4xl px-6 text-center">
//         <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}>Hi , 
//           I'm <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Shreya Roy</span> </motion.h1>

//           <motion.div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}>
//                <span className="text-gray-300">I'm a</span>
//             <span className="ml-2 text-blue-400 font-semibold border-r-2 border-blue-400 animate-pulse">
//               {displayText}
//             </span>
//           </motion.div>

//         <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5 }}>
//           A passionate MERN Stack Developer who builds responsive, scalable web applications using MongoDB, 
//           Express, React, and Node.js. I love turning ideas 
//           into real-world products with clean code and intuitive user experiences.
//         </motion.p>
//       </div>
//     </section>
//   )
// }

// export default Hero



// sujoy


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = [
    "MERN Stack Developer",
    "Front-end Specialist",
    "UI/UX Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  // Typing effect (UNCHANGED)
  useEffect(() => {
    const typeText = async () => {
      const text = roles[currentRole];
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
      for (let i = text.length; i >= 0; i--) {
        setDisplayText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };
    typeText();
  }, [currentRole]);

  // Particle init
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* 🌌 PARTICLE BACKGROUND */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-20"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#38bdf8" },
            opacity: { value: 0.25 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 120,
              color: "#38bdf8",
              opacity: 0.2,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* 🌈 GRADIENT BLOBS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      {/* 🔳 CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Shreya Roy
          </span>
        </motion.h1>

        {/* Typing Text */}
        <motion.div
          className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-gray-300 mr-2">I'm a</span>
          <span className="text-blue-400 font-semibold border-r-2 border-blue-400 pr-1 animate-pulse">
            {displayText}
          </span>
        </motion.div>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          A passionate MERN Stack Developer who builds responsive and scalable
          web applications using MongoDB, Express, React, and Node.js. I love
          transforming ideas into real-world products with clean code and
          intuitive user experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
