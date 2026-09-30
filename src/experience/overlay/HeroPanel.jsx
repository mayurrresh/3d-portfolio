export default function HeroPanel({ progress = 0 }) {
  /*
    Hero is strongest at the beginning,
    then gradually disappears as the journey begins.
  */
  const opacity =
    progress < 0.02
      ? 1
      : progress < 0.12
        ? 1 - (progress - 0.02) / 0.10
        : 0;

  const visible = opacity > 0;

  return (
    <div
      id="hero-panel"
      style={{
        position: "fixed",
        inset: 0,

        zIndex: 15,

        pointerEvents: visible
          ? "auto"
          : "none",

        opacity: visible
          ? opacity
          : 0,

        transition:
          "opacity 0.45s ease",

        color: "#f1eee7",

        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* =====================================================
          LEFT JOURNEY LABEL
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          left: "clamp(24px, 5vw, 80px)",
          top: "50%",

          transform:
            "translateY(-50%)",

          display: "flex",
          alignItems: "center",

          gap: "14px",
        }}
      >
        {/* Vertical guide */}

        <div
          style={{
            position: "relative",

            width: "1px",
            height: "150px",

            background:
              "linear-gradient(" +
              "180deg," +
              "transparent," +
              "rgba(215,181,109,0.55)," +
              "rgba(215,181,109,0.15)," +
              "transparent" +
              ")",
          }}
        >
          {/* Active marker */}

          <div
            style={{
              position: "absolute",

              top: "0%",
              left: "50%",

              width: "7px",
              height: "7px",

              transform:
                "translate(-50%, -50%)",

              borderRadius: "50%",

              background: "#d7b56d",

              boxShadow:
                "0 0 14px rgba(215,181,109,0.65)",
            }}
          />
        </div>

        <span
          style={{
            fontSize: "8px",

            letterSpacing: "0.35em",

            color:
              "rgba(241,238,231,0.48)",

            writingMode:
              "vertical-rl",

            textTransform:
              "uppercase",
          }}
        >
          Intro
        </span>
      </div>

      {/* =====================================================
          IDENTITY BLOCK
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          right: "clamp(8%, 11vw, 15%)",

          top: "50%",

          transform:
            "translateY(-50%)",

          width:
            "min(440px, 34vw)",

          textAlign: "left",
        }}
      >
        {/* Small eyebrow */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "12px",

            marginBottom: "18px",
          }}
        >
          <span
            style={{
              width: "42px",
              height: "1px",

              background:
                "rgba(215,181,109,0.65)",
            }}
          />

          <span
            style={{
              fontSize: "8px",

              letterSpacing:
                "0.42em",

              textTransform:
                "uppercase",

              color:
                "rgba(215,181,109,0.85)",
            }}
          >
            The journey begins
          </span>
        </div>

        {/* =================================================
            NAME
           ================================================= */}

        <h1
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",

            fontSize:
              "clamp(54px, 6vw, 92px)",

            fontWeight: 400,

            lineHeight: 0.82,

            letterSpacing:
              "-0.025em",

            margin: 0,

            color: "#f1eee7",

            textShadow:
              "0 5px 35px rgba(0,0,0,0.55)",
          }}
        >
          Mayuresh
          <br />
          Kahar
        </h1>

        {/* =================================================
            ROLE
           ================================================= */}

        <div
          style={{
            marginTop: "24px",

            fontSize:
              "clamp(9px, 1vw, 12px)",

            fontWeight: 400,

            letterSpacing:
              "0.42em",

            color:
              "rgba(215,181,109,0.9)",

            textTransform:
              "uppercase",
          }}
        >
          Full Stack Developer
        </div>

        {/* =================================================
            DIVIDER
           ================================================= */}

        <div
          style={{
            width: "100%",

            maxWidth: "360px",

            height: "1px",

            marginTop: "22px",

            background:
              "linear-gradient(" +
              "90deg," +
              "rgba(241,238,231,0.25)," +
              "transparent" +
              ")",
          }}
        />

        {/* =================================================
            TAGLINE
           ================================================= */}

        <p
          style={{
            fontFamily:
              "'Jost', sans-serif",

            fontSize:
              "clamp(12px, 1.15vw, 15px)",

            fontWeight: 300,

            lineHeight: 1.7,

            margin:
              "18px 0 0",

            maxWidth: "330px",

            color:
              "rgba(241,238,231,0.55)",
          }}
        >
          I build modern web experiences
          <br />
          that feel alive.
        </p>

        {/* =================================================
            SCROLL CTA
           ================================================= */}

        <div
          style={{
            marginTop: "42px",

            display: "flex",

            alignItems: "center",

            gap: "16px",

            animation:
              "scrollIndicatorBounce 2.5s ease-in-out infinite",
          }}
        >
          {/* Mouse */}

          <div
            style={{
              width: "22px",
              height: "34px",

              borderRadius: "12px",

              border:
                "1px solid rgba(241,238,231,0.38)",

              position: "relative",

              display: "flex",

              justifyContent:
                "center",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "7px",

                borderRadius: "2px",

                background:
                  "rgba(215,181,109,0.8)",

                marginTop: "7px",

                animation:
                  "subtlePulse 2s ease-in-out infinite",
              }}
            />
          </div>

          <span
            style={{
              fontSize: "8px",

              fontWeight: 300,

              letterSpacing:
                "0.35em",

              color:
                "rgba(241,238,231,0.42)",

              textTransform:
                "uppercase",
            }}
          >
            Scroll to begin
          </span>
        </div>
      </div>

      {/* =====================================================
          SMALL LOCATION / WORLD MARKER
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          right:
            "clamp(24px, 4vw, 60px)",

          bottom:
            "clamp(24px, 4vw, 50px)",

          display: "flex",

          alignItems: "center",

          gap: "10px",

          opacity: 0.55,
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",

            borderRadius: "50%",

            background:
              "#d7b56d",

            boxShadow:
              "0 0 10px rgba(215,181,109,0.5)",
          }}
        />

        <span
          style={{
            fontSize: "7px",

            letterSpacing:
              "0.35em",

            textTransform:
              "uppercase",

            color:
              "rgba(241,238,231,0.4)",
          }}
        >
          The Nordic Journey · 01
        </span>
      </div>
    </div>
  );
}