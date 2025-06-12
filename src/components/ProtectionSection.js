import React from 'react';
import styled from 'styled-components';

const ProtectionContainer = styled.section`
  position: relative;
  height: 500px;
  background-image: url('/images/protection-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(91, 50, 230, 0.8), rgba(235, 102, 59, 0.8));
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
`;

const ProtectionTitle = styled.h2`
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProtectionButton = styled.a`
  display: inline-block;
  padding: 18px 40px;
  background-color: #EB663B;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: #d55a32;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(235, 102, 59, 0.4);
  }
`;

const ProtectionSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ProtectionContainer>
      <ContentContainer>
        <ProtectionTitle>Mais que seguro, proteção financeira!</ProtectionTitle>
        <ProtectionButton href="#contato" onClick={scrollToContact}>
          Fale com um de nossos especialistas!
        </ProtectionButton>
      </ContentContainer>
    </ProtectionContainer>
  );
};

export default ProtectionSection;

