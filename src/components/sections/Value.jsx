import { Reveal } from '@/components/ui/Reveal'

const points = [
  {
    n: '01',
    title: 'Aprendizaje práctico',
    text: 'Nada de teoría suelta: cada clase se traduce en un ejercicio, un proyecto o una entrega real.',
  },
  {
    n: '02',
    title: 'Profesores expertos',
    text: 'Personas que ejercen su oficio todos los días, no solo lo enseñan.',
  },
  {
    n: '03',
    title: 'Comunidad activa',
    text: 'Grupos reducidos, encuentros semanales y compañeros que te empujan a seguir.',
  },
  {
    n: '04',
    title: 'Metodología moderna',
    text: 'Diseñada para cómo aprendemos hoy: por proyectos, con feedback constante.',
  },
  {
    n: '05',
    title: 'Certificación',
    text: 'Un cierre formal que valida lo que aprendiste frente a empleadores y clientes.',
  },
  {
    n: '06',
    title: 'Acompañamiento personalizado',
    text: 'Tutorías individuales para destrabar lo que un video nunca podría.',
  },
]

export function Value() {
  return (
    <section id="propuesta-valor" className="relative py-28 md:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Por qué elegirnos</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
                No vendemos cursos. Construimos <span className="italic">criterio</span>.
              </h2>
              <p className="mt-6 max-w-sm text-graphite leading-relaxed">
                Seis razones por las que las personas eligen empezar — y terminar —
                lo que se proponen con nosotros.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {points.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="group grid grid-cols-[3rem_1fr] gap-6 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline">
                    <span className="font-display text-lg text-stone">{p.n}</span>
                    <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-amber md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="text-graphite leading-relaxed md:text-right">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
