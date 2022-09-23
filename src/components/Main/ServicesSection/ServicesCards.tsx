import { BsFillShieldLockFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlinePayment } from 'react-icons/md'
import { ServiceCard } from './ServiceCard'

export function ServicesCards() {
  return (
    <div className="mt-20 lg:grid lg:grid-cols-3 gap-y-12 gap-x-12">
      <ServiceCard
        icon={<FaMapMarkerAlt size={64} className="text-brand-dark" />}
        title="Encontrar um lar"
      >
        Nossas propriedades estão localizadas em áreas nobres onde não haverá
        problemas com transporte
      </ServiceCard>

      <ServiceCard
        icon={<MdOutlinePayment size={64} className="text-brand-dark" />}
        title="Faça pagamentos"
      >
        Nossas propriedades contam com boa rede, água portátil, luz 24 horas e
        segurança 24 horas.
      </ServiceCard>

      <ServiceCard
        icon={<BsFillShieldLockFill size={64} className="text-brand-dark" />}
        title="Torne oficial"
      >
        Estamos no mercado há mais de 32 anos, para clientes fora do país, você
        pode confiar em nós para entregar bem.
      </ServiceCard>
    </div>
  )
}
