import { TiInputChecked } from 'react-icons/ti'

export function AboutContentTwo() {
  return (
    <div className="flex-col lg:flex-row lg:flex gap-x-28 gap-y-28 items-center">
      <div className="rounded-img flex-1">
        <img src="/house2.jpg" alt="" />
      </div>

      <div className="-order-1 flex-1 mt-12 lg:0">
        <h3 className="text-3xl lg:text-5xl font-bold">
          Porque você deve nos escolher.
        </h3>
        <p className="mt-5 mb-5 text-xl lg:text-2xl">
          Criando estilos de vida urbanos de qualidade, construindo comunidades
          mais fortes
        </p>

        <ul className="grid grid-cols-2 gap-y-4">
          <li className="about-content-list">
            <TiInputChecked size={24} className="text-brand-dark" />
            Classe mundial
          </li>

          <li className="about-content-list">
            <TiInputChecked size={24} className="text-brand-dark" />
            Preços Acessíveis
          </li>

          <li className="about-content-list">
            <TiInputChecked size={24} className="text-brand-dark" />
            Confiável
          </li>
          <li className="about-content-list">
            <TiInputChecked size={24} className="text-brand-dark" />
            Facilidades
          </li>
        </ul>
      </div>
    </div>
  )
}
