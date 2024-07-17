import React from 'react'
import PrincipalSearchEngine from '../components/PrincipalSearchEngine';
import RegisterBtn from '../components/Buttons/RegisterBtn';
import TargNiñera from '../components/TargNiñera';
import guia from '/icons/guia.svg';
import flecha from '/icons/flecha1.svg';
import puntero1 from '/icons/vectores/vector1.svg';
import guia2 from '/icons/vectores/guia2.svg';
import vector2 from '/icons/vectores/vector2.svg';
import principalBackground from '/img/principalBackground.png';
import imgNiñera from '/img/niñera.png'
const Home = () => {
  return (

    <main className='  font-fsinlitimes'>
      <section>
          <div
            className="bg-cover bg-center min-h-screen"
            style={{backgroundImage: `url(${principalBackground})` }}
          >
            <div className='h-screen lg:mx-48'>
                <h2 className='font-bold text text-5xl w-1/2  pt-10 text-start'>ECONTRAR UNA NIÑERA ES MEJOR CON  NOSOTROS</h2>

                <div className='w-1/2 flex gap-10 mt-20 '>
                  <div>
                    <h3 className='text-xl font-semibold'>Buscar Niñeras</h3>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold'>Trabajo para niñeras</h3>
                  </div>
                </div>

                <div className='w-1/2 justify-start mt-2 '>
                  <PrincipalSearchEngine/>
                </div>

                <div className=' mt-10 items-center'>
                  <RegisterBtn/>
                </div>            
            </div>
          </div>
      </section>

      <section className=' w-full flex flex-col px-[100px]'>

          <div>
            <h2 className='font-bold text-3xl mt-5'>NIÑERAS DISPONIBLES AHORA</h2>
            <div className='w-full flex items-center justify-between'>
              <div className='flex gap-5 [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-lg [&>button]:border-[2px] ' >
                <button >Ciudad</button>
                <button >Disponibilidad</button>
                <button>Tipo de asistencia</button>
                <button>Tarifa por horas</button>
                <button>Más</button>
              </div>
              <span>Más de 254.100 resultados</span>
            </div>
          </div>
          <div className='mt-5 flex justify-between flex-wrap '>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
            <TargNiñera/>
          </div>

          <div className='flex justify-center  mb-28 bg-white  '>
            <div className='border-[#38B698] border-[2px] px-5 py-2 rounded-lg' >
              <a className='text-[#38B698] font-bold' href="">MOSTRAR MÁS</a>
            </div>
          </div>

      </section>

      <section>
        <div className='flex justify-center'>
              <p className='text-2xl font-semibold'>Cómo encontrar tu niñea o familia ideal para ti</p>
            </div>
            <div className='relative'>
              <img src={guia} alt="" />
              <div className='flex flex-col'>
                <div className='flex absolute top-0 left-0 p-2 bg-opacity-50 mt-52 ml-14'>
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold">1</div>

                  <div className="ml-5">
                    <h3 className="font-bold">Buscar</h3>
                    <p className='max-w-52'>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
                  </div>
                </div>

                <div className='absolute  top-[21rem] left-[10rem] flex gap-0'>
                  <img src={flecha} className='rotate-3' alt="" />
                  <img src={puntero1} alt="" className=''/>
                </div>

                <div className='absolute  top-[25rem] left-[66rem] flex gap-0'>
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold">2</div>
                  <div className="ml-5">
                    <h3 className="font-bold">Buscar</h3>
                    <p className='max-w-52'>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
                  </div>
                </div>

                <div className='absolute top-[32rem] left-[72rem] '>
                  <img src={guia2} className='-rotate-6 ml-4' alt="" />
                  <img src={vector2} alt="" className=''/>
                </div>

                <div className='absolute  top-[70rem] left-[58rem] flex gap-0'>
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold">2</div>
                  <div className="ml-5">
                    <h3 className="font-bold">Buscar</h3>
                    <p className='max-w-52'>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
                  </div>
                </div>
              </div>
              
            </div> 
          </section>
          <section>
          <div className="bg-[#e2f4f5] p-8">
          <h2 className="text-center text-xl font-bold mb-2">NUESTRAS RESEÑAS</h2>
          <p className="text-center mb-4">
            Como negocio apoyamos a más de 100 mil familias a conseguir niñeras de forma segura y viceversa.
          </p>
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-gray-800 text-lg ml-2">4.5/5</span>
            </div>
            <span className="text-gray-600 ml-2">Más de 5000 reseñas</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <p className="text-gray-800 mb-2">
                  “¡Hermosa y segura manera de encontrar niñeras y hacer más fácil el día a día de madres y padres que necesitan ayuda en casa!”
                </p>
                <p className="text-green-500 font-bold">Tony</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-green-500 text-white py-2 px-6 rounded">
              REGISTRARSE
            </button>
          </div>
        </div>
      </section>
    </main>

    
  )
}

export default Home
