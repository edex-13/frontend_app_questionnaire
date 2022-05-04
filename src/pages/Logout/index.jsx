import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

export const Logout = () => {
  const navigate = useNavigate()

  const { Auth: { Logout } } = useAppContext()
  useEffect(() => {
    Logout()
    navigate('/login')
  }, [])

  return (
    <div>index</div>
  )
}
