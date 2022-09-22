interface TestimonialCardProp {
  name: string
  liveAt: string
  testimonial: string
}

export function TestimonialCard({
  testimonial,
  liveAt,
  name,
}: TestimonialCardProp) {
  return (
    <div className="min-h-[240px] h-max bg-white p-5 rounded-2xl">
      <h4 className="text-3xl text-base-900 font-bold">{name}</h4>
      <span className="block text-lg font-medium mt-2 mb-4">{liveAt}</span>
      <p className="text-xl opacity-70">{testimonial}</p>
    </div>
  )
}
