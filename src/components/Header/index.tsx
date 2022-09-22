import { Button } from '../Button'
import { Logo } from '../Logo'
import { HeaderNav } from './HeaderNav'

export function Header() {
  return (
    <header className="h-24 border-b border-b-base-300 grid place-items-center">
      <div className="container h-24 flex justify-between items-center">
        <Logo />
        <HeaderNav />
        <Button>Get Started</Button>
      </div>
    </header>
  )
}
