import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { AppContainer } from './GlobalStyles'


const Layout = () => {
  return(
    <AppContainer>
      <Header />
      <Outlet />
      <Footer />
    </AppContainer>
  )
}

export default Layout
