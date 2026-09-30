import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function LoadingScreen({ onReady }) {
  const { progress, active } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (progress >= 100 && !active && !hasTriggered.current) {
      hasTriggered.current = true;
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setHidden(true);
          onReady?.();
        }, 900);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, active, onReady]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #08090b 0%, #0d0f12 50%, #0a0c0e 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Bow icon */}
      <div
        style={{
          width: "60px",
          height: "100px",
          marginBottom: "32px",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* Bow limb */}
          <path
            d="M 65 10 Q 25 50 65 90"
            stroke="#d7b56d"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* String */}
          <line
            x1="65"
            y1="10"
            x2="65"
            y2="90"
            stroke="#d7b56d"
            strokeWidth="1"
            opacity="0.5"
          >
            <animate
              attributeName="x1"
              values="65;55;65"
              dur="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="x2"
              values="65;55;65"
              dur="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </line>
          {/* Arrow */}
          <line
            x1="65"
            y1="50"
            x2="85"
            y2="50"
            stroke="#f1eee7"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          >
            <animate
              attributeName="x1"
              values="65;55;65"
              dur="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </line>
          {/* Arrow head */}
          <polygon
            points="85,46 92,50 85,54"
            fill="#d7b56d"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: 300,
          color: "#f1eee7",
          letterSpacing: "6px",
          marginBottom: "8px",
          opacity: 0.85,
        }}
      >
        MAYURESH KAHAR
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "10px",
          letterSpacing: "4px",
          color: "rgba(215, 181, 109, 0.65)",
          marginBottom: "40px",
          animation: "loadingTextReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        PREPARING THE JOURNEY
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "min(200px, 50vw)",
          height: "1px",
          background: "rgba(215, 181, 109, 0.15)",
          borderRadius: "1px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #b8953d, #d7b56d, #e8cf93)",
            borderRadius: "1px",
            transition: "width 0.3s ease",
            boxShadow: "0 0 10px rgba(215, 181, 109, 0.4)",
          }}
        />
      </div>

      {/* Progress text */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          color: "rgba(241, 238, 231, 0.3)",
          marginTop: "14px",
          letterSpacing: "2px",
        }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
}
