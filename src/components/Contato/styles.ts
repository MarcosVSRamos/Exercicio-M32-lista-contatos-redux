import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: ${variaveis.corDeFundo};
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 880px;
  max-width: 80%;
  background-color: #576574;
  box-shadow: 2px 4px 4px rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  border: 1px solid #c8d6e5;
  padding: 4px 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Tag = styled.span`
  width: 208px;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corAmarela};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.corVermelha};
`

export const Nome = styled.label`
  width: 200px;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;

  p {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 6px;
    }
  }
`
