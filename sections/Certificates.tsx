"use client";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    credentialId: "AWS-SAA-C03-XXXXXX",
    verify: "https://aws.amazon.com/verification",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "Nov 2023",
    credentialId: "GGL-UX-XXXXXX",
    verify: "https://coursera.org/verify",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    date: "Aug 2023",
    credentialId: "META-FE-XXXXXX",
    verify: "https://coursera.org/verify",
  },
  {
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard / edX",
    date: "May 2023",
    credentialId: "CS50-XXXXXX",
    verify: "https://cs50.harvard.edu/certificate",
  },
];

// Minimal badge icon per card
const badges = ["☁️", "✏️", "⚛️", "🎓"];

export default function Certificates() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-10 py-24">

      <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b3fa0", fontWeight: 700, marginBottom: "56px" }}>
        Certificates
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 360px)",
          gap: "36px",
        }}
      >
        {certificates.map((cert, i) => (
          <div
            key={i}
            style={{
              padding: "2rem",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "1px solid rgba(255, 255, 255, 0.18)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "6px 8px 24px rgba(140, 100, 180, 0.12), 2px 4px 8px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "6px 12px 32px rgba(140, 100, 180, 0.2), 2px 4px 8px rgba(0, 0, 0, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "6px 8px 24px rgba(140, 100, 180, 0.12), 2px 4px 8px rgba(0, 0, 0, 0.05)";
            }}
          >
            {/* Badge + date row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.4rem" }}>{badges[i]}</span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#6b3fa0",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  background: "rgba(107,63,160,0.1)",
                  border: "1px solid rgba(107,63,160,0.2)",
                  borderRadius: "999px",
                  padding: "3px 10px",
                }}
              >
                {cert.date}
              </span>
            </div>

            {/* Title */}
            <p style={{ fontSize: "1rem", color: "#1a1025", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
              {cert.title}
            </p>

            {/* Issuer */}
            <p style={{ fontSize: "0.8rem", color: "#2a1a3a", margin: 0, opacity: 0.75 }}>
              {cert.issuer}
            </p>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", margin: "4px 0" }} />

            {/* Credential ID + verify link */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.68rem", color: "#2a1a3a", opacity: 0.5, fontFamily: "monospace" }}>
                {cert.credentialId}
              </span>
              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem",
                  color: "#6b3fa0",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                }}
              >
                Verify →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}