import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Cpu, Radio, GitBranch, Wrench, Languages,
} from "lucide-react"

const skillGroups = [
  {
    icon: Cpu,
    title: "Embedded Software",
    skills: [
      { name: "MicroPython", level: 85 },
      { name: "C / C++", level: 75 },
      { name: "ESP32 / Mikrocontroller", level: 85 },
      { name: "STM32", level: 60 },
    ],
  },
  {
    icon: Radio,
    title: "Kommunikation & Sensoren",
    skills: [
      { name: "I2C (SHT30, BMP280, Touch)", level: 85 },
      { name: "SPI (Display-Ansteuerung)", level: 80 },
      { name: "TCP/IP / HTTP / ICMP", level: 70 },
      { name: "Sensor-Integration", level: 80 },
    ],
  },
  {
    icon: GitBranch,
    title: "Programmierung",
    skills: [
      { name: "Objektorientierte Programmierung", level: 80 },
      { name: "Python", level: 80 },
      { name: "JavaScript & React", level: 65 },
      { name: "HTML & Tailwind CSS", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Engineering & Tools",
    skills: [
      { name: "Hardware-Debugging", level: 75 },
      { name: "Power Management (AXP192)", level: 70 },
      { name: "Git / GitHub", level: 80 },
      { name: "Embedded Debugging", level: 75 },
    ],
  },
  {
    icon: Languages,
    title: "Sprachen",
    skills: [
      { name: "Englisch", level: 95 },
      { name: "Arabisch", level: 100 },
      { name: "Deutsch", level: 85 },
      { name: "Chinesisch", level: 15 },
    ],
  },
]

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.6, delay: index * 0.12, scale: { duration: 0.15 } }}
      className="glass-card p-6 group hover:border-accent/30 transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
          <group.icon size={18} className="text-accent" />
        </div>
        <h3 className="font-display font-semibold text-sm dark:text-white text-neutral-900">
          {group.title}
        </h3>
      </div>

      <div className="space-y-4">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="dark:text-white/70 text-neutral-600">{skill.name}</span>
              <span className="dark:text-white/40 text-neutral-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full dark:bg-white/10 bg-black/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

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

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-0 bottom-0 w-px dark:bg-white/5 bg-black/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary section-label">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-4">
            Meine <span className="text-secondary">Fähigkeiten</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-white/50 text-neutral-600 max-w-xl mb-12">
            Technologien und Werkzeuge, die ich in meinen Projekten eingesetzt habe.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillGroups.slice(0, 4).map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <SkillCard group={skillGroups[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  )
}
