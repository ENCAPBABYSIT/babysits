import React from 'react'
import PrincipalSearchEngine from '../components/PrincipalSearchEngine';
import RegisterBtn from '../components/Buttons/RegisterBtn';
import TargNiñera from '../components/TargNiñera';
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

      </section>
    </main>

    
  )
}

export default Home
