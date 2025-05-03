import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = (): ContatoClass[] => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <ul>
      {filtraContatos().map((c) => (
        <li key={c.id}>
          <Contato nome={c.nome} numero={c.numero} email={c.email} id={c.id} />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
