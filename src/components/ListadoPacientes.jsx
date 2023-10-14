import Paciente from './Paciente'


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-semibold text-slate-700 text-3xl text-center">Listado Pacientes</h2>
          <p className='text-xl mt-5 text-slate-700 text-center mb-10'>Administra tus {""}
            <span className='text-custom-blue-light font-bold '>Pacientes y citas</span>
          </p>
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>

          <h2 className="font-semibold text-slate-700 text-3xl text-center">No hay pacientes</h2>
          <p className='text-xl mt-5 text-slate-700 text-center mb-10'>Comienza agregrando pacientes {""}
            <span className='text-custom-blue-light font-bold '>y aparecerán aqui</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
