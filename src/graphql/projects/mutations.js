import { gql } from '@apollo/client'

const EDITAR_PROYECTO = gql`
mutation EditarProyecto($id: String!, $nombre: String, $presupuesto: Float, $objetivos: [crearObjetivo]) {
    editarProyecto(
      _id: $id, 
      nombre: $nombre, 
      presupuesto: $presupuesto,
      objetivos: $objetivos
      ) {
      _id
      nombre
      presupuesto
      objetivos {
        _id
        descripcion
        tipo
      }
      estado
      fase
    }
  }
`

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

const CREATE_PROJECT = gql`
mutation CrearProyecto(
  $nombre: String!, 
  $presupuesto: Float!, 
  $lider: String!, 
  $objetivos: [crearObjetivo]!
) {
  crearProyecto(
    nombre: $nombre, 
    presupuesto: $presupuesto, 
    lider: $lider, 
    objetivos: $objetivos
  ) {
    nombre
    estado
  }
}
`


export { CAMBIAR_ESTADO, CREATE_PROJECT, EDITAR_PROYECTO };