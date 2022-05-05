import React, { useState } from 'react'
import { alertsWarning } from '@utils/alerts'

import { MdDelete } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'

import { useAppContext } from '@hooks/useAppContext'

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
      return html.filter((item) => item.key !== id)
    })
  }

  return (
    <div>
      <input onChange={handleChange} name='title' type='text' placeholder='Enunciado de la pregunta' />
      <input onChange={handleChange} name='response' type='text' placeholder='Respuesta correcta' />

      {
        !isSave && (
          <>
            <button onClick={
                handleSaveToQuestion
              }
            >
              <IoMdAddCircle />
            </button>
            <button onClick={
              handleRemoveToQuestion
            }
            ><MdDelete />
            </button>
          </>
        )
      }

    </div>
  )
}
