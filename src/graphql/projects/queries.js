import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
query Proyectos(
    $id: ID, 
    $nombre: String, 
    $estado: Enum_EstadoProyecto, 
    $fase: Enum_Fase,
    $lider: String
) {
  Proyectos(
    _id: $id, 
    nombre: $nombre, 
    estado: $estado, 
    fase: $fase,
    lider: $lider
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
      _id
      descripcion
      tipo
    }
    avances {
      _id
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
    inscripciones {
      _id
      estado
      ingreso
      estudiante {
        _id
        nombre
        apellido
      }
    }
  }
}
`;

export { GET_PROJECTS };