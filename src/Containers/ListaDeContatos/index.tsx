import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Texto } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <Texto>10 contatos encontrados como : bloqueados</Texto>
      <ul>
        {itens.map((c) => (
          <li key={c.numero}>
            <Contato
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContatos
