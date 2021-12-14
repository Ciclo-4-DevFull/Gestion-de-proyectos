import { useQuery } from '@apollo/client'
import Card from 'components/Card'
import { useUser } from 'context/UserContext'
import { GET_USERPROJECTS } from 'graphql/users/queries'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

const MisProyectos = () => {
  const { userData } = useUser()
  const [insc, setInsc] = useState([])
  const { data, loading } = useQuery(GET_USERPROJECTS, {
    variables: {
      id: userData._id
    }
  })

  //var idProyecto = '61b05e0e097ea0203f1ba914'
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
    <div className="bg-white-100">
      <h3 className="mb-2 font-bold leading-7 text-center p-8">Mis proyectos</h3>
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
    </div>
  )
}

export default MisProyectos
