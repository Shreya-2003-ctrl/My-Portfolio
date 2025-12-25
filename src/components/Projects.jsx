// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { ExternalLink, Github, Folder } from 'lucide-react';

// const projects = [
//   {
//     title: 'Paw Mart – Online Pet Shop',
//     description:
//       'Full-stack e-commerce platform for pet products and accessories. Features include product listing, category filtering, user authentication, secure cart & checkout, and an admin panel for product and order management.',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     title: 'NutriAI – AI Calorie & Diet Recommendation System',
//     description:
//       'AI-powered web application that calculates personalized calorie needs based on user data and fitness goals. Integrated ML models or APIs to recommend balanced diet plans with a clean dashboard.',
//     tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'Machine Learning'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     title: 'DesignNest – Home Designing Website',
//     description:
//       'Full-stack platform for exploring home design ideas and interior inspirations. Includes design uploads, category filters, likes, comments, and scalable backend APIs.',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
//     github: 'https://github.com',
//   },
// ];

// const ProjectCard = ({ project, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-50px' });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="
//         relative p-6 h-full flex flex-col rounded-xl
//         bg-white/5 backdrop-blur
//         border border-white/10
//         hover:border-primary/40
//         transition-all duration-300
//         hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
//         group
//       "
//     >
//       {/* Top Section */}
//       <div className="flex items-start justify-between mb-4">
//         <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
//           <Folder className="w-6 h-6 text-primary" />
//         </div>

//         <div className="flex gap-3">
//           {project.github && (
//             <motion.a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="text-muted-foreground hover:text-white transition"
//             >
//               <Github size={20} />
//             </motion.a>
//           )}

//           {project.live && (
//             <motion.a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="text-muted-foreground hover:text-primary transition"
//             >
//               <ExternalLink size={20} />
//             </motion.a>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
//         {project.title}
//       </h3>

//       <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
//         {project.description}
//       </p>

//       {/* Tech Stack */}
//       <div className="flex flex-wrap gap-2 mt-auto">
//         {project.tech.map((tech) => (
//           <span
//             key={tech}
//             className="
//               text-xs font-mono px-2 py-1 rounded
//               bg-white/5 border border-white/10
//               text-muted-foreground
//             "
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <section id="projects" className="relative py-24 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
//           style={{
//             background:
//               'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
//             bottom: '10%',
//             right: '-10%',
//           }}
//         />
//       </div>

//       <div className="section-container" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
          

//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Things I’ve <span className="gradient-text">Built</span>
//           </h2>

//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Real-world MERN stack and AI-based projects with production-ready features
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.title}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


// sujoy


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Paw Mart – Online Pet Shop",
    short:
      "Full-stack MERN e-commerce platform with secure authentication and admin dashboard.",
    description:
      "Designed and developed a complete MERN stack e-commerce application with role-based authentication, product management, cart & checkout flow, and admin-level order control. Focused on scalable APIs, clean UI, and optimized MongoDB queries.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=900",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "NutriAI – Diet Recommendation System",
    short:
      "AI-powered calorie calculator with personalized diet recommendations.",
    description:
      "Built an AI-driven web application that calculates calorie needs using user fitness data and delivers personalized diet suggestions. Integrated ML logic with a modern React UI to ensure accuracy, usability, and clean data flow.",
    tech: ["React", "Node.js", "Python", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=900",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DesignNest – Home Design Platform",
    short:
      "Full-stack platform for discovering and sharing home interior designs.",
    description:
      "Developed a scalable platform allowing users to explore, upload, and interact with interior design content. Implemented filtering, engagement features, and REST APIs with a focus on maintainable backend architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=900",
    github: "https://github.com",
  },
];

const ProjectRow = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="
        relative rounded-2xl overflow-hidden
        bg-white/10 backdrop-blur-xl
        border border-white/10
        shadow-lg hover:shadow-2xl
        transition
      "
    >
      {/* COLLAPSED HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex flex-col gap-2"
      >
        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 max-w-3xl">
          {project.short}
        </p>

        <span className="mt-2 text-sm text-blue-400">
          {open ? "Hide details ▲" : "View case study →"}
        </span>
      </button>

      {/* EXPANDED CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* TEXT */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* IMAGE */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-full object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Selected <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Case-study driven projects focused on scalability, clean architecture,
            and real-world impact.
          </p>
        </div>

        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
