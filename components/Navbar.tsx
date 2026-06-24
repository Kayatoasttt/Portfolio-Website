"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Resume", "Projects", "Certificates", "Contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const id = item.toLowerCase();
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          // Trigger when the section occupies the middle 40% of the viewport
          rootMargin: "-30% 0px -30% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "72px",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "0 8px",
      }}
    >
      {/* Brand mark — top-left corner */}
      <a
        href="#about"
        style={{
          position: "absolute",
          top: "24px",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#6b3fa0",
          textDecoration: "none",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          opacity: 0.7,
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
      >
        LOGO
      </a>

      {/* Nav items */}
      {navItems.map((item) => {
        const id = item.toLowerCase();
        const isActive = activeSection === id;

        return (
          <a
            key={item}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: isActive ? "14px" : "10px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",

              /* Glass card when active — mirrors contact card style */
              background: isActive
                ? "rgba(255, 255, 255, 0.06)"
                : "transparent",
              backdropFilter: isActive ? "blur(4px)" : "none",
              WebkitBackdropFilter: isActive ? "blur(4px)" : "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: isActive
                ? "1px solid rgba(255, 255, 255, 0.18)"
                : "1px solid transparent",
              borderBottom: isActive
                ? "1px solid rgba(255, 255, 255, 0.18)"
                : "1px solid transparent",
              boxShadow: isActive
                ? "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)"
                : "none",
            }}
            title={item}
          >
            {/* Dot indicator */}
            <span
              style={{
                display: "block",
                width: isActive ? "6px" : "4px",
                height: isActive ? "6px" : "4px",
                borderRadius: "999px",
                background: isActive ? "#6b3fa0" : "rgba(107,63,160,0.35)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isActive ? "0 0 8px rgba(107,63,160,0.6)" : "none",
              }}
            />

            {/* Tooltip label — appears on hover */}
            <span
              style={{
                position: "absolute",
                left: "calc(100% + 10px)",
                whiteSpace: "nowrap",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: isActive ? "#6b3fa0" : "#1a1025",
                opacity: 0,
                pointerEvents: "none",
                transition: "opacity 0.2s ease",
              }}
              className="nav-label"
            >
              {item}
            </span>
          </a>
        );
      })}

      {/* Hover label reveal via global CSS — keeps inline styles clean */}
      <style>{`
        a:hover .nav-label {
          opacity: 0.7 !important;
        }
      `}</style>
    </nav>
  );
}