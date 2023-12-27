import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
        <scrollUp />
        <Footer />
      </main>
    </div>
  )
}

export default App;
