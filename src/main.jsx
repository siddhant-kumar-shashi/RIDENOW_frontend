import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './context/Usercontext.jsx'
import Captaincontext from './context/Captaincontext.jsx'
 import SocketProvider from './context/Socketcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Captaincontext>
    <Usercontext>
    <SocketProvider>  
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </SocketProvider>
    </Usercontext>
    </Captaincontext>
  </StrictMode>
)
