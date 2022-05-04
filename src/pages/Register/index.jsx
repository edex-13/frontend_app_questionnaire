import React from 'react'
import { Layout } from '@components/Layout'
import { FormRegister } from '@components/FormRegister'

import { RegisterContainer, Title } from './styles'
export const Register = () => {
  return (
    <Layout>
      <RegisterContainer className='Register'>
        <Title>Registrarse</Title>
        <FormRegister />
      </RegisterContainer>
    </Layout>
  )
}
