import { useState } from 'react'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Field'
import { courses } from '@/lib/data'

export function Enrollment() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const courseName = courses.find((c) => c.id === form.get('course'))?.name ?? 'un curso'
    const text = [
      `Hola! Soy ${form.get('name')}.`,
      `Me interesa: ${courseName}.`,
      `Mi email es ${form.get('email')}.`,
      form.get('message') ? `Mensaje: ${form.get('message')}` : null,
    ]
      .filter(Boolean)
      .join(' ')

    window.open(`https://wa.me/5491155550192?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="inscripcion" className="py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Empezá hoy</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Tu futuro no espera. ¿Empezamos?
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-graphite">
              Completá el formulario y un asesor académico te va a contactar en menos de 24 horas.
            </p>

            <a
              href="https://wa.me/5491155550192"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 transition-colors hover:border-forest hover:text-forest"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Escribinos directo por WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-3xl bg-cream p-12 text-center">
                <h3 className="font-display text-3xl text-ink">¡Listo, {`ya`} te escribimos!</h3>
                <p className="mt-3 max-w-xs text-graphite">
                  Un asesor académico se va a poner en contacto muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone">Nombre</label>
                  <Input required name="name" placeholder="Tu nombre completo" className="mt-2" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone">Email</label>
                  <Input required type="email" name="email" placeholder="tu@email.com" className="mt-2" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone">WhatsApp</label>
                  <Input required name="phone" placeholder="+54 9 11 ...." className="mt-2" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone">Curso de interés</label>
                  <Select name="course" defaultValue="" className="mt-2">
                    <option value="" disabled>Elegí un curso</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone">Mensaje</label>
                  <Textarea name="message" rows={3} placeholder="Contanos qué te gustaría lograr" className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Quiero empezar
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
