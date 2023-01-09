import Layout from "../components/Layout"
import { GlobalStyles } from "./GlobalStyles.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../data/theme";
import AppRoutes from "../routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme = { theme }>
        <AppRoutes AppLayout=  { <Layout /> } />
      </ThemeProvider>
    </>
  );
}

export default App;
