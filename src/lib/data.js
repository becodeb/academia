export const courses = [
  {
    id: 'ingles-avanzado',
    name: 'Inglés avanzado',
    category: 'Idiomas',
    description: 'Fluidez real para trabajo, viajes y estudio en el exterior.',
    duration: '6 meses',
    level: 'Avanzado',
    teacher: 'Marina Solari',
    tone: 'from-amber/45 via-ink/10 to-transparent',
    photo: 'course-english',
  },
  {
    id: 'programacion-web',
    name: 'Programación web',
    category: 'Tecnología',
    description: 'De cero a tu primer trabajo como desarrollador full-stack.',
    duration: '8 meses',
    level: 'Principiante a avanzado',
    teacher: 'Julián Ferrer',
    tone: 'from-forest/45 via-ink/10 to-transparent',
    photo: 'course-code',
  },
  {
    id: 'diseno-ux',
    name: 'Diseño UX/UI',
    category: 'Diseño',
    description: 'Investigación, prototipado y sistemas de diseño con foco en producto.',
    duration: '5 meses',
    level: 'Intermedio',
    teacher: 'Camila Duarte',
    tone: 'from-graphite/55 via-ink/10 to-transparent',
    photo: 'course-design',
  },
  {
    id: 'marketing-digital',
    name: 'Marketing digital',
    category: 'Negocios',
    description: 'Estrategia, performance y contenido para marcas que crecen.',
    duration: '4 meses',
    level: 'Todos los niveles',
    teacher: 'Nico Ariza',
    tone: 'from-amber/45 via-ink/10 to-transparent',
    photo: 'course-marketing',
  },
  {
    id: 'fotografia',
    name: 'Fotografía',
    category: 'Arte',
    description: 'Composición, luz y narrativa visual para construir tu mirada.',
    duration: '3 meses',
    level: 'Principiante',
    teacher: 'Lucía Morán',
    tone: 'from-forest/45 via-ink/10 to-transparent',
    photo: 'course-photo',
  },
  {
    id: 'musica',
    name: 'Música',
    category: 'Arte',
    description: 'Producción, teoría e interpretación con acompañamiento personalizado.',
    duration: '6 meses',
    level: 'Todos los niveles',
    teacher: 'Tomás Ibarra',
    tone: 'from-graphite/55 via-ink/10 to-transparent',
    photo: 'course-music',
  },
]

export const teachers = [
  { name: 'Marina Solari', role: 'Inglés avanzado', bio: '12 años enseñando en instituciones bilingües de Londres y Buenos Aires.', photo: 'teacher-marina' },
  { name: 'Julián Ferrer', role: 'Programación web', bio: 'Ex Mercado Libre. Formó a más de 300 desarrolladores junior.', photo: 'teacher-julian' },
  { name: 'Camila Duarte', role: 'Diseño UX/UI', bio: 'Product Designer senior, especializada en sistemas de diseño.', photo: 'teacher-camila' },
  { name: 'Nico Ariza', role: 'Marketing digital', bio: 'Consultor de growth para marcas de retail en LATAM.', photo: 'teacher-nico' },
]

export const testimonials = [
  {
    quote: 'Entré sin saber nada de código. Seis meses después firmé mi primer contrato como desarrollador.',
    name: 'Facundo Reyes',
    course: 'Programación web',
    result: 'Hoy trabaja como Frontend Developer',
  },
  {
    quote: 'La metodología es distinta a todo lo que probé antes: te acompañan de verdad, no te dejan solo con un video.',
    name: 'Antonella Ríos',
    course: 'Diseño UX/UI',
    result: 'Freelance con clientes internacionales',
  },
  {
    quote: 'Aprendí inglés en un año lo que no había logrado en diez. El grupo hizo toda la diferencia.',
    name: 'Bruno Castex',
    course: 'Inglés avanzado',
    result: 'Certificación C1 y ascenso laboral',
  },
]

export const outcomes = [
  { before: 'Sin experiencia previa', after: 'Consiguió trabajo como desarrollador', name: 'Facundo Reyes' },
  { before: 'Freelancer sin cartera', after: 'Clientes en 4 países distintos', name: 'Antonella Ríos' },
  { before: 'Inglés básico', after: 'Certificación C1 internacional', name: 'Bruno Castex' },
]

export const articles = [
  { tag: 'Idiomas', title: 'Cómo aprender inglés más rápido sin vivir afuera', read: '6 min', photo: 'blog-idiomas' },
  { tag: 'Tecnología', title: 'Primeros pasos en programación: la guía que hubiésemos querido leer', read: '8 min', photo: 'blog-tech' },
  { tag: 'Carrera', title: 'Los errores más comunes al empezar una carrera digital', read: '5 min', photo: 'blog-carrera' },
]

export const communityTiles = [
  { label: 'Encuentros semanales', tone: 'from-amber/50 via-ink/30 to-ink/80', photo: 'community-meetup' },
  { label: 'Proyectos colaborativos', tone: 'from-forest/50 via-ink/30 to-ink/80', photo: 'community-project' },
  { label: 'Eventos presenciales', tone: 'from-graphite/55 via-ink/30 to-ink/80', photo: 'community-event' },
  { label: 'Grupo de alumnos activo', tone: 'from-amber/50 via-ink/30 to-ink/80', photo: 'community-group' },
]
