import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente");

        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        < div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">

            <p className='font-bold mb-3 text-slate-700 uppercase'>Nombre: {""}
                <span className='font-normal normal-case'>{nombre}</span></p>


            <p className='font-bold mb-3 text-slate-700 uppercase'>Propietario: {""}
                <span className='font-normal normal-case'>{propietario}</span></p>

            <p className='font-bold mb-3 text-slate-700 uppercase'>email: {""}
                <span className='font-normal normal-case'>{email}</span></p>

            <p className='font-bold mb-3 text-slate-700 uppercase'>fecha alta: {""}
                <span className='font-normal normal-case'>{fecha}</span></p>

            <p className='font-bold mb-3 text-slate-700 uppercase'>sintomas: {""}
                <span className='font-normal normal-case'>{sintomas}</span></p>
            <div className='flex justify-around mt-10'>
                <button
                    type='button'
                    className='py-2 px-5 bg-custom-blue-light hover:bg-custom-blue text-white font-bold
                        uppercase rounded-md'
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600
                         hover:bg-red-800 text-white font-bold
                        uppercase rounded-md'
                    onClick={handleEliminar}
                >Eliminar</button>

            </div>

        </div>
    )
}

export default Paciente
