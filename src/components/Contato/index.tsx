import { useState } from 'react'
import * as S from './styles'
import { Botao } from '../../styles'

type Props = {
  nome: string
  email: string
  numero: number
}

const Contato = ({ nome, numero, email }: Props) => {
  const [estaEditanto, setEstaEditando] = useState(false)

  return (
    <S.Div>
      <S.Card>
        <S.Nome>
          <p>
            Nome: <h3>{nome}</h3>
          </p>
        </S.Nome>
        <S.Tag>{email}</S.Tag>
        <p>
          Número: <span>{numero}</span>
        </p>
        <div>
          {estaEditanto ? (
            <>
              <S.BotaoSalvar type="button"> Salvar </S.BotaoSalvar>
              <S.BotaoCancelar
                onClick={() => setEstaEditando(false)}
                type="button"
              >
                {' '}
                Cancelar{' '}
              </S.BotaoCancelar>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)} type="button">
                {' '}
                Editar{' '}
              </Botao>
              <S.BotaoCancelar type="button"> Remover </S.BotaoCancelar>
            </>
          )}
        </div>
      </S.Card>
    </S.Div>
  )
}

export default Contato
