import React from 'react'

const Alerta = ({children}) => {
  return (

    <div className='bg-red-800 uppercase text-center text-white p-5 font-bold m-3 rounded-md'>
        <p>{children}</p>
    </div>

  )
}

export default Alerta
