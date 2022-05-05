import styled, { css } from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const Container = styled.section`
  width: 100%;
  min-height: 130px;
  margin-bottom: 20px;
  border-bottom: 4px solid #e9b356;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 40px;
  & > .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      max-width: 450px;
      margin-bottom: 15px;
      ${wrapper()}
    }
  }
  & > .buttons {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 20px;
    min-height: 100px;
    & > button {
      width: 100%;
      height: 100%;
    }
    padding-bottom: 20px;
  }
  @media screen and (max-width: 400px) {
    & {
      gap:10px;
    }
  }
`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #e9b356;
`
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${variables.GRAY};
  padding: 0px 10px;
  font-size: 16px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 1px solid ${variables.GREEN};
    background-color: #fafafa;
  }
`

export const Button = styled.button`
  background-color: ${variables.GREEN};
  cursor: pointer;
  transition: background-color 0.2s ease 0s;

  ${props => props.save && css`
      background: #6BC25B;
      color:white;
      &:hover {
        border: 4px solid #6BC25B;
        background: #AADEA1;
        color:white;
      }`
  }
  ${props => props.delete && css`
      background: #C25B5B;
      color:white;
      &:hover {
        border: 4px solid #C25B5B;
        background: #DEA1A1;
        color:white;
      }`
  }

`
