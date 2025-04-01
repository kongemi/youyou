import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        <section id="home" className="section">
          <Hero />
        </section>
        
        <section id="about" className="section bg-secondary">
          <About />
        </section>
        
        <section id="gallery" className="section">
          <Gallery />
        </section>
        
        <section id="chat" className="section bg-secondary">
          <Chat />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 