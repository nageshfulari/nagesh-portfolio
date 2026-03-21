"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {

  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nageshfulari/repos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 2));
        }
      });
  }, []);

  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 md:gap-24 relative">

        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* LEFT SIDE — GitHub */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            GitHub Activity
          </h3>

          <div className="space-y-4">
            {repos.length === 0 ? (
              <p className="text-gray-400">Loading projects...</p>
            ) : (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500 transition hover:scale-[1.02]"
                >

                  {/* Repo Name */}
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-indigo-400">
                      {repo.name}
                    </p>

                    <span className="text-xs text-gray-400">
                      {repo.private ? "Private" : "Public"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mt-2">
                    {repo.description || "No description available"}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-400">

                    {/* Language */}
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                      {repo.language || "N/A"}
                    </span>

                    {/* Stars */}
                    <span>⭐ {repo.stargazers_count}</span>

                    {/* Forks */}
                    <span>🍴 {repo.forks_count}</span>

                    {/* Updated */}
                    <span>
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>

                  </div>

                </a>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDE — Social Links */}
        <div className="md:pl-10">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Connect With Me
          </h3>

          <div className="flex gap-6 text-2xl mt-4">

            <a
              href="https://github.com/nageshfulari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/nagesh-fulari-a57227272"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition hover:scale-110"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        © 2026 Nagesh Fulari
      </div>

    </footer>
  );
}