import { BsChevronDown } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Button } from '../../Button'

export function HeroSearch() {
  return (
    <div className="hero-search-container">
      <div className="flex-1">
        <p className="hero-search-text">
          Localização <BsChevronDown />
        </p>
        <span className="opacity-50">São paulo</span>
      </div>
      <div className="flex-1">
        <p className="hero-search-text">
          Tipo de propriedade <BsChevronDown />
        </p>
        <span className="opacity-50">Duplex</span>
      </div>
      <div className="flex-1">
        <p className="hero-search-text">
          Preço máximo <BsChevronDown />
        </p>
        <span className="opacity-50">$10,000</span>
      </div>
      <div className="flex-1">
        <Button iconButton={<FaSearch size={24} />}>Buscar</Button>
      </div>
    </div>
  )
}
