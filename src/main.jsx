import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CursedSearch from './CursedSearch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursedSearch />
  </StrictMode>,
)
