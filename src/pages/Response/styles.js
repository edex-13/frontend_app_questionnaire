import styled, { css } from 'styled-components'
import { wrapper } from '@styles/Wrapper'

import * as variables from '@styles/Variables'

export const Container = styled.section`
  ${wrapper()}
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${variables.BLACK};
`

export const Pregutas = styled.div`
  background-color: #fafafa;
  border-radius: 4px;
  ${props => props.trueAndfalse && css`
    border-bottom: 4px solid #E95656;
  `}
  ${props => props.multipleChoice && css`
    border-bottom: 4px solid #5698E9;
    & h2 {
      color: #5698E9;
    }
  `}
  ${props => props.text && css`
    border-bottom: 4px solid #e9b356;
    & h2 {
      color: #e9b356;
    }
  `}



  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  padding: 20px;
  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;
    row-gap: 20px;
  }`

export const Enunciado = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #E95656;
  @media (max-width: 768px) {
    font-size: 18px;
  }

`
export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid ${variables.GRAY};
  padding: 0px 10px;
  font-size: 16px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 1px solid #5698E9;
    background-color: #fafafa;
  }
`

export const Button = styled.button`
  background-color: ${variables.GREEN};
  cursor: pointer;
  transition: background-color 0.2s ease 0s;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 4px;
  ${props => props.false && css`
        color: white;
        background: #F91616;
      &:hover {
      background: white;

      border: 4px dashed #F91616;
      color:#F91616;
      }`
  }
  ${props => props.true && css`
        color: white;
        background: #168BF9;
      &:hover {
      background: white;

      border: 4px dashed #168BF9;
      color:#168BF9;
      }`
  }
  ${props => props.multiple1 && css`
        color: white;
        background: #ECE478;
      &:hover {
      background: white;

      border: 4px dashed #ECE478;
      color:#ECE478;
      }`
  }
  ${props => props.multiple2 && css`
        color: white;
        background: #78ECB6;
      &:hover {
      background: white;

      border: 4px dashed #78ECB6;
      color:#78ECB6;
      }`
  }
  ${props => props.multiple3 && css`
        color: white;
        background: #AB78EC;
      &:hover {
      background: white;

      border: 4px dashed #AB78EC;
      color:#AB78EC;
      }`
  }
  ${props => props.multiple4 && css`
        color: white;
        background: #E3A367;
      &:hover {
      background: white;

      border: 4px dashed #E3A367;
      color:#E3A367;
      }`
  }


`
