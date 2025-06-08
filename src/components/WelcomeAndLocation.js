import React from 'react';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const WelcomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const WelcomeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 36px;
    color: #333;
    margin-bottom: 30px;
    line-height: 1.2;
  }
  
  p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
  }
`;

const DifferentialsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const DifferentialItem = styled.div`
  background: linear-gradient(135deg, #6A3DE8, #8B5CF6);
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 3px 10px rgba(106, 61, 232, 0.3);
`;

const MapContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const AddressInfo = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  
  h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  p {
    color: #666;
    font-size: 16px;
    margin: 0;
  }
`;

const WelcomeAndLocation = () => {
  const differentials = [
    'Ética',
    'Qualidade', 
    'Assertividade',
    'Comprometimento',
    'Agilidade',
    'Atendimento'
  ];

  return (
    <WelcomeSection>
      <WelcomeContainer>
        <WelcomeContent>
          <TextContent>
            <h2>Bem-vindo à nossa corretora</h2>
            <p>
              A MC Corretora de Seguros conta com profissionais com mais de 15 anos de experiência no mercado. 
              Encontrar o seguro certo para você é nossa especialidade. Nossos diferenciais:
            </p>
            <DifferentialsList>
              {differentials.map((differential, index) => (
                <DifferentialItem key={index}>
                  {differential}
                </DifferentialItem>
              ))}
            </DifferentialsList>
          </TextContent>
          
          <div>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977890089!2d-51.94420892378!3d-23.42420597885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0b3c2c6d5e7%3A0x9c8b8b8b8b8b8b8b!2sAv.%20Brasil%2C%206032%20-%20Zona%2007%2C%20Maring%C3%A1%20-%20PR%2C%2087030-000!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MC Corretora de Seguros"
              ></iframe>
            </MapContainer>
            <AddressInfo>
              <h3>Nossa Localização</h3>
              <p>Avenida Brasil 6032 - Sala 101, Maringá - PR</p>
            </AddressInfo>
          </div>
        </WelcomeContent>
      </WelcomeContainer>
    </WelcomeSection>
  );
};

export default WelcomeAndLocation;

