import styled, { css } from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const Container = styled.section`
  ${wrapper()}
`
export const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
`
export const SectionButtons = styled.section`
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  & > button {
    width: 100%;
    height: 100%;
  }
  padding-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${variables.GRAY};
  padding: 0px 10px;
  font-size: 16px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
    border: 1px solid ${variables.GREEN};
    background-color: #fafafa;
  }
`
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`

export const Button = styled.button`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${variables.GREEN};
  background-color: ${variables.GREEN};
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding:10px;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;
  &:hover {
    background-color: ${variables.GREEN_LIGHT};
  }
  ${props => props.truAndFalse && css`
      background: white;
      color:#E95656;
      border: 4px dashed #E95656;
      &:hover {
        background: #E95656;
        color: white;
      }`
  }
  ${props => props.text && css`
      background: white;
      color:#E9B356;
      border: 4px dashed #E9B356;
      &:hover {
        background: #E9B356;
        color: white;
      }`
  }
  ${props => props.multiple && css`
      background: white;
      color:#5698E9;
      border: 4px dashed #5698E9;
      &:hover {
        background: #5698E9;
        color: white;
      }`
  }

  
    
`
