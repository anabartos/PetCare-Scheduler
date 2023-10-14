import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLs)
    }
    obtenerLs();
  }, []);


  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes])


  const eliminarPaciente = (id) => {
    Swal.fire({
      title: '¿Deseas eliminar este paciente?',
      icon: 'question', 
      showCancelButton: true,
      confirmButtonColor: "rgb(220 38 38 / var(--tw-bg-opacity))",
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: "#155e75",
      customClass: {
        container: 'mi-modal-estilizado', 
        confirmButton: 'mi-boton-confirm', 
        cancelButton: 'mi-boton-cancel', 
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
        setPacientes(pacientesActualizados);
        console.log('Paciente eliminado');
      } else {
        console.log('No se eliminó al paciente');
      }
    });
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
