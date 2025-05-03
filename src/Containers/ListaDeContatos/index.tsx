import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'

const ListaDeContatos = () => {
  const contatos: ContatoClass[] = useSelector(
    (state: RootReducer) => state.contatos.itens
  )
  return (
    <ul>
      {contatos.map((c) => (
        <li key={c.id}>
          <Contato nome={c.nome} numero={c.numero} email={c.email} id={c.id} />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
