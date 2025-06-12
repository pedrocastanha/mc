import React from 'react';
import styled from 'styled-components';
import { FaCar, FaShieldAlt, FaFire } from 'react-icons/fa';

const CharacteristicCard = styled.div`
  background: linear-gradient(135deg, #5b32e6, #EB663B);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  color: white;
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(91, 50, 230, 0.3);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #EB663B;
`;

const CharacteristicTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CharacteristicDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.95;
`;

const CharacteristicCardComponent = ({ icon, title, description }) => {
  return (
    <CharacteristicCard>
      <IconContainer>
        {icon}
      </IconContainer>
      <CharacteristicTitle>{title}</CharacteristicTitle>
      <CharacteristicDescription>{description}</CharacteristicDescription>
    </CharacteristicCard>
  );
};

export default CharacteristicCardComponent;

