import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  isDark: boolean
  toggle: () => void
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      aria-label="Dark Mode umschalten"
      className="relative w-14 h-7 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-colors duration-300 cursor-pointer"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-neutral-800" />
        ) : (
          <Sun size={12} className="text-amber-500" />
        )}
      </motion.span>
    </button>
  )
}
