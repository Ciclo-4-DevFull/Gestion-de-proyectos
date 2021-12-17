import { useQuery } from '@apollo/client'
import Card from 'components/Card'
import { useUser } from 'context/UserContext'
import { GET_PROJECTS } from 'graphql/projects/queries'
import { GET_USERPROJECTS } from 'graphql/users/queries'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

const MisProyectos = () => {
  const { userData } = useUser()

  return (
    <div className="bg-white-100">
      {
        userData.rol === 'LIDER' ?
          (
            <div>
              <h3 className="mb-2 font-bold leading-7 text-center p-8">Proyectos liderados</h3>
              <ConsultaLider />
            </div>
          ) :
          (
            <div>
              <h3 className="mb-2 font-bold leading-7 text-center p-8">Mis proyectos</h3>
              <ConsultaEstudiante />
            </div>
          )
      }
    </div>
  )
}

const ConsultaEstudiante = () => {

  const { userData } = useUser()
  const [insc, setInsc] = useState([])
  const { data, loading } = useQuery(GET_USERPROJECTS, {
    variables: {
      id: userData._id
    }
  })

  const ruta = '/detalle-proyecto/'

  useEffect(() => {
    if (data) {
      if (data.Usuario.inscripciones) {
        const inscripciones = data.Usuario.inscripciones.filter(inscripcion => inscripcion.estado !== 'PENDIENTE');
        setInsc(inscripciones)
      }
    }
  }, [data])

  if (loading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

  return (
    <div className="flex flex-row flex-wrap">
      {
        insc ?
          insc.map(inscripcion => {
            return (
              <Card key={inscripcion.proyecto._id} ruta={ruta + inscripcion.proyecto._id} nombre={inscripcion.proyecto.nombre} proyecto={inscripcion.proyecto} />
            )
          }) :
          <></>
      }
    </div>
  )

}

const ConsultaLider = () => {

  const { userData } = useUser()
  const [proj, setProj] = useState([])
  const { data, loading } = useQuery(GET_PROJECTS, {
    variables: {
      lider: userData._id
    }
  })

  const ruta = '/detalle-proyecto/'

  useEffect(() => {
    if (data) {
      if (data.Proyectos) {
        const proyectos = data.Proyectos.filter(proyecto => proyecto.estado === 'ACTIVO');
        setProj(proyectos)
      }
    }
  }, [data])

  if (loading) return <ReactLoading type={'spokes'} color={'#95CCBB'} heigth={'10%'} width={'10%'} className='py-40' />

  return (
    <div className="flex flex-row flex-wrap">
      {
        proj ?
          proj.map(proyecto => {
            return (
              <Card key={proyecto._id} ruta={ruta + proyecto._id} nombre={proyecto.nombre} proyecto={proyecto} />
            )
          }) :
          <></>
      }
    </div>
  )
}

export default MisProyectos