import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
query Inscripciones(
    $id: ID
    $estado: Enum_EstadoInscripcion
) {
    Inscripciones(
        _id: $id,
        estado: $estado
    ){
        _id
        estado
        ingreso
    }
}
`

export { GET_INSCRIPCIONES };