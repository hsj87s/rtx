"use client"

import Image from "next/image"
import { Send, Gamepad2 } from "lucide-react"
import { StarField } from "./star-field"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4">
      {/* Deep space background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_-30%,oklch(0.18_0.12_265),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_120%,oklch(0.18_0.14_15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_30%_40%,oklch(0.14_0.06_265/0.5),transparent)]" />
      </div>

      {/* Canvas star field */}
      <StarField />

      {/* Animated nebula orbs */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute top-[5%] right-[10%] h-[500px] w-[500px] rounded-full bg-[oklch(0.2_0.1_265)] opacity-30 blur-[150px]"
          style={{ animation: "pulse 7s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[5%] left-[5%] h-[400px] w-[400px] rounded-full bg-[oklch(0.25_0.16_15)] opacity-20 blur-[130px]"
          style={{ animation: "pulse 9s ease-in-out infinite 3s" }}
        />
        <div
          className="absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[oklch(0.18_0.08_280)] opacity-15 blur-[100px]"
          style={{ animation: "pulse 11s ease-in-out infinite 1.5s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Character Image with advanced effects */}
        <div className="group relative">
          {/* Outer spinning ring */}
          <div
            className="absolute -inset-5 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, oklch(0.45 0.16 265), transparent 40%, oklch(0.5 0.2 20), transparent 80%, oklch(0.45 0.16 265))",
              animation: "spin 10s linear infinite",
              opacity: 0.5,
              filter: "blur(18px)",
            }}
          />
          {/* Inner counter-spinning ring */}
          <div
            className="absolute -inset-3 rounded-full"
            style={{
              background:
                "conic-gradient(from 180deg, oklch(0.5 0.2 20), transparent 30%, oklch(0.45 0.16 265), transparent 70%, oklch(0.5 0.2 20))",
              animation: "spin 6s linear infinite reverse",
              opacity: 0.35,
              filter: "blur(12px)",
            }}
          />
          {/* Glow pulse behind avatar */}
          <div
            className="absolute -inset-6 rounded-full bg-[oklch(0.35_0.12_265)] blur-[40px]"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          />

          {/* Glass border container */}
          <div className="relative h-52 w-52 overflow-hidden rounded-full p-[3px] sm:h-64 sm:w-64 md:h-72 md:w-72">
            {/* Animated border gradient */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, oklch(0.55 0.2 265), oklch(0.6 0.22 20), oklch(0.5 0.15 280), oklch(0.55 0.2 265))",
                animation: "spin 4s linear infinite",
              }}
            />
            {/* Inner image */}
            <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
              <Image
                src="/images/brawl-character.jpg"
                alt="Brawl Prime"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                priority
              />
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-balance text-center text-5xl font-black tracking-tight text-foreground sm:text-7xl md:text-8xl"
          style={{ textShadow: "0 0 60px oklch(0.3 0.1 265 / 0.5)" }}
        >
          Brawl{" "}
          <span
            className="bg-gradient-to-l from-[oklch(0.75_0.2_35)] via-[oklch(0.65_0.24_20)] to-[oklch(0.6_0.22_10)] bg-clip-text text-transparent"
            style={{ textShadow: "none" }}
          >
            Prime
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex w-full max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row">
          {/* Telegram Button */}
          <a
            href="https://t.me/brawl2x2"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-lg font-bold text-foreground transition-all duration-500"
          >
            {/* Glass background */}
            <div className="absolute inset-0 rounded-2xl border border-[oklch(0.5_0.15_265/0.3)] bg-[oklch(0.14_0.04_265/0.7)] backdrop-blur-xl transition-all duration-500 group-hover/btn:border-[oklch(0.55_0.18_265/0.5)] group-hover/btn:bg-[oklch(0.18_0.06_265/0.8)]" />
            {/* Shimmer */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-l from-transparent via-[oklch(0.5_0.15_265/0.08)] to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
            {/* Glow on hover */}
            <div className="absolute -inset-1 rounded-2xl bg-[oklch(0.4_0.15_265)] opacity-0 blur-xl transition-opacity duration-500 group-hover/btn:opacity-20" />
            <Send className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            <span className="relative z-10">{"انضم للمجموعة"}</span>
          </a>

          {/* Clan Button */}
          <a
            href="https://link.brawlstars.com/invite/band/en?tag=2VQCP9PU9&token=2akak8wp"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-lg font-bold text-foreground transition-all duration-500"
          >
            {/* Solid gradient background */}
            <div className="absolute inset-0 rounded-2xl border border-[oklch(0.6_0.2_25/0.2)] bg-gradient-to-l from-[oklch(0.5_0.2_15)] to-[oklch(0.55_0.2_30)] transition-all duration-500 group-hover/btn:from-[oklch(0.55_0.22_15)] group-hover/btn:to-[oklch(0.6_0.22_30)]" />
            {/* Shimmer */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-l from-transparent via-[oklch(0.8_0.1_30/0.15)] to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
            {/* Glow on hover */}
            <div className="absolute -inset-1 rounded-2xl bg-[oklch(0.5_0.2_20)] opacity-0 blur-xl transition-opacity duration-500 group-hover/btn:opacity-25" />
            <Gamepad2 className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover/btn:scale-110" />
            <span className="relative z-10">{"انضم للاتحاد"}</span>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-background/40 to-transparent" />
    </section>
  )
}
