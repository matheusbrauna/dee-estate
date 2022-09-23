import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface MenuMobileContextData {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  scrollY: number
}

interface MenuMobileProviderProps {
  children: ReactNode
}

const MenuMobileContext = createContext<MenuMobileContextData>(
  {} as MenuMobileContextData,
)

export function MenuMobileProvider({ children }: MenuMobileProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function openMenu() {
    setIsMenuOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MenuMobileContext.Provider
      value={{ isMenuOpen, openMenu, closeMenu, scrollY }}
    >
      {children}
    </MenuMobileContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuMobileContext)

  return context
}
