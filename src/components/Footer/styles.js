import styled from 'styled-components'
import * as variables from '@styles/Variables'
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: rgb(32, 35, 41);
  color: rgb(158, 158, 158);
  padding: 3.5rem 0px;
  min-height: calc(140px);
  width: 100%;
`

export const SectionIcons = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`
export const Icon = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.5s ease 0s;
  color: rgb(158, 158, 158);
  &:hover {
    color: ${variables.GREEN};
  }
`
export const SectionBy = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
`
export const By = styled.a`
  margin: 0px 6px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease 0s;
  transition: border 0.2s ease 0s;
  color: rgb(245, 245, 245);
  border-bottom: 1px solid ${variables.GREEN};
  &:hover {
    color: ${variables.GREEN};
    border-bottom: 1px solid ${variables.GREEN};
  }
`
