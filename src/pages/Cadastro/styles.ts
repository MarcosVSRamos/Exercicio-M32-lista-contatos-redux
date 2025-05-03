import styled from 'styled-components'

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  input {
    width: 320px;
    text-align: center;
    margin-bottom: 12px;
    height: 20px;
    border-radius: 8px;
    border: none;

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
