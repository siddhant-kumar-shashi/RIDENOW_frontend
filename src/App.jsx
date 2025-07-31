import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Start from './pages/Start'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home1 from './pages/Home1'
import Riding from './pages/Riding'
import Captainhome from './pages/Captainhome'
import UserprotectWrapper from './pages/UserprotectWrapper'
import CaptainRiding from './components/CaptainRiding'
import 'remixicon/fonts/remixicon.css'
import Userlogout from './pages/Userlogout'
import Captainprotectwrapper from './pages/Captainprotectwrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Userlogin />} />
        <Route path='/signup' element={<Usersignup />} />
        <Route path='/captainlogin' element={<Captainlogin />} />
        <Route path='/captainsignup' element={<Captainsignup />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />

        <Route path='/home1' element={
          <UserprotectWrapper>
             <Home1/>
          </UserprotectWrapper>
        } />
        <Route path='/user/logout' element={
          <UserprotectWrapper>
             <Userlogout/>
          </UserprotectWrapper>
        } />
        <Route path='/captainhome' element={
            <Captainprotectwrapper>
              <Captainhome/>
            </Captainprotectwrapper>
            
        }/>
        <Route path='/riding' element={<Riding />} />
      </Routes>
    </div>
  )
}

export default App