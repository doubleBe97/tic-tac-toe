import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"

const contactInfo = [
  { icon: Mail, label: "E-Mail", value: "double.be97@gmail.com", href: "mailto:double.be97@gmail.com" },
  { icon: GithubIcon, label: "GitHub", value: "@doubleBe97", href: "https://github.com/doubleBe97" },
  { icon: MapPin, label: "Standort", value: "Bochum, Deutschland", href: null },
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

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-8 bg-secondary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary section-label">
              Kontakt
            </span>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-4 text-center">
            Schreib <span className="text-secondary">mir</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-white/50 text-neutral-600 max-w-lg mx-auto text-center mb-12">
            Hast du ein spannendes Projekt, eine Idee oder einfach Lust auf Austausch?
            Ich freue mich auf deine Nachricht!
          </p>
        </FadeInSection>

        <div className="max-w-md mx-auto space-y-4">
          {contactInfo.map((info, i) => (
            <FadeInSection key={info.label} delay={0.1 + i * 0.08}>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 group hover:border-accent/30 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <info.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-white/40 text-neutral-500">{info.label}</p>
                    <p className="text-sm font-medium dark:text-white text-neutral-900">{info.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-card p-4 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <info.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-white/40 text-neutral-500">{info.label}</p>
                    <p className="text-sm font-medium dark:text-white text-neutral-900">{info.value}</p>
                  </div>
                </div>
              )}
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
