"use client";

import { useState } from "react";

const contact = {
  name: "Your Name",
  phone: "+1 (555) 000-0000",
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

const rows = [
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "GitHub", value: contact.github.replace("https://", ""), href: contact.github },
  { label: "LinkedIn", value: contact.linkedin.replace("https://", ""), href: contact.linkedin },
];

export default function Contact() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-10 py-24">

      <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "56px" }}>
        Contact
      </p>

      {/* Flip container */}
      <div
        onClick={() => setFlipped((f) => !f)}
        style={{
          width: "520px",
          height: "340px",
          cursor: "pointer",
          perspective: "1200px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >

          {/* FRONT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "1px solid rgba(255, 255, 255, 0.18)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "3rem",
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "999px",
                border: "1px solid rgba(107,63,160,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "999px",
                  background: "rgba(107,63,160,0.12)",
                  border: "1px solid rgba(107,63,160,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                }}
              >
                ✦
              </div>
            </div>

            <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a1025", margin: 0, letterSpacing: "-0.01em" }}>
              {contact.name}
            </p>

            <p style={{ fontSize: "0.78rem", color: "#2a1a3a", opacity: 0.55, margin: 0, letterSpacing: "0.06em" }}>
              Full-Stack Developer
            </p>

            {/* Hint */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                opacity: 0.4,
              }}
            >
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1025" }}>
                tap to reveal
              </span>
              <span style={{ fontSize: "0.75rem", color: "#6b3fa0" }}>→</span>
            </div>
          </div>

          {/* BACK */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "1px solid rgba(255, 255, 255, 0.18)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2.8rem 3rem",
              gap: "0px",
            }}
          >
            {/* Name header on back */}
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, margin: "0 0 20px 0" }}>
              {contact.name}
            </p>

            {rows.map((row, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#6b3fa0",
                      fontWeight: 700,
                      minWidth: "90px",
                    }}
                  >
                    {row.label}
                  </span>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: "0.82rem",
                      color: "#1a1025",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b3fa0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1a1025")}
                  >
                    {row.value} ↗
                  </a>
                </div>
                {i < rows.length - 1 && (
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />
                )}
              </div>
            ))}

            {/* Hint */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                right: "28px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                opacity: 0.35,
              }}
            >
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1025" }}>
                tap to flip back
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}