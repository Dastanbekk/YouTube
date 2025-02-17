import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import RouteComponent from './route/route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RouteComponent />
    </BrowserRouter>
  </StrictMode>,
)
