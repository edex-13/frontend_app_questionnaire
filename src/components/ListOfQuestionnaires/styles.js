import styled from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const Container = styled.div`
  ${wrapper()}
  
`
export const Table = styled.div`
  max-height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 20px;
  margin: 0 auto;
  `
export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
  `

export const Button = styled.button`
  background-color: ${variables.GREEN};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;
  :hover {
    background-color: ${variables.GREEN_LIGHT};
  }
  :active {
    background-color: ${variables.GREEN};
  }
`
export const Add = styled.div`
  font-size:15px;
  color: #5E8067;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  
  @media screen and (max-width: 768px) {
    & span {
      display: none;
    }
  }

  `
export const ItemQuestionnaires = styled.div`

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,.4);
  & div{
    padding:0px 10px;
    height: 100%;
  }
  &.cabecera{
    background-color: #26783c;
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }
  &  div{
    text-align: center;
  }

  
`
