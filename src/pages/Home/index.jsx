import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

import { Layout } from '@components/Layout'
import { ListOfQuestionnaires } from '@components/ListOfQuestionnaires'
import { WelcomeUser } from '@components/WelcomeUser'

export const Home = () => {
  const { Auth: { user, isAuthenticated } } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      console.log('isAuthenticated')
      navigate('/login')
    }
  }, [user])
  return (
    <Layout>
      <div className='Home'>
        <WelcomeUser />
        <ListOfQuestionnaires />
      </div>
    </Layout>
  )
}
