import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weigth: bold;
  padding: 8px;
  background-color: ${variaveis.corDeFundoSecundaria};
  color: ${variaveis.textoSecundario};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`
