import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import EstiloGlobal, { MainContainer } from './styles'
import store from './store'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <MainContainer>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </MainContainer>
    </Provider>
  )
}

export default App
