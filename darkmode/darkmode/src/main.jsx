import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Darkmode from './components/darkmode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Darkmode />
  </StrictMode>,
)
