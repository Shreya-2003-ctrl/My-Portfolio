import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Paw Mart – Online Pet Shop',
    description:
      'Full-stack e-commerce platform for pet products and accessories. Features include product listing, category filtering, user authentication, secure cart & checkout, and an admin panel for product and order management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'NutriAI – AI Calorie & Diet Recommendation System',
    description:
      'AI-powered web application that calculates personalized calorie needs based on user data and fitness goals. Integrated ML models or APIs to recommend balanced diet plans with a clean dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'Machine Learning'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'DesignNest – Home Designing Website',
    description:
      'Full-stack platform for exploring home design ideas and interior inspirations. Includes design uploads, category filters, likes, comments, and scalable backend APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com',
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        relative p-6 h-full flex flex-col rounded-xl
        bg-white/5 backdrop-blur
        border border-white/10
        hover:border-primary/40
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        group
      "
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
          <Folder className="w-6 h-6 text-primary" />
        </div>

        <div className="flex gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-white transition"
            >
              <Github size={20} />
            </motion.a>
          )}

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              text-xs font-mono px-2 py-1 rounded
              bg-white/5 border border-white/10
              text-muted-foreground
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Things I’ve <span className="gradient-text">Built</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world MERN stack and AI-based projects with production-ready features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
