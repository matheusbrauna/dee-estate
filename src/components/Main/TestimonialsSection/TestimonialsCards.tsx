import { TestimonialCard } from './TestimonialCard'

export function TestimonialsCards() {
  return (
    <div className="block lg:grid grid-cols-3 place-items-center gap-8 mt-32">
      <TestimonialCard
        name="Alex Godwin"
        liveAt="São Paulo"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
          dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus"
      />

      <TestimonialCard
        name="Alex Godwin"
        liveAt="São paulo"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
          dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus"
      />

      <TestimonialCard
        name="Alex Godwin"
        liveAt="São paulo"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
          dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus"
      />
    </div>
  )
}
