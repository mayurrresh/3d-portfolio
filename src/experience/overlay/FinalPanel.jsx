import { useEffect, useState } from "react";

function Section({
  number,
  label,
  title,
  description,
  position,
  visible,
  delay = 0,
  align = "left",
}) {
  return (
    <div
      style={{
        position: "absolute",
        ...position,

        width: "clamp(220px, 18vw, 320px)",

        textAlign: align,

        opacity: visible ? 1 : 0,

        transform: visible
          ? "translateY(0)"
          : "translateY(18px)",

        transition: `
          opacity 900ms ease ${delay}ms,
          transform 1000ms cubic-bezier(.16,1,.3,1) ${delay}ms
        `,
      }}
    >
      {/* Number + line */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:
            align === "right"
              ? "flex-end"
              : "flex-start",

          gap: "12px",

          marginBottom: "13px",
        }}
      >
        {align === "right" && (
          <div
            style={{
              width: "42px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(208,168,92,0.5))",
            }}
          />
        )}

        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "#d0a85c",
          }}
        >
          {number}
        </span>

        {align !== "right" && (
          <div
            style={{
              width: "42px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(208,168,92,0.5), transparent)",
            }}
          />
        )}

        <span
          style={{
            fontSize: "8px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(241,238,231,0.35)",
          }}
        >
          {label}
        </span>
      </div>

      {/* Title */}

      <h3
        style={{
          margin: 0,

          fontSize: "clamp(25px, 2.2vw, 38px)",

          lineHeight: 0.95,

          fontWeight: 500,

          letterSpacing: "-0.045em",

          color: "#f1eee7",
        }}
      >
        {title}
      </h3>

      {/* Description */}

      <p
        style={{
          margin:
            align === "right"
              ? "12px 0 0 auto"
              : "12px 0 0",

          maxWidth: "280px",

          fontSize: "11px",

          lineHeight: 1.7,

          color: "rgba(241,238,231,0.43)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function HorizontalLine({
  position,
  width,
  visible,
  delay = 0,
}) {
  return (
    <div
      style={{
        position: "absolute",
        ...position,

        width,
        height: "1px",

        background:
          "linear-gradient(90deg, transparent, rgba(208,168,92,0.28), transparent)",

        opacity: visible ? 1 : 0,

        transition:
          `opacity 1000ms ease ${delay}ms`,

        pointerEvents: "none",
      }}
    />
  );
}

function VerticalLine({
  position,
  height,
  visible,
  delay = 0,
}) {
  return (
    <div
      style={{
        position: "absolute",
        ...position,

        width: "1px",
        height,

        background:
          "linear-gradient(180deg, transparent, rgba(208,168,92,0.28), transparent)",

        opacity: visible ? 1 : 0,

        transition:
          `opacity 1000ms ease ${delay}ms`,

        pointerEvents: "none",
      }}
    />
  );
}

