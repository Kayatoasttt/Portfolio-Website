"use client";

import { useState } from "react";

const projects = [
  {
    title: "AI Study Assistant",
    description: "A conversational AI tool that helps students summarize notes, generate flashcards, and quiz themselves on any topic.",
    tech: ["Python", "Next.js", "OpenAI API", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Budget Tracker",
    description: "A mobile-first personal finance app that visualizes spending habits and helps users set monthly savings goals.",
    tech: ["React Native", "Firebase", "Expo", "Chart.js"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Campus Event Portal",
    description: "A web platform for students to discover, RSVP, and get reminders for campus events, built during an internship project.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Inventory Management System",
    description: "An enterprise-grade inventory tracking system with real-time stock updates, low-stock alerts, and supplier management.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "UI Component Library",
    description: "A reusable design system and component library built for internal use, with full Storybook documentation.",
    tech: ["React", "TypeScript", "Storybook", "SCSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent((i) => (i + 1) % projects.length);

  const getPosition = (index: number) => {
    const diff = (index - current + projects.length) % projects.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === projects.length - 1) return diff === 1 ? "right" : "left";
    return "hidden";
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-10 py-24 overflow-hidden">

      <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "48px" }}>
        Projects
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl flex items-center justify-center" style={{ height: "380px" }}>

        {projects.map((project, index) => {
          const pos = getPosition(index);
          if (pos === "hidden") return null;

          const isCenter = pos === "center";
          const isLeft = pos === "left";

          return (
            <div
              key={index}
              onClick={() => !isCenter && (isLeft ? prev() : next())}
              style={{
                position: "absolute",
                width: "420px",
                padding: "2rem",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: isCenter ? "blur(4px)" : "blur(2px)",
                WebkitBackdropFilter: isCenter ? "blur(4px)" : "blur(2px)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "1px solid rgba(255, 255, 255, 0.18)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: isCenter
                  ? "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)"
                  : "4px 6px 16px rgba(140, 100, 180, 0.08)",
                transform: isCenter
                  ? "translateX(0) scale(1)"
                  : isLeft
                  ? "translateX(-340px) scale(0.88)"
                  : "translateX(340px) scale(0.88)",
                opacity: isCenter ? 1 : 0.45,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: isCenter ? "default" : "pointer",
                zIndex: isCenter ? 10 : 5,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Title */}
              <p style={{ fontSize: "1.1rem", color: "#1a1025", fontWeight: 600, margin: 0 }}>
                {project.title}
              </p>

              {/* Description */}
              <p style={{ fontSize: "0.83rem", color: "#2a1a3a", lineHeight: "1.85", margin: 0 }}>
                {project.description}
              </p>

              {/* Tech pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.72rem",
                      color: "#1a1025",
                      fontWeight: 500,
                      background: "rgba(255,255,255,0.25)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      borderRadius: "999px",
                      padding: "3px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "20px", marginTop: "auto" }}>
                <a
                
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", color: "#6b3fa0", textDecoration: "none", letterSpacing: "0.06em", fontWeight: 500 }}
                >
                  GitHub →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.75rem", color: "#6b3fa0", textDecoration: "none", letterSpacing: "0.06em", fontWeight: 500 }}
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px", marginTop: "48px" }}>
        <button
          onClick={prev}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            color: "#2a1a3a",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                background: i === current ? "#6b3fa0" : "rgba(107,63,160,0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            color: "#2a1a3a",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          →
        </button>
      </div>

    </section>
  );
}