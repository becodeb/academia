import { Reveal } from '@/components/ui/Reveal'
import { Accordion } from '@/components/ui/Accordion'

const items = [
  { question: '¿Necesito experiencia previa?', answer: 'No. Tenemos programas para principiantes y otros de nivel avanzado — el asesor te orienta hacia el que mejor se adapte a vos.' },
  { question: '¿Hay clases online?', answer: 'Sí, todos los cursos tienen modalidad online en vivo, con opción presencial en Buenos Aires para algunos programas.' },
  { question: '¿Entregan certificado?', answer: 'Sí, al finalizar cada programa recibís una certificación avalada por la institución y por profesionales del rubro.' },
  { question: '¿Cómo puedo inscribirme?', answer: 'Completá el formulario de inscripción o escribinos por WhatsApp — un asesor académico te contacta en menos de 24 horas.' },
  { question: '¿Cuáles son los horarios?', answer: 'Cada curso ofrece bandas horarias de mañana, tarde y noche, con clases en vivo grabadas por si no llegás a alguna.' },
]

export function FAQ() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">Preguntas frecuentes</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Todo lo que necesitás saber antes de empezar.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <Accordion items={items} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
