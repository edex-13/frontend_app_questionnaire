import { useState } from 'react'
import axios from 'axios'

export const useQuestionnaires = (setLoading) => {
  const [questionnaires, setQuestionnaires] = useState([])
  const [newQuestions, setNewQuestions] = useState([])
  const [schema, setSchema] = useState([])
  const [response, setResponse] = useState({
    nameUser: '',
    idQuestionnaire: '',
    answers: []
  })

  const getQuestionnaires = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      const a = data.message.map(async questionnaire => {
        const { data } = await axios.get(`https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires/result/${questionnaire.id}`)
        console.log(data)
        return { ...questionnaire, result: data.message.length }
      })
      setQuestionnaires(await Promise.all(a))
    } catch (err) {
      if (err.response.status === 401) {
        window.localStorage.removeItem('token')
        window.location.reload()
      }
      throw err
    }
    setLoading(false)
  }
  const deleteQuestionnaire = async (id) => {
    setLoading(true)
    try {
      await axios.delete(`https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires/${id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      getQuestionnaires()
    } catch (err) {
      if (err.response.status === 401) {
        window.localStorage.removeItem('token')
        window.location.reload()
      }
      throw err
    }

    setLoading(false)
  }
  const addQuestions = (question) => {
    setNewQuestions([...newQuestions, question])
  }
  const createQuestionnaire = async (questionnaire) => {
    setLoading(true)
    try {
      await axios.post('https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires', questionnaire, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
    } catch (err) {
      if (err.response.status === 401) {
        window.localStorage.removeItem('token')
        window.location.reload()
      }
      throw err
    }
    setLoading(false)
  }
  const getQuestions = () => newQuestions

  const getQuestionnaireToAnswer = async ({ email, code }) => {
    setLoading(true)

    const { data } = await axios.get(`https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires/reply/${code}`)
    setSchema(data.message)
    setResponse({

      nameUser: email,
      idQuestionnaire: data.message.id
    })
    setLoading(false)
    return data.message
  }
  const responseQuestionnaire = async (response) => {
    setLoading(true)
    try {
      console.log(response)
      const a = await axios.post('https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires/reply', response)
      return a.data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    questionnaires,
    responseQuestionnaire,
    getQuestions,
    schema,
    response,
    setResponse,
    createQuestionnaire,
    getQuestionnaires,
    deleteQuestionnaire,
    addQuestions,
    getQuestionnaireToAnswer
  }
}
