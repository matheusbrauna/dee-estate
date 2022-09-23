import classNames from 'classnames'
import { NavLink } from './NavLink'

export function HeaderNav() {
  return (
    <nav className="hidden lg:grid h-24 place-items-center">
      <ul className="flex gap-10 items-center justify-center">
        <NavLink path="#home">Início</NavLink>
        <NavLink path="#About">Sobre</NavLink>
        <NavLink path="#testimonials">Serviços</NavLink>
        <NavLink path="#testimonials">Depoimentos</NavLink>
      </ul>
    </nav>
  )
}
