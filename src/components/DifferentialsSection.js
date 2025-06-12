import React from 'react';
import styled from 'styled-components';
import { FaClock, FaLaptop, FaUsers, FaThLarge, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import DifferentialCard from './DifferentialCard';

const DifferentialsContainer = styled.section`
  padding: 80px 0;
  background-color: #F8F9FA;
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

const DifferentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <FaClock />,
      title: "Suporte 24H",
      description: "Disponibilizamos atendimento 24h, para que nossos segurados possam receber auxílio a qualquer momento, sem dificuldades ou espera."
    },
    {
      icon: <FaLaptop />,
      title: "Gestão Inovadora Tecnologia",
      description: "Trazemos ambiente e ferramentas modernas, com o objetivo de otimizar o trabalho da equipe e promover a acessibilidade dos clientes."
    },
    {
      icon: <FaUsers />,
      title: "Equipe Especializada",
      description: "Nossos colaboradores possuem experiência e conhecimento no mercado, o que garante e valoriza o atendimento."
    },
    {
      icon: <FaThLarge />,
      title: "Diversidade de Produtos",
      description: "Buscamos oferecer um leque variado de produtos, com o objetivo de atender todas as possíveis necessidades de nossos clientes."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Relacionamento Local com Solidez Global",
      description: "Apesar de mantermos um foco regional, nossas estratégias e métodos são processos feitos na base de pesquisas amplas e ferramentas tecnológicas."
    },
    {
      icon: <FaHeart />,
      title: "Atendimento Humanizado",
      description: "Enfatizamos a simpatia e atenção, buscando entender nossos segurados e suas necessidades da melhor forma possível."
    }
  ];

  return (
    <DifferentialsContainer>
      <Container>
        <SectionTitle>Diferenciais</SectionTitle>
        <DifferentialsGrid>
          {differentials.map((differential, index) => (
            <DifferentialCard
              key={index}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
            />
          ))}
        </DifferentialsGrid>
      </Container>
    </DifferentialsContainer>
  );
};

export default DifferentialsSection;

