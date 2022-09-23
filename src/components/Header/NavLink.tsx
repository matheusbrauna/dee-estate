import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMenu } from '../../contexts/MenuContext'

type NavLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  path: string
}

export function NavLink({ path, children, ...rest }: NavLinkProps) {
  const { scrollY } = useMenu()

  return (
    <li>
      <a
        href={path}
        className={classNames('nav-link', {
          'text-base-100 hover:text-base-300': scrollY > 0,
        })}
        {...rest}
      >
        {children}
      </a>
    </li>
  )
}
