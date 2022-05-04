import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

import Logo from '@assets/logo.png'

import { Headers, Container, Img, Nav } from './styles'

export const Header = () => {
  const { Auth: { isAuthenticated, user } } = useAppContext()
  const [menu, setMenu] = useState([
    {
      name: 'Iniciar Sesion',
      path: '/login'
    },
    {
      name: 'Registrarse',
      path: '/register'
    }
  ])
  useEffect(() => {
    if (isAuthenticated()) {
      setMenu([
        {
          name: 'Inicio',
          path: '/'
        },
        {
          name: 'Perfil',
          path: '/profile'
        },
        {
          name: 'Cerrar Sesión',
          path: '/logout'
        }
      ])
    }
  }, [user])
  return (
    <Headers>
      <Container>
        <Img src={Logo} alt='Logo de la Escuela Tecnologica Instituto Tecnico Central' />
        <Nav>
          {menu.map(({ name, path }) => (
            <Link key={name} to={path}>{name}</Link>
          ))}

        </Nav>
      </Container>
    </Headers>
  )
}
