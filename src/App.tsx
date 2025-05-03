import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import EstiloGlobal, { MainContainer } from './styles'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <MainContainer>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </MainContainer>
  )
}

export default App
