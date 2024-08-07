import React from 'react'
import { CiMenuBurger } from "react-icons/ci";


interface ButtonProps {
  /** El texto que se mostrará dentro del botón */
  showModalLogin: boolean,
  showModalSignUp: boolean,
  setShowModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  /** Si se puede interactuar con el botón */
}


const Header = ({setShowModalLogin, showModalLogin, setShowModalSignUp, showModalSignUp} : ButtonProps) => {

  return (
    <header className='w-[100%] px-10 shadow-md sticky top-0 z-1'>
        <div className='flex justify-between xl:w-1/8 items-center '>
          <div className='self-center p-5 mx-auto lg:mx-0'>
            <a href="" className='text-3xl font-bold '>LOGO</a>
          </div>
          <CiMenuBurger size="30" className='md:hidden'/>
          <div className='mx-auto lg:mx-0'>
            <ul 
            className='flex gap-10 items-center justify-center py-5 text-center [&>li>a]:block [&>li>a]:transition-all [&>li>a]:duration-200 [&>li>a]:ease-in-out
            menu custom950px:flex custom:flex-col custom:bg-[#151418] custom:items-start custom:absolute custom:top-[70px] custom:left-0 custom:w-full custom:z-[1] custom:scale-y-0 custom:transform-gpu custom:origin-top custom:transition-transform custom:duration-300 custom:ease-in-out custom:shadow-custom'>
              <li><a href="">¿Cómo funciona?</a></li>
              <li><a href="">Planes</a></li>
              <li className='rounded-[30px] border-[4px] border-solid border-[#38B698] p-1 px-3 center'>
                <button
                  onClick={() => setShowModalLogin(!showModalLogin)}
                >ACCEDER</button>
              </li>
              <li>
                <button
                  className='rounded-[30px] bg-[#38B698]  border-[4px] border-solid border-[#38B698] p-1 px-3 center text-white'
                  onClick={() => setShowModalSignUp(!showModalSignUp)}>REGISTRARME</button></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header
