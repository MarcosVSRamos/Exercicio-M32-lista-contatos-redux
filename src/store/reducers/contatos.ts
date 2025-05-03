import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      email: 'emaildeteste4321@gmail.com',
      nome: 'Marcos Vinicius Santos Ramos',
      numero: 11967676767
    },
    {
      id: 2,
      email: 'emaildeteste4321@gmail.com',
      nome: 'Marcos Vinicius Santos Ramos',
      numero: 11967676767
    },
    {
      id: 3,
      email: 'emaildeteste4321@gmail.com',
      nome: 'Marcos Vinicius Santos Ramos',
      numero: 11967676767
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
