import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { outcomes } from '@/lib/data'

export function Results() {
  return (
    <section id="resultados" className="bg-cream py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Resultados</span>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            La transformación es el producto. Los cursos son el medio.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-ink/10 border-t border-b border-ink/10">
          {outcomes.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div className="grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-[1fr_auto_1fr_auto] md:gap-8">
                <span className="font-display text-xl text-stone line-through decoration-stone/40">{o.before}</span>
                <ArrowRight className="hidden h-5 w-5 text-amber md:block" />
                <span className="font-display text-xl text-ink">{o.after}</span>
                <span className="text-sm font-medium uppercase tracking-wide text-graphite md:text-right">{o.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
