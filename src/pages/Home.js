import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import WelcomeAndLocation from '../components/WelcomeAndLocation';
import InsuranceGridSection from '../components/InsuranceGridSection';
import DifferentialsSection from '../components/DifferentialsSection';
import InsuranceCarousel from '../components/InsuranceCarousel';
import ProtectionSection from '../components/ProtectionSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactForm from '../components/ContactForm';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const HomeContainer = styled.div`
  padding-top: 80px; /* Para compensar o header fixo */
`;

const DirectContactSection = styled.section`
  background-color: #5b32e6;
  padding: 60px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  opacity: 0.9;
`;

const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${props => props.primary ? '#EB663B' : '#25D366'};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    margin-right: 10px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      
      <WelcomeAndLocation />
      
      <InsuranceGridSection />
      
      <DifferentialsSection />
      
      <InsuranceCarousel />
      
      <ProtectionSection />
      
      <TestimonialsCarousel />
      
      <ContactForm id="formulario" />
      
      <DirectContactSection id="contato">
        <ContactContainer>
          <ContactTitle>Fale Conosco Diretamente</ContactTitle>
          <ContactDescription>
            Prefere um contato mais direto? Estamos à disposição para atender você pelos nossos canais de comunicação.
          </ContactDescription>
          <ContactButtons>
            <ContactButton href="tel:+5544997036832" primary>
              <FaPhone /> Ligar Agora
            </ContactButton>
            <ContactButton href="https://wa.me/5544997036832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20M%26C%20Corretora%20e%20gostaria%20de%20fazer%20uma%20cotação." target="_blank">
              <FaWhatsapp /> Conversar no WhatsApp
            </ContactButton>
          </ContactButtons>
        </ContactContainer>
      </DirectContactSection>
    </HomeContainer>
  );
};

export default Home;
