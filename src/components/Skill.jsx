import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'primary',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    color: 'accent',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'Database',
    color: 'cyan',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'Mongoose', level: 85 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'primary',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getGradientColor = (color) => {
    switch (color) {
      case 'primary':
        return 'from-primary to-primary/50';
      case 'accent':
        return 'from-accent to-accent/50';
      case 'cyan':
        return 'from-cyan to-cyan/50';
      default:
        return 'from-primary to-primary/50';
    }
  };

  const getGlowColor = (color) => {
    switch (color) {
      case 'primary':
        return 'group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]';
      case 'accent':
        return 'group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]';
      case 'cyan':
        return 'group-hover:shadow-[0_0_30px_hsl(var(--cyan)/0.3)]';
      default:
        return 'group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`gradient-border p-6 group transition-all duration-300 ${getGlowColor(
        category.color
      )}`}
    >
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradientColor(
            category.color
          )}`}
        />
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">{skill.name}</span>
              <span className="text-muted-foreground font-mono">
                {skill.level}%
              </span>
            </div>

            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.1,
                }}
                className={`h-full rounded-full bg-gradient-to-r ${getGradientColor(
                  category.color
                )}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, hsl(262 83% 58% / 0.4) 0%, transparent 70%)',
            top: '20%',
            left: '-20%',
            filter: 'blur(80px)',
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
            My <span className="gradient-text">Tech Stack</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
