export function HeaderNav() {
  return (
    <nav className="h-24 grid place-items-center">
      <ul className="flex gap-10 items-center justify-center">
        <li>
          <a href="/" className="nav-link active">
            Home
          </a>
        </li>
        <li>
          <a href="#rent" className="nav-link">
            Rent
          </a>
        </li>
        <li>
          <a href="#land" className="nav-link">
            Land
          </a>
        </li>
        <li>
          <a href="#agent" className="nav-link">
            Agent
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  )
}
