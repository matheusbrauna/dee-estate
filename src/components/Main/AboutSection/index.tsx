import { AboutContentOne } from './AboutContentOne'
import { AboutContentTwo } from './AboutContentTwo'

export function AboutSection() {
  return (
    <section className="py-24">
      <h3 className="text-5xl font-bold text-center mb-16">About Us</h3>

      <div className="container grid gap-48">
        <AboutContentOne />
        <AboutContentTwo />
      </div>
    </section>
  )
}
