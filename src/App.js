import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Privacidade from './pages/Privacidade';
import SeguroAutomoveis from './pages/SeguroAutomoveis';
import SeguroMoto from './pages/SeguroMoto';
import SeguroResidencial from './pages/SeguroResidencial';
import SeguroEmpresarial from './pages/SeguroEmpresarial';
import SeguroVidaIndividual from './pages/SeguroVidaIndividual';
import SeguroVidaGrupo from './pages/SeguroVidaGrupo';
import SeguroFrota from './pages/SeguroFrota';
import SeguroViagem from './pages/SeguroViagem';
import SeguroCartaVerde from './pages/SeguroCartaVerde';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/seguro-automoveis" element={<SeguroAutomoveis />} />
          <Route path="/seguro-moto" element={<SeguroMoto />} />
          <Route path="/seguro-residencial" element={<SeguroResidencial />} />
          <Route path="/seguro-empresarial" element={<SeguroEmpresarial />} />
          <Route path="/seguro-vida-individual" element={<SeguroVidaIndividual />} />
          <Route path="/seguro-vida-grupo" element={<SeguroVidaGrupo />} />
          <Route path="/seguro-frota" element={<SeguroFrota />} />
          <Route path="/seguro-viagem" element={<SeguroViagem />} />
          <Route path="/seguro-carta-verde" element={<SeguroCartaVerde />} />
        </Routes>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </Router>
  );
}

export default App;


