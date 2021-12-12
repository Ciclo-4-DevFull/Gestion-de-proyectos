import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
query Proyectos(
    $id: ID, 
    $nombre: String, 
    $estado: Enum_EstadoProyecto, 
    $fase: Enum_Fase
) {
  Proyectos(
    _id: $id, 
    nombre: $nombre, 
    estado: $estado, 
    fase: $fase
    ) {
    _id
    nombre
    presupuesto
    inicio
    fin
    estado
    fase
    lider {
      nombre
      apellido
      correo
    }
    objetivos {
      descripcion
      tipo
    }
    avances {
      fecha
      descripcion
      creadoPor {
        _id
        apellido
        nombre
        rol
      }
      observaciones
    }
  }
}
`;

export { GET_PROJECTS };