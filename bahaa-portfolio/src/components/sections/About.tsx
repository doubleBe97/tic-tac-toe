import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Cog, Brain, Cpu } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Mechatronik B.Sc.",
    desc: "Hochschule Bochum: Vertiefung in Robotik und Automatisierungstechnik",
  },
  {
    icon: Cog,
    title: "Smart Production",
    desc: "Schwerpunkt im Studium: Vernetzung von Mechanik, Elektronik und Software in der Produktion",
  },
  {
    icon: Brain,
    title: "Robotik & KI",
    desc: "Begeisterung für intelligente Robotersysteme und deren Steuerung durch Code",
  },
  {
    icon: Cpu,
    title: "Digital Engineering",
    desc: "CAD-Modellierung, Simulation und digitale Zwillinge",
  },
]

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent section-label">
              Über mich
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-8">
            Wer ich{" "}
            <span className="text-accent">bin</span>
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeInSection delay={0.1}>
            <div className="space-y-5">
              <p className="text-base sm:text-lg dark:text-white/70 text-neutral-600 leading-relaxed">
                Ich bin Mechatronik-Student an der{" "}
                <strong className="dark:text-white text-neutral-900">Hochschule Bochum</strong>{" "}
                mit dem Schwerpunkt <strong className="dark:text-white text-neutral-900">Smart Production</strong>.
                Robotik und Programmierung begeistern mich schon seit Jahren, denn ich finde es
                faszinierend, wie man mit Code und Technik echte Dinge bewegen kann.
              </p>
              <p className="text-base sm:text-lg dark:text-white/70 text-neutral-600 leading-relaxed">
                Im Studium lerne ich, Mechanik, Elektronik und Software sinnvoll zu verbinden,
                und in meiner Freizeit experimentiere ich gerne mit eigenen Projekten.
                Mein Ziel ist es, smarte Systeme zu bauen, die wirklich einen Unterschied machen.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <FadeInSection key={h.title} delay={0.2 + i * 0.1}>
                <div className="glass-card p-5 h-full group hover:border-accent/30 transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <h.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-2 dark:text-white text-neutral-900">
                    {h.title}
                  </h3>
                  <p className="text-xs dark:text-white/50 text-neutral-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
