import { gql } from '@apollo/client'

const CAMBIAR_ESTADO = gql`
mutation EditarProyecto(
    $id: String!, 
    $estado: Enum_EstadoProyecto, 
    $fase: Enum_Fase, 
    $inicio: Date, 
    $fin: Date) {
  editarProyecto(
    _id: $id, 
    estado: $estado, 
    fase: $fase, 
    inicio: $inicio, 
    fin: $fin) {
    nombre
    inicio
    fin
    estado
    fase
  }
}
`
export { CAMBIAR_ESTADO };