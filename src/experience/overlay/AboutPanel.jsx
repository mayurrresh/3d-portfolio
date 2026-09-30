export default function AboutPanel({ progress = 0, side = "left" }) {
  const start = 0.12;
  const end = 0.30;

  const visible = progress >= start && progress <= end;

  const sectionProgress = Math.min(
    1,
    Math.max(0, (progress - start) / (end - start))
  );

  const opacity = Math.sin(sectionProgress * Math.PI);

  const isLeft = side === "left";

  const slideX = visible
    ? 0
    : isLeft
      ? -35
      : 35;

  const scrollToSkills = () => {
    const el = document.documentElement;
    const maxScroll = el.scrollHeight - el.clientHeight;

    window.scrollTo({
      top: maxScroll * 0.40,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="about-panel"
      style={{
        position: "fixed",

        left: isLeft ? "clamp(32px, 8vw, 120px)" : "auto",
        right: isLeft ? "auto" : "clamp(32px, 8vw, 120px)",

        top: "50%",
        transform: `
          translateY(-50%)
          translateX(${slideX}px)
        `,

        width: "min(390px, 34vw)",

        zIndex: 15,

        opacity: visible ? opacity : 0,
        pointerEvents: visible ? "auto" : "none",

        color: "#f1eee7",

        transition:
          "opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",

        fontFamily: "'Jost', sans-serif",
      }}
    >
      {/* SECTION MARKER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            display: "block",
            width: "42px",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(215,181,109,0.8), transparent)",
          }}
        />

        <span
          style={{
            fontSize: "8px",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "rgba(215,181,109,0.85)",
          }}
        >
          Identity
        </span>
      </div>

      {/* TITLE */}
      <h2
        style={{
          margin: 0,

          fontFamily:
            "'Cormorant Garamond', Georgia, serif",

          fontSize:
            "clamp(48px, 5vw, 72px)",

          fontWeight: 400,

          lineHeight: 0.9,

          letterSpacing: "-0.025em",

          color: "#f1eee7",

          textShadow:
            "0 6px 30px rgba(0,0,0,0.45)",
        }}
      >
        About
      </h2>

      {/* SMALL DIVIDER */}
      <div
        style={{
          width: "100%",
          height: "1px",

          marginTop: "24px",

          background:
            "linear-gradient(90deg, rgba(241,238,231,0.28), transparent)",
        }}
      />

      {/* DESCRIPTION */}
      <p
        style={{
          margin: "22px 0 0",

          maxWidth: "330px",

          fontSize: "13px",

          fontWeight: 300,

          lineHeight: 1.75,

          color:
            "rgba(241,238,231,0.68)",
        }}
      >
        I'm a full stack developer who enjoys
        building products that sit between
        technology and experience.
      </p>

      <p
        style={{
          margin: "12px 0 0",

          maxWidth: "330px",

          fontSize: "13px",

          fontWeight: 300,

          lineHeight: 1.75,

          color:
            "rgba(241,238,231,0.48)",
        }}
      >
        From frontend interfaces to backend
        systems and cloud infrastructure, I
        like understanding how the whole
        machine works.
      </p>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          gap: "34px",
          marginTop: "30px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
              fontSize: "25px",
              color: "#d7b56d",
            }}
          >
            01
          </div>

          <div
            style={{
              marginTop: "3px",
              fontSize: "7px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color:
                "rgba(241,238,231,0.42)",
            }}
          >
            Developer
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
              fontSize: "25px",
              color: "#d7b56d",
            }}
          >
            ∞
          </div>

          <div
            style={{
              marginTop: "3px",
              fontSize: "7px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color:
                "rgba(241,238,231,0.42)",
            }}
          >
            Curiosity
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={scrollToSkills}
        style={{
          marginTop: "34px",

          padding: 0,

          background: "transparent",

          border: "none",

          color: "#d7b56d",

          fontFamily: "'Jost', sans-serif",

          fontSize: "8px",

          fontWeight: 400,

          letterSpacing: "0.32em",

          textTransform: "uppercase",

          cursor: "pointer",

          display: "flex",

          alignItems: "center",

          gap: "12px",
        }}
      >
        <span
          style={{
            width: "30px",
            height: "1px",
            background:
              "rgba(215,181,109,0.7)",
          }}
        />

        Explore my skills

        <span
          style={{
            fontSize: "13px",
            letterSpacing: 0,
          }}
        >
          →
        </span>
      </button>
    </div>
  );
}