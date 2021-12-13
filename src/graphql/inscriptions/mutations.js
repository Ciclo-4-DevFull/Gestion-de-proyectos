import { gql } from '@apollo/client'

const INSCRIPTION = gql`
mutation CrearInscripcion(
    $proyecto: String!, 
    $estudiante: String!
) {
  crearInscripcion(
    proyecto: $proyecto, 
    estudiante: $estudiante
    ) {
    _id
    estado
    ingreso
    egreso
  }
}
`

export { INSCRIPTION };