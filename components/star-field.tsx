"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const stars: { x: number; y: number; r: number; vx: number; vy: number; o: number; pulse: number; speed: number }[] = []
    const count = Math.min(120, Math.floor((width * height) / 8000))

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        s.x += s.vx
        s.y += s.vy
        s.pulse += s.speed
        if (s.x < -10) s.x = width + 10
        if (s.x > width + 10) s.x = -10
        if (s.y < -10) s.y = height + 10
        if (s.y > height + 10) s.y = -10

        const opacity = s.o * (0.6 + 0.4 * Math.sin(s.pulse))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 210, 255, ${opacity})`
        ctx.fill()

        if (s.r > 1.2) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(180, 200, 255, ${opacity * 0.1})`
          ctx.fill()
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}
