import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { companies } from './data/companies.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App title='Company Wishlist' companies={companies}/>
  </StrictMode>,
)
