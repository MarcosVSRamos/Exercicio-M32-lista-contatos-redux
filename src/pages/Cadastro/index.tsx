import { Botao } from '../../styles'
import { Form, Titulo } from './styles'

const Cadastro = () => {
  return (
    <>
      <Titulo>Adicione um Novo Contato</Titulo>
      <Form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="E-Mail" />
        <input type="number" placeholder="Número de Telefone" />
        <Botao type="button"> Adicionar </Botao>
      </Form>
    </>
  )
}

export default Cadastro
