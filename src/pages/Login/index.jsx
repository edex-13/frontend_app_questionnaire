import React from 'react'
import { Layout } from '@components/Layout'
import { FormLogin } from '@components/FormLogin/'
import { LoginContainer, Title } from './styles'

export const Login = () => {
  return (
    <Layout>
      <LoginContainer>
        <Title>Iniciar sesión</Title>

        <FormLogin />
      </LoginContainer>
    </Layout>
  )
}
