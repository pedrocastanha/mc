import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 80px 0;
  background-color: ${props => props.index % 2 === 0 ? '#fff' : '#f9f9f9'};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContent = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    margin-top: 30px;
    
    img {
      max-width: 100%;
    }
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: ${props => props.color || '#6A3DE8'};
    
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 30px;
  color: #666;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${props => props.color || '#6A3DE8'};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }
`;

const InsuranceSection = ({ id, title, description, image, color, reverse }) => {
  return (
    <SectionContainer id={id}>
      <ContentContainer reverse={reverse}>
        <TextContent>
          <Title color={color}>{title}</Title>
          <Description>{description}</Description>
          <Button href="#formulario" color={color}>Faça uma cotação</Button>
        </TextContent>
        <ImageContent>
          <img src={image} alt={title} />
        </ImageContent>
      </ContentContainer>
    </SectionContainer>
  );
};

export default InsuranceSection;
