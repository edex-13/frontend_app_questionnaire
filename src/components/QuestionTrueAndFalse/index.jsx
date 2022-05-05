import React, { useState } from 'react'
import { alertsWarning } from '@utils/alerts'

import { MdDelete } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'

import { useAppContext } from '@hooks/useAppContext'

import { Container, Title, Content, Input, Label, Button } from './styles'

export const QuestionTrueAndFalse = ({ id, setQuestionsHtml }) => {
  const [isSave, setIsSave] = useState(false)
  const {
    Questionnaires: { addQuestions }
  } = useAppContext()
  const [questions, setQuestion] = useState({
    title: '',
    response: false
  })
  const handleChange = (e) => {
    console.log(e.target.name)
    const value = e.target.name === 'response' ? e.target.checked : e.target.value

    setQuestion({
      ...questions,
      [e.target.name]: value
    })
  }

  const handleSaveToQuestion = () => {
    if (!questions.title) {
      alertsWarning('Por favor, llena todos los campos.')
      return
    }
    setIsSave(true)

    const data = {
      question: questions.title,
      type: 'trueAndfalse',
      time: 10,
      answers: [
        {
          response: 'true',
          isCorrect: questions.response === true
        },
        {
          response: 'false',
          isCorrect: questions.response === false
        }
      ]
    }
    addQuestions(data)
  }
  const handleRemoveToQuestion = () => {
    setQuestionsHtml((html) => {
      console.log(html)
      return html.filter((item) => item.key !== id)
    })
  }

  return (
    <Container>
      <Title>Pregunta Falso/Verdadero</Title>
      <Content>
        <div className='inputs'>
          <Label>Enunciado de la pregunta:</Label>
          <Input
            onChange={handleChange}
            name='title'
            type='text'
            placeholder='Enunciado de la pregunta'
          />
          <Label>Falso/Verdadero:</Label>

          <Input
            onChange={handleChange}
            name='response'
            type='checkbox'
            placeholder='Respuesta correcta'
          />
        </div>
        <div className='buttons'>

          {!isSave && (
            <>
              <Button save onClick={handleSaveToQuestion}>
                <IoMdAddCircle size='25px' />
              </Button>
              <Button delete onClick={handleRemoveToQuestion}>
                <MdDelete size='25px' />
              </Button>
            </>
          )}
        </div>
      </Content>

    </Container>
  )
}
