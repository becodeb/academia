import { Reveal } from '@/components/ui/Reveal'
import { Photo } from '@/components/ui/Photo'
import { articles } from '@/lib/data'

export function Blog() {
  return (
    <section id="recursos" className="py-28 md:py-36">
      <div className="container-edit">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Recursos</span>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Ideas para acompañar tu proceso de aprendizaje.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} as="article">
              <Photo
                seed={a.photo}
                tone="from-ink/10 via-transparent to-ink/40"
                alt={a.title}
                w={640}
                h={480}
                className="aspect-[4/3] rounded-2xl"
                imgClassName="transition-transform duration-500 hover:scale-105"
              />
              <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-amber">{a.tag}</span>
              <h3 className="mt-2 font-display text-xl leading-snug text-ink">
                {a.title}
              </h3>
              <div className="mt-4 text-sm text-stone">{a.read} de lectura</div>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-sm text-stone">
          Próximamente: artículos completos en nuestro blog.
        </p>
      </div>
    </section>
  )
}
