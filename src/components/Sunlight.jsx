import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Sunlight() {
  const containerRef = useRef(null)

  useEffect(() => {
    const rays = containerRef.current?.querySelectorAll('.sun-ray')
    if (!rays) return

    rays.forEach((ray, i) => {
      gsap.to(ray, {
        opacity: 0.03 + Math.random() * 0.03,
        scaleX: 0.9 + Math.random() * 0.2,
        x: Math.random() * 40 - 20,
        duration: 6 + Math.random() * 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.2,
      })
    })
  }, [])

  const rays = Array.from({ length: 6 }, (_, i) => {
    const angle = -60 + i * 12
    const width = 120 + i * 40
    return { angle, width }
  })

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* 🌞 MAIN SUN GLOW (very soft, not harsh) */}
      <div
        className="absolute"
        style={{
          right: '-15%',
          top: '-20%',
          width: '80vw',
          height: '80vw',
          background:
            'radial-gradient(circle, rgba(255,220,150,0.25) 0%, rgba(255,200,120,0.12) 35%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* 🌿 LIGHT RAYS (soft + wide + diffused) */}
      <div
        className="absolute"
        style={{
          right: '10%',
          top: '-5%',
          transformOrigin: '50% 0%',
        }}
      >
        {rays.map((ray, i) => (
          <div
            key={i}
            className="sun-ray absolute"
            style={{
              width: `${ray.width}px`,
              height: '120vh',
              background:
                'linear-gradient(180deg, rgba(255,220,150,0.08) 0%, rgba(255,220,150,0.04) 40%, transparent 85%)',
              transform: `rotate(${ray.angle}deg)`,
              transformOrigin: '50% 0%',
              filter: 'blur(6px)',
            }}
          />
        ))}
      </div>

      {/* ✨ ATMOSPHERIC HAZE (this is the magic layer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 10%, rgba(255,230,180,0.15), transparent 60%)',
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  )
}