import { Reveal } from '@/components/ui/Reveal'

const steps = [
  { n: '01', title: 'Aprendé conceptos', text: 'Clases en vivo y material propio, directo al punto.' },
  { n: '02', title: 'Practicá con ejercicios', text: 'Desafíos semanales para fijar lo aprendido.' },
  { n: '03', title: 'Recibí feedback', text: 'Correcciones personalizadas de tu profesor, no de un bot.' },
  { n: '04', title: 'Construí proyectos', text: 'Trabajo real para tu portfolio desde el primer mes.' },
  { n: '05', title: 'Lográ resultados', text: 'Certificación y acompañamiento para dar el próximo paso.' },
]

export function Methodology() {
  return (
    <section id="metodologia" className="py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Metodología</span>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Así es como convertimos curiosidad en resultados.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="relative border-t border-ink/10 py-8 md:border-t-0 md:border-l md:px-6 md:py-0 first:md:border-l-0 first:md:pl-0">
              <span className="font-display text-5xl text-amber/30">{s.n}</span>
              <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-graphite">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
