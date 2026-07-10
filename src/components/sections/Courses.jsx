import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, BarChart2 } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Photo } from '@/components/ui/Photo'
import { courses } from '@/lib/data'

export function Courses() {
  return (
    <section id="cursos" className="relative bg-ink py-28 text-paper md:py-36">
      <div className="container-edit">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Programas</span>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] md:text-5xl">
              Un catálogo pensado como universidad, no como marketplace.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-paper/60 leading-relaxed">
              Cada programa combina teoría aplicada, mentoría y una comunidad de práctica activa.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.a
              href="#curso-detalle"
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-ink p-8 transition-colors duration-500 hover:bg-graphite"
            >
              <Photo
                seed={c.photo}
                tone={c.tone}
                alt={`Clase de ${c.name}`}
                w={640}
                h={420}
                className="h-40 w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-amber">{c.category}</span>
              <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/60">{c.description}</p>

              <div className="mt-6 flex items-center gap-5 text-xs text-paper/50">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {c.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <BarChart2 className="h-3.5 w-3.5" /> {c.level}
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-paper/10 pt-5">
                <span className="text-sm text-paper/70">{c.teacher}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-paper transition-transform group-hover:translate-x-1">
                  Ver programa <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
