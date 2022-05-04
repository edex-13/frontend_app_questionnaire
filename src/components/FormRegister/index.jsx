import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Button, Input, Text } from './styles'

import { useAppContext } from '@hooks/useAppContext'

import { alertsError, alertsSuccess, alertsWarning } from '@utils/alerts'

export const FormRegister = () => {
  const {
    Auth: { Register }
  } = useAppContext()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.name || !user.email || !user.password || !user.passwordConfirm) {
      alertsWarning('Por favor, llena todos los campos.')
      return
    }
    if (user.password !== user.passwordConfirm) {
      alertsWarning('Las contraseñas no coinciden.')
      return
    }
    try {
      await Register(user)
      alertsSuccess('Usuario registrado correctamente. Inicia sesión.')
      setUser({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      })
    } catch (error) {
      console.log(error.response.data.message[0])
      alertsError(`El correo ya está registrado. o **${error.response.data.message[0]}**`)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange} name='email' type='email' placeholder='Email' />
      <Input onChange={handleChange} name='name' type='name' placeholder='Nombre' />
      <Input onChange={handleChange} name='password' type='password' placeholder='Contraseña' />
      <Input onChange={handleChange} name='passwordConfirm' type='password' placeholder='Confirmación de Contraseña' />
      <Button type='submit'>Registrase</Button>
      <Text>¿Ya tienes cuenta? , <Link to='/login'>Inicia Sesión</Link>.</Text>
    </form>
  )
}
