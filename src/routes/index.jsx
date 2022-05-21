import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppContext } from '@context/AppContext'

import { Home } from '@pages/Home/'
import { Login } from '@pages/Login/'
import { Register } from '@pages/Register/'
import { Logout } from '@pages/Logout/'
import { NewQuestionnaires } from '@pages/NewQuestionnaires/'
import { Response } from '@pages/Response/'
import { ResponseToCode } from '../pages/ResponseToCode/'
import { GlobalStyle } from '@styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/code' element={<ResponseToCode />} />
            <Route path='/response' element={<Response />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new' element={<NewQuestionnaires />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  )
}
