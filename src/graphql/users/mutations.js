import { gql } from '@apollo/client';

const EDIT_USUARIO = gql`

mutation EditarUsuario(
  $_id: String!
  $nombre: String!
  $apellido: String!
  $correo: String!
  $identificacion: String!
  $rol: Enum_Rol!
  $estado: Enum_Estado!
){
    editarUsuario(
      _id: $_id,
      nombre: $nombre,
      apellido: $apellido,
      correo: $correo,
      identificacion: $identificacion,
      rol: $rol,
      estado: $estado) {
        _id
        nombre
        apellido
        identificacion
        correo
        rol
        estado
    }
}
`

const ELIMINAR_USUARIO = gql`

mutation Mutation($_id: String!) {
  eliminarUsuario(_id: $_id) {
    _id
  }
}

`
export { EDIT_USUARIO, ELIMINAR_USUARIO };
