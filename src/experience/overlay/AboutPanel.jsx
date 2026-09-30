export default function AboutPanel({
  progress = 0,
  side = "left",
}) {
  const start = 0.12;
  const end = 0.30;

  const visible =
    progress >= start &&
    progress <= end;

  const sectionProgress = Math.min(
    1,
    Math.max(
      0,
      (progress - start) /
        (end - start)
    )
  );

  const opacity =
    Math.sin(sectionProgress * Math.PI);

  /*
    Position based on camera side.
  */

  const isLeft = side === "left";

  const horizontalPosition = isLeft
    ? {
        left: "8%",
        right: "auto",
      }
    : {
        right: "8%",
        left: "auto",
      };

  const slideX = visible
    ? 0
    : isLeft
      ? -40
      : 40;

  const scrollToSkills = () => {
    const el =
      document.documentElement;

    const maxScroll =
      el.scrollHeight -
      el.clientHeight;

    window.scrollTo({
      top: maxScroll * 0.4,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="about-panel"
      style={{
        position: "fixed",

        ...horizontalPosition,

        top: "50%",

        transform: `
          translateY(-50%)
          translateX(${slideX}px)
        `,

        width: "min(420px, 80vw)",

        padding: "36px 32px",

        zIndex: 15,

        background:
          "rgba(12, 14, 18, 0.72)",

        backdropFilter:
          "blur(24px) saturate(1.3)",

        WebkitBackdropFilter:
          "blur(24px) saturate(1.3)",

        borderRadius: "16px",

        border:
          "1px solid rgba(215, 181, 109, 0.2)",

        boxShadow:
          "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset",

        color: "#f1eee7",

        opacity:
          visible ? opacity : 0,

        pointerEvents:
          visible ? "auto" : "none",

        transition:
          "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >

      {/* Decorative symbol */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "28px",

          width: "40px",
          height: "40px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="rgba(215,181,109,0.4)"
            strokeWidth="1"
          />

          <circle
            cx="18"
            cy="18"
            r="10"
            stroke="rgba(215,181,109,0.25)"
            strokeWidth="0.5"
          />

          <line
            x1="18"
            y1="2"
            x2="18"
            y2="34"
            stroke="rgba(215,181,109,0.2)"
            strokeWidth="0.5"
          />

          <line
            x1="2"
            y1="18"
            x2="34"
            y2="18"
            stroke="rgba(215,181,109,0.2)"
            strokeWidth="0.5"
          />

          <circle
            cx="18"
            cy="18"
            r="3"
            fill="rgba(215,181,109,0.5)"
          />
        </svg>
      </div>

      {/* Title */}
      <h2
        style={{
          margin: "8px 0 0 0",

          fontFamily:
            "'Cormorant Garamond', Georgia, serif",

          fontSize:
            "clamp(32px, 4vw, 42px)",

          fontWeight: 400,

          lineHeight: 1.1,
        }}
      >
        About Me
      </h2>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "1px",

          background:
            "linear-gradient(90deg, #d7b56d, transparent)",

          margin: "20px 0",
        }}
      />

      {/* Description */}
      <p
        style={{
          margin: 0,

          fontFamily:
            "'Jost', sans-serif",

          fontSize: "14px",

          fontWeight: 300,

          lineHeight: 1.8,

          color:
            "rgba(241, 238, 231, 0.7)",
        }}
      >
        A passionate developer who loves
        turning ideas into interactive and
        meaningful digital experiences. I
        work across frontend, backend and
        cloud — building products that are
        practical, scalable and enjoyable
        to use.
      </p>

      {/* CTA */}
      <button
        type="button"
        onClick={scrollToSkills}
        style={{
          marginTop: "24px",

          padding: "12px 22px",

          background:
            "rgba(215, 181, 109, 0.1)",

          border:
            "1px solid rgba(215, 181, 109, 0.4)",

          borderRadius: "8px",

          color: "#f1eee7",

          fontFamily:
            "'Outfit', sans-serif",

          fontSize: "11px",

          fontWeight: 400,

          letterSpacing: "2px",

          cursor: "pointer",

          display: "flex",

          alignItems: "center",

          gap: "10px",

          transition:
            "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "rgba(215, 181, 109, 0.18)";

          e.currentTarget.style.borderColor =
            "rgba(215, 181, 109, 0.65)";

          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(215, 181, 109, 0.1)";
        }}

        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "rgba(215, 181, 109, 0.1)";

          e.currentTarget.style.borderColor =
            "rgba(215, 181, 109, 0.4)";

          e.currentTarget.style.boxShadow =
            "none";
        }}
      >
        EXPLORE MY SKILLS

        <span
          style={{
            fontSize: "14px",
          }}
        >
          →
        </span>
      </button>

    </div>
  );
}