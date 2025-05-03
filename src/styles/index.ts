import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Link } from 'react-router-dom'

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  color: ${variaveis.textoPrincipal};

  body{
  background-color: ${variaveis.corDeFundo};
  }

}
`
export const MainContainer = styled.div``

export const Campo = styled.input`
  padding: 8px;
  color: ${variaveis.textoSecundario};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  border-color: ${variaveis.textoSecundario};
  width: 240px;
  max-width: 100%;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  background-color: ${variaveis.corDeFundoSecundaria};
  color: ${variaveis.textoSecundario};
  cursor: pointer;
  border: none;
  padding: 4px 8px;
  border-radius: 8px;
  margin-left: 8px;
`

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

export default EstiloGlobal
