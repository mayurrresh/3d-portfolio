export default function ContactPanel({ progress = 0 }) {
  const start = 0.72;
  const end = 1.0;

  const visible = progress >= start && progress <= end;

  const sectionProgress = Math.min(
    1,
    Math.max(0, (progress - start) / (end - start))
  );

  const opacity = Math.sin(sectionProgress * Math.PI);
  const slideX = visible ? 0 : 40;

  return (
    <div
      id="contact-panel"
      style={{
        position: "fixed",
        right: "8%",
        top: "50%",
        transform: `translateY(-50%) translateX(${slideX}px)`,
        width: "min(380px, 80vw)",
        padding: "36px 32px",
        zIndex: 15,

        background: "rgba(12, 14, 18, 0.75)",
        backdropFilter: "blur(24px) saturate(1.3)",
        WebkitBackdropFilter: "blur(24px) saturate(1.3)",
        borderRadius: "16px",
        border: "1px solid rgba(215, 181, 109, 0.2)",
        boxShadow:
          "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset",

        color: "#f1eee7",

        opacity: visible ? opacity : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Title */}
      <h2
        style={{
          margin: 0,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 38px)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.15,
        }}
      >
        Let's Work
        <br />
        Together
      </h2>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, #d7b56d, transparent)",
          margin: "20px 0",
        }}
      />

      {/* Description */}
      <p
        style={{
          margin: "0 0 28px 0",
          fontFamily: "'Jost', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "rgba(241, 238, 231, 0.6)",
        }}
      >
        Open to opportunities, collaborations,
        and exciting projects.
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Download Resume — Primary */}
        <a
          href="/resume.pdf"
          download="Mayuresh-Kahar-Resume.pdf"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "14px 24px",
            background: "#d7b56d",
            color: "#111",
            borderRadius: "10px",
            border: "none",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e8cf93";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(215, 181, 109, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#d7b56d";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Download icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Download Resume
        </a>

        {/* Contact Me — Outline */}
        <a
          href="mailto:your@email.com"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "14px 24px",
            background: "rgba(215, 181, 109, 0.06)",
            color: "#f1eee7",
            borderRadius: "10px",
            border: "1px solid rgba(215, 181, 109, 0.3)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.5px",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(215, 181, 109, 0.12)";
            e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.55)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(215, 181, 109, 0.06)";
            e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Mail icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact Me
        </a>
      </div>

      {/* Social links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "22px",
          paddingTop: "18px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {[
          { label: "GitHub", href: "https://github.com/", icon: "GH" },
          { label: "LinkedIn", href: "https://linkedin.com/", icon: "LI" },
          { label: "Twitter", href: "https://twitter.com/", icon: "TW" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "1px",
              color: "rgba(241, 238, 231, 0.4)",
              textDecoration: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#d7b56d";
              e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(241, 238, 231, 0.4)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}