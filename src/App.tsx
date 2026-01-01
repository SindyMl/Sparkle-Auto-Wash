import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;