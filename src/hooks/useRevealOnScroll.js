import { useEffect, useRef } from 'react'

export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Also reveal text clips inside
            entry.target.querySelectorAll('.text-clip').forEach((clip, i) => {
              setTimeout(() => {
                clip.classList.add('revealed')
              }, i * 120)
            })
          }
        })
      },
      { threshold }
    )

    // Observe the element and all reveal-section children
    el.classList.add('reveal-section')
    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useRevealChildren(threshold = 0.1) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('.reveal-child')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    children.forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])

  return containerRef
}