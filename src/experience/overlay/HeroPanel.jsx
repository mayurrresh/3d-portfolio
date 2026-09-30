export default function HeroPanel({ progress = 0 }) {
  // Visible in the first ~10% of scroll, fades out
  const opacity = progress < 0.02
    ? 1
    : progress < 0.10
      ? 1 - ((progress - 0.02) / 0.08)
      : 0;

  const visible = opacity > 0;

  return (
    <div
      id="hero-panel"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#f1eee7",
        opacity: visible ? opacity : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Main name */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(42px, 7vw, 88px)",
          fontWeight: 400,
          lineHeight: 0.95,
          margin: 0,
          letterSpacing: "2px",
          textShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}
      >
        Mayuresh
        <br />
        Kahar
      </h1>

      {/* Role */}
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(10px, 1.3vw, 14px)",
          fontWeight: 300,
          letterSpacing: "6px",
          marginTop: "20px",
          color: "rgba(215, 181, 109, 0.85)",
          textTransform: "uppercase",
        }}
      >
        FULL STACK DEVELOPER
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "clamp(13px, 1.5vw, 16px)",
          fontWeight: 300,
          lineHeight: 1.7,
          marginTop: "18px",
          color: "rgba(241, 238, 231, 0.5)",
          maxWidth: "380px",
        }}
      >
        I build modern web experiences
        <br />
        that feel alive.
      </p>

      {/* Scroll CTA */}
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          animation: "scrollIndicatorBounce 2.5s ease-in-out infinite",
        }}
      >
        {/* Mouse icon */}
        <div
          style={{
            width: "24px",
            height: "38px",
            borderRadius: "12px",
            border: "1.5px solid rgba(241, 238, 231, 0.35)",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Scroll dot */}
          <div
            style={{
              width: "3px",
              height: "8px",
              borderRadius: "2px",
              background: "rgba(215, 181, 109, 0.7)",
              marginTop: "8px",
              animation: "subtlePulse 2s ease-in-out infinite",
            }}
          />
        </div>

        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "3px",
            color: "rgba(241, 238, 231, 0.4)",
          }}
        >
          SCROLL TO BEGIN
        </span>
      </div>
    </div>
  );
}
