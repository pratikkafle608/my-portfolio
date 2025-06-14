import React from 'react';
import AOS from 'aos'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // 🟢 Import AOS CSS


function App() {
  // Removed unused loading state

  useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
  }) ;

  // Removed unused loading timeout
  return () => {};
},[]);


  return (
    <div className="App">
      <Header />
      <About />
      <Skills/> 
      <Projects/>
      <Experience/>
      <Contact />
    </div>
  );
}

export default App;