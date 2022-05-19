import React from 'react'
import { alertsError, alertsSuccess, alertsWarning } from '@utils/alerts'

import { Container, Title, Pregutas, Button, Enunciado } from './styles'

import { Layout } from '@components/Layout'

export const Ejemplo = () => {
  const send = () => {
    alertsSuccess('2/3 preguntas correctas')
  }
  return (
    <Layout>
      <Container>
        <Title>Cuestionario sobre la ETITC</Title>
        <p>Un corto cuestionario de 2 preguntas para que te diviertas:</p>
        <Button onClick={send}>Enviar</Button>
        <Pregutas falseTrue>
          <Enunciado>
            ¿El colegio se fundo en el año 2000? / Falso o Verdadero
          </Enunciado>
          <div>
            <Button false>Falso</Button>
            <Button true>Verdadero</Button>
          </div>
        </Pregutas>
        <Pregutas opcionMultiple>
          <Enunciado>
            ¿Cual es el nombre de nuestro colegio? / Selecciona una opción
          </Enunciado>
          <div>
            <Button multiple1>Escuela tecnica central</Button>
            <Button multiple2>Tecnico de la salle</Button>
            <Button multiple3>Escuela tecnologica instituto tecnico central</Button>
            <Button multiple4>nose</Button>
          </div>
        </Pregutas>
        <Pregutas falseTrue>
          <Enunciado>
            ¿El colegio tiene universidad?/ Falso o Verdadero
          </Enunciado>
          <div>
            <Button false>Falso</Button>
            <Button true>Verdadero</Button>
          </div>
        </Pregutas>
      </Container>
    </Layout>
  )
}
