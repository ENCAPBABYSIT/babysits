import React from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import { useState } from 'react'

const AppLayout = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const handleChange = () => {
     setShowModalLogin(!showModalLogin); 
     
  }

  console.log(showModalLogin)
  return (
    <>
      <Header 
        setShowModalLogin={setShowModalLogin}
      />
      <Home/>
      <Footer/>
    </>
  )
}

export default AppLayout