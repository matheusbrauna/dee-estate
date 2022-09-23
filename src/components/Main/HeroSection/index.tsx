import { Hero } from './Hero'
import { HeroSearch } from './HeroSearch'

export function HeroSection() {
  return (
    <section className="py-[192px]">
      <div className="container">
        <Hero />
        <HeroSearch />
      </div>
    </section>
  )
}
