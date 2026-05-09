import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

const navLinks = [
  { label: "Start", href: "#hero" },
  { label: "Über mich", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projekte", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
]

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/70 dark:bg-[#0a0a0f]/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#hero"
            className="text-lg sm:text-xl font-bold font-display tracking-tight hover:opacity-70 transition-opacity duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent">B</span>
            <span className="dark:text-white text-neutral-900">E</span>
            <span className="text-secondary">B</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium dark:text-white/70 text-neutral-700 hover:text-accent dark:hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/doubleBe97"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white/70 text-neutral-700 hover:text-accent transition-colors duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              aria-label="GitHub"
            >
              <GithubIcon width={20} height={20} />
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            </motion.div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 dark:text-white text-neutral-900"
              aria-label="Menü"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium dark:text-white/80 text-neutral-700 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/doubleBe97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-medium dark:text-white/80 text-neutral-700 hover:text-accent"
              >
                <GithubIcon width={18} height={18} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
