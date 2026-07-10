import { LinkedinIcon } from '@/components/ui/SocialIcons'
import { Reveal } from '@/components/ui/Reveal'
import { Photo } from '@/components/ui/Photo'
import { teachers } from '@/lib/data'

export function Teachers() {
  return (
    <section id="profesores" className="py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Equipo docente</span>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Profesionales en ejercicio, no solo instructores.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Photo
                  seed={t.photo}
                  tone="from-amber/25 via-transparent to-ink/40"
                  alt={`Retrato de ${t.name}`}
                  w={640}
                  h={850}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Perfil de LinkedIn de ${t.name}`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-amber"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{t.name}</h3>
              <p className="text-sm font-medium text-amber">{t.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{t.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
