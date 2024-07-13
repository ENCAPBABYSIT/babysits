import React from 'react'
import { useForm } from "react-hook-form"


const PrincipalSearchEngine = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("data", data);
    }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
            <label htmlFor="">
                <input className=' h-10 w-full' {...register("Buscar")} />
            </label>
            
        </div>
        <div className='form-input'>
            <button type='submit'>Buscar</button>
        </div>
    </form>
  )
}

export default PrincipalSearchEngine