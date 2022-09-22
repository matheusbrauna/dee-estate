export function HeaderNav() {
  return (
    <nav className="h-24 grid place-items-center">
      <ul className="flex gap-10 items-center justify-center">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            Sobre
          </a>
        </li>
        <li>
          <a href="#services" className="nav-link">
            Serviços
          </a>
        </li>
        <li>
          <a href="#testimonials" className="nav-link">
            Depoimentos
          </a>
        </li>
      </ul>
    </nav>
  )
}
