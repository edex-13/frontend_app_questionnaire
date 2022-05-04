import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

import { Button, Input, Text } from './styles'
import { alertsError, alertsSuccess, alertsWarning } from '@utils/alerts'

export const FormLogin = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { Auth: { user: user2, Login, isAuthenticated } } = useAppContext()

  useEffect(() => {
    if (isAuthenticated()) {
      console.log('isAuthenticated')
      navigate('/')
    }
  }, [user2])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      alertsWarning('Por favor, llena todos los campos.')
      return
    }
    try {
      await Login(user)
      alertsSuccess('Iniciaste sesión correctamente.')
    } catch (error) {
      alertsError(`El correo o la contraseña no coinciden. o **${error.response.data.message}**`)
    }
  }
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input required name='email' type='email' placeholder='Email' onChange={handleChange} />
      <Input required name='password' type='password' placeholder='Contraseña' onChange={handleChange} />
      <Button type='submit'>Iniciar sesión</Button>
      <Text>¿No tienes cuentas? , <Link to='/register'>Registrate</Link>.</Text>
    </form>
  )
}
