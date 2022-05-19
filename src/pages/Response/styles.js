import styled from 'styled-components'
import * as variables from '@styles/Variables'

export const Container = styled.section`
  width: 100%;
  min-height: 130px;
  margin-bottom: 20px;
`
export const Content = styled.div`
  max-width:500px;
  margin: 0 auto;
  padding:60px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);


`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${variables.BLACK};
`
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;

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
  height: 45px;
  border: none;
  border-radius: 4px;

`
