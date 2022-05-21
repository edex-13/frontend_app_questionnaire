import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { alertsError, alertsSuccess, alertsWarning } from '@utils/alerts'

import { Container, Title, Pregutas, Button, Enunciado, Input } from './styles'

import { Layout } from '@components/Layout'
import { useAppContext } from '@hooks/useAppContext'

export const Response = () => {
  const {
    Questionnaires: { schema, setResponse, response, responseQuestionnaire }
  } = useAppContext()
  const navigate = useNavigate()

  const [data, setData] = useState([])

  if (!schema || schema.length === 0) {
    alertsWarning('No hay cuestionarios para responder , ingresa de nuevo.')
    navigate('/code')
    return null
  }

  const { questions } = schema

  const sendQuestions = (idQuestion, idResponse, type = null) => {
    console.log(data.BasicQuestionId)
    let isValid = true
    let index = null
    data.forEach(element => {
      if (element.BasicQuestionId === idQuestion && type !== 'text') {
        alertsWarning('Ya respondiste esta pregunta')
        isValid = false
        return null
      }
      if (element.BasicQuestionId === idQuestion && type === 'text') {
        index = data.indexOf(element)
      }
    })
    if (isValid) {
      setData([...data, { BasicQuestionId: idQuestion, answer: idResponse }])
    }
    if (type === 'text') {
      console.log(index)
      if (data[index] === undefined) {
        setData([...data, { BasicQuestionId: idQuestion, answer: idResponse }])
      } else {
        setData(
          data.map(element => {
            if (element.BasicQuestionId === idQuestion) {
              return { BasicQuestionId: idQuestion, answer: idResponse }
            }
            return element
          })
        )
      }
    }
  }
  const sendAnswers = async () => {
    if (data.length === questions.length) {
      setResponse({ ...response, answers: data })
      const { message } = await responseQuestionnaire({
        nameUser: response.nameUser,
        idQuestionnaire: response.idQuestionnaire,
        answers: data
      })
      console.log(message)
      if (message.countCorrect > message.numberOfQuestions / 2) {
        alertsSuccess(`${message.countCorrect}/${message.numberOfQuestions} respuestas correctas`)
      } else {
        alertsError(`${message.countCorrect}/${message.numberOfQuestions} respuestas correctas`)
      }
      navigate('/code')
    } else {
      alertsError('Por favor, responde todas las preguntas')
    }
  }
  return (
    <Layout>
      <Container>
        <Title>{schema.name}</Title>
        <Button onClick={sendAnswers}>Enviar</Button>
        {questions.map((question, index) => {
          if (question.type === 'multipleChoice') {
            return (
              <Pregutas key={question.idBasicQuestion} multipleChoice>
                <Enunciado key={index}>{question.question}</Enunciado>
                <div>
                  <Button
                    multiple1
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[0].id)
                    }}
                  >
                    {question.answers[0].answer}
                  </Button>
                  <Button
                    multiple2
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[1].id)
                    }}
                  >
                    {question.answers[1].answer}
                  </Button>
                  <Button
                    multiple3
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[2].id)
                    }}
                  >
                    {question.answers[2].answer}
                  </Button>
                  <Button
                    multiple4
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[2].id)
                    }}
                  >
                    {question.answers[2].answer}
                  </Button>
                </div>
              </Pregutas>
            )
          }
          if (question.type === 'trueAndfalse') {
            return (
              <Pregutas key={question.idBasicQuestion} trueAndfalse>
                <Enunciado key={index}>
                  {question.question}

                </Enunciado>
                <div>
                  <Button
                    true
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[0].id)
                    }}
                  >
                    {question.answers[0].answer}
                  </Button>
                  <Button
                    false
                    onClick={() => {
                      sendQuestions(question.idBasicQuestion, question.answers[1].id)
                    }}
                  >
                    {question.answers[1].answer}
                  </Button>
                </div>
              </Pregutas>
            )
          }
          if (question.type === 'text') {
            return (
              <Pregutas key={question.idBasicQuestion} text>
                <Enunciado key={index}>
                  {question.question}
                </Enunciado>
                <Input
                  type='text' onChange={(e) => {
                    sendQuestions(question.idBasicQuestion, e.target.value, 'text')
                  }}
                />
              </Pregutas>
            )
          }
        })}
      </Container>
    </Layout>
  )
}
