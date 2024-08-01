import React from "react";
import { useLocation } from "react-router-dom"
import { Outlet, Link } from 'react-router-dom';

const Register = () => {

  const location = useLocation();
  const data = location.state as {
    names: string;
    lastNames: string;
    email: string;
    password: string;
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <header className="w-full bg-[#38b69988] flex justify-between items-center py-4 shadow px-56">
        <Link to="/">Volver</Link>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <span className='font-extrabold text-3xl'>LOGO</span>
          </div>
          <div className="w-96 bg-gray-200 h-[0.5rem] my-3 relative rounded">
            <div className="absolute top-0 left-0 h-full bg-[#247361] rounded" style={{ width: '20%' }}></div>
          </div>
          <div className="text-center">
            <span>20%</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
        </div>
      </header>

        <Outlet />

    </div>
  )
}

export default Register