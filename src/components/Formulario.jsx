import { useState, useEffect } from 'react'
import Alerta from './Alerta';


function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);


  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)




    }

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className='md:w-1/2 lg-2/5'>
      <h1 className='font-semibold text-slate-700 text-3xl text-center'>Formulario paciente</h1>
      <p className='text-xl mt-5 text-slate-700 text-center mb-10'>Añade pacientes y {""} <span className='text-custom-blue-light font-bold'>administralos</span></p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <Alerta>Todos los campos son obligatorios</Alerta>}
        <div className='mb-5'>
          <label htmlFor="mascota" className="block text-slate-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder='Nombre de la mascota'
            className='border-2 focus:border-blue-sky focus:outline-none w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className="block text-slate-700 uppercase font-bold">
            Nombre propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder='Nombre del propietario'
            className='border-2  focus:border-blue-sky focus:outline-none w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className="block text-slate-700 uppercase font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder='email contacto propietario'
            className='border-2  focus:border-blue-sky focus:outline-none w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className="block text-slate-700 uppercase font-bold">
            Alta
          </label>
          <input
            type="date"
            id="alta"
            className='border-2  focus:border-blue-sky focus:outline-none w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className="block text-slate-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className='w-full bg-white p-2 mt-2 placeholder-slate-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          >
          </textarea>
        </div>
        <div className='flex items-center justify-center'>
          <input
            type="submit"
            className='bg-custom-blue-light w-2/3 p-3 text-white text-center selection:uppercase font-bold rounded-md hover:bg-custom-blue cursor-pointer transition-all'
            value={paciente.id ? "Guardar cambios" : "Agregar paciente"}
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario
