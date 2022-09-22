import { Hero } from './Hero'
import { HeroSearch } from './HeroSearch'

export function HeroSection() {
  return (
    <section className="py-32">
      <Hero />
      <HeroSearch />
    </section>
  )
}
