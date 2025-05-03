import Contato from '../../components/Contato'
import { Texto } from './styles'

const contatos = [
  {
    nome: 'Marcos Vinicius',
    numero: 67999663322,
    email: 'vimarcosviiini@gmail.com'
  },
  {
    nome: 'Claudio Roberto',
    numero: 11999663322,
    email: 'vimarcosviiini@gmail.com'
  },
  {
    nome: 'Juliana Abreu',
    numero: 99999663322,
    email: 'vimarcosviiini@gmail.com'
  }
]

const ListaDeContatos = () => {
  return (
    <>
      <Texto>10 contatos encontrados como : bloqueados</Texto>
      <ul>
        {contatos.map((c) => (
          <li key={c.numero}>
            <Contato nome={c.nome} numero={c.numero} email={c.email} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContatos
