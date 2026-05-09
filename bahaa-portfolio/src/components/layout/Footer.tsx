import { motion } from "framer-motion"
import { Mail, ArrowUp } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"

const socials = [
  { icon: GithubIcon, href: "https://github.com/doubleBe97", label: "GitHub" },
  { icon: Mail, href: "mailto:double.be97@gmail.com", label: "E-Mail" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-black/10 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a
              href="#hero"
              className="text-2xl font-bold font-display tracking-tight hover:opacity-70 transition-opacity duration-300"
            >
              <span className="text-accent">B</span>
              <span className="dark:text-white text-neutral-900">E</span>
              <span className="text-secondary">B</span>
            </a>
            <p className="mt-2 text-sm dark:text-white/50 text-neutral-500">
              Mechatronik Student &bull; Hochschule Bochum
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full dark:bg-white/5 bg-black/5 hover:bg-accent/20 dark:hover:bg-accent/20 transition-all duration-300 group"
                aria-label={s.label}
              >
                <s.icon
                  size={18}
                  className="dark:text-white/60 text-neutral-600 group-hover:text-accent transition-colors"
                />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs dark:text-white/40 text-neutral-500">
            &copy; {new Date().getFullYear()} Bahaa El Bathich. Alle Rechte vorbehalten.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full dark:bg-white/5 bg-black/5 hover:bg-accent/20 dark:hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
            aria-label="Nach oben"
          >
            <ArrowUp
              size={16}
              className="dark:text-white/60 text-neutral-600 group-hover:text-accent transition-colors"
            />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
