import { useState } from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import MyWork from './Components/MyWork';
import './App.css'
import Contact from './Components/Contact';

function App() {


  return (
    <>

      <Navbar />
      <Header />
      <About />
      <MyWork />
      <Contact />
    </>
  )
}

export default App
