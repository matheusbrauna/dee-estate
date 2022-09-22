import { ServicesSection } from './ServicesSection'
import { HeroSection } from './HeroSection'
import { TiInputChecked } from 'react-icons/ti'
import { AboutSection } from './AboutSection'

export function Main() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  )
}
