import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 80vh;
  min-height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: ${props => props.primary ? '#6A3DE8' : 'transparent'};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  border: ${props => props.primary ? 'none' : '2px solid white'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.primary ? '#5a33c7' : 'rgba(255, 255, 255, 0.1)'};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Proteção e tranquilidade para você e sua família</HeroTitle>
        <HeroSubtitle>
          Na M & C Seguros, oferecemos as melhores soluções em seguros para proteger o que é mais importante para você.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton 
            onClick={() => scrollToSection('formulario')} 
            primary
          >
            Solicitar Cotação
          </HeroButton>
          <HeroButton 
            onClick={() => scrollToSection('produtos')}
          >
            Conheça Nossos Produtos
          </HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
