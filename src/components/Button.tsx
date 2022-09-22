import { ButtonHTMLAttributes, ReactElement } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconButton?: ReactElement
}

export function Button({ iconButton, children }: ButtonProps) {
  return (
    <button className={iconButton ? 'icon-btn' : 'primary-btn'}>
      {iconButton}
      {children}
    </button>
  )
}
