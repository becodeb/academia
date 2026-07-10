import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Profesores', href: '#profesores' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Recursos', href: '#recursos' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const h = document.documentElement
      const p = (h.scrollTop) / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(1, Math.max(0, p)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      )}
    >
      <div className="absolute bottom-0 left-0 h-[2px] bg-amber transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      <nav className="container-edit flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-tight text-ink">
          Ateneo<span className="text-amber">.</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium text-graphite transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comenzar ahora
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <button className="lg:hidden text-ink" onClick={() => setOpen(true)} aria-label="Abrir menú">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink text-paper lg:hidden"
          >
            <div className="container-edit flex h-20 items-center justify-between">
              <span className="font-display text-xl">Ateneo.</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="container-edit mt-6 flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-paper/10 py-5 font-display text-3xl"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button
                className="mt-8 w-fit"
                variant="amber"
                onClick={() => {
                  setOpen(false)
                  document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Comenzar ahora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
