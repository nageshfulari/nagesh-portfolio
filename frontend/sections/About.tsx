"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}   // ✅ FIXED
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
    >

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="w-full px-10 md:px-20 grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I am a Computer Engineering student with a strong passion for building scalable backend systems and modern, user-centric web applications. I enjoy transforming ideas into real-world solutions by combining efficient system design with clean and maintainable code.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            My primary interest is in full stack development, where I work with Java, Spring Boot, and modern frontend technologies to build complete and scalable applications.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            I am particularly driven by solving practical problems through technology. Whether it’s developing intelligent applications, integrating APIs, or optimizing performance, I focus on creating solutions that are both functional and impactful.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Currently, I am actively enhancing my full stack development skills while exploring cloud computing and system design concepts.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            I am always eager to learn new technologies, take on challenging projects, and collaborate with others to build innovative and meaningful products.
          </p>
        </div>

        {/* RIGHT (highlight cards) */}
        <div className="grid grid-cols-2 gap-4 md:pl-6">

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-indigo-400 font-semibold">Education</p>
            <p className="text-gray-300 text-sm mt-2">
              T.E Computer Engineering
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-indigo-400 font-semibold">Focus</p>
            <p className="text-gray-300 text-sm mt-2">
              Full Stack Development
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-indigo-400 font-semibold">Interest</p>
            <p className="text-gray-300 text-sm mt-2">
              AI & Cloud Computing
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-indigo-400 font-semibold">Goal</p>
            <p className="text-gray-300 text-sm mt-2">
              Software Engineer Role
            </p>
          </div>

        </div>

      </div>

    </motion.section>
  );
}