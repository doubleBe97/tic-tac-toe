import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GithubIcon } from "@/components/ui/icons"

const projects = [
  {
    title: "TicTacToe auf ESP32",
    desc: "MicroPython-TicTacToe mit ILI9342C-Display und FocalTouch-I2C-Touchcontroller. Objektorientierte Button-Klasse mit Kollisionserkennung und 3x3-Game-Grid.",
    tags: ["MicroPython", "ESP32", "ILI9342C", "I2C", "OOP"],
    color: "from-accent/20 to-transparent",
    github: "https://github.com/doubleBe97/X-O",
  },
  {
    title: "Klimadaten-Monitor",
    desc: "Umweltsensor-Station mit SHT30 (Temperatur/Luftfeuchte) und BMP280 (Luftdruck) über I2C. Auslesen, CRC-Prüfung und Darstellung auf TFT-Display.",
    tags: ["SHT30", "BMP280", "I2C", "Sensor", "Display"],
    color: "from-secondary/20 to-transparent",
    github: "https://github.com/doubleBe97/klimadaten-monitor",
  },
  {
    title: "Netzwerk-Kommunikation",
    desc: "HTTP-Client-Bibliothek (GET/POST/PUT/DELETE) und ICMP-Ping für MicroPython. Socket-Programmierung, DNS-Auflösung und SSL/TLS-Unterstützung auf dem ESP32.",
    tags: ["TCP/IP", "HTTP", "ICMP", "Socket", "ESP32"],
    color: "from-accent/20 to-transparent",
    github: "https://github.com/doubleBe97/netzwerk-kommunikation",
  },
  {
    title: "Display-Grafik & Fibonacci",
    desc: "Grundlagen der Display-Ansteuerung über SPI. Zufällige Farbgenerierung, geometrische Formen und Echtzeit-Rendering auf dem ILI9342C-TFT-Display.",
    tags: ["SPI", "ILI9342C", "Grafik", "ESP32", "MicroPython"],
    color: "from-secondary/20 to-transparent",
    github: "https://github.com/doubleBe97/display-grafik-fibonacci",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative"
    >
      <div className="glass-card p-6 sm:p-8 h-full flex flex-col group-hover:border-accent/30 transition-all duration-500">
        <div
          className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.color} mb-6 accent-bar`}
        />

        <h3 className="font-display font-bold text-lg sm:text-xl mb-3 dark:text-white text-neutral-900">
          {project.title}
        </h3>
        <p className="text-sm dark:text-white/60 text-neutral-600 leading-relaxed mb-6 flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent tech-tag"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium dark:text-white/50 text-neutral-500 hover:text-accent transition-colors duration-300"
          >
            <GithubIcon width={14} height={14} /> Quellcode
          </a>
        </div>
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

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent section-label">
              Projekte
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-4">
            Meine <span className="text-accent">Projekte</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-white/50 text-neutral-600 max-w-xl mb-12">
            Mikrocontroller-Projekte aus dem Labor — von Sensorintegration bis Netzwerk-Kommunikation.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
