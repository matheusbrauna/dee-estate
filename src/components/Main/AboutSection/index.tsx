import { AboutContentOne } from './AboutContentOne'
import { AboutContentTwo } from './AboutContentTwo'

export function AboutSection() {
  return (
    <section className="py-24" id="about">
      <h3 className="text-4xl lg:text-5xl font-bold text-center mb-16">
        Sobre nós
      </h3>

      <div className="container grid gap-48">
        <AboutContentOne />
        <AboutContentTwo />
      </div>
    </section>
  )
}
