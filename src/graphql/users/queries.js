import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query Usuarios(
  $id: ID,
  $correo: String,
  $identificacion: String, 
  $rol: Enum_Rol, 
  $estado: Enum_Estado
) {
  Usuarios(
    _id: $id, 
    correo: $correo, 
    identificacion: $identificacion, 
    rol: $rol, 
    estado: $estado
  ) {
    _id
    nombre
    apellido
    correo
    identificacion
    rol
    estado
  }
}

`;

export { GET_USUARIOS };