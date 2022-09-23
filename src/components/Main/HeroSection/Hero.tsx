import { FaPlayCircle } from 'react-icons/fa'
import { Button } from '../../Button'

export function Hero() {
  return (
    <div className="block lg:flex gap-12">
      <div className="py-6 flex-1">
        <h1 className="text-4xl lg:text-7xl font-medium">
          Ajudando você a encontrar o imóvel dos seus sonhos.
        </h1>

        <p className="text-xl lg:text-3xl mt-4 mb-12">
          Criando estilos de vida urbanos de qualidade, construindo comunidades
          mais fortes
        </p>

        <div className="flex items-center gap-14">
          <Button>Saiba mais</Button>
          <FaPlayCircle size={50} className="text-brand-mid" />
        </div>
      </div>

      <div className="rounded-img flex-1">
        <img src="/house3.jpg" alt="" />
      </div>
    </div>
  )
}
