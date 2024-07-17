import React from 'react'
import PrincipalSearchEngine from '../components/PrincipalSearchEngine';
import RegisterBtn from '../components/Buttons/RegisterBtn';
import TargNiñera from '../components/TargNiñera';
import guia from '/icons/guia.svg';
import flecha from '/icons/flecha1.svg';
import puntero1 from '/icons/vectores/vector1.svg';
import guia2 from '/icons/vectores/guia2.svg';
import vector2 from '/icons/vectores/vector2.svg';

const Home = () => {
  return (

    <main className='relative  font-fsinlitimes'>
      <section>
        <div className='absolute max-w-screen min-w-full -z-40'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 650"  fill="none">
                  <path d="M0 0H1440V630.485C1250.5 575.492 1018.53 633.975 814 650.5C566.005 670.538 310.181 674.818 0 630.485V0Z" fill="#38B698" fillOpacity="0.19"/>
                  <path d="M0 0H1440V630.485C1440 630.485 1214.04 555.723 1061.5 537.497C835.735 510.521 654 677.082 479 572.524C304 467.966 0 630.485 0 630.485V0Z" fill="#38B698" fillOpacity="0.19"/>
              </svg>
          </div>

          <div className='h-screen'>
              <h2 className='font-extrabold ali text-center text-5xl w-1/2 mx-auto pt-10'>ECONTRAR UNA NIÑERA ES MEJOR CON  NOSOTROS</h2>

              <div className='flex w-1/2 mx-auto justify-between mt-20'>
                <div>
                  <h3 className='text-2xl font-semibold'>BUSCAR NIÑERA</h3>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold'>BUSCAR TRABAJO DE NIÑERA</h3>
                </div>
              </div>
              <div className='mx-auto w-1/4 justify-center mt-6 '>
              <PrincipalSearchEngine/>
              </div>

              <div className='flex justify-center mt-10 items-center'>
                <RegisterBtn/>
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
    </main>

    
  )
}

export default Home
