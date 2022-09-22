import { BsChevronDown } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Button } from '../../Button'

export function HeroSearch() {
  return (
    <div className="hero-search-container">
      <div className="flex-1">
        <p className="hero-search-text">
          Location <BsChevronDown />
        </p>
        <span className="opacity-50">Lekki</span>
      </div>
      <div className="flex-1">
        <p className="hero-search-text">
          Property Type <BsChevronDown />
        </p>
        <span className="opacity-50">Duplex</span>
      </div>
      <div className="flex-1">
        <p className="hero-search-text">
          Max Price <BsChevronDown />
        </p>
        <span className="opacity-50">$10,000</span>
      </div>
      <div className="flex-1">
        <Button iconButton={<FaSearch size={24} />}>Search</Button>
      </div>
    </div>
  )
}
