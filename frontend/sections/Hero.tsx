"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-transparent text-white px-6 py-28 overflow-hidden pt-24"
    >
      
      {/* Floating Glow Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 blur-2xl rounded-full animate-pulse"></div>

      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      {/* ✅ CHANGED: grid instead of single column */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE (YOUR ORIGINAL CONTENT — UNCHANGED) */}
        <div className="text-left">

          <p className="text-green-400">
            Initializing Developer Profile...
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Hi, I'm<br></br>
            Nagesh Fulari
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Full Stack Developer specializing in building scalable backend systems
            and modern web applications.
          </p>

          <div className="flex gap-4 mt-8">

            <a
  href="#projects"
  className="
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
  Explore Projects
</a>
            <a
  href="/Resume.pdf"
  download
  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 hover:scale-105"
>
  Download Resume
</a>
          </div>

        </div>

        {/* ✅ RIGHT SIDE (PROFILE IMAGE ADDED) */}
        <div className="relative flex justify-center">

          {/* Glow behind image */}
          <div className="absolute w-72 h-72 bg-indigo-500/30 blur-2xl rounded-full"></div>

          <Image
            src="/Profile.jpeg"
            alt="profile"
            width={380}
            height={380}
            className="rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-300 relative z-10"
          />

        </div>

      </div>

    </section>
  )
}