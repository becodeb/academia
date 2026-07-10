import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { Value } from '@/components/sections/Value'
import { Courses } from '@/components/sections/Courses'
import { CourseDetail } from '@/components/sections/CourseDetail'
import { Methodology } from '@/components/sections/Methodology'
import { Teachers } from '@/components/sections/Teachers'
import { Results } from '@/components/sections/Results'
import { Community } from '@/components/sections/Community'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog } from '@/components/sections/Blog'
import { Enrollment } from '@/components/sections/Enrollment'
import { FAQ } from '@/components/sections/FAQ'

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Courses />
        <CourseDetail />
        <Methodology />
        <Teachers />
        <Results />
        <Community />
        <Testimonials />
        <Blog />
        <Enrollment />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
