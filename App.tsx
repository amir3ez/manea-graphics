
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
