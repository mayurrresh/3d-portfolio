import { useState, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "Train Booking System",
    description:
      "Full stack application for real-time train booking with seat selection.",
    stack: "React · NestJS · Prisma · PostgreSQL",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    icon: "🚂",
    link: "#",
  },
  {
    id: 2,
    title: "Movie Finder",
    description:
      "Discover movies, search and view details using TMDb API.",
    stack: "React · TMDb API · CSS",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #44318d 100%)",
    icon: "🎬",
    link: "#",
  },
  {
    id: 3,
    title: "3D Portfolio",
    description:
      "An immersive 3D portfolio built with React Three Fiber.",
    stack: "React · Three.js · GSAP · Lenis",
    gradient: "linear-gradient(135deg, #1a1208 0%, #2d2010 50%, #4a3520 100%)",
    icon: "🌲",
    link: "#",
  },
];

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectsPanel({ progress = 0 }) {
  const start = 0.50;
  const end = 0.72;

  const visible = progress >= start && progress <= end;

  const sectionProgress = Math.min(
    1,
    Math.max(0, (progress - start) / (end - start))
  );

  const opacity = Math.sin(sectionProgress * Math.PI);
  const slideY = visible ? 0 : 30;

  const [scrollIndex, setScrollIndex] = useState(0);

  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < projects.length - 1;

  const handlePrev = useCallback(() => {
    if (canScrollLeft) setScrollIndex((i) => i - 1);
  }, [canScrollLeft]);

  const handleNext = useCallback(() => {
    if (canScrollRight) setScrollIndex((i) => i + 1);
  }, [canScrollRight]);

  // On wider screens show all 3, on narrow we scroll
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;

  return (
    <div
      id="projects-panel"
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translateY(${slideY}px)`,
        width: "min(820px, 92vw)",
        zIndex: 15,

        opacity: visible ? opacity : 0,
        pointerEvents: visible ? "auto" : "none",
        color: "#f1eee7",

        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Header with navigation arrows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "0 4px",
        }}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: `1px solid ${canScrollLeft ? "rgba(215, 181, 109, 0.4)" : "rgba(255,255,255,0.08)"}`,
            background: canScrollLeft ? "rgba(215, 181, 109, 0.08)" : "rgba(255,255,255,0.03)",
            color: canScrollLeft ? "#d7b56d" : "rgba(255,255,255,0.2)",
            cursor: canScrollLeft ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <ChevronLeft />
        </button>

        {/* Title */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 400,
            }}
          >
            Projects
          </h2>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: `1px solid ${canScrollRight ? "rgba(215, 181, 109, 0.4)" : "rgba(255,255,255,0.08)"}`,
            background: canScrollRight ? "rgba(215, 181, 109, 0.08)" : "rgba(255,255,255,0.03)",
            color: canScrollRight ? "#d7b56d" : "rgba(255,255,255,0.2)",
            cursor: canScrollRight ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Cards container */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            transform: isMobile ? `translateX(-${scrollIndex * (280 + 14)}px)` : "none",
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            width: "100%",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                flex: isMobile ? "0 0 280px" : "1 1 0",
                minWidth: 0,
                background: "rgba(12, 14, 18, 0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "14px",
                border: "1px solid rgba(215, 181, 109, 0.15)",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(15px)",
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 50px rgba(0,0,0,0.35), 0 0 20px rgba(215, 181, 109, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Thumbnail area */}
              <div
                style={{
                  height: "120px",
                  background: project.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative grid overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span style={{ fontSize: "36px", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}>
                  {project.icon}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "18px 18px 20px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "rgba(241, 238, 231, 0.55)",
                  }}
                >
                  {project.description}
                </p>

                {/* Stack */}
                <div
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(215, 181, 109, 0.6)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {project.stack}
                </div>

                {/* View Project link */}
                <a
                  href={project.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    color: "rgba(241, 238, 231, 0.8)",
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "1px solid rgba(215, 181, 109, 0.25)",
                    background: "rgba(215, 181, 109, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(215, 181, 109, 0.12)";
                    e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(215, 181, 109, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(215, 181, 109, 0.25)";
                  }}
                >
                  View Project <span style={{ fontSize: "12px" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "18px",
        }}
      >
        {projects.map((_, i) => (
          <div
            key={i}
            style={{
              width: scrollIndex === i ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: scrollIndex === i
                ? "#d7b56d"
                : "rgba(255, 255, 255, 0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => setScrollIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}