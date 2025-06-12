import React from 'react';
import styled from 'styled-components';
import CharacteristicCard from './CharacteristicCard';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
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

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1.3rem;
  margin-bottom: 30px;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const InfoSection = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const InfoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const InfoText = styled.div`
  ${props => props.reverse && 'order: 2;'}
  
  @media (max-width: 768px) {
    order: unset;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #5b32e6;
  margin-bottom: 25px;
`;

const InfoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6C757D;
  margin-bottom: 30px;
`;

const InfoImage = styled.div`
  ${props => props.reverse && 'order: 1;'}
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    order: unset;
  }
`;

const CharacteristicsSection = styled.section`
  padding: 80px 0;
  background-color: #F8F9FA;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #5b32e6;
  margin-bottom: 60px;
`;

const CharacteristicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CTASection = styled.div`
  text-align: center;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 20px 50px;
  background: linear-gradient(135deg, #5b32e6, #EB663B);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(91, 50, 230, 0.4);
  }
`;

const InsurancePageLayout = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  infoTitle, 
  infoDescription, 
  infoImage, 
  characteristics,
  reverse = false 
}) => {
  const scrollToContact = (e) => {
    e.preventDefault();
    // Redireciona para a home e depois para a seção de contato
    window.location.href = '/#contato';
  };

  return (
    <PageContainer>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <InfoSection>
        <Container>
          <InfoContent>
            <InfoText reverse={reverse}>
              <InfoTitle>{infoTitle}</InfoTitle>
              <InfoDescription>{infoDescription}</InfoDescription>
            </InfoText>
            <InfoImage reverse={reverse}>
              <img src={infoImage} alt={title} />
            </InfoImage>
          </InfoContent>
        </Container>
      </InfoSection>

      <CharacteristicsSection>
        <Container>
          <SectionTitle>Tipos de Cobertura</SectionTitle>
          <CharacteristicsGrid>
            {characteristics.map((characteristic, index) => (
              <CharacteristicCard
                key={index}
                icon={characteristic.icon}
                title={characteristic.title}
                description={characteristic.description}
              />
            ))}
          </CharacteristicsGrid>
          <CTASection>
            <CTAButton href="/#contato" onClick={scrollToContact}>
              Fazer cotação agora!
            </CTAButton>
          </CTASection>
        </Container>
      </CharacteristicsSection>
    </PageContainer>
  );
};

export default InsurancePageLayout;

