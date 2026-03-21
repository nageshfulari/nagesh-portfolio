"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-20 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        Achievements
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {[
          {
            title: "Second Year SGPA - 8.40",
            desc: "Built a strong foundation in Object-Oriented Programming and Data Structures. Developed problem-solving skills and a deeper understanding of core programming concepts.",
          },
          {
            title: "EmotionPix Project",
            desc: "Developed an AI-based web application that recommends movies based on facial emotions. Focused on integrating machine learning with a user-friendly full stack interface.",
          },
          {
            title: "Third Year SGPA - 8.14",
            desc: "Strengthened knowledge in Database Management Systems and Cloud Computing. Gained practical insights into data handling, scalability, and modern computing environments.",
          },
          {
            title: "Hackathon Runner-Up (2025)",
            desc: "Secured runner-up position in an internal hackathon. Demonstrated strong teamwork, problem-solving, and rapid development skills under pressure.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
relative group p-6 rounded-2xl
bg-white/5 backdrop-blur-md
border border-white/10
transition duration-300
hover:scale-[1.03]
hover:border-indigo-400
hover:shadow-xl hover:shadow-indigo-500/10
"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-indigo-400 font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}