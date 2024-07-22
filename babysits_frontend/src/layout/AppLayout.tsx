import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import LogIn from '../components/modals/LogIn'
import { useState, useEffect } from 'react'

interface Sitter {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const AppLayout = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [sitters, setSitters] = useState<Sitter[]>([]);

  useEffect(() => {
    // Cargar niñeras
    fetch('/json/dbNiñeras.json')
      .then(response => response.json())
      .then(data => setSitters(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      {showModalLogin && (
        <LogIn 
          showModalLogin = {showModalLogin}
          setShowModalLogin={setShowModalLogin}
          sitters = {sitters}
        />
          
      )}
      
      <Header 
        showModalLogin = {showModalLogin}
        setShowModalLogin={setShowModalLogin}
      />
      <Home/>
      <Footer/>
    </>
  )
}

export default AppLayout