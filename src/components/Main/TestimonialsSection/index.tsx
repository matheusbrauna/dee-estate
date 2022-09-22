import { TestimonialsCards } from './TestimonialsCards'

export function TestimonialsSection() {
  return (
    <section className="py-24" id="testimonials">
      <div className="container">
        <h3 className="text-center text-5xl font-bold">Depoimentos.</h3>
        <p className="text-center text-3xl mt-2">
          Isso é o que os nossos clientes estão dizendo
        </p>

        <TestimonialsCards />
      </div>
    </section>
  )
}
