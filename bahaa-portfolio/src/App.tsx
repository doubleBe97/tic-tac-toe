import { useTheme } from "@/hooks/useTheme"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { useEffect, useRef } from "react"
import Lenis from "lenis"

export default function App() {
  const { isDark, toggle } = useTheme()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    lenisRef.current = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <WebGLShader isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
