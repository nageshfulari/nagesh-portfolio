"use client";

import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
    >
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-20 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          My Developer Journey
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-indigo-500/30 pl-10 space-y-14">

          {[ 
            { year: "2022", text: "Started Computer Engineering" },
            { year: "2023", text: "Learned Java & Data Structures" },
            { year: "2024", text: "Built Full Stack Applications" },
            { year: "2025", text: "Exploring AI, Cloud & Scalable Systems" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >

              {/* Glow Dot */}
              <div className="absolute -left-[26px] top-6 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>

              {/* Card */}
              <div className="
                bg-white/5 backdrop-blur-md 
                border border-white/10 
                rounded-2xl 
                p-6 
                transition duration-300 
                hover:scale-[1.03] 
                hover:border-indigo-400 
                hover:shadow-xl 
                hover:shadow-indigo-500/10
              ">

                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  {item.year}
                </h3>

                <p className="text-gray-300">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}