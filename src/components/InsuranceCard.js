import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
  display: block;
  position: relative;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(91, 50, 230, 0.8), rgba(235, 102, 59, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${CardContainer}:hover & {
    background: linear-gradient(135deg, rgba(91, 50, 230, 0.9), rgba(235, 102, 59, 0.9));
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const InsuranceCard = ({ title, image, link }) => {
  return (
    <CardContainer to={link}>
      <CardBackground image={image} />
      <CardOverlay>
        <CardTitle>{title}</CardTitle>
      </CardOverlay>
    </CardContainer>
  );
};

export default InsuranceCard;

