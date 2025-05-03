import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Botao } from '../../styles'
import { Form, Titulo } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'
import { BotaoAdd } from '../../styles/index'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const numeroConvertido = parseInt(numero)

    if (isNaN(numeroConvertido)) {
      alert('Número de telefone inválido!')
      return
    }

    const contatoParaAdicionar = new Contato(nome, email, numeroConvertido, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <Titulo>Adicione um Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <input
          required
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <input
          required
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-Mail"
        />
        <input
          placeholder="Número de Telefone"
          inputMode="numeric"
          type="text"
          value={numero}
          onChange={(evento) => {
            const valorDigitado = evento.target.value
            if (/^\d*$/.test(valorDigitado)) {
              setNumero(valorDigitado)
            }
          }}
        />
        <Botao type="submit"> Adicionar </Botao>
      </Form>
      <BotaoAdd to="/">Voltar à página inicial</BotaoAdd>
    </>
  )
}

export default Cadastro
