function App() {

  return (
    <>
      <header className='max-w-screen px-10 shadow-md'>
        <div className='flex flex-wrap justify-between xl:w-1/8'>
          <div className='self-center p-5 mx-auto lg:mx-0'>
            <a href="" className='text-3xl font-bold '>LOGO</a>
          </div>
          <div className='mx-auto lg:mx-0'>
            <ul className='flex gap-10 self-center items-center py-5 text-center'>
              <li><a href="">¿Cómo funciona?</a></li>
              <li><a href="">Nuestros Planes</a></li>
              <li className='rounded-[30px] border-[4px] border-solid border-[#38B698] p-1 px-3 center'><a href="">ACCEDER</a></li>
              <li><a href=""  className='rounded-[30px] bg-[#38B698]  border-[4px] border-solid border-[#38B698] p-1 px-3 center text-white'>REGISTRARME</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
