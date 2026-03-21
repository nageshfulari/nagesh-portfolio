"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
    >

      {/* ✅ Gradient Overlay (NEW) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      {/* ✅ WIDTH WRAPPER (UNCHANGED) */}
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-20 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Backend", "Frontend", "Tools & DevOps"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="
bg-white/5 
backdrop-blur-md 
p-6 
rounded-2xl 
border border-white/10 
hover:border-indigo-500 
transition duration-300 
hover:scale-[1.03]
"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                {title}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {i === 0 && (
                  <>
                    <li>Java → Backend Logic</li>
                    <li>Spring Boot → APIs & Security</li>
                    <li>REST APIs → Communication Layer</li>
                  </>
                )}
                {i === 1 && (
                  <>
                    <li>React → UI Development</li>
                    <li>Next.js → SSR & Routing</li>
                    <li>Tailwind CSS → Styling</li>
                  </>
                )}
                {i === 2 && (
                  <>
                    <li>Git → Version Control</li>
                    <li>Docker → Containerization</li>
                    <li>Linux → Server Environment</li>
                  </>
                )}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  );
}