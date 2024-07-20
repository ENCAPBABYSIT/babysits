import React from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import LogIn from '../components/modals/LogIn'
import { useState, useEffect } from 'react'

interface Sitter {
  id: number;
  name: string;
  email: string;
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

  console.log(sitters)

  return (
    <>

      <ul>
        {sitters.map(sitter => (
          <h1 key={sitter.id}>{sitter.name} - {sitter.email}</h1>
        ))}
      </ul>


      {showModalLogin && (
        <LogIn 
          showModalLogin = {showModalLogin}
        
          setShowModalLogin={setShowModalLogin} />
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