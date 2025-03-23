import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import MyWork from './components/mywork/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
