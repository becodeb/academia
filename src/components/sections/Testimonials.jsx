import { Reveal } from '@/components/ui/Reveal'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-ink py-28 text-paper md:py-36">
      <div className="container-edit">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Testimonios</span>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] md:text-5xl">
            Lo que dicen quienes ya lo vivieron.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="bg-ink p-9">
              <p className="font-display text-2xl italic leading-snug text-balance">"{t.quote}"</p>
              <div className="mt-8 border-t border-paper/10 pt-5">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-paper/50">{t.course}</p>
                <p className="mt-2 text-sm font-medium text-amber">{t.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
