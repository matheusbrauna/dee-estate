import { IoClose } from 'react-icons/io5'
import { useMenu } from '../contexts/MenuContext'
import classNames from 'classnames'
import { Button } from './Button'

export function MenuMobile() {
  const { closeMenu, isMenuOpen } = useMenu()

  function onCloseMenu() {
    closeMenu()
  }

  return (
    <div
      className={classNames(
        'lg:hidden h-full w-full z-10 fixed inset-0 bg-brand-dark',
        {
          hidden: !isMenuOpen,
        },
      )}
    >
      <div className="container h-full flex flex-col gap-8 lg:gap-12">
        <div className="grid h-24 place-items-end items-center">
          <IoClose size={48} onClick={onCloseMenu} className="text-white" />
        </div>
        <ul className="flex flex-col gap-8 lg:gap-12 items-center justify-start text-center text-2xl lg:text-4xl text-white">
          <li>
            <a href="#home" onClick={onCloseMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={onCloseMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" onClick={onCloseMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={onCloseMenu}>
              Depoimentos
            </a>
          </li>

          <Button className="mobile-btn">Começar agora</Button>
        </ul>
      </div>
    </div>
  )
}
