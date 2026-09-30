import { useEffect, useState, useCallback } from "react";

const sections = [
  { label: "INTRO", progress: 0 },
  { label: "ABOUT", progress: 0.2 },
  { label: "SKILLS", progress: 0.4 },
  { label: "PROJECTS", progress: 0.6 },
  { label: "CONTACT", progress: 0.8 },
];

export default function JourneyHUD({ progress = 0 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const index = Math.min(
      sections.length - 1,
      Math.floor(progress * sections.length)
    );
    setActive(index);
  }, [progress]);

  const scrollToSection = useCallback((targetProgress) => {
    const el = document.documentElement;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const targetScroll = targetProgress * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ─── Left navigation ─── */}
      <nav
        id="journey-nav"
        style={{
          position: "fixed",
          left: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {sections.map((section, index) => {
          const isActive = index === active;
          const isPast = index < active;

          return (
            <div key={section.label}>
              {/* Connector line */}
              {index > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    margin: "0 0 0 5px",
                    background: isPast
                      ? "rgba(215, 181, 109, 0.6)"
                      : "rgba(255, 255, 255, 0.08)",
                    transition: "background 0.6s ease",
                  }}
                />
              )}

              <button
                type="button"
                onClick={() => scrollToSection(section.progress)}
                aria-label={`Navigate to ${section.label}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "3px 0",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.opacity = isPast ? "0.6" : "0.3";
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: isActive ? "11px" : "7px",
                    height: isActive ? "11px" : "7px",
                    borderRadius: "50%",
                    background: isActive
                      ? "#d7b56d"
                      : isPast
                        ? "rgba(215, 181, 109, 0.55)"
                        : "rgba(255, 255, 255, 0.35)",
                    boxShadow: isActive
                      ? "0 0 14px rgba(215, 181, 109, 0.8), 0 0 4px rgba(215, 181, 109, 0.4)"
                      : "none",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    flexShrink: 0,
                  }}
                />

                {/* Label */}
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "9px",
                    fontWeight: isActive ? 500 : 300,
                    letterSpacing: "2.5px",
                    opacity: isActive ? 1 : isPast ? 0.6 : 0.3,
                    transition: "all 0.4s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {section.label}
                </span>
              </button>
            </div>
          );
        })}
      </nav>

      {/* ─── Bottom-right progress ─── */}
      <div
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 50,
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          letterSpacing: "1px",
          color: "rgba(241, 238, 231, 0.25)",
          pointerEvents: "none",
        }}
      >
        {Math.round(progress * 100)}%
      </div>
    </>
  );
}