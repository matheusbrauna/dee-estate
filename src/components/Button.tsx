import { HTMLAttributes, ReactElement } from 'react'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconButton?: ReactElement
}

export function Button({ iconButton, children, ...rest }: ButtonProps) {
  return (
    <button className={iconButton ? 'icon-btn' : 'primary-btn'} {...rest}>
      {iconButton}
      {children}
    </button>
  )
}
