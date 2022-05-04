import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { AppContext } from '@context/AppContext'

import { Home } from '@pages/Home/'
import { Login } from '@pages/Login/'
import { Register } from '@pages/Register/'
import { Logout } from '@pages/Logout/'
import { GlobalStyle } from '@styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </AppContext>

    </>
  )
}
