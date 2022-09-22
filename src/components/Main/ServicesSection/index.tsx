import { ServicesCards } from './ServicesCards'

export function ServicesSection() {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <h3 className="text-5xl font-bold text-center">Como funciona.</h3>
        <p className="text-3xl text-center">
          É assim que nossos produtos funcionam
        </p>

        <ServicesCards />
      </div>
    </section>
  )
}
