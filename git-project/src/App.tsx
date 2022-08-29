import { BrowserRouter } from 'react-router-dom'
import { ReposContextProvider } from './context/reposContext'

import './App.module.css'

// import './global.css'
import { Router } from './routes/Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ReposContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ReposContextProvider>
    </ThemeProvider>
  )
}

export default App
