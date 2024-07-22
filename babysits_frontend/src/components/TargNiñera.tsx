import imgNiñera from '/img/Gradient.png'
import start from '/icons/start.svg'

interface targNiñeraProps{
  name : string,
  age : number,
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

const TargNiñera = ({name, age, calendar} : targNiñeraProps) => {


  console.log(calendar.length)

  return (
    //max-w-sm mx-2 my-6 bg-white shadow-lg rounded-lg overflow-hidden
    <div className='flex flex-col w-[280px] max-h-[400px] shrink-0 bg-[#f3f3f349] rounded-[24px] '>
              <div className='flex flex-col  items-start gap-1 flex-grow flex-shrink-0 basis-0 rounded-[24px] bg-white shadow-sm border'>
                <div className='relative w-full'>
                  <img src={imgNiñera} className='w-full rounded-t-[24px]' alt="" />
                  <p className='absolute top-0 left-0 p-2 bg-opacity-50 text-white text-2xl'>{name} <br /> ({age}) <br />Lima</p>
                </div>
                <div className='relative w-full text-start flex items-center justify-between px-[12px]'>
                  <div className='flex items-center'>
                    <p className='text-[#38B698] text-2xl font-bold'>NIÑERA</p>
                  </div>

                  <div className='flex items-center'>
                    <img src={start} className='mr-2' alt="" />
                    <p className='text-[#38B698] text-2xl'>5/5</p>
                  </div>
                </div>

                <div className='px-[12px]'>
                  <p>S/. 10.00 Hora</p>
                </div>
                <div className='mt-0 text-sm text-justify px-[12px]'>
                  <p>Hola, soy Luciana, estudiante de psicología, me encanta estar con los niños.</p>
                </div>

                <div className="w-full flex justify-between items-center bg-[#E6F9F4] rounded-b-2xl p-1 mt-4">


                    <div className="flex flex-col items-center">
                      <p className="text-sm font-semibold">LUN</p>
                      <p className="text-sm">✔️</p>
                    </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">LUN</p>
                    <p className="text-sm">✔️</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">MAR</p>
                    <p className="text-sm">❌</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">MIE</p>
                    <p className="text-sm">❌</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">JUE</p>
                    <p className="text-sm">❌</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">VIE</p>
                    <p className="text-sm">❌</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">SAB</p>
                    <p className="text-sm">✔️</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold">DOM</p>
                    <p className="text-sm">✔️</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default TargNiñera
