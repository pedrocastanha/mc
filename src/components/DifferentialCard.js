import React from 'react';
import styled from 'styled-components';

const DifferentialCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: linear-gradient(135deg, #5b32e6, #EB663B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

const DifferentialTitle = styled.h3`
  color: #5b32e6;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DifferentialDescription = styled.p`
  color: #6C757D;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const DifferentialCardComponent = ({ icon, title, description }) => {
  return (
    <DifferentialCard>
      <IconContainer>
        {icon}
      </IconContainer>
      <DifferentialTitle>{title}</DifferentialTitle>
      <DifferentialDescription>{description}</DifferentialDescription>
    </DifferentialCard>
  );
};

export default DifferentialCardComponent;

