import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Menu from "./pages/Menu";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Menu/>
    </ThemeProvider>
  )
}
