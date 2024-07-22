import React from 'react';
import useForm from 'react'
import { useState } from 'react';

interface LogInProps {
  showModalLogin: boolean
  setShowModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  sitters: sitter[];
}

interface sitter{
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

  const LogIn = ({showModalLogin, setShowModalLogin, sitters} : LogInProps) => {

  console.log(sitters)

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');


  if (!showModalLogin) {
    return null; // No renderizar el modal si showModalLogin es falso
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModalLogin(false);
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
          onClick={() => setShowModalLogin(false)}
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4">LOGO</h1>
        <h2 className="text-lg mb-4">Bienvenido de nuevo</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña - mínimo 8 dígitos"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            INGRESAR
          </button>
        </form>
        <p className="my-4">o continuar con</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Facebook</button>
          <button className="bg-red-500  text-white py-2 px-4 rounded hover:bg-red-600">Google</button>
        </div>
        <p className="mt-4">Si aún no tienes una cuenta, <a href="#" className="text-blue-500">Regístrate</a></p>
      </div>
    </div>
  )
}

export default LogIn