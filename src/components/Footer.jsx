// import { motion } from 'framer-motion';
// import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/Shreya-2003-ctrl', label: 'GitHub' },
//     { icon: Linkedin, href: 'www.linkedin.com/in/shreya-roy-tech', label: 'LinkedIn' },
//     { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//     { icon: Mail, href: 'royshreya481@gmail.com', label: 'Email' },
//   ];

//   return (
//     <footer className="relative border-t border-border bg-card/30">
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 pointer-events-none opacity-30">
//         <div
//           className="absolute w-[400px] h-[200px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, hsl(217 91% 60% / 0.2) 0%, transparent 70%)',
//             bottom: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             filter: 'blur(60px)',
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
//         <div className="grid md:grid-cols-3 gap-12 mb-12">
//           {/* Brand Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <a href="#home" className="text-2xl font-bold gradient-text inline-block mb-4">
//               &lt;Dev /&gt;
//             </a>
//             <p className="text-muted-foreground text-sm leading-relaxed mb-6">
//               MERN Stack Developer passionate about creating elegant, 
//               performant web applications that make a difference.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <social.icon size={18} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
//             <ul className="space-y-3">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
//             <div className="space-y-3 text-sm text-muted-foreground">
//               <p>
//                 <span className="text-foreground">Email:</span>{' '}
//                 <a href="royshreya481@gmail.com" className="hover:text-primary transition-colors">
//                   royshreya481@gmail.com
//                 </a>
//               </p>
//               <p>
//                 <span className="text-foreground">Location:</span> West Bengal , India
//               </p>
//               <p>
//                 <span className="text-foreground">Availability:</span>{' '}
//                 <span className="text-primary">Open to opportunities</span>
//               </p>
//               <p>
//                 <span>Phone No:</span>
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

//         {/* Bottom Row */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-muted-foreground text-sm"
//           >
//             © {currentYear} Shreya Roy. All rights reserved.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-muted-foreground text-sm flex items-center gap-1"
//           >
//             Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & Tailwind
//           </motion.p>

//           <motion.button
//             onClick={scrollToTop}
//             className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
//             whileHover={{ scale: 1.1, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={18} />
//           </motion.button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// sujoy


import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Shreya-2003-ctrl", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-roy-tech", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:royshreya481@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[300px] bg-blue-500/20 blur-3xl -bottom-32 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[400px] h-[300px] bg-purple-500/20 blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
        <div className="grid md:grid-cols-3 gap-14 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              &lt;Shreya.dev /&gt;
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              MERN Stack Developer focused on building scalable, high-performance
              web applications with clean UI & great UX.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 transition"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <span className="text-white">Email:</span>{" "}
                <a href="mailto:royshreya481@gmail.com" className="hover:text-blue-400">
                  royshreya481@gmail.com
                </a>
              </p>
              <p>
                <span className="text-white">Location:</span> West Bengal, India
              </p>
              <p>
                <span className="text-white">Availability:</span>{" "}
                <span className="text-green-400">Open to opportunities</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shreya Roy. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> using React & Tailwind
          </p>

               <motion.button
  onClick={scrollToTop}
  whileHover={{ scale: 1.15, y: -4 }}
  whileTap={{ scale: 0.9 }}
  className="
    relative w-12 h-12 rounded-full
    flex items-center justify-center
    bg-gradient-to-br from-blue-500 to-purple-600
    text-white shadow-lg
    hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
    transition
  "
>
  {/* Glow */}
  <span className="absolute inset-0 rounded-full blur-xl opacity-40 bg-blue-500" />

  {/* Icon */}
  <ArrowUp size={22} className="relative z-10" />
</motion.button>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
