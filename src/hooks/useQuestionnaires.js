import { useState } from 'react'
import axios from 'axios'

export const useQuestionnaires = (setLoading) => {
  const [questionnaires, setQuestionnaires] = useState([])

  const getQuestionnaires = async () => {
    setLoading(true)
    const { data } = await axios.get('https://intense-caverns-71243.herokuapp.com/api/v1/questionnaires', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    })
    setQuestionnaires(data.message)
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
