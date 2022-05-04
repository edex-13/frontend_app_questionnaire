import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'

import { Container, TableHead, Table, ItemQuestionnaires, Button, Add } from './styles'

export const ListOfQuestionnaires = () => {
  const data = [
    {
      id: 1,
      nombre: 'material-ui',
      codigo: '12334'
    },
    {
      id: 2,
      nombre: 'react',
      codigo: '45534'
    },
    {
      id: 3,
      nombre: 'vue',
      codigo: '45345'
    },
    {
      id: 4,
      nombre: 'angular',
      codigo: '45345'
    }
  ]

  return (
    <>
      <Container>
        <TableHead>
          <h1>Lista de tus cuestionarios</h1>
          <Add>
            <span>Nuevo Cuestionario</span>
            <Button><IoMdAddCircle /></Button>
          </Add>
        </TableHead>
        <Table>
          <ItemQuestionnaires className='cabecera'>
            <div className='cabecera'>Nombre</div>
            <div className='cabecera'>Codigo</div>
            <div className='cabecera'>Borrar</div>
          </ItemQuestionnaires>
          {data.map((item) => (
            <ItemQuestionnaires key={item.id}>
              <div>{item.nombre}</div>
              <div>{item.codigo}</div>
              <div>Borrar</div>
            </ItemQuestionnaires>
          ))}
        </Table>
      </Container>
    </>
  )
}
