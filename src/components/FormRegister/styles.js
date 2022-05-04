import styled from 'styled-components'
import { InputStyle, ButtonStyle } from '@styles/global/FormContainer'

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px;
  text-align: center;
`

export const Input = styled.input`
  ${InputStyle}
`

export const Button = styled.button`
  ${ButtonStyle}
`
