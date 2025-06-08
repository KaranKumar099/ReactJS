import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeSwitcher from './ThemeSwitcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeSwitcher />
  </StrictMode>,
)
