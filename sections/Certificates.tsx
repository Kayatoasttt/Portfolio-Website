"use client";

// Add your certificate PDFs to /public/certificates/
// and update the `file` field to match the filename e.g. "aws-saa.pdf"
const certificates = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    file: "Cybersecurity_Essentials_Badge.pdf",
  },
  {
    title: "Alibaba Cload Certified Associate",
    issuer: "Alibaba Cloud",
    file: "ACA_Cloud_Computing.png",
  },
  {
    title: "Autodesk Fusion",
    issuer: "Autodesk / SUTD",
    file: "Autodesk_Fusion_Workshop_SUTD.pdf",
  },
  {
    title: "Internship Testimonial",
    issuer: "Accenture, Senior Manager, Billy Ooi",
    file: "AccentureTestimonial.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="min-h-screen w-full flex flex-col items-center justify-center px-10 py-24">

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

            {/*View button */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a
                href={`/Portfolio-Website/certificates/${cert.file}`}
                
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem",
                  color: "#6b3fa0",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  background: "rgba(107,63,160,0.14)",
                  border: "1px solid rgba(107,63,160,0.2)",
                  borderRadius: "999px",
                  padding: "4px 14px",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(107,63,160,0.16)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(107,63,160,0.08)")}
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}