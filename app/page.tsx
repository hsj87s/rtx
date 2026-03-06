import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SiteFooter />
    </main>
  )
}
