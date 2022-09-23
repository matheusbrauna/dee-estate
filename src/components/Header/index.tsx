import classNames from 'classnames'
import { BsList } from 'react-icons/bs'
import { useMenu } from '../../contexts/MenuContext'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { HeaderNav } from './HeaderNav'

export function Header() {
  const { openMenu, scrollY } = useMenu()

  function onOpenMenu() {
    openMenu()
  }

  return (
    <header
      className={classNames(
        'fixed z-10 w-full h-24 border-b border-b-base-300 grid place-items-center',
        {
          'bg-brand-dark': scrollY > 0,
        },
      )}
    >
      <div className="container h-24 flex justify-between items-center">
        <Logo variant={scrollY > 0} />
        <HeaderNav />
        <Button className="primary-btn hidden lg:flex">Começar agora</Button>
        <BsList
          size={48}
          className={classNames('lg:hidden text-brand-dark', {
            'text-base-100': scrollY > 0,
          })}
          onClick={onOpenMenu}
        />
      </div>
    </header>
  )
}
