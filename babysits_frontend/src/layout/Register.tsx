const Register = () => {
  return (
    <div className="h-screen bg-green-100 flex flex-col items-center">
      <header className="w-full bg-white flex justify-between items-center py-4 shadow px-56">
        <button className="">VOLVER</button>

        <span className='font-bold text-2xl'>LOGO</span>
        <div className="flex items-center space-x-2">
          
          <div className="w-20 bg-gray-200 h-1 relative">
            <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: '2%' }}></div>
          </div>
          <span>2%</span>
        </div>
      </header>
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold mb-8">DESEO REGISTRARME COMO:</h1>
        <div className="space-y-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-between w-64">
            Padres o Familia
            <span className="ml-auto">&gt;</span>
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-between w-64">
            Niñera
            <span className="ml-auto">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register