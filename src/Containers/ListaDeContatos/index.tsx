import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Texto } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <>
      <Texto>10 contatos encontrados como : bloqueados</Texto>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
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
