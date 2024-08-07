import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


interface SignUpProps {
  showModalSignUp: boolean
  setShowModalSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignUpInput {
  names:string
  lastNames:string
  email:string
  password:string
}


const SignUp = ({setShowModalSignUp, showModalSignUp} : SignUpProps) => {

  const {register, handleSubmit} = useForm<SignUpInput>()
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpInput> = (data) => {
    console.log(data);
    navigate('/signin', {state:data}); // Redirigir a otra ventana después de enviar el formulario
  };

  if (!showModalSignUp) {
    return null; // No renderizar el modal si showModalLogin es falso
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModalSignUp(false);
    }
  };
  
  return (
    <div
    className="fixed inset-0 bg-[#2c4636b2] flex items-center justify-center z-50"
    onClick={handleClose}
  >
    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={() => setShowModalSignUp(false)}
      >
        &times;
      </button>
      <h1 className="text-3xl font-bold mb-4 text-[#38B698]">LOGO</h1>
      <h2 className="text-lg ">Bienvenido a <span className='font-bold'>LOGO</span> </h2>
      <h2 className="text-lg mb-4">¡Registrate!, es gratis</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} action='/toregister' method='POST'>
        <div className="flex space-x-4">
          <input
            {...register("names", {required:true})}
            type="text"
            placeholder="Nombres"
            className="w-full p-2 border rounded"
           
          />
          <input
            {...register("lastNames", {required:true})}
            type="text"
            placeholder="Apellidos"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
           {...register("email", {required:true})}
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            {...register("password", {required:true})}
            type="password"
            placeholder="Contraseña - mínimo 8 dígitos"
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-[#38B698] text-white py-2 rounded-2xl">
          Registrarme
        </button>
      </form>
      <p className="my-4">o continuar con</p>
      <div className="flex justify-center space-x-4">
        <button className="flex px-5 border rounded-3xl hover:bg-blue-200 justify-between items-center gap-4 ">
          <FaFacebookF color='#3b5998'/>
          Facebook
        </button>

        <button 
          className="flex px-5 py-2 border rounded-3xl hover:bg-blue-200 justify-between items-center gap-4 ">
          <FcGoogle />
          Google</button>
      </div>
      <p className="mt-4">Si ya tienes una cuenta, <button className="text-blue-500">Iniciar Sesión</button></p>
    </div>
  </div>
  )
}

export default SignUp
