import PrincipalSearchEngine from '../components/PrincipalSearchEngine';
import RegisterBtn from '../components/Buttons/RegisterBtn';
import principalBackground from '/img/principalBackground.png';
import TargNiñera from '../components/TargNiñera';

interface homeProps{
  sitters: Sitter[];
}

interface Sitter {
  id: number,
  name: string,
  lastName: string,
  email: string,
  password: string,
  age: number,
  department: string,
  fee: number,
  score: number,
  description:string,
  calendar: sitterCalendar[]

}

interface sitterCalendar{
  MON: sitterShedule[],
  TUE: sitterShedule[],
  WED: sitterShedule[],
  THU: sitterShedule[],
  FRI: sitterShedule[],
  SAT: sitterShedule[],
  SUN: sitterShedule[]
}

interface sitterShedule{
  Early: boolean,
  noon: boolean,
  late: boolean,
}
const Home = ({sitters}: homeProps) => {
  const preguntas = [
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
    "¿La membresía es gratis para cualquiera?",
  ];
  const extras = [
    "Consejos sobre la plataforma",
    "CONSEJO 2",
    "CONSEJO 4",
    "CONSEJO 5",
  ];
  return (

    <main className='font-fsinlitimes'>
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
      <section className=' w-full flex flex-col px-[40px]'>
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

          <div className="flex flex-wrap justify-center gap-10 mt-10 gap-y-24">
            {sitters.map(sitter => (
                <TargNiñera
                key={sitter.id}
                name = {sitter.name}
                age = {sitter.age}
                calendar = {sitter.calendar}
                />
            ))
            }
          </div>
          <div className='flex justify-center my-28 bg-white  '>
            <div className='border-[#38B698] border-[2px] px-5 py-2 rounded-lg' >
              <a className='text-[#38B698] font-bold' href="">MOSTRAR MÁS</a>
            </div>
          </div>

      </section>
      <section>
      <h2 className='text-center px-10 text-2xl font-bold'>PASOS PARA ENCONTRAR UNA NIÑERA O FAMILIA IDEAL PARA TI</h2>

      <div className='flex flex-col sm:flex-row px-10 sm:gap-24 w-auto my-10'>
        <div className='mx-auto  sm:mr-0 min-h-52 min-w-52 rounded-full bg-[#cfffe499] flex items-center sm:my-auto sm:end-full'>
          <div className='mx-auto'>
            1
          </div>
          <div className='mx-auto hidden'>
            2
          </div>
          <div className=' mx-auto hidden'>
            3
          </div>
        </div>
        
        <div className='flex gap-20 sm:ml-0 sm:[&>div>div:first-child]:mx-0 [&>div>div:first-child]:rounded-full [&>div>div:first-child]:w-16 [&>div>div:first-child]:h-16 [&>div>div:first-child]:bg-[#cfffe499] my-10 mx-auto sm:flex-col sm:gap-12'>
          <div className='flex gap-4'>
            <div className='mx-auto flex items-center'>
              <p className='mx-auto'>1</p>
            </div>

            <div className='flex-col w-2/3 hidden sm:block'>
              <h3 className='font-bold'>BUSCA</h3>
              <p className=''>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
            </div>
          </div>

          <div className='flex gap-4 sm:ml-20'>
            <div className='mx-auto flex items-center'>
              <p className='mx-auto'>1</p>
            </div>

            <div className='flex-col gap-3 w-2/3 hidden sm:block'>
              <h3 className='font-bold'>BUSCA</h3>
              <p className=''>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='mx-auto flex items-center'>
              <p className='mx-auto'>1</p>
            </div>

            <div className='flex-col gap-3 w-2/3 hidden sm:block'>
              <h3 className='font-bold'>BUSCA</h3>
              <p className=''>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
            </div>
          </div>
        </div>

        <div className='sm:hidden flex-col'>
          <h3 className='text-center font-bold'>BUSCAR</h3>
          <p className='text-center mx-10'>Filtra según tus gustos o necesidades, revisa perfiles detallados.</p>
        </div>
      </div>
      </section>
      <section>
          <div className="bg-[#e2f4f5] p-8">
            <h2 className="text-center text-xl font-bold mb-2">NUESTRAS RESEÑAS</h2>
            <p className="text-center mb-4">
              Como negocio apoyamos a más de 100 mil familias a conseguir niñeras de forma segura y viceversa.
            </p>
            <div className="flex justify-center mb-10">
              <div className="flex items-center">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span className="text-gray-800 text-lg ml-2">4.5/5</span>
              </div>
              <span className="text-gray-600 ml-2">Más de 5000 reseñas</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
              {Array(5).fill(0).map((_, index) => (
                <div key={index} className="bg-white p-4 rounded shadow lg:max-w-60">
                  <p className="text-gray-800 mb-10 text-justify">
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
      <section>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-2xl font-bold mb-4">DESCUBRE MÁS</h2>
        <div className="flex flex-wrap justify-center mb-4">
             {extras.map((extra, index) => (
              <div key={index} className="w-64 h-64 m-4 bg-white rounded shadow-md hover:shadow-lg">
                <img src="https://via.placeholder.com/200" alt="Card 1" className="w-full h-full object-cover rounded" />
                <p className="text-center p-4">{extra}</p>
              </div>
              ))}
        </div>
      </div>
      </section>
      <section>
        <div className="bg-[#e2f4f5] p-10">
          <div className="flex">
            <div className="w-1/3">
              <h2 className="text-2xl font-bold">PREGUNTAS FRECUENTES</h2>
            </div>
            <div className="w-2/3 space-y-4">
              {preguntas.map((pregunta, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-lg">{pregunta}</span>
                  <hr className="flex-grow ml-4 border-t border-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>

    
  )
}

export default Home