export default function FinalPanel({ progress = 0 }) {
  const visible = progress > 0.985;

  const [impact, setImpact] = useState(false);

  useEffect(() => {
    if (!visible) {
      setImpact(false);
      return;
    }

    const timer = setTimeout(() => {
      setImpact(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      style={{
        position: "fixed",

        inset: 0,

        zIndex: 30,

        pointerEvents: visible
          ? "auto"
          : "none",

        opacity: visible ? 1 : 0,

        transition:
          "opacity 1000ms ease",

        overflow: "hidden",

        color: "#f1eee7",

        fontFamily: "inherit",
      }}
    >
      {/* =====================================================
          VERY SUBTLE ATMOSPHERIC VIGNETTE
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          background:
            "radial-gradient(circle at 50% 50%, transparent 25%, rgba(4,6,7,0.18) 100%)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          TOP — TARGET ACQUIRED
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          top: "5%",

          left: "50%",

          transform: visible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-15px)",

          opacity: visible ? 1 : 0,

          transition:
            "opacity 900ms ease 150ms, transform 900ms ease 150ms",

          textAlign: "center",

          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "18px",

            color: "#d0a85c",

            fontSize: "8px",

            letterSpacing: "0.5em",

            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "55px",
              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(208,168,92,0.6))",
            }}
          />

          Target Acquired

          <span
            style={{
              width: "55px",
              height: "1px",

              background:
                "linear-gradient(90deg, rgba(208,168,92,0.6), transparent)",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          NAME — TOP CENTER
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          top: "10%",

          left: "50%",

          transform: visible
            ? "translateX(-50%)"
            : "translateX(-50%) translateY(-12px)",

          opacity: visible ? 1 : 0,

          transition:
            "opacity 1000ms ease 300ms, transform 1000ms ease 300ms",

          textAlign: "center",

          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            fontSize:
              "clamp(38px, 5vw, 76px)",

            fontWeight: 500,

            lineHeight: 0.9,

            letterSpacing: "-0.06em",

            color: "#f1eee7",

            textShadow:
              "0 15px 50px rgba(0,0,0,0.35)",
          }}
        >
          Mayuresh Kahar
        </div>

        <div
          style={{
            marginTop: "12px",

            fontSize: "8px",

            letterSpacing: "0.45em",

            textTransform: "uppercase",

            color:
              "rgba(241,238,231,0.35)",
          }}
        >
          Developer · Builder · Problem Solver
        </div>
      </div>

      {/* =====================================================
          CENTER TARGET MARKER
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          left: "50%",

          top: "50%",

          width: "300px",

          height: "300px",

          transform:
            "translate(-50%, -50%)",

          pointerEvents: "none",
        }}
      >
        {/* Outer circle */}

        <div
          style={{
            position: "absolute",

            inset: 0,

            borderRadius: "50%",

            border:
              "1px solid rgba(208,168,92,0.13)",

            transform: impact
              ? "scale(1.08)"
              : "scale(0.94)",

            transition:
              "transform 1400ms cubic-bezier(.16,1,.3,1)",
          }}
        />

        {/* Inner circle */}

        <div
          style={{
            position: "absolute",

            inset: "18%",

            borderRadius: "50%",

            border:
              "1px dashed rgba(208,168,92,0.18)",

            transform:
              "rotate(45deg)",
          }}
        />

        {/* Impact glow */}

        <div
          style={{
            position: "absolute",

            left: "50%",

            top: "50%",

            width: impact ? "180px" : "20px",

            height: impact ? "180px" : "20px",

            transform:
              "translate(-50%, -50%)",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(208,168,92,0.14), transparent 70%)",

            opacity: impact ? 1 : 0,

            filter: "blur(4px)",

            transition:
              "all 1200ms ease",
          }}
        />

        {/* Crosshair */}

        <div
          style={{
            position: "absolute",

            left: "50%",

            top: "-25px",

            width: "1px",

            height: "50px",

            background:
              "rgba(208,168,92,0.35)",
          }}
        />

        <div
          style={{
            position: "absolute",

            left: "50%",

            bottom: "-25px",

            width: "1px",

            height: "50px",

            background:
              "rgba(208,168,92,0.35)",
          }}
        />

        <div
          style={{
            position: "absolute",

            top: "50%",

            left: "-25px",

            width: "50px",

            height: "1px",

            background:
              "rgba(208,168,92,0.35)",
          }}
        />

        <div
          style={{
            position: "absolute",

            top: "50%",

            right: "-25px",

            width: "50px",

            height: "1px",

            background:
              "rgba(208,168,92,0.35)",
          }}
        />

        {/* =================================================
            100% — FLOATING BELOW TARGET
           ================================================= */}

        <div
          style={{
            position: "absolute",

            left: "50%",

            top: "calc(100% + 28px)",

            transform:
              "translateX(-50%)",

            textAlign: "center",

            whiteSpace: "nowrap",

            opacity: impact ? 1 : 0,

            transition:
              "opacity 700ms ease 450ms",
          }}
        >
          <div
            style={{
              fontSize: "8px",

              letterSpacing: "0.45em",

              textTransform: "uppercase",

              color:
                "rgba(241,238,231,0.38)",
            }}
          >
            Journey complete
          </div>

          <div
            style={{
              marginTop: "7px",

              fontSize: "22px",

              letterSpacing: "0.08em",

              color: "#d0a85c",

              fontWeight: 500,
            }}
          >
            100%
          </div>
        </div>
      </div>

      {/* =====================================================
          CONNECTOR STRUCTURE
         ===================================================== */}

      <HorizontalLine
        position={{
          left: "15%",
          top: "50%",
        }}
        width="25%"
        visible={visible}
        delay={500}
      />

      <HorizontalLine
        position={{
          right: "15%",
          top: "50%",
        }}
        width="25%"
        visible={visible}
        delay={600}
      />

      <VerticalLine
        position={{
          left: "50%",
          top: "22%",
        }}
        height="14%"
        visible={visible}
        delay={700}
      />

      <VerticalLine
        position={{
          left: "50%",
          bottom: "20%",
        }}
        height="12%"
        visible={visible}
        delay={800}
      />

      {/* =====================================================
          ABOUT
         ===================================================== */}

      <Section
        number="01"
        label="Identity"
        title="About"
        description="The person behind the code, the mindset behind the work, and the story that brought me here."
        visible={visible}
        delay={450}
        position={{
          left: "7%",
          top: "32%",
        }}
      />

      {/* =====================================================
          PROJECTS
         ===================================================== */}

      <Section
        number="03"
        label="Built"
        title="Projects"
        description="Systems, experiments and products built to solve real problems and push ideas further."
        visible={visible}
        delay={600}
        align="right"
        position={{
          right: "7%",
          top: "32%",
        }}
      />

      {/* =====================================================
          SKILLS
         ===================================================== */}

      <Section
        number="02"
        label="Arsenal"
        title="Skills"
        description="Frontend, backend, databases, cloud and the tools I use to turn ideas into working software."
        visible={visible}
        delay={750}
        position={{
          left: "7%",
          bottom: "19%",
        }}
      />

      {/* =====================================================
          CONTACT
         ===================================================== */}

      <Section
        number="04"
        label="Next chapter"
        title="Contact"
        description="Have something worth building? Let's create the next thing together."
        visible={visible}
        delay={900}
        align="right"
        position={{
          right: "7%",
          bottom: "19%",
        }}
      />

      {/* =====================================================
          BOTTOM MICRO TEXT
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          bottom: "3%",

          left: "50%",

          transform:
            "translateX(-50%)",

          fontSize: "8px",

          letterSpacing: "0.45em",

          textTransform: "uppercase",

          color:
            "rgba(241,238,231,0.22)",

          whiteSpace: "nowrap",
        }}
      >
        The journey continues
      </div>
    </div>
  );
}