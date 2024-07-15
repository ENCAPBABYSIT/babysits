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
            <label htmlFor="">
                <input className='rounded-2xl h-10 w-full px-5' {...register("Buscar")} placeholder='Ingrese la dirección' />
            </label>
            
        </div>
    </form>
  )
}

export default PrincipalSearchEngine