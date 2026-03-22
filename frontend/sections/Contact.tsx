"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://nagesh-portfolio-jjs1.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.text();
      alert(data);

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      alert("Something went wrong ❌");
    }
  };

 return (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-black/80 backdrop-blur border-t border-white/5 text-white py-28 px-6"
  >

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

    {/* 🔥 WRAPPER WITH MORE GAP */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start relative">

      {/* 🔥 DIVIDER LINE */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* 🔹 LEFT SIDE */}
      <div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Let’s connect
        </h2>

        <p className="text-gray-300 mb-10">
         I’m always excited to connect and explore new projects, ideas, or opportunities to collaborate. If you have something in mind or just want to connect, feel free to reach out through any of the options below.
        </p>

        <div className="space-y-6">

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20"></div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-semibold">+91 8459795162</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20"></div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold">nageshfulari2@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20"></div>
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="font-semibold">Nagesh Fulari</p>
            </div>
          </div>

        </div>

      </div>

      {/* 🔹 RIGHT SIDE (FORM) */}
      <div className="h-full">

       <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 h-full justify-between"

        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/5 border border-white/10 h-32 focus:outline-none focus:border-indigo-500"
          />

          <button className="
            bg-indigo-500
            py-3 rounded-lg
            hover:bg-indigo-600
            transition duration-300 
            hover:scale-105 
            hover:shadow-lg 
            hover:shadow-indigo-500/20
            font-medium tracking-wide
          ">
            Send Message
          </button>

        </form>

      </div>

    </div>

  </motion.section>
);
}