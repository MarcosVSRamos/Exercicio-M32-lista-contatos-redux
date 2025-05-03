import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Botao } from '../../styles'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, numero, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Div>
      <S.Card>
        <S.Nome>
          <p>
            Nome:
            <S.TagNome value={nome} readOnly />
          </p>
        </S.Nome>
        <S.Tag type="email" value={email} readOnly />
        <S.Tag type="number" value={numero} readOnly />
        <div>
          {estaEditando ? (
            <>
              <S.BotaoSalvar type="button"> Salvar </S.BotaoSalvar>
              <S.BotaoCancelar
                onClick={() => setEstaEditando(false)}
                type="button"
              >
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
