import { AboutSectionCards } from './AboutSectionCards'

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-5xl font-bold text-center">How it works.</h3>
        <p className="text-3xl text-center">This is how our products works</p>

        <AboutSectionCards />
      </div>
    </section>
  )
}
