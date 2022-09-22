import { Hero } from './Hero'
import { HeroSearch } from './HeroSearch'

export function HeroSection() {
  return (
    <section className="py-24">
      <div className="container">
        <Hero />
        <HeroSearch />
      </div>
    </section>
  )
}
