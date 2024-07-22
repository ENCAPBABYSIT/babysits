import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import LogIn from '../components/modals/LogIn'
import { useState, useEffect } from 'react'
import SignUp from '../components/modals/SignUp'

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

const AppLayout = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  const [sitters, setSitters] = useState<Sitter[]>([]);

  useEffect(() => {
    fetch('/json/dbNiñeras.json')
      .then(response => response.json())
      .then(data => setSitters(data))
      .catch(error => console.error('Error fetching users:', error));
      console.log(1)
  }, [sitters.length]);

  return (
    <>
      {showModalLogin && (
        <LogIn 
          showModalLogin = {showModalLogin}
          setShowModalLogin={setShowModalLogin}

          sitters = {sitters}
        />
          
      )}

      {showModalSignUp && (
        <SignUp 
          showModalSignUp = {showModalSignUp}
          setShowModalSignUp={setShowModalSignUp}
        />
          
      )}
      
      <Header 
        showModalLogin = {showModalLogin}
        setShowModalLogin={setShowModalLogin}
        showModalSignUp = {showModalSignUp}
        setShowModalSignUp={setShowModalSignUp}
      />

      <Home
        sitters = {sitters}
      />
      <Footer/>
    </>
  )
}

export default AppLayout