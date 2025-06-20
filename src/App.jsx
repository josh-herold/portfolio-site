import { useState } from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import MyWork from './Components/MyWork';
import './App.css'
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {


  return (
    <>

      <Navbar />
      <Header />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App
