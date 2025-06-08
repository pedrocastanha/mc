import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #6A3DE8;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
`;

const SobreNos = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <PageTitle>Sobre Nós</PageTitle>
        
        <Section>
          <Paragraph>
            A M & C Seguros é uma corretora de seguros comprometida em oferecer as melhores soluções em proteção para você, sua família e seu patrimônio. Com anos de experiência no mercado, nos dedicamos a entender as necessidades específicas de cada cliente para proporcionar um atendimento personalizado e de qualidade.
          </Paragraph>
          
          <Paragraph>
            Nossa missão é garantir tranquilidade e segurança para nossos clientes, oferecendo produtos de seguros que realmente atendam às suas necessidades, com o melhor custo-benefício do mercado e um atendimento de excelência.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Nossa História</SectionTitle>
          <Paragraph>
            Fundada com o propósito de transformar a experiência de contratar seguros, a M & C Seguros nasceu da visão de profissionais experientes que identificaram a necessidade de um atendimento mais humano e personalizado no setor de seguros.
          </Paragraph>
          
          <Paragraph>
            Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e excelência no atendimento. Trabalhamos com as melhores seguradoras do mercado para garantir que nossos clientes tenham acesso às coberturas mais completas e aos melhores preços.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Nossos Valores</SectionTitle>
          <Paragraph>
            <strong>Confiança:</strong> Construímos relacionamentos duradouros baseados na honestidade e transparência.
          </Paragraph>
          
          <Paragraph>
            <strong>Excelência:</strong> Buscamos constantemente aprimorar nossos serviços para superar as expectativas dos clientes.
          </Paragraph>
          
          <Paragraph>
            <strong>Compromisso:</strong> Estamos sempre disponíveis para atender nossos clientes, especialmente nos momentos mais críticos.
          </Paragraph>
          
          <Paragraph>
            <strong>Personalização:</strong> Entendemos que cada cliente é único e merece um atendimento personalizado.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Por que escolher a M & C Seguros?</SectionTitle>
          <Paragraph>
            • Atendimento personalizado e humanizado
          </Paragraph>
          <Paragraph>
            • Parceria com as melhores seguradoras do mercado
          </Paragraph>
          <Paragraph>
            • Equipe de profissionais experientes e qualificados
          </Paragraph>
          <Paragraph>
            • Suporte completo na contratação e em caso de sinistros
          </Paragraph>
          <Paragraph>
            • Busca constante pelas melhores condições e preços
          </Paragraph>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default SobreNos;
