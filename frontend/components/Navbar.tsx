"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  const [active, setActive] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const sections = ["about", "journey", "projects", "achievements", "contact"];

  const handleScroll = () => {
    let current = "about";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        current = id;
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <nav
      className={`
fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center text-white
transition-all duration-300
${scrolled 
  ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg" 
  : "bg-transparent border-b border-transparent"}
`}
    >
      {/* LOGO */}
      <h1 className="text-2xl font-semibold tracking-tight">
        N.F
      </h1>

      {/* LINKS */}
      <ul className="flex gap-8 text-gray-300 text-base md:text-lg tracking-wide font-medium">
        {["About", "Journey","Projects", "Achievements", "Contact"].map((item) => (
          <li key={item} className="relative group cursor-pointer">
            <a
              href={`#${item.toLowerCase()}`}
              className={`transition duration-300 ${
  active === item.toLowerCase()
    ? "text-white"
    : "text-gray-400"
}`}
            >
              {item}
            </a>

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}