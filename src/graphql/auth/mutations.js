import { gql } from '@apollo/client';

const REGISTRO = gql`
mutation Registro(
    $nombre: String!,
    $apellido: String!,
    $correo: String!,
    $password: String!,
    $identificacion: String!,
    $rol: Enum_Rol!) {
  registro(
    nombre: $nombre,
    apellido: $apellido,
    correo: $correo,
    password: $password,
    identificacion: $identificacion,
    rol: $rol
    ){
      token
      error
    }
}
`

const LOGIN = gql`
  mutation Login(
    $correo: String!,
    $password: String!
  ) {
  login(
    correo: $correo,
    password: $password
  ) {
    token
    error
  }
}
`

const VALIDATE_TOKEN = gql`
  mutation ValidateToken {
  validateToken {
    token
    error
  }
}
`

export { REGISTRO, LOGIN, VALIDATE_TOKEN };
