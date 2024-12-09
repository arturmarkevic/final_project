import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CarListing from './components/CarListing';
import About from './components/About';
import Duk from './components/Duk';
import Calc from './components/Calc';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
//import Faq from './components/Faq';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Carousel /><CarListing /></>} />
          <Route path="/duk" element={<><Calc /><Duk /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pagal nutylėjimą nukreipiama į pagrindinį puslapį */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
