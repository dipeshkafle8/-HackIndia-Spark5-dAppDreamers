import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SessionProvider } from './components/Login/SessionContext.jsx'
createRoot(document.getElementById('root')).render(
  <SessionProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </SessionProvider>
)
