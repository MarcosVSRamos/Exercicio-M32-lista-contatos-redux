import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Botao } from '../../styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState<string>('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (numeroOriginal !== null && numeroOriginal !== undefined) {
      setNumero(numeroOriginal.toString())
    }
  }, [emailOriginal, numeroOriginal, nomeOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setNumero(numeroOriginal.toString())
  }

  function salvarEdicao() {
    dispatch(
      editar({
        nome,
        email,
        numero,
        id
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Div>
      <S.Card estaEditando={estaEditando}>
        <S.Nome>
          <p>
            Nome:
            <S.TagNome
              disabled={!estaEditando}
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </p>
        </S.Nome>
        <S.Tag
          disabled={!estaEditando}
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.Tag
          disabled={!estaEditando}
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
        <div>
          {estaEditando ? (
            <>
              <S.BotaoSalvar type="button" onClick={salvarEdicao}>
                {' '}
                Salvar{' '}
              </S.BotaoSalvar>
              <S.BotaoCancelar onClick={cancelaEdicao} type="button">
                Cancelar
              </S.BotaoCancelar>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)} type="button">
                Editar
              </Botao>
              <S.BotaoCancelar
                onClick={() => dispatch(remover(id))}
                type="button"
              >
                Remover
              </S.BotaoCancelar>
            </>
          )}
        </div>
      </S.Card>
    </S.Div>
  )
}

export default Contato
