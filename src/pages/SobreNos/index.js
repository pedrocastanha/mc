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
          <SectionTitle>
            <Paragraph>
              M & C Seguros – Tradição em proteção, compromisso com o seu futuro.
            </Paragraph>
          </SectionTitle>
          <Paragraph>
            A M & C Seguros nasceu da união entre experiência e renovação. Há mais de 30 anos, o fundador deu os primeiros passos no mercado de seguros, movido pelo desejo de proteger o que realmente importa para as pessoas. Hoje, essa trajetória ganha um novo capítulo com a parceria entre pai e filha, unindo a sabedoria de décadas com a visão inovadora de uma nova geração.          
          </Paragraph>
          <Paragraph>
            Uma corretora familiar que preza por relações autênticas, atendimento de excelência e soluções sob medida. Aqui, cada cliente é atendido com atenção real, escuta ativa e a certeza de que está em boas mãos.          
          </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Nossa Missão </SectionTitle>
        <Paragraph>
          Oferecer soluções de seguros que tragam segurança e tranquilidade aos nossos clientes, com atendimento ágil, personalizado e um portfólio de produtos que realmente atendem às suas necessidades.        
        </Paragraph>
      </Section>
        <Section>
          <SectionTitle>Nossa História</SectionTitle>
          <Paragraph>
            A M & C Seguros é fruto de uma história construída com dedicação e propósito. Iniciada por um pai apaixonado pela profissão e fortalecida pela parceria com sua filha, nossa empresa representa o equilíbrio entre tradição e inovação. Ao longo dos anos, conquistamos a confiança de centenas de clientes com ética, responsabilidade e uma forma mais humana de cuidar de pessoas e seus bens.          
          </Paragraph>
          <Paragraph>
            Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e excelência no atendimento. Trabalhamos com as melhores seguradoras do mercado para garantir que nossos clientes tenham acesso às coberturas mais completas e aos melhores preços.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Nossos Valores</SectionTitle>
          <Paragraph>
            <strong>Autenticidade:</strong> Relacionamentos verdadeiros, com empatia e respeito.
          </Paragraph>
          
          <Paragraph>
            <strong>Transparência:</strong> Comunicação clara, honesta e sem surpresas.
          </Paragraph>
          
          <Paragraph>
            <strong>Atendimento ágil, eficiente e personalizado:</strong> Respostas rápidas e soluções que fazem sentido para cada cliente.
          </Paragraph>

          <Paragraph>
            <strong>Comprometimento:</strong> Estamos sempre disponíPresença real em todos os momentos, principalmente nos mais delicados.
          </Paragraph>
          
          <Paragraph>
            <strong>Ética e profissionalismo:</strong> Agimos com integridade e responsabilidade em cada decisão.
          </Paragraph>

          <Paragraph>
            <strong>Atualização constante:</strong> Estamos sempre aprendendo e nos adaptando às mudanças do mercado para oferecer o melhor serviço..
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Por que escolher a M & C Seguros?</SectionTitle>
          <Paragraph>
            • Atendimento próximo, empático e sob medida
          </Paragraph>
          <Paragraph>
            • Parcerias com seguradoras líderes de mercado
          </Paragraph>
          <Paragraph>
            • Profissionais com mais de 30 anos de experiência
          </Paragraph>
          <Paragraph>
            • Suporte completo na contratação e em sinistros
          </Paragraph>
          <Paragraph>
            • Soluções que se adaptam a você, sua família ou sua empresa
          </Paragraph>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default SobreNos;
