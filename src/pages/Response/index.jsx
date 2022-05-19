import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Title, Content, Button, Input, Label } from './styles'

import { Layout } from '@components/Layout'

export const Response = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/r')
  }
  return (
    <Layout>
      <Container>
        <Content>

          <Title>Ingresa a un cuestionario</Title>
          <Label>Correo</Label>
          <Input
            type='text'
            name='correo'
            id='corre'
            placeholder='Ingresar tu correo'
          />
          <Label>Codigo</Label>

          <Input
            type='text'
            name='correo'
            id='corre'
            placeholder='Ingresar El codigo'
          />
          <Button onClick={handleClick}>Ingresar</Button>
        </Content>

      </Container>
    </Layout>
  )
}
