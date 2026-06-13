import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { companiesData } from './data/companies.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App title='Company Wishlist' />
  </StrictMode>,
)
