import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { AppContainer } from "./Layout/style"

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
