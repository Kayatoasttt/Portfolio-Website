"use client";

import React from "react";

const glassCard = {
  background: "rgba(255, 255, 255, 0.14)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "1px solid rgba(255, 255, 255, 0.18)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow:
    "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)",
} as React.CSSProperties;

export default function Resume() {
  return (
    <section
      id="resume"
      className="w-full flex items-start justify-center px-10 pt-12 pb-16"
    >
      <div className="w-full max-w-5xl flex flex-col gap-5">
        {/* Section Heading */}
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b3fa0",
            fontWeight: 700,
            marginBottom: "40px",
            textAlign: "center",
            width: "100%",
          }}
        >
          Resume
        </p>

        {/* ── Card 1: Education & Experience ── */}
        <div
          style={{
            ...glassCard,
            borderRadius: "24px",
            padding: "2rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: "0",
          }}
        >
          {/* Education */}
          <div style={{ paddingRight: "2.5rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6b3fa0",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Education
            </p>

            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#1a1025",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Singapore University of Technology and Design
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#4a2d7a",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                B.E. in Computer Science and Design
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#a0405a",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Sep 2024 – Present
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#1a1025",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Singapore Polytechnic
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#4a2d7a",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                Diploma in Information Technology
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#a0405a",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Mar 2021 – Apr 2024
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ background: "rgba(255,255,255,0.18)" }} />

          {/* Experience */}
          <div style={{ paddingLeft: "2.5rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6b3fa0",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Experience
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#1a1025",
                fontWeight: 600,
                marginBottom: "2px",
              }}
            >
              Accenture
            </p>

            <p
              style={{
                fontSize: "0.82rem",
                color: "#4a2d7a",
                fontWeight: 500,
                marginBottom: "4px",
              }}
            >
              Internship
            </p>

            <p
              style={{
                fontSize: "0.72rem",
                color: "#a0405a",
                fontWeight: 500,
                letterSpacing: "0.04em",
                marginBottom: "8px",
              }}
            >
              Mar 2023 – Jan 2024
            </p>

            <p
              style={{
                fontSize: "0.83rem",
                color: "#2a1a3a",
                lineHeight: "1.6",
              }}
            >
              Contributed across the full SDLC by translating client
              requirements into structured user stories and acceptance
              criteria. Designed wireframes, engineered ServiceNow dashboards,
              and developed frontend knowledge articles using HTML/CSS, while
              ensuring product quality through rigorous test case authoring and
              QA execution.
            </p>
          </div>
        </div>

        {/* ── Card 2: CCAs ── */}
        <div
          style={{
            ...glassCard,
            borderRadius: "24px",
            padding: "2rem 2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#6b3fa0",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            CCAs
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
              gap: "0",
            }}
          >
            {[
              {
                name: "SUTD Dance Derivativez",
                role: "Member",
                date: "Apr 2024 – Present",
                desc: "Performed in events and CCA production. Won second prize in the group dance competition, Ignition 2026.",
              },
              {
                name: "SUTD Muay Thai",
                role: "Publicity IC",
                date: "Sep 2024 – Jan 2026",
                desc: "Created publicity materials and handled social media.",
              },
              {
                name: "SP Indian Cultural Society",
                role: "Publicity IC",
                date: "Apr 2021 – May 2023",
                desc: "Co-organized events, performed in events, created publicity materials and handled social media.",
              },
            ].map((cca, i) => (
              <React.Fragment key={cca.name}>
                <div
                  style={{
                    padding:
                      i === 0
                        ? "0 2.5rem 0 0"
                        : i === 2
                        ? "0 0 0 2.5rem"
                        : "0 2.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#1a1025",
                      fontWeight: 600,
                      marginBottom: "2px",
                    }}
                  >
                    {cca.name}
                  </p>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#4a2d7a",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    {cca.role}
                  </p>

                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#a0405a",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      marginBottom: "8px",
                    }}
                  >
                    {cca.date}
                  </p>

                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "#2a1a3a",
                      lineHeight: "1.6",
                    }}
                  >
                    {cca.desc}
                  </p>
                </div>

                {i < 2 && (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.18)",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}