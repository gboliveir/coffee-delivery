import { BrowserRouter } from 'react-router-dom';
import { Router } from './Route';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
