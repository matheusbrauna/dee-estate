import { ServicesSection } from './ServicesSection'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { TestimonialsSection } from './TestimonialsSection'

export function Main() {
  return (
    <main id="home">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  )
}
