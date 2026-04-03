import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* only on Moode dev afficher les errors*/}
    <BrowserRouter>
      <App />{/* App.jsx */}
    </BrowserRouter>
    
  </StrictMode>,
)
