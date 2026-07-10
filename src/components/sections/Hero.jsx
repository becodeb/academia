import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Photo } from '@/components/ui/Photo'

const stats = [
  { value: '+500', label: 'alumnos formados' },
  { value: '+20', label: 'cursos activos' },
  { value: '+10', label: 'años de experiencia' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-15%] h-[420px] w-[420px] rounded-full bg-forest/10 blur-3xl" />

      <div className="container-edit relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge>Admisión 2026 abierta</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-[2.75rem] leading-[1.05] tracking-tight text-balance text-ink md:text-[4.25rem]"
          >
            Aprendé hoy las habilidades que <span className="italic text-amber">transforman</span> tu futuro.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-graphite"
          >
            Cursos diseñados para aprender, crecer y alcanzar nuevos objetivos —
            con profesores expertos y una comunidad que te acompaña en cada paso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" onClick={() => document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' })}>
              Comenzar ahora
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver cursos
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
          >
            <Photo
              seed="hero-community"
              tone="from-amber/30 via-ink/10 to-forest/30"
              alt="Alumnos y profesores en una clase presencial"
              w={900}
              h={1125}
              className="absolute inset-0"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-paper/95 p-5 backdrop-blur">
              <p className="font-display text-lg italic text-ink">"El lugar que necesitaba para empezar de nuevo."</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-stone">Facundo Reyes — Programación web</p>
            </div>
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-paper/30" />
            <button
              type="button"
              aria-label="Ir a la propuesta de valor"
              onClick={() => document.getElementById('propuesta-valor')?.scrollIntoView({ behavior: 'smooth' })}
              className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-paper/15 text-paper backdrop-blur transition-colors hover:bg-amber"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="container-edit mt-20 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl text-ink md:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-stone md:text-sm">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
