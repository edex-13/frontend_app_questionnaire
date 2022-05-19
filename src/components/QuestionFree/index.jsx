import React, { useState } from 'react'
import { alertsWarning } from '@utils/alerts'

import { MdDelete } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'

import { useAppContext } from '@hooks/useAppContext'

import { Container, Content, Input, Title, Label, Button } from './styles'

export const QuestionFree = ({ id, setQuestionsHtml }) => {
  const [isSave, setIsSave] = useState(false)
  const {
    Questionnaires: { addQuestions }
  } = useAppContext()
  const [questions, setQuestion] = useState({
    title: '',
    response: ''
  })
  const handleChange = (e) => {
    setQuestion({
      ...questions,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveToQuestion = () => {
    if (!questions.title || !questions.response) {
      alertsWarning('Por favor, llena todos los campos.')
      return
    }
    setIsSave(true)

    const data =
      {
        question: questions.title,
        type: 'text',
        time: 10,
        answers: [
          {
            response: questions.response,
            isCorrect: true
          }
        ]
      }
    addQuestions(data)
  }
  const handleRemoveToQuestion = () => {
    setQuestionsHtml((html) => {
      console.log(html)
      return html.filter((item) => item.key != id)
    })
  }

  return (
    <Container>
      <Title>Pregunta Libre</Title>
      <Content>

        <div className='inputs'>
          <Label>Enunciado de la pregunta:</Label>
          <Input onChange={handleChange} name='title' type='text' placeholder='Enunciado de la pregunta' />
          <Label>Respuesta:</Label>
          <Input onChange={handleChange} name='response' type='text' placeholder='Respuesta correcta' />
        </div>
        <div className='buttons'>
          {
        !isSave && (
          <>
            <Button
              save onClick={
                handleSaveToQuestion
              }
            >
              <IoMdAddCircle size='25px' />
            </Button>
            <Button
              delete onClick={
              handleRemoveToQuestion
            }
            ><MdDelete size='25px' />
            </Button>
          </>
        )
      }
        </div>
      </Content>

    </Container>
  )
}
