const UserType = () => {
  return (
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
  )
}

export default UserType