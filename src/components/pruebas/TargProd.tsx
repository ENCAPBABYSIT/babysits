import React from 'react'

const TargProd = () => {
  return (
    <div className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center">
            <img className="object-cover h-48 w-full" src="ruta/a/la/imagen.jpg" alt="Nombre del producto" />
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nombre del producto</div>
            <p className="text-gray-700 text-base">Descripción breve del producto.</p>
            <p className="text-gray-900 font-bold text-xl mt-4">$XX.XX</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded">Ver más</a>
        </div>
    </div>
  )
}

export default TargProd