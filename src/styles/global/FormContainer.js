import { css } from 'styled-components'
import * as vars from '@styles/Variables'

export const FormContainerStyle = () =>
  css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    max-width: 425px;
    width: 100%;
    min-height: 570px;
    margin: 30px auto;
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);
    @media screen and (max-width: 425px) {
      max-width: 100%;
      margin: 0px;
      box-shadow: none;
      background-color: transparent;
      align-items: flex-start;
    }
  `

export const ButtonStyle = () =>
  css`
    border-radius: 20px;
    background-color: ${vars.GREEN};
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    padding: 14px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
  `
export const InputStyle = () =>
  css`
    background-color: ${vars.WHITE};
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-size: 16px;
  `
