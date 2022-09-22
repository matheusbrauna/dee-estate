import { ServicesSection } from './ServicesSection'
import { HeroSection } from './HeroSection'
import { TiInputChecked } from 'react-icons/ti'
import { AboutSection } from './AboutSection'
import { TestimonialsSection } from './TestimonialsSection'

export function Main() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  )
}
