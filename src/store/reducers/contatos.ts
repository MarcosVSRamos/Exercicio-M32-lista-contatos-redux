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
      nome: 'Regina Maria Santos e Lima',
      numero: 11967676767
    },
    {
      id: 2,
      email: 'emaildeteste4321@gmail.com',
      nome: 'Juliana Abreu Rocha da Silva',
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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
