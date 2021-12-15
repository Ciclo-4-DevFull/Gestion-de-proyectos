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

const APROBAR_INSCRIPCION = gql`
mutation AprobarInscripcion($id: String!) {
  aprobarInscripcion(_id: $id) {
    _id
    estado
  }
}
`

const RECHAZAR_INSCRIPCION = gql`
mutation RechazarInscripcion($id: String!) {
  rechazarInscripcion(_id: $id) {
    _id
    estado
  }
}
`

export { INSCRIPTION, APROBAR_INSCRIPCION, RECHAZAR_INSCRIPCION };