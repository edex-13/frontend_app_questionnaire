import React from 'react'

import { WelcomeUserContainer, Title, Subtitle } from './styles'
import { useAppContext } from '@hooks/useAppContext'

export const WelcomeUser = () => {
  const { Auth: { user } } = useAppContext()
  const { email } = user || { email: 'invitado' }
  console.log(email)

  return (
    <WelcomeUserContainer>
      <Title>Hola, {email}</Title>
      <Subtitle>
        Bienvenido a la plataforma.
      </Subtitle>
    </WelcomeUserContainer>
  )
}
