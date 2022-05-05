import React, { useState } from 'react'
import { alertsWarning } from '@utils/alerts'

import { MdDelete } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'

import { useAppContext } from '@hooks/useAppContext'

export const QuestionMultipleChoice = ({ id, setQuestionsHtml }) => {
  const [isSave, setIsSave] = useState(false)
  const {
    Questionnaires: { addQuestions }
  } = useAppContext()
  const [questions, setQuestion] = useState({
    title: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    response1: false,
    response2: false,
    response3: false,
    response4: false
  })
  const handleChange = (e) => {
    console.log(e.target.name)
    const value =
      e.target.name === 'response' ? e.target.checked : e.target.value

    setQuestion({
      ...questions,
      [e.target.id]: value
    })
  }

  const handleSaveToQuestion = () => {
    if (!questions.title || !questions.question1 || !questions.question2 || !questions.question3 || !questions.question4) {
      alertsWarning('Por favor, llena todos los campos.')
      return
    }
    if (!questions.response1 && !questions.response2 && !questions.response3 && !questions.response4) {
      alertsWarning('Por favor, selecciona la respuesta correcta.')
      return
    }

    setIsSave(true)

    const data = {
      question: questions.title,
      type: 'multipleChoice',
      time: 10,
      answers: [
        {
          response: questions.question1,
          isCorrect: questions.response1
        },
        {
          response: questions.question2,
          isCorrect: questions.response2
        },
        {
          response: questions.question3,
          isCorrect: questions.response3
        },
        {
          response: questions.question4,
          isCorrect: questions.response4
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
        id='title'
        type='text'
        placeholder='Enunciado de la pregunta'
      />
      <div>
        <div>
          <input
            onChange={handleChange}
            id='question1'
            type='text'
            placeholder='Enunciado de la pregunta'
          />
          <input
            onChange={handleChange}
            name='response'
            id='response1'
            type='checkbox'
            placeholder='Respuesta correcta'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id='question2'
            type='text'
            placeholder='Enunciado de la pregunta'
          />
          <input
            onChange={handleChange}
            name='response'
            id='response2'
            type='checkbox'
            placeholder='Respuesta correcta'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id='question3'
            type='text'
            placeholder='Enunciado de la pregunta'
          />
          <input
            onChange={handleChange}
            name='response'
            id='respons3'
            type='checkbox'
            placeholder='Respuesta correcta'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id='question4'
            type='text'
            placeholder='Enunciado de la pregunta'
          />
          <input
            onChange={handleChange}
            name='response'
            id='response4'
            type='checkbox'
            placeholder='Respuesta correcta'
          />
        </div>
      </div>

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
