interface LogoProps {
  variant?: boolean
}

export function Logo({ variant }: LogoProps) {
  return (
    <a href="/">
      <h1 className={variant ? 'logo text-white' : 'logo text-black'}>
        Univago
      </h1>
    </a>
  )
}
