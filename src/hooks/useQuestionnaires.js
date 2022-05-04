import { useState } from 'react'
import axios from 'axios'

export const useQuestionnaires = (setLoading) => {
  const [questionnaires, setQuestionnaires] = useState([])

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
    await axios.delete(`https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires/${id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    })
    setLoading(false)
    getQuestionnaires()
  }

  return {
    questionnaires,
    getQuestionnaires,
    deleteQuestionnaire
  }
}
