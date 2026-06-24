"use client";

const skills = [
  "Full Stack Development",
  "Mobile Development",
  "UI/UX Design",
  "Big Data",
  "Data Analysis",
  "Graphic Design",
  "Data Engineering",
  "Cyber Security",
  "Software Engineering",
  "Java / J2EE",
  "Python",
  "Javascript",
  "Systems Design",
  "Leadership",
  "Teamwork",
  "Communication",
  "Problem-solving",
  "Critical thinking",
  "Adaptability",
  "English",
  "Tamil",
];

export default function Resume() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-10 py-24">
      <div
        className="w-full max-w-5xl flex flex-col gap-16 p-12 rounded-3xl"
        style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "1px solid rgba(255, 255, 255, 0.18)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "6px 8px 24px rgba(140, 100, 180, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.06)",
        }}
                >

        {/* Top three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* Education */}
          <div
            className="pr-10 md:border-r"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "20px" }}>
              Education
            </p>
            <p style={{ fontSize: "0.95rem", color: "#1a1025", fontWeight: 600, marginBottom: "2px" }}>
              Singapore Polytechnic
            </p>
            <p style={{ fontSize: "0.82rem", color: "#4a2d7a", marginBottom: "4px", fontWeight: 500 }}>
              Diploma in Information Technology
            </p>
            <p style={{ fontSize: "0.72rem", color: "#a0405a", marginBottom: "14px", letterSpacing: "0.04em", fontWeight: 500 }}>
              Mar 2021 – Present
            </p>
            <p style={{ fontSize: "0.83rem", color: "#2a1a3a", lineHeight: "1.85" }}>
              Specializing in Software Development with a strong background in designing
              databases and creating UI/UX-friendly web and mobile applications. Collaborated
              on various group projects and built a deep understanding of software engineering
              principles.
            </p>
          </div>

          {/* Experience */}
          <div
            className="px-10 md:border-r"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "20px" }}>
              Experience
            </p>
            <p style={{ fontSize: "0.95rem", color: "#1a1025", fontWeight: 600, marginBottom: "2px" }}>
              Accenture
            </p>
            <p style={{ fontSize: "0.82rem", color: "#4a2d7a", marginBottom: "4px", fontWeight: 500 }}>
              Internship
            </p>
            <p style={{ fontSize: "0.72rem", color: "#a0405a", marginBottom: "14px", letterSpacing: "0.04em", fontWeight: 500 }}>
              Mar 2023 – Jan 2024
            </p>
            <p style={{ fontSize: "0.83rem", color: "#2a1a3a", lineHeight: "1.85" }}>
              Actively participated in the SDLC, gathering client requirements and translating
              them into user stories and acceptance criteria. Designed wireframes, configured
              ServiceNow dashboards, and built knowledge article frontends with HTML and CSS.
              Contributed to test case writing and QA.
            </p>
          </div>

          {/* CCAs */}
          <div className="pl-10">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "20px" }}>
              CCAs
            </p>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "0.95rem", color: "#1a1025", fontWeight: 600, marginBottom: "2px" }}>
                Student Council
              </p>
              <p style={{ fontSize: "0.82rem", color: "#4a2d7a", marginBottom: "4px", fontWeight: 500 }}>
                Vice President
              </p>
              <p style={{ fontSize: "0.72rem", color: "#a0405a", marginBottom: "10px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Apr 2022 – Apr 2023
              </p>
              <p style={{ fontSize: "0.83rem", color: "#2a1a3a", lineHeight: "1.85" }}>
                Led school-wide initiatives, organized large-scale events and represented
                student interests to administration.
              </p>
            </div>

            <div>
              <p style={{ fontSize: "0.95rem", color: "#1a1025", fontWeight: 600, marginBottom: "2px" }}>
                Infocomm Club
              </p>
              <p style={{ fontSize: "0.82rem", color: "#4a2d7a", marginBottom: "4px", fontWeight: 500 }}>
                Member
              </p>
              <p style={{ fontSize: "0.72rem", color: "#a0405a", marginBottom: "10px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Apr 2021 – Apr 2022
              </p>
              <p style={{ fontSize: "0.83rem", color: "#2a1a3a", lineHeight: "1.85" }}>
                Participated in hackathons and workshops, building practical software
                development skills through collaborative projects.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.3)" }} />

        {/* Skills */}
        <div>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "20px" }}>
            Skills & Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: "0.8rem",
                  color: "#1a1025",
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.25)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}