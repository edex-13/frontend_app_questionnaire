import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const useAuth = (setLoading) => {
  const [user, setUser] = useState(null)

  const saveUser = (token) => {
    window.localStorage.setItem('token', token)
    setUser(jwt_decode(token))
  }

  const Register = async ({ email, password, name } = {}) => {
    setLoading(true)
    await axios.post('https://intense-caverns-71243.herokuapp.com/api/v1/auth/register', { email, password, name })
    setLoading(false)
  }

  const Login = async ({ email, password }) => {
    console.log('login')
    setLoading(true)
    const { data } = await axios.post('https://intense-caverns-71243.herokuapp.com/api/v1/auth/login', {
      email,
      password
    })
    saveUser(data.message.token)
    setLoading(false)
  }

  const Logout = () => {
    window.localStorage.removeItem('token')
    setUser(null)
  }
  const isAuthenticated = () => {
    const token = window.localStorage.getItem('token')
    if (token && !user) {
      setUser(jwt_decode(token))
    }
    return !!token
  }

  return {
    user,
    Register,
    Login,
    Logout,
    isAuthenticated
  }
}
