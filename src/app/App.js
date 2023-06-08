import Layout from "../components/Layout"
import { GlobalStyles } from "./GlobalStyles.style"
import { ThemeProvider } from "styled-components"
import { theme } from "../data/theme"
import AppRoutes from "../routes/routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme = { theme }>
        <AppRoutes AppLayout=  { <Layout /> } />
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
