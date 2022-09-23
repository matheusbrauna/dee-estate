import classNames from 'classnames'

interface LogoProps {
  variant?: boolean
}

export function Logo({ variant }: LogoProps) {
  return (
    <a href="#home">
      <h1
        className={classNames('logo text-brand-dark', {
          'text-base-100': variant,
        })}
      >
        Univago
      </h1>
    </a>
  )
}
