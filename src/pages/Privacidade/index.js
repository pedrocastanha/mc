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

const Privacidade = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <PageTitle>Política de Privacidade</PageTitle>
        
        <Section>
          <Paragraph>
            A M & C Seguros valoriza a privacidade e a proteção dos dados pessoais de seus clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais.
          </Paragraph>
          
          <Paragraph>
            Ao utilizar nosso site e serviços, você concorda com as práticas descritas nesta política.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Coleta de Informações</SectionTitle>
          <Paragraph>
            Coletamos informações pessoais quando você:
          </Paragraph>
          <Paragraph>
            • Preenche formulários em nosso site<br />
            • Solicita cotações de seguros<br />
            • Contrata nossos serviços<br />
            • Entra em contato conosco por telefone, e-mail ou WhatsApp<br />
            • Navega em nosso site
          </Paragraph>
          
          <Paragraph>
            As informações que podemos coletar incluem: nome completo, e-mail, telefone, endereço, CPF, dados do veículo, imóvel ou outros bens a serem segurados, e outras informações necessárias para a cotação e contratação de seguros.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Uso das Informações</SectionTitle>
          <Paragraph>
            Utilizamos suas informações pessoais para:
          </Paragraph>
          <Paragraph>
            • Fornecer cotações e serviços solicitados<br />
            • Processar contratos de seguros<br />
            • Prestar atendimento ao cliente<br />
            • Enviar comunicações sobre seus seguros<br />
            • Cumprir obrigações legais e regulatórias<br />
            • Melhorar nossos produtos e serviços<br />
            • Prevenir fraudes e garantir a segurança
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Compartilhamento de Informações</SectionTitle>
          <Paragraph>
            Podemos compartilhar suas informações com:
          </Paragraph>
          <Paragraph>
            • Seguradoras parceiras para cotação e contratação de seguros<br />
            • Prestadores de serviços que nos auxiliam em nossas operações<br />
            • Órgãos reguladores e autoridades, quando exigido por lei
          </Paragraph>
          
          <Paragraph>
            Não vendemos, alugamos ou negociamos suas informações pessoais com terceiros para fins de marketing.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Segurança das Informações</SectionTitle>
          <Paragraph>
            Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Seus Direitos</SectionTitle>
          <Paragraph>
            Você tem direito a:
          </Paragraph>
          <Paragraph>
            • Acessar seus dados pessoais<br />
            • Corrigir dados incompletos, inexatos ou desatualizados<br />
            • Solicitar a exclusão de seus dados, quando aplicável<br />
            • Revogar seu consentimento a qualquer momento
          </Paragraph>
          
          <Paragraph>
            Para exercer esses direitos, entre em contato conosco pelos canais disponíveis em nosso site.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Contato</SectionTitle>
          <Paragraph>
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco pelo e-mail Ana.manganoti@hotmail.com ou pelo telefone (44) 99703-6832.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Alterações na Política de Privacidade</SectionTitle>
          <Paragraph>
            Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
          </Paragraph>
          
          <Paragraph>
            Última atualização: Junho de 2025.
          </Paragraph>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default Privacidade;
