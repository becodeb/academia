import { MapPin } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/ui/SocialIcons'

const cols = [
  {
    title: 'Cursos',
    links: [
      { label: 'Inglés avanzado', href: '#cursos' },
      { label: 'Programación web', href: '#cursos' },
      { label: 'Diseño UX/UI', href: '#cursos' },
      { label: 'Marketing digital', href: '#cursos' },
      { label: 'Fotografía', href: '#cursos' },
      { label: 'Música', href: '#cursos' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { label: 'Metodología', href: '#metodologia' },
      { label: 'Profesores', href: '#profesores' },
      { label: 'Resultados', href: '#resultados' },
      { label: 'Comunidad', href: '#comunidad' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'hola@ateneo.academy', href: 'mailto:hola@ateneo.academy' },
      { label: '+54 11 5555 0192', href: 'tel:+541155550192' },
      { label: 'WhatsApp directo', href: 'https://wa.me/5491155550192' },
    ],
  },
]

const socials = [
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { Icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-edit py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-3xl">
              Ateneo<span className="text-amber">.</span>
            </span>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-paper/60">
              Un instituto para las personas que deciden empezar de nuevo. Cursos de alto nivel, comunidad real.
            </p>
            <div className="mt-7 flex items-center gap-2 text-sm text-paper/60">
              <MapPin className="h-4 w-4" />
              Palermo, Buenos Aires — y 100% online
            </div>
            <div className="mt-6 flex gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-amber hover:text-amber"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.95rem] text-paper/75 transition-colors hover:text-amber">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ateneo Academy. Todos los derechos reservados.</span>
          <span>Diseñado para quienes están empezando de nuevo.</span>
        </div>
      </div>
    </footer>
  )
}
