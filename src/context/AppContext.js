import React, { createContext, useState } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useQuestionnaires } from '@hooks/useQuestionnaires'

export const Context = createContext()

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const { ...Auth } = useAuth(setLoading)
  const { ...Questionnaires } = useQuestionnaires(setLoading)
  return (
    <Context.Provider value={{
      loading,
      Auth,
      Questionnaires
    }}
    >
      {children}
    </Context.Provider>
  )
}
