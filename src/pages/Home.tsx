import React from 'react'
import PrincipalSearchEngine from '../components/PrincipalSearchEngine';
const Home = () => {
  return (

    <main className='relative'>
        <div className='absolute max-w-screen min-w-full -z-40'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 650"  fill="none">
                <path d="M0 0H1440V630.485C1250.5 575.492 1018.53 633.975 814 650.5C566.005 670.538 310.181 674.818 0 630.485V0Z" fill="#38B698" fillOpacity="0.19"/>
                <path d="M0 0H1440V630.485C1440 630.485 1214.04 555.723 1061.5 537.497C835.735 510.521 654 677.082 479 572.524C304 467.966 0 630.485 0 630.485V0Z" fill="#38B698" fillOpacity="0.19"/>
            </svg>
        </div>

        <div className='h-screen'>
            <h2 className='font-extrabold ali text-center text-5xl w-1/2 mx-auto pt-3'>ECONTRAR UNA NIÑERA ES MEJOR CON  NOSOTROS</h2>

            <div className='flex w-1/2 mx-auto justify-between mt-20'>
              <div>
                <h3 className='text-2xl font-semibold'>BUSCAR NIÑERA</h3>
              </div>

              <div>
                <h3 className='text-2xl font-semibold'>BUSCAR TRABAJO DE NIÑERA</h3>
              </div>
            </div>
            <div className='flex mx-auto w-1/2 justify-center'>
             <PrincipalSearchEngine/>
            </div>
            
        </div>
        
    </main>

    
  )
}

export default Home
