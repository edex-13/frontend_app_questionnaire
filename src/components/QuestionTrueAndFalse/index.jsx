import React, { useState } from 'react'
import { alertsWarning } from '@utils/alerts'

import { MdDelete } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'

import { useAppContext } from '@hooks/useAppContext'

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
    <div>
      <input
        onChange={handleChange}
        name='title'
        type='text'
        placeholder='Enunciado de la pregunta'
      />
      <input
        onChange={handleChange}
        name='response'
        type='checkbox'
        placeholder='Respuesta correcta'
      />

      {!isSave && (
        <>
          <button onClick={handleSaveToQuestion}>
            <IoMdAddCircle />
          </button>
          <button onClick={handleRemoveToQuestion}>
            <MdDelete />
          </button>
        </>
      )}
    </div>
  )
}
