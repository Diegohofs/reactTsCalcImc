import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Content } from "./components/Content"

export const App = () => {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Content />
      </ThemeProvider>
    </>
  )
}
