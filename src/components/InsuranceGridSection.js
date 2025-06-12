import React from 'react';
import styled from 'styled-components';
import InsuranceCard from './InsuranceCard';

const InsuranceGridContainer = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #5b32e6;
  margin-bottom: 60px;
`;

const InsuranceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ViewAllButton = styled.div`
  text-align: center;
`;

const ViewAllLink = styled.button`
  background: linear-gradient(135deg, #5b32e6, #EB663B);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(91, 50, 230, 0.3);
  }
`;

const InsuranceGridSection = () => {
  const insuranceTypes = [
    {
      title: "Seguro Auto",
      image: "/images/Banners/Auto.jpeg",
      link: "/seguro-automoveis"
    },
    {
      title: "Seguro de Vida",
      image: "/images/Banners/Vida.jpeg",
      link: "/seguro-vida-individual"
    },
    {
      title: "Seguro Residencial",
      image: "/images/Banners/Residencial.jpeg",
      link: "/seguro-residencial"
    },
    {
      title: "Seguro Empresarial",
      image: "/images/Banners/Empresa.jpg",
      link: "/seguro-empresarial"
    },
    {
      title: "Seguro Moto",
      image: "/images/Banners/Moto.jpeg", 
      link: "/seguro-moto"
    },
    {
      title: "Seguro Vida em Grupo",
      image: "/images/Banners/VidaColetiva.jpeg",
      link: "/seguro-vida-grupo"
    },
    {
      title: "Seguro Frota",
      image: "/images/Banners/Frota2.jpg",
      link: "/seguro-frota"
    },
    {
      title: "Seguro Viagem",
      image: "/images/Banners/Viagem.jpg",
      link: "/seguro-viagem"
    },
    {
      title: "Seguro Carta Verde",
      image: "/images/Banners/CartaVerde.jpg",
      link: "/seguro-carta-verde"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <InsuranceGridContainer id="produtos">
      <Container>
        <SectionTitle>Nossos Produtos</SectionTitle>
        <InsuranceGrid>
          {insuranceTypes.map((insurance, index) => (
            <InsuranceCard
              key={index}
              title={insurance.title}
              image={insurance.image}
              link={insurance.link}
            />
          ))}
        </InsuranceGrid>
        <ViewAllButton>
          <ViewAllLink onClick={scrollToContact}>
            Ver todos os produtos
          </ViewAllLink>
        </ViewAllButton>
      </Container>
    </InsuranceGridContainer>
  );
};

export default InsuranceGridSection;

