import React, { useState, useEffect } from 'react'
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
    <Layout>
      <input onChange={handleChange} type='text' placeholder='nombre del cuestionario' />

      <button
        onClick={() => {
          const id = Math.random()
          handleAddToQuestionsHtml(
            <QuestionMultipleChoice key={id} id={id} />
          )
        }}
      >
        Pregunta con opción multiple
      </button>
      <button onClick={() => {
        const id = Math.random()
        handleAddToQuestionsHtml(
          <QuestionTrueAndFalse key={id} id={id} />
        )
      }}
      >
        Pregunta Falso y Verdadero
      </button>
      <button
        onClick={() => {
          const id = Math.random()
          handleAddToQuestionsHtml(
            <QuestionFree key={id} id={id} setQuestionsHtml={setQuestionsHtml} />
          )
        }}
      >
        Pregunta libre
      </button>
      <button onClick={handleAddQuestion}>

        Guardar
      </button>
      <hr />
      {questionsHtml}
    </Layout>
  )
}
