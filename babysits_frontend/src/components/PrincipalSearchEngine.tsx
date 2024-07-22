import React from 'react'
import { useForm } from "react-hook-form"


const PrincipalSearchEngine = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("data", data);
    }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} >
        <div className='form-input'>
            <legend className='rounded-2xl h-14 px-6 py-2 bg-white' >
                <label >
                    <p className='text-[10px]'>Ingrese la zona de búsqueda</p>
                    <input className='w-full rounded focus:outline-none focus:border-none' {...register("Buscar")} placeholder='Ingrese la dirección' />
                </label>
            </legend>
        </div>
    </form>
  )
}

export default PrincipalSearchEngine