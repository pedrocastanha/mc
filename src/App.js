import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Privacidade from './pages/Privacidade';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
