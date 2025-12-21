import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaProjectDiagram } from "react-icons/fa";

const milestones = [
  {
    icon: "🌐",
    title: "Frontend Basics",
    year: "2023",
    description:
      "Learned HTML, CSS, and JavaScript fundamentals, creating responsive and interactive web pages.",
  },
  {
    icon: <FaReact />,
    title: "React & Frontend Projects",
    year: "2024",
    description:
      "Built dynamic front-end applications using React.js, Redux, and Context API.",
  },
  {
    icon: "💾",
    title: "Backend & Databases",
    year: "2024",
    description:
      "Learned Node.js, Express.js, and databases (MongoDB, PostgreSQL) to build full-stack applications.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Full MERN Stack Projects",
    year: "2025",
    description:
      "Created complete MERN stack projects with authentication, CRUD operations, and deployment.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 py-20 px-4 flex flex-col items-center"
    >
      {/* About */}
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed">
          I am a passionate MERN Stack Developer with a strong foundation in
          building responsive and user-friendly web applications. I specialize
          in developing full-stack solutions using MongoDB, Express.js, React.js,
          and Node.js.
        </p>
      </div>

      {/* Journey */}
      <div className="mt-20 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Developer Journey
            </span>
          </h3>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                {milestone.icon}
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {milestone.title}
                  </h4>
                  <span className="text-sm text-blue-400">
                    {milestone.year}
                  </span>
                </div>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;


