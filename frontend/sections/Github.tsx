"use client";

import { useEffect, useState } from "react";

export default function Github() {

  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/nageshfulari/repos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 2));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="relative bg-black/40 backdrop-blur-xl border-t border-white/5 text-white py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        Loading GitHub projects...
      </section>
    );
  }

  return (
    <section
      id="github"
      className="relative bg-black/40 backdrop-blur-xl border-t border-white/5 text-white py-28 px-6"
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-left max-w-5xl mx-auto mb-16 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        GitHub Activity
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {repos.map((repo: any) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
p-6 
bg-white/5 
backdrop-blur-md 
border border-white/10 
rounded-2xl 
hover:border-indigo-500 
transition duration-300 
hover:scale-[1.03]
block
"
          >

            {/* 🔹 Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-indigo-400">
                {repo.name}
              </h3>

              {/* Visibility */}
              <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                {repo.private ? "Private" : "Public"}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-3">
              {repo.description || "No description available"}
            </p>

            {/* 🔹 Stats Row */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-300">

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
              <span className="text-gray-400">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}