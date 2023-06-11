import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Layout from './Layout'
import AppRoutes from '../routes'
import { theme } from '../data/theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme = { theme }>
        <AppRoutes AppLayout=  { <Layout /> } />
      </ThemeProvider>
      <ToastContainer
        position='top-center'
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}

export default App
