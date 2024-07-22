import React from 'react'
import { FaFacebook, FaTiktok  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className='relative max-w-full'>
      <div className='flex justify-between xl:px-52  px-10 my-24'>
        <div className=''>
          <h2 className='font-bold mb-5 text-lg'>Buscar</h2>
          <ul>
              <li><a href="">Buscar niñeras</a></li>
              <li><a href="">Buscar Familias</a></li>
          </ul>
        </div>
        <div className=''>
          <h2 className='font-bold mb-5 text-lg'>Popular</h2>
          <ul>
              <li><a href="">Niñeras en Lima</a></li>
              <li><a href="">Niñeras en Junin</a></li>
              <li><a href="">Niñeras en Ayacucho</a></li>
          </ul>
        </div>
        <div className=''>
          <h2 className='font-bold mb-5 text-lg'>
              LOGO
          </h2>
          <ul>
              <li><a href="">Sobre Nostros</a></li>
              <li><a href="">Preguntas frecuentes</a></li>
              <li><a href="">Contacto</a></li>
          </ul>
        </div>
        <div className=' '>
          <h2 className='font-bold mb-5 text-lg'>Redes Sociales</h2>
          <ul className='flex flex-row justify-between'>
              <li><a href=""> <FaFacebook className='text-3xl' /> </a></li>
              <li><a href=""> <AiFillInstagram className='text-3xl' /> </a></li>
              <li><a href=""> <FaTiktok className='text-3xl' /> </a></li>
          </ul>
        </div>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 59" fill="none">
       <path d="M0.5 0.998047C253 31.4995 401 57.9995 663 57.9995C969.757 57.9995 1123.5 30 1437 0.998047" stroke="black"/>
      </svg>

      <div className='px-52 text-xl mt-5 mb-5'>
        <p>© 2024 LOGO - Términos y Condiciones  </p>
      </div>
    </footer>
  )
}

export default Footer
