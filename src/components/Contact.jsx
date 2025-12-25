// import React, { useState } from 'react';
// import { toast } from "sonner";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     toast.success("Message sent successfully!", {
//       description: "Thanks for reaching out. I will get back to you soon."
//     });

//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <section id='contact' className="relative z-10 py-20 px-4 flex flex-col">
      

//       <div className="mt-12 text-center">
//         <h2 className="text-4xl md:text-5xl font-semibold text-white">
//           Let's <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Connect</span>
//         </h2>
//         <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed">
//           I'm always open to discussing new opportunities, interesting projects,<br /> or just having a chat about tech!
//         </p>
//       </div>

//       <div className="text-left mt-20 mr-20">
//         <p className="font-bold text-2xl">Get In Touch</p>
//         <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed">
//           Whether you're looking for a developer, have a project in mind,<br />or just want to connect, I'd love to hear from you. Let's create<br />something amazing together!
//         </p>
//       </div>
      
//       <form
//         onSubmit={handleSubmit}
//         className="  w-full max-w-lg bg-slate-900/60 p-8 rounded-xl border border-slate-700 space-y-6 mt-6"
//       >
//         <h2 className="text-3xl font-bold text-white text-center">
//           Contact <span className="text-blue-400">Me</span>
//         </h2>

//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//           className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-400"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//           className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-400"
//         />

//         {/* Message */}
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={formData.message}
//           onChange={handleInputChange}
//           required
//           className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-400 resize-none"
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition disabled:opacity-50"
//         >
//           {isSubmitting ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;



// sujoy


import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully!", {
      description: "Thanks for reaching out. I’ll get back to you shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-0 -right-40" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Whether you’re looking for a developer, have a project idea,
            or just want to talk tech — I’m always open to meaningful
            conversations.
          </p>

          <p className="mt-6 text-gray-400">
            🚀 Open to full-time roles, internships & freelance projects
          </p>
        </motion.div>

        {/* Glass Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative rounded-2xl p-8
            bg-white/10 backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition pointer-events-none"
            style={{
              boxShadow: "0 0 60px rgba(99,102,241,0.35)",
            }}
          />

          <h3 className="text-2xl font-semibold text-white mb-6">
            Send me a message
          </h3>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="
              w-full mb-4 px-4 py-3 rounded-lg
              bg-white/10 text-white
              border border-white/10
              focus:outline-none focus:border-blue-400
              transition
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="
              w-full mb-4 px-4 py-3 rounded-lg
              bg-white/10 text-white
              border border-white/10
              focus:outline-none focus:border-blue-400
              transition
            "
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleInputChange}
            required
            className="
              w-full mb-6 px-4 py-3 rounded-lg
              bg-white/10 text-white
              border border-white/10
              focus:outline-none focus:border-blue-400
              resize-none transition
            "
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-blue-500 to-purple-500
              hover:opacity-90 transition
              disabled:opacity-50
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
