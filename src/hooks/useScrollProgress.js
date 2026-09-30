import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = window.scrollY
      const maxScroll = el.scrollHeight - el.clientHeight
      const prog = maxScroll > 0 ? scrollTop / maxScroll : 0
      setProgress(prog)
      setScrollY(scrollTop)

      // Update scroll progress bar
      const bar = document.getElementById('scroll-progress')
      if (bar) bar.style.transform = `scaleX(${prog})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, scrollY }
}