import Header from '@/components/Header'
import Home from '../pages/Home'
import Footer from '@/components/Footer'
import LogIn from '@/components/modals/LogIn'
import { useState, useEffect } from 'react'
import SignUp from '@/components/modals/SignUp'

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
  calendar: {
    mon: {
      early: boolean
      noon: boolean
      late: boolean
    },
    tue: {
      early: boolean
      noon: boolean
      late: boolean
    },
    wed: {
      early: boolean
      noon: boolean
      late: boolean
    },
    thu: {
      early: boolean
      noon: boolean
      late: boolean
    },
    fri: {
      early: boolean
      noon: boolean
      late: boolean
    },
    sat: {
      early: boolean
      noon: boolean
      late: boolean
    },
    sun: {
      early: boolean
      noon: boolean
      late: boolean
    }
  }
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