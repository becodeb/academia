import { Reveal } from '@/components/ui/Reveal'
import { Photo } from '@/components/ui/Photo'
import { communityTiles } from '@/lib/data'

export function Community() {
  return (
    <section id="comunidad" className="py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Comunidad</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              No vendemos cursos sueltos. Vendemos pertenencia.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Cada cohorte forma un grupo real: se acompañan, se corrigen, se recomiendan
              trabajo entre ellos mucho después de terminar el programa.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            {communityTiles.map((t, i) => (
              <Reveal
                key={t.label}
                delay={i * 0.08}
                direction={i % 2 ? 'left' : 'right'}
                className={i === 0 ? 'col-span-2' : ''}
              >
                <Photo
                  seed={t.photo}
                  tone={t.tone}
                  alt={t.label}
                  w={i === 0 ? 900 : 500}
                  h={i === 0 ? 400 : 380}
                  className={`relative flex ${i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'} items-end rounded-2xl p-6`}
                >
                  <span className="relative font-display text-lg text-paper">{t.label}</span>
                </Photo>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
