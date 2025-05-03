import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato(
        'Marcos Vinicius Santos Ramos',
        'marcosteste@gmail.com',
        0,
        1
      ),
      new Contato(
        'Juliana Abreu Rocha da Silva',
        'mtesteemailmaarcosteste@gmail.com',
        11940028922,
        2
      ),
      new Contato(
        'Marcos Vinicius Santos Ramos',
        'marcosteste@gmail.com',
        0,
        3
      ),
      new Contato(
        'Juliana Abreu Rocha da Silva',
        'mtesteemailmaarcosteste@gmail.com',
        11940028922,
        4
      )
    ]
  },
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
