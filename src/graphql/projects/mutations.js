import { gql } from '@apollo/client'

const EDITAR_PROYECTO = gql`
mutation EditarProyecto($id: String!, $nombre: String, $presupuesto: Float) {
    editarProyecto(
      _id: $id, 
      nombre: $nombre, 
      presupuesto: $presupuesto
      ) {
      _id
      nombre
      presupuesto
    }
  }
`
export { EDITAR_PROYECTO };