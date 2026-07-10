import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const program = [
  'Fundamentos y herramientas del oficio',
  'Proyecto guiado con feedback semanal',
  'Especialización según tu perfil',
  'Proyecto final + defensa frente a jurado externo',
]

export function CourseDetail() {
  return (
    <section id="curso-detalle" className="py-28 md:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Badge>Así se ve un programa completo</Badge>
              <h2 className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
                Programación web
              </h2>
              <p className="mt-3 text-sm text-stone">
                Ejemplo de página de detalle — cada curso del catálogo tiene una versión propia.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-graphite">
                Un recorrido de ocho meses para pasar de cero conocimiento a tu primer
                puesto como desarrollador full-stack, con mentoría 1 a 1 y proyectos reales.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-6 border-y border-ink/10 py-7 text-sm">
                <div>
                  <dt className="text-stone uppercase tracking-wide text-xs">Duración</dt>
                  <dd className="mt-1 font-display text-xl text-ink">8 meses</dd>
                </div>
                <div>
                  <dt className="text-stone uppercase tracking-wide text-xs">Modalidad</dt>
                  <dd className="mt-1 font-display text-xl text-ink">Online en vivo</dd>
                </div>
                <div>
                  <dt className="text-stone uppercase tracking-wide text-xs">Profesor</dt>
                  <dd className="mt-1 font-display text-xl text-ink">Julián Ferrer</dd>
                </div>
                <div>
                  <dt className="text-stone uppercase tracking-wide text-xs">Inversión</dt>
                  <dd className="mt-1 font-display text-xl text-ink">$45.000/mes</dd>
                </div>
              </dl>

              <Button
                size="lg"
                className="mt-8"
                onClick={() => document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quiero inscribirme
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl text-ink">Objetivos del programa</h3>
              <p className="mt-4 text-graphite leading-relaxed">
                Al finalizar vas a poder diseñar, construir y desplegar aplicaciones web completas,
                trabajar en equipo con herramientas profesionales y presentar un portfolio propio
                frente a potenciales empleadores.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10">
              <h3 className="font-display text-2xl text-ink">Programa</h3>
              <ul className="mt-5 space-y-4">
                {program.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-soft text-forest">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-graphite leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 rounded-2xl bg-cream p-7">
              <p className="font-display text-xl italic text-ink leading-snug">
                "Julián explica como si tuviera todo el tiempo del mundo para vos. Nunca me sentí perdido."
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-stone">
                Facundo Reyes — cohorte 2025
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
