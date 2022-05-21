import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Title, Content, Button, Input, Label } from './styles'

import { Layout } from '@components/Layout'

import { useAppContext } from '@hooks/useAppContext'

import { alertsWarning } from '@utils/alerts'

export const ResponseToCode = () => {
  const {
    Questionnaires: { getQuestionnaireToAnswer }

  } = useAppContext()
  const navigate = useNavigate()

  const [data, setData] = useState([])

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value })
  }

  const handleClick = async () => {
    if (data.email && data.code) {
      try {
        await getQuestionnaireToAnswer(data)
        navigate('/response')
      } catch (error) {
        alertsWarning('El código no existe.')
      }
    } else {
      alertsWarning('Por favor, llena todos los campos.')
    }
  }
  return (
    <Layout>
      <Container>
        <Content>

          <Title>Ingresa a un cuestionario</Title>
          <Label>Correo</Label>
          <Input
            type='text'
            name='email'
            id='email'
            placeholder='Ingresar tu correo'
            onChange={handleChange}

          />
          <Label>Codigo</Label>

          <Input
            type='text'
            name='code'
            id='code'
            placeholder='Ingresar El codigo'
            onChange={handleChange}

          />
          <Button onClick={handleClick}>Ingresar</Button>
        </Content>

      </Container>
    </Layout>
  )
}
