import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandWhatsapp,
} from 'react-icons/tb'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer className="bg-brand-mid">
      <div className="container flex items-center justify-between">
        <div className="py-20 grid gap-4">
          <Logo variant />
          <span className="text-white">©2022 - Univago.</span>
          <p className="text-white">Todos os direitos reservados.</p>
        </div>

        <ul className="flex gap-8">
          <li>
            <a href="#" className="text-white">
              <TbBrandInstagram size={24} />
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <TbBrandFacebook size={24} />
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <TbBrandWhatsapp size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
