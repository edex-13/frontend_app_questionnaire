import React, { useState, useEffect } from 'react'
import { Beforeunload } from 'react-beforeunload'

import { Container, Title, Input, Button, SectionHeader, SectionButtons, Label } from './styles'

import { useNavigate } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'
import { Layout } from '@components/Layout'
import { QuestionFree } from '@components/QuestionFree'
import { QuestionMultipleChoice } from '@components/QuestionMultipleChoice'
import { QuestionTrueAndFalse } from '@components/QuestionTrueAndFalse'

import { alertsError, alertsSuccess, alertsWarning } from '@utils/alerts'

export const NewQuestionnaires = () => {
  const {
    Auth: { user, isAuthenticated },
    Questionnaires: { getQuestions, createQuestionnaire }

  } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    window.onbeforeunload = function () {
      return '¿Desea recargar la página web?'
    }
  })
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login')
    }
  }, [user])

  const [questionsHtml, setQuestionsHtml] = useState([])
  const [name, setName] = useState([])
  const handleAddToQuestionsHtml = (question) => {
    setQuestionsHtml([...questionsHtml, question])
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleAddQuestion = async () => {
    const questions = getQuestions()
    try {
      if (!name) {
        alertsWarning('Por favor, llena todos los campos.')
        return
      }

      await createQuestionnaire({
        name,
        questions: [...questions]
      })
      alertsSuccess('Se creo el cuestionario correctamente.')
      navigate('/')
    } catch (error) {
      alertsError(error.response.data.message)
    }
  }

  return (
    <Beforeunload onBeforeunload={(event) => event.preventDefault()}>
      <Layout>
        <Container>
          <SectionHeader>
            <Title>Crear cuestionario</Title>
            <Button onClick={handleAddQuestion}>
              Guardar
            </Button>
          </SectionHeader>
          <Label>Nombre del cuestionario:</Label>
          <Input onChange={handleChange} type='text' placeholder='...' />
          <Label>Selecciona el tipo de pregunta:</Label>
          <SectionButtons>
            <Button
              multiple
              onClick={() => {
                const id = Math.random()
                handleAddToQuestionsHtml(
                  <QuestionMultipleChoice key={id} id={id} setQuestionsHtml={setQuestionsHtml} />
                )
              }}
            >
              Pregunta con opción multiple
            </Button>
            <Button
              onClick={() => {
                const id = Math.random()
                handleAddToQuestionsHtml(
                  <QuestionTrueAndFalse key={id} id={id} setQuestionsHtml={setQuestionsHtml} />
                )
              }}
              truAndFalse
            >
              Pregunta Falso y Verdadero
            </Button>
            <Button
              text
              onClick={() => {
                const id = Math.random()
                handleAddToQuestionsHtml(
                  <QuestionFree key={id} id={id} setQuestionsHtml={setQuestionsHtml} />
                )
              }}
            >
              Pregunta libre
            </Button>
          </SectionButtons>

          {questionsHtml}
        </Container>

      </Layout>
    </Beforeunload>
  )
}
