import styled from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const Headers = styled.header`
  width: 100%;
  min-height: 130px;
`
export const Img = styled.img`
  width: 100px;
  @media (max-width: 768px) {
    order: 1;
  }
`
export const Container = styled.div`
  ${wrapper()}
  display:flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`
export const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 100%;
  @media (max-width: 768px) {
    background-color: #26783c;
    margin-bottom: 15px;
  ${wrapper()}

  }

  & > a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.2s ease 0s;
    transition: border 0.2s ease 0s;
    transition: color 0.2s ease 0s;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      color: white;
      padding: 10px;
      padding-bottom: 3px;
      border-bottom: 1px solid white;
      :hover {
        background-color: #b4b2b6;
      }
    }
    &:hover {
      color: ${variables.GREEN};
      border-bottom: 2px solid ${variables.GREEN};
    }
  }
`
