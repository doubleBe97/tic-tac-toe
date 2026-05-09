import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium dark:text-white/60 text-neutral-600">
            Verfügbar für Projekte
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85]"
        >
          <span className="block">Bahaa</span>
          <span className="block mt-1">
            <span className="text-accent">El</span>{" "}
            <span className="text-secondary">Bathich</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl dark:text-white/50 text-neutral-600 max-w-2xl mx-auto leading-relaxed"
        >
          Mechatronik Student an der{" "}
          <span className="dark:text-white/80 text-neutral-800 font-semibold">
            Hochschule Bochum
          </span>
          . Leidenschaft für Robotik, Embedded Systems & Webentwicklung.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <LiquidButton
            size="xl"
            className="text-white border border-white/20 rounded-full px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Kontakt aufnehmen
          </LiquidButton>
          <a
            href="https://github.com/doubleBe97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border dark:border-white/20 border-black/20 dark:text-white/80 text-neutral-700 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
          >
            <GithubIcon width={18} height={18} />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hover:opacity-40 transition-opacity duration-300"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              size={24}
              className="dark:text-white/30 text-neutral-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
