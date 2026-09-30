/* ─── Technology SVG Icons ─── */
function ReactIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <circle cx="20" cy="20" r="4" fill="#61DAFB" />
      <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 20 20)" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <path d="M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z" fill="none" stroke="#68A063" strokeWidth="1.5" />
      <text x="20" y="24" textAnchor="middle" fill="#68A063" fontSize="11" fontFamily="'Outfit', sans-serif" fontWeight="500">N</text>
    </svg>
  );
}

function ThreeJsIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="#f1f1f1" strokeWidth="1.2" />
      <text x="20" y="25" textAnchor="middle" fill="#f1f1f1" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="400">3</text>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <rect x="6" y="6" width="28" height="28" rx="4" fill="#3178C6" />
      <text x="20" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Outfit', sans-serif" fontWeight="600">TS</text>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <path d="M12 18 Q16 10 24 18 Q28 10 36 18" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 26 Q8 18 16 26 Q20 18 28 26" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MongoDBIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <path d="M20 5 Q26 14 26 22 Q26 32 20 36 Q14 32 14 22 Q14 14 20 5Z" fill="none" stroke="#4DB33D" strokeWidth="1.3" />
      <line x1="20" y1="10" x2="20" y2="34" stroke="#4DB33D" strokeWidth="1" />
    </svg>
  );
}

const skills = [
  { name: "React", Icon: ReactIcon, color: "#61DAFB" },
  { name: "Node.js", Icon: NodeIcon, color: "#68A063" },
  { name: "Three.js", Icon: ThreeJsIcon, color: "#f1f1f1" },
  { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" },
  { name: "MongoDB", Icon: MongoDBIcon, color: "#4DB33D" },
];

export default function SkillsPanel({ progress = 0 }) {
  const start = 0.30;
  const end = 0.50;

  const visible = progress >= start && progress <= end;

  const sectionProgress = Math.min(
    1,
    Math.max(0, (progress - start) / (end - start))
  );

  const opacity = Math.sin(sectionProgress * Math.PI);
  const slideX = visible ? 0 : 40;

  return (
    <div
      id="skills-panel"
      style={{
        position: "fixed",
        right: "6%",
        top: "50%",
        transform: `translateY(-50%) translateX(${slideX}px)`,
        width: "min(380px, 82vw)",
        padding: "32px 28px",
        zIndex: 15,

        background: "rgba(12, 14, 18, 0.72)",
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
          fontSize: "clamp(30px, 4vw, 40px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}
      >
        My Skills
      </h2>

      {/* Subtitle */}
      <p
        style={{
          margin: "12px 0 0 0",
          fontFamily: "'Jost', sans-serif",
          fontSize: "13px",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "rgba(241, 238, 231, 0.55)",
        }}
      >
        Technologies I work with to build modern, scalable
        and beautiful applications.
      </p>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, #d7b56d, transparent)",
          margin: "20px 0",
        }}
      />

      {/* Skills icon grid — 3x2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "16px 8px 12px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "default",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transitionDelay: `${index * 0.06}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(215, 181, 109, 0.08)";
              e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.25)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <skill.Icon />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.5px",
                color: "rgba(241, 238, 231, 0.7)",
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}