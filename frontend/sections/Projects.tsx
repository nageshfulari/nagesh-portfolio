"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "EmotionPix",
    description: "Emotion-based movie recommendation system.",
    tech: "Python • Flask • OpenCV",
    image: "/Project1.png",
    github: "https://github.com/yourusername/chatbot",
    live: "#",
  },
  
  {
    title: "Portfolio",
    description: "Modern developer portfolio with animations.",
    tech: "Next.js • Tailwind • Framer Motion",
    image: "/Project2.png",
    github: "https://github.com/yourusername/portfolio",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-20 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>

      {/* ✅ STAGGER WRAPPER */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 justify-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="
relative group rounded-2xl overflow-hidden 
bg-white/5 backdrop-blur-md 
border border-white/10 
hover:border-indigo-500 
transition duration-300 
hover:scale-[1.03]
font-medium tracking-wide
"
          >

            {/* ✅ GLOW LAYER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition"></div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">

              <h3 className="text-xl font-bold text-indigo-400 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-2">
                {project.description}
              </p>

              <p className="text-xs text-gray-300 mb-4">
                {project.tech}
              </p>

              <div className="flex gap-3">

                {/* ✅ BUTTON WITH RIPPLE */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
relative overflow-hidden
bg-indigo-500 
px-6 py-3 
rounded-lg 
hover:bg-indigo-600 
transition duration-300 
hover:scale-105 
hover:shadow-lg 
hover:shadow-indigo-500/20
"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
                  <span className="relative z-10">Live</span>
                </a>

                {/* ✅ GITHUB BUTTON */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
relative overflow-hidden
border border-white/20 
px-4 py-2 
rounded-lg 
hover:bg-white 
hover:text-black 
transition duration-300 
hover:scale-105
"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
                  <span className="relative z-10">GitHub</span>
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}