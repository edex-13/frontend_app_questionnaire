import { useContext } from 'react'
import { Context } from '@context/AppContext'

export const useAppContext = () => {
  const context = useContext(Context)

  if (!context) throw new Error('There is no Auth provider')
  return context
}
