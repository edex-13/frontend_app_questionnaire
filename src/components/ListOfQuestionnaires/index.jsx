import React, { useEffect } from 'react'
import { MdDelete } from 'react-icons/md'

import { IoMdAddCircle } from 'react-icons/io'
import { useAppContext } from '@hooks/useAppContext'

import {
  Container,
  TableHead,
  Table,
  ItemQuestionnaires,
  Button,
  Add
} from './styles'

export const ListOfQuestionnaires = () => {
  const {
    Questionnaires: { questionnaires, getQuestionnaires, deleteQuestionnaire },
    loading
  } = useAppContext()
  const getQuestionnairesData = async () => {
    await getQuestionnaires()
  }
  useEffect(() => {
    getQuestionnairesData()
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  const handleDelete = async (id) => {
    await deleteQuestionnaire(id)
  }

  return (
    <>
      <Container>
        <TableHead>
          <h1>Lista de tus cuestionarios</h1>
          <Add>
            <span>Nuevo Cuestionario</span>
            <Button>
              <IoMdAddCircle />
            </Button>
          </Add>
        </TableHead>
        {questionnaires.length === 0
          ? (
            <div>No hay cuestionarios , crea el primero.</div>
            )
          : (
            <Table>
              <ItemQuestionnaires className='cabecera'>
                <div className='cabecera'>Nombre</div>
                <div className='cabecera'>Codigo</div>
                <div className='cabecera'>Borrar</div>
              </ItemQuestionnaires>
              {questionnaires.map((item) => (
                <ItemQuestionnaires key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.code}</div>
                  <div>
                    <MdDelete onClick={() => handleDelete(item.id)} />
                  </div>
                </ItemQuestionnaires>
              ))}
            </Table>
            )}
      </Container>
    </>
  )
}
