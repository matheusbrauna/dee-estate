import { TiInputChecked } from 'react-icons/ti'

export function AboutContentOne() {
  return (
    <div className="grid grid-cols-2 gap-28 place-items-center">
      <div>
        <img src="/service1.png" alt="" />
      </div>

      <div>
        <h3 className="text-5xl font-bold">Porque você deve nos escolher.</h3>
        <p className="mt-5 mb-5 text-2xl">
          Criando estilos de vida urbanos de qualidade, construindo comunidades
          mais fortes
        </p>

        <ul className="grid grid-cols-2 gap-y-4">
          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Classe mundial
          </li>

          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Preços Acessíveis
          </li>

          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Confiável
          </li>
          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Facilidades
          </li>
        </ul>
      </div>
    </div>
  )
}
