import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { MenuMobile } from './components/MenuMobile'
import { MenuMobileProvider } from './contexts/MenuContext'

export function App() {
  return (
    <MenuMobileProvider>
      <Header />
      <Main />
      <Footer />
      <MenuMobile />
    </MenuMobileProvider>
  )
}
