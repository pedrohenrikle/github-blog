import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './context/IssuesContext'
import { router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssuesProvider>
        <RouterProvider router={router} />
      </IssuesProvider>
    </ThemeProvider>
  )
}
